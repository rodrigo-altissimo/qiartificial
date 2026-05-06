---
checklist: idempotency-review
squad: software-engineering
agent: eng-api
tags: [idempotency, reliability, api]
---

# Checklist: Idempotency Review

## Purpose
Use this checklist to verify idempotency review quality and completeness.

---

## 🔍 POST Endpoints
- [ ] Idempotency-Key header accepted
- [ ] Duplicate key returns stored response (no re-processing)
- [ ] Key stored in Redis/DB with TTL (24h default)
- [ ] Race condition handled (only first request processed)

---

## ✅ Payment/Financial Endpoints
- [ ] ALL state-changing financial operations are idempotent
- [ ] Idempotency key required (not optional) for payments
- [ ] Duplicate charge prevention verified with test
- [ ] Audit log records all idempotency key matches

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


## Deep Verification

### HTTP Methods
- [ ] GET: read-only, cacheable, no side effects
- [ ] POST: create resource, returns 201 + Location header
- [ ] PUT: full replacement, idempotent
- [ ] PATCH: partial update, returns updated resource
- [ ] DELETE: idempotent (2nd delete = 204 or 404, not error)

### Response Codes
- [ ] 200: successful retrieval or update
- [ ] 201: resource created (with Location header)
- [ ] 204: successful delete (no body)
- [ ] 400: client error with actionable message
- [ ] 401: unauthenticated (not logged in)
- [ ] 403: unauthorized (logged in but no permission)
- [ ] 404: resource not found
- [ ] 409: conflict (duplicate, concurrent edit)
- [ ] 422: validation failed (with field-level errors)
- [ ] 429: rate limited (with Retry-After header)
- [ ] 500: server error (generic message to client, details in logs)

### Pagination
- [ ] All list endpoints paginated (never return unbounded results)
- [ ] Default page size: 20 (configurable, max 100)
- [ ] Cursor-based for large/live datasets
- [ ] Response includes total_count and has_more

### Versioning
- [ ] Breaking changes only in new version (v2)
- [ ] Old version sunset communicated 12+ months ahead
- [ ] Sunset header in deprecated version responses
- [ ] Migration guide published

### Documentation
- [ ] OpenAPI 3.0 spec auto-generated and current
- [ ] Every endpoint has examples (request + response)
- [ ] Error responses documented with all possible error codes
- [ ] Authentication guide with code examples
- [ ] Rate limit tiers documented

## Process

### Before Checking
```
1. Gather all relevant artifacts (code, config, docs)
2. Review the checklist items systematically
3. Mark each item: ✅ pass, ❌ fail, ⚠️ needs attention
4. Document evidence for each finding
```

### After Checking
```
1. Calculate pass rate: passed / total items
2. Flag any ❌ items as P0 or P1
3. Create action items for ❌ and ⚠️ items
4. Schedule re-check after fixes
```

## Scoring

| Score | Meaning | Action |
|-------|---------|--------|
| 100% | Exemplary | Proceed |
| 80-99% | Good with minor gaps | Fix ⚠️ items |
| 60-79% | Significant gaps | Fix ❌ items first |
| < 60% | Failing | Block until fixed |



## Detailed Sub-Checks

### HTTP Status Codes (verify each endpoint)
- [ ] 200 OK — successful GET/PUT/PATCH
  - Body contains requested resource
  - Content-Type header matches response format
- [ ] 201 Created — successful POST
  - Location header points to new resource
  - Body contains created resource with server-assigned ID
- [ ] 204 No Content — successful DELETE
  - No body returned
  - Subsequent GET returns 404
- [ ] 400 Bad Request — malformed request syntax
  - Error body includes specific validation errors
  - Each field error includes field name and issue
- [ ] 401 Unauthorized — authentication required
  - WWW-Authenticate header included
  - No information leakage in error body
- [ ] 403 Forbidden — authenticated but no permission
  - Clear message about what permission is needed
- [ ] 404 Not Found — resource doesn't exist
  - Same response for non-existent and unauthorized resources (prevent enumeration)
- [ ] 409 Conflict — duplicate or concurrent edit
  - Include current version/state in response
- [ ] 422 Unprocessable Entity — validation failed
  - Field-level errors with actionable messages
- [ ] 429 Too Many Requests — rate limited
  - Retry-After header with seconds to wait
  - Rate limit headers (X-RateLimit-Limit, Remaining, Reset)
- [ ] 500 Internal Server Error — unexpected server failure
  - Generic message to client (no stack trace)
  - Full details in server logs with request_id

### Request/Response Headers
- [ ] Content-Type set correctly (application/json)
- [ ] Accept header respected (content negotiation)
- [ ] Cache-Control set appropriately per endpoint
- [ ] ETag/If-None-Match for conditional requests
- [ ] X-Request-Id in every response (for debugging)
- [ ] CORS headers configured (not wildcard in production)

### Authentication Deep Check
- [ ] All non-public endpoints require Bearer token
- [ ] Token validation includes: signature, expiration, issuer, audience
- [ ] Expired token returns 401 (not 403)
- [ ] Malformed token returns 401 with clear message
- [ ] Rate limiting applies per authenticated client (not just per IP)


## Troubleshooting Guide

### When Items Fail

```
IF any critical item fails:
  1. STOP — Do not proceed to next phase
  2. DOCUMENT the failure:
     - Which item failed?
     - What was the expected state?
     - What was the actual state?
     - What evidence confirms the failure?
  3. CLASSIFY severity:
     P0: Security breach, data loss risk → Immediate fix
     P1: SLO breach, degraded service → Fix within 24h
     P2: Below standard but not impacting → Fix within 1 week
     P3: Nice to have improvement → Backlog
  4. CREATE action item:
     Title: [Checklist item] — [Specific failure]
     Owner: [name]
     Deadline: [based on severity]
     Verification: [how to confirm fix]
  5. SCHEDULE re-check after fix

IF multiple items fail:
  1. Group by root cause
  2. Fix root cause (not symptoms)
  3. Re-run entire checklist section
```

### Evidence Collection Template

```yaml
checklist_run:
  date: YYYY-MM-DD
  runner: [name]
  environment: [staging / production]
  
  results:
    total_items: ___
    passed: ___
    failed: ___
    skipped: ___
    pass_rate: ___%
    
  failures:
    - item: "[checklist item text]"
      expected: "[what should be true]"
      actual: "[what was found]"
      evidence: "[screenshot, log, query result]"
      severity: P0/P1/P2/P3
      action: "[what needs to be done]"
      owner: "[name]"
      deadline: "[date]"

  approval:
    approved_by: [name]
    date: YYYY-MM-DD
    condition: "APPROVED / CONDITIONAL / REJECTED"
    notes: "[any conditions or follow-up required]"
```

### Automation Opportunities

```
ITEMS THAT CAN BE AUTOMATED:
  □ Dependency scan → CI pipeline (Snyk, npm audit)
  □ Code coverage → CI pipeline (coverage report)
  □ Complexity metrics → CI pipeline (SonarQube)
  □ API contract validation → CI pipeline (Pact)
  □ Security headers → CI pipeline (OWASP ZAP)
  □ Performance baseline → Scheduled load test
  □ Data freshness → Scheduled query + alert
  □ Schema validation → dbt test
  □ Health check → Synthetic monitoring (every 1 min)
  
ITEMS THAT REQUIRE HUMAN REVIEW:
  ○ Architecture fitness (judgment needed)
  ○ Code readability (subjective quality)
  ○ Domain model accuracy (domain expert needed)
  ○ Threat model completeness (security expertise)
  ○ UX of error messages (empathy check)
  
GOAL: Automate 70%+ of checklist items
  Benefit: checklist runs in CI on every PR
  Manual items: reviewed weekly or per release
```

### Cross-Reference to Related Assets

```
RELATED TASKS:
  → [domain]-specific task for implementation steps
  → diagnose-[domain]-issue for troubleshooting
  → setup-[domain] for initial configuration

RELATED DOCS:
  → [domain]-guide.md for comprehensive reference
  → [domain]-patterns.md for patterns and best practices
  → [domain]-antipatterns.md for what to avoid

RELATED DATA:
  → eng-[domain]-dna.yaml for specialist DNA profile
  → patterns-library.yaml for pattern catalog
  → antipatterns-database.yaml for anti-pattern catalog
```

### Versioning

```
CHECKLIST VERSION HISTORY:
  v1.0 — Initial checklist creation
  v1.1 — Added deep verification sub-checks
  v1.2 — Added troubleshooting guide and automation
  
UPDATE POLICY:
  - Review checklist quarterly
  - Update after every P0/P1 incident (add checks that would have caught it)
  - Remove obsolete items (technology no longer used)
  - Add items from industry updates (new OWASP, new CVEs)
```
