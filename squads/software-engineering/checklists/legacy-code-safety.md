---
checklist: legacy-code-safety
squad: software-engineering
agent: eng-tdd
tags: [legacy, testing, safety, characterization, seams]
---

# Checklist: Legacy Code Safety

## Before Touching Legacy Code
- [ ] Change point identified (exact file, method, line)
- [ ] Risk assessment: what could break?
- [ ] Version control: current state committed (rollback point)
- [ ] Characterization tests written for the change area
- [ ] All characterization tests passing

## Dependency Analysis
- [ ] All external dependencies mapped (DB, API, file system, time, random)
- [ ] Seam type identified for each dependency
- [ ] Dependency-breaking technique chosen (minimum-invasion)
- [ ] Test doubles created for broken dependencies

## Change Strategy
- [ ] Strategy chosen: Sprout Method | Sprout Class | Wrap Method | Direct Edit
- [ ] If Sprout/Wrap: new code is fully tested independently
- [ ] If Direct Edit: characterization tests fully cover the change area
- [ ] Maximum 3 lines of legacy code touched for integration
- [ ] No behavior change to existing code (refactoring only, OR new behavior via sprout/wrap)

## After Change
- [ ] All characterization tests still passing (behavior preserved)
- [ ] All new behavior tests passing
- [ ] No dead code introduced
- [ ] Commit message clearly describes: what changed, why, and what's preserved
- [ ] Code is slightly better than before (Boy Scout Rule)


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

### Test Design Quality
- [ ] Test name format: should_[expected]_when_[condition]
  - should_reject_order_when_total_is_negative
  - should_apply_discount_when_customer_is_VIP
  - NOT: test1, testOrder, testDiscount
- [ ] Arrange-Act-Assert structure:
  - Arrange: set up test data and dependencies
  - Act: call the method under test (ONE call)
  - Assert: verify the result (ONE logical assertion)
  - Clear separation between phases (blank line)
- [ ] Test isolation:
  - Each test independent (no shared mutable state)
  - Tests run in any order (no test depends on another)
  - Setup/teardown clean (fresh state each test)
  - External dependencies mocked/stubbed

### Mock Usage Quality
- [ ] Only mock external dependencies:
  - ✅ Mock: database, HTTP client, file system, message queue
  - ❌ Don't mock: domain entities, value objects, pure functions
  - ❌ Don't mock: the class under test
- [ ] Mock behavior, not implementation:
  - ✅ when(repo.findById(id)).thenReturn(order)
  - ❌ verify(repo).executeSql("SELECT * FROM orders WHERE id = ?")
- [ ] Prefer fakes over mocks for complex dependencies:
  - In-memory repository instead of mocked repository
  - Fake email service that records sent emails
  - Benefit: tests are less brittle, catch more bugs

### Coverage Quality
- [ ] Line coverage: > 80% for business logic
- [ ] Branch coverage: all if/else branches tested
- [ ] Boundary values tested:
  - 0, -1, MAX_INT, null, empty string, empty list
  - Off-by-one: array[length-1], first element, last element
- [ ] Error paths tested:
  - Invalid input → correct exception
  - External service failure → correct fallback
  - Timeout → correct timeout handling


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
