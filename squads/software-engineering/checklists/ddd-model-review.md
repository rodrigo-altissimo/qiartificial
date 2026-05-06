---
checklist: ddd-model-review
squad: software-engineering
agent: eng-ddd
tags: [ddd, aggregate, bounded-context, domain-model, review]
---

# Checklist: Domain Model Review

## Bounded Contexts
- [ ] Each bounded context has explicit boundaries documented
- [ ] Ubiquitous language glossary defined per context
- [ ] No shared database between bounded contexts
- [ ] Integration between contexts via domain events or APIs (not direct calls)
- [ ] Context map with relationship types documented

## Aggregates
- [ ] Each aggregate enforces its invariants internally
- [ ] Aggregates are as small as possible
- [ ] Other aggregates referenced by ID only (no embedded objects)
- [ ] One transaction modifies exactly one aggregate
- [ ] Cross-aggregate consistency via domain events (eventually consistent)

## Entities & Value Objects
- [ ] Entities have identity (ID) and lifecycle
- [ ] Value objects are immutable (no setters)
- [ ] Value objects validate invariants in constructor
- [ ] No primitive obsession (use VOs for Email, Money, Address etc.)
- [ ] equals() for VOs compares all attributes, not identity

## Domain Events
- [ ] Events named in past tense (OrderPlaced, not PlaceOrder)
- [ ] Events include all data consumers need (no callbacks to producer)
- [ ] Event schemas are versioned
- [ ] Events are immutable facts

## Anti-Patterns Check
- [ ] No anemic domain model (entities have behavior, not just getters/setters)
- [ ] No god aggregate (aggregate with 50+ fields or 30+ methods)
- [ ] No unified model (same "Customer" class used across billing, sales, support)
- [ ] No database-driven design (models reflect domain, not table structure)
- [ ] Business logic lives IN domain objects, NOT in service layers


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

### Aggregate Verification
- [ ] Invariant protection:
  - List all business invariants for this aggregate
  - Each invariant enforced in code (not just documented)
  - Test: violate each invariant → exception thrown
- [ ] Size check:
  - Root entity + max 3 child entities (typical)
  - If > 5 entities: consider splitting aggregate
  - Load time < 10ms (aggregate must be fast to load)
- [ ] Reference check:
  - All cross-aggregate references are ID-only
  - No object references crossing aggregate boundary
  - No lazy loading from one aggregate into another
- [ ] Transaction boundary:
  - One transaction = one aggregate save
  - No transactions spanning multiple aggregates
  - Cross-aggregate consistency via domain events

### Domain Event Verification
- [ ] Event naming:
  - All past tense (OrderPlaced not PlaceOrder)
  - Domain language (not technical: "RowInserted")
  - Specific (OrderItemAdded not GenericEvent)
- [ ] Event content:
  - Self-contained: consumer doesn't need to call back
  - Event ID for deduplication (UUID)
  - Timestamp in ISO-8601
  - Aggregate ID and type included
- [ ] Publishing:
  - Transactional outbox pattern used
  - At-least-once delivery guaranteed
  - Event ordering preserved within aggregate
- [ ] Consuming:
  - Each consumer is idempotent (deduplicate by event ID)
  - Dead letter queue for failed processing
  - Consumer lag monitored (< SLO threshold)
  - Out-of-order handling documented and tested


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
