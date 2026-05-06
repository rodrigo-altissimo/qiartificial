---
task: design-rest-api
squad: software-engineering
agent: eng-api
tags: [api, rest, design]
---

# Task: Design a REST API

## Purpose
Design a production-grade REST API contract before implementation, using API-first principles.

## Steps

### 1. Identify Resources and Consumers
```
Primary consumers:
  - [mobile app / web frontend / external partners / internal services]

Resources to expose (domain nouns):
  - [resource 1]: [description of what it represents]
  - [resource 2]: [description]

Key use cases per consumer:
  Consumer A needs: [list of operations]
  Consumer B needs: [list of operations]
```

### 2. Design Resource URL Structure
```
Resource: [name] (plural noun)
Base URL: /api/v1/[resources]

Endpoints:
  GET    /[resources]              → List (with pagination)
  POST   /[resources]              → Create
  GET    /[resources]/{id}         → Get one
  PUT    /[resources]/{id}         → Replace
  PATCH  /[resources]/{id}         → Partial update
  DELETE /[resources]/{id}         → Delete

Sub-resources (only if tightly coupled):
  GET /[resources]/{id}/[sub]      → List nested items
```

### 3. Define Request/Response Schemas
For each endpoint:
```yaml
# POST /orders
request:
  required: [customerId, items]
  properties:
    customerId: { type: string, format: uuid }
    items:
      type: array
      items:
        properties:
          productId: { type: string }
          quantity: { type: integer, minimum: 1 }

response_201:
  properties:
    id: { type: string, format: uuid }
    status: { type: string, enum: [pending, confirmed] }
    createdAt: { type: string, format: date-time }
    _links:
      self: { href: "/orders/{id}" }
```

### 4. Define Error Responses (RFC 7807)
```json
{
  "type": "https://api.example.com/errors/validation-failed",
  "title": "Validation Failed",
  "status": 422,
  "detail": "One or more fields are invalid",
  "errors": [
    { "field": "customerId", "message": "Must be a valid UUID" }
  ],
  "traceId": "abc-123"
}
```

Standard errors to define:
- 400 Bad Request — malformed JSON/parameters
- 401 Unauthorized — missing/invalid token
- 403 Forbidden — valid token, insufficient permissions
- 404 Not Found — resource doesn't exist
- 409 Conflict — state conflict (duplicate, optimistic lock)
- 422 Unprocessable — validation failure
- 429 Too Many Requests — rate limited
- 500 Internal Server Error — server fault

### 5. Define Pagination, Filtering, Sorting
```
Pagination (cursor-based for large datasets):
  GET /orders?limit=20&cursor=abc123
  Response: { data: [...], nextCursor: "def456", hasMore: true }

Filtering:
  GET /orders?status=pending&customerId=xyz

Sorting:
  GET /orders?sort=createdAt&order=desc
```

### 6. Define API Versioning Strategy
```
Method: URI versioning (v1, v2 in path)
Breaking vs non-breaking change matrix:
  Breaking: requires new version
  Non-breaking: safe to deploy

Sunset policy: 
  When v2 releases: v1 gets Deprecation header + Sunset date (minimum 6 months)
```

### 7. Write OpenAPI 3.0 Spec
Document all endpoints in OpenAPI 3.0 format and commit to repository.

## Deliverables
- [ ] Resource list with URL structure
- [ ] OpenAPI 3.0 spec committed to repo
- [ ] Error response schema defined
- [ ] Pagination, filtering, sorting strategy defined
- [ ] Versioning strategy documented
- [ ] Mock server generated from spec (Prism / Stoplight)

## Quality Gate
- No verbs in URLs (resources only)
- HTTP methods used with correct semantics (idempotency respected)
- All error responses follow RFC 7807 format
- No breaking change shipped without version bump


## Deep Dive: Implementation Templates

### Controller Template
```python
@router.post("/api/v1/orders", status_code=201)
async def create_order(
    request: CreateOrderRequest,
    idempotency_key: str = Header(alias="Idempotency-Key"),
    current_user: User = Depends(get_current_user),
):
    # Check idempotency
    cached = await cache.get(f"idem:{current_user.id}:{idempotency_key}")
    if cached:
        return JSONResponse(status_code=201, content=cached)
    
    # Validate business rules
    order = Order.create(
        customer_id=current_user.id,
        items=request.items,
    )
    
    # Persist
    await order_repo.save(order)
    
    # Cache for idempotency (24h)
    response = order.to_dict()
    await cache.set(f"idem:{current_user.id}:{idempotency_key}", response, ttl=86400)
    
    # Publish event
    await events.publish(OrderCreated(order_id=order.id, total=order.total))
    
    return JSONResponse(
        status_code=201,
        content=response,
        headers={"Location": f"/api/v1/orders/{order.id}"},
    )
```

### Error Handler Template
```python
@app.exception_handler(ValidationError)
async def validation_error_handler(request, exc):
    return JSONResponse(
        status_code=422,
        content={
            "error": {
                "code": "VALIDATION_FAILED",
                "message": str(exc),
                "details": [
                    {"field": e.field, "issue": e.message}
                    for e in exc.errors
                ],
                "request_id": request.state.request_id,
            }
        },
    )
```

### Rate Limiter Template
```python
@app.middleware("http")
async def rate_limit_middleware(request, call_next):
    client_id = get_client_id(request)
    tier = get_client_tier(client_id)  # free, pro, enterprise
    
    limits = {"free": 100, "pro": 1000, "enterprise": 10000}
    limit = limits.get(tier, 100)
    
    key = f"ratelimit:{client_id}:{current_minute()}"
    count = await redis.incr(key)
    if count == 1:
        await redis.expire(key, 60)
    
    if count > limit:
        return JSONResponse(
            status_code=429,
            content={"error": {"code": "RATE_LIMITED", "message": f"Limit: {limit}/min"}},
            headers={
                "Retry-After": str(seconds_until_next_minute()),
                "X-RateLimit-Limit": str(limit),
                "X-RateLimit-Remaining": "0",
                "X-RateLimit-Reset": str(next_minute_timestamp()),
            },
        )
    
    response = await call_next(request)
    response.headers["X-RateLimit-Limit"] = str(limit)
    response.headers["X-RateLimit-Remaining"] = str(max(0, limit - count))
    return response
```


## War Room Protocol

### When This Task Is Triggered By An Incident

```
MINUTE 0-5: ASSESS
  □ Confirm the issue is real (not false positive)
  □ Check: Is it customer-facing?
  □ Check: Is data at risk?
  □ Classify severity:
     SEV1: > 50% users affected → all-hands
     SEV2: < 50% users degraded → team + lead
     SEV3: internal only → on-call

MINUTE 5-15: CONTAIN
  □ Can we rollback the last deploy?
  □ Can we toggle a feature flag?
  □ Can we scale up resources?
  □ Can we redirect traffic?
  □ Communicate: team channel + status page

MINUTE 15-30: DIAGNOSE
  □ Check dashboards (4 Golden Signals)
  □ Check logs (grep for errors in last 30 min)
  □ Check recent changes (deploys, config, infra)
  □ Check dependencies (are they healthy?)
  □ Form hypothesis: "I think the problem is ___"

MINUTE 30-60: FIX
  □ If hypothesis confirmed → implement fix
  □ If not confirmed → gather more data, new hypothesis
  □ Deploy fix through normal pipeline (or hotfix if SEV1)
  □ Verify fix: check dashboards, check affected users

AFTER RESOLUTION:
  □ Update status page: "Resolved"
  □ Notify stakeholders
  □ Schedule post-mortem (within 48h)
  □ Create action items to prevent recurrence
```

### Handoff Protocol

```
WHEN HANDING THIS TASK TO ANOTHER ENGINEER:

Provide:
  1. Context: What is the task and why?
  2. Current state: What has been done so far?
  3. Next steps: What needs to happen next?
  4. Blockers: Any known issues or dependencies?
  5. Contacts: Who to ask for help?
  6. Artifacts: Links to relevant docs, PRs, dashboards

Format:
  ## Handoff — [Task Name]
  **From:** [your name]  **To:** [their name]  **Date:** YYYY-MM-DD
  
  **Context:** [1-2 sentences]
  **Done:** [bulleted list]
  **Next:** [bulleted list]
  **Blockers:** [if any]
  **Links:** [dashboards, PRs, docs]
```

### Quality Gate

```
THIS TASK IS COMPLETE WHEN:
  □ All acceptance criteria met
  □ Tests written and passing
  □ Code reviewed by peer
  □ Documentation updated
  □ Deployed to staging and verified
  □ Product owner accepted
  □ No P0 or P1 issues outstanding

THIS TASK MAY BE DEFERRED IF:
  ○ Blocked by external dependency (document and escalate)
  ○ Scope discovered to be larger than estimated (split task)
  ○ Higher priority item emerged (document reason for deferral)
```
