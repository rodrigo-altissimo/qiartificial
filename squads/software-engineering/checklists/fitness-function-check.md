---
checklist: fitness-function-check
squad: software-engineering
agent: eng-architect
tags: [fitness-functions, architecture, governance]
---

# Checklist: Architecture Fitness Functions

## Purpose
Use this checklist to verify architecture fitness functions quality and completeness.

---

## 🔍 Structural
- [ ] Module dependency rules enforced (ArchUnit/similar)
- [ ] No circular dependencies between modules
- [ ] Layer violations detected automatically in CI

---

## ✅ Operational
- [ ] Response time within SLO (automated test)
- [ ] Error rate within SLO (automated check)
- [ ] Deployment frequency meets target

---

## 🛡️ Evolutionary
- [ ] API compatibility verified (contract tests in CI)
- [ ] Schema compatibility verified (migration tests)
- [ ] Data quality SLOs automated

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

### Architecture Decision Quality
- [ ] ADR exists for every significant decision:
  - Technology choice (database, framework, language)
  - Architecture style (monolith, microservices, event-driven)
  - Integration pattern (API, events, shared DB)
  - Data strategy (SQL vs NoSQL, batch vs streaming)
- [ ] Each ADR is complete:
  - Context: what problem are we solving?
  - Decision: what was chosen?
  - Alternatives: what was considered and rejected?
  - Consequences: what are the trade-offs?
  - Status: proposed / accepted / deprecated / superseded

### Fitness Function Quality
- [ ] Structural fitness functions:
  - Module dependencies enforced (ArchUnit, depcheck)
  - No circular dependencies (detected in CI)
  - Layer violations caught automatically
  - Package/module cohesion measured
- [ ] Operational fitness functions:
  - Latency SLO verified in CI (load test)
  - Error rate SLO verified (synthetic monitoring)
  - Deployment frequency tracked (DORA metric)
  - MTTR tracked and alerted
- [ ] Evolutionary fitness functions:
  - API compatibility verified (contract tests)
  - Schema compatibility verified (migration tests)
  - Feature flag cleanup tracked

### Modularity Assessment
- [ ] Module boundaries clear:
  - Each module has defined public API
  - Internal implementation hidden
  - Dependencies explicit (not implicit)
- [ ] Coupling measured:
  - Afferent coupling (modules depending on this one)
  - Efferent coupling (modules this one depends on)
  - Instability = Ce / (Ca + Ce) — balanced is ideal
- [ ] Cohesion measured:
  - All methods in a class use most of the class fields
  - LCOM (Lack of Cohesion in Methods) < 0.5


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
