---
task: design-webhook-system
squad: software-engineering
agent: eng-api
tags: [webhook, events, integration]
---

# Task: Design a Webhook System

## Purpose
Design a webhook delivery system with event catalog, payload signing, retry policies, and management API.

## Steps

### 1. Define Event Catalog
```
Events:
  - order.created: triggers when a new order is placed
  - order.updated: triggers when order status changes
  - payment.succeeded: triggers when payment is confirmed
  - payment.failed: triggers when payment attempt fails
```

### 2. Design Payload Schema
```json
{
  "id": "evt_abc123",
  "type": "order.created",
  "created_at": "2024-01-15T10:30:00Z",
  "data": { "order_id": "order_456", "total": 150.00 }
}
```

### 3. Implement HMAC Signing
```
Algorithm: HMAC-SHA256
Header: X-Webhook-Signature: sha256=<signature>
Verification: consumer computes HMAC with shared secret and compares
```

### 4. Define Retry Policy
```
Retry 1: 1 min | Retry 2: 5 min | Retry 3: 30 min | Retry 4: 2h | Retry 5: 24h
After 5 failures: disable webhook, notify owner via email
```

### 5. Management API
```
POST   /api/v1/webhooks         — register
GET    /api/v1/webhooks         — list
DELETE /api/v1/webhooks/{id}    — unregister
GET    /api/v1/webhooks/{id}/deliveries — history
```

## Deliverables
- [ ] Event catalog documented
- [ ] Payload schema defined with examples
- [ ] HMAC signature verification implemented
- [ ] Retry policy configured
- [ ] Management API endpoints implemented
- [ ] Consumer documentation published

## Quality Gate
- Every event type has a documented payload schema
- Signature verification tested with sample payloads
- Retry policy handles all failure scenarios


## Practical Examples

### Example: Order API
```yaml
POST /api/v1/orders:
  request:
    headers:
      Authorization: Bearer <token>
      Idempotency-Key: order_req_abc123
      Content-Type: application/json
    body:
      customer_id: "cust_456"
      items:
        - product_id: "prod_789"
          quantity: 2
          unit_price: 49.90
      shipping_address:
        street: "Rua das Flores, 100"
        city: "Florianópolis"
        state: "SC"
        zip: "88000-000"
  response:
    status: 201
    headers:
      Location: /api/v1/orders/order_123
    body:
      id: "order_123"
      status: "pending"
      total: 99.80
      created_at: "2024-01-15T10:30:00Z"
```

### Error Response Example
```json
{
  "error": {
    "code": "INSUFFICIENT_STOCK",
    "message": "Product prod_789 has only 1 unit available",
    "details": [{
      "field": "items[0].quantity",
      "issue": "requested 2 but only 1 available"
    }],
    "request_id": "req_xyz789",
    "documentation_url": "https://docs.example.com/errors"
  }
}
```

## Common Pitfalls
1. **Not validating input server-side** — client validation is for UX only
2. **Exposing internal IDs** — use UUIDs or opaque identifiers
3. **Breaking changes without versioning** — always version breaking changes
4. **Missing pagination** — unbounded lists will eventually crash
5. **Inconsistent error formats** — one schema for ALL errors

## Automation Checklist
- [ ] OpenAPI spec generated and published
- [ ] Contract tests running in CI
- [ ] Rate limit headers returned on every response
- [ ] Request/response logging (without PII)
- [ ] API metrics dashboard (RPS, latency, errors)


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
