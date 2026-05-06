---
checklist: event-sourcing-review
squad: software-engineering
agent: eng-distributed
tags: [event-sourcing, events, cqrs]
---

# Checklist: Event Sourcing Review

## Purpose
Use this checklist to verify event sourcing review quality and completeness.

---

## 🔍 Event Store
- [ ] Events are immutable (append-only)
- [ ] Event schema versioned (upcasting for evolution)
- [ ] Stream per aggregate (not global stream)
- [ ] Snapshots for aggregates with 1000+ events

---

## ✅ Projections
- [ ] Read models updated asynchronously from events
- [ ] Projections can be rebuilt from scratch
- [ ] Projection lag monitored and alerted
- [ ] Idempotent event handling in projections

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


## Deep Verification

### Resilience
- [ ] Circuit breakers on all external calls
- [ ] Timeouts configured (not default/infinite)
- [ ] Retry policy: exponential backoff with jitter
- [ ] Fallback behavior defined for degraded dependencies
- [ ] Bulkhead pattern: failures isolated per dependency

### Consistency
- [ ] Consistency model documented (strong/eventual/causal)
- [ ] Idempotency implemented on all state-changing operations
- [ ] Distributed transactions use saga pattern (not 2PC)
- [ ] Compensation logic tested for all saga steps
- [ ] Dead letter queue for failed messages

### Network
- [ ] Service discovery mechanism in place
- [ ] Health checks registered with load balancer
- [ ] Graceful shutdown implemented (drain connections)
- [ ] Request correlation ID propagated across services
- [ ] Network partitions handled (fallback behavior defined)

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

### Resilience Pattern Verification
- [ ] Timeout configuration:
  - Every external call has explicit timeout
  - Timeout values tuned to dependency SLO
  - No infinite timeout / no default timeout
  - Timeout action: return error or fallback (not hang)
- [ ] Retry configuration:
  - Exponential backoff with jitter
  - Max retries defined (3-5 typical)
  - Only retriable errors retried (not 4xx)
  - Retry budget: max 10% additional load on dependency
- [ ] Bulkhead pattern:
  - Thread/connection pool per dependency
  - Failure in dependency A doesn't exhaust pool for B
  - Pool size based on expected load + 20% headroom
- [ ] Circuit breaker:
  - Configuration verified (threshold, timeout, success count)
  - Fallback behavior tested
  - State transitions observable in metrics

### Consistency Verification
- [ ] Consistency model documented:
  - Each data flow: strong, eventual, or causal
  - Trade-offs explained in ADR
  - Consumer expectations aligned with model
- [ ] Idempotency:
  - All POST/PUT operations have idempotency mechanism
  - Deduplication by message/event ID
  - Operations safe to retry at any point
- [ ] Saga compensation:
  - Every forward step has defined compensation
  - Compensation tested with failure injection
  - Partial failure leaves system in consistent state


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
