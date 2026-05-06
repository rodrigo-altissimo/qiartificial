---
checklist: distributed-system-review
squad: software-engineering
agent: eng-distributed
tags: [distributed, consistency, idempotency, failure-modes]
---

# Checklist: Distributed System Review

## P0 — Showstoppers
- [ ] Every write operation is idempotent (safe to retry)
- [ ] No "exactly-once" claims — using at-least-once + idempotent consumers
- [ ] No distributed transactions (2PC) across service boundaries
- [ ] No reliance on wall clock for event ordering

## Consistency Model
- [ ] CAP trade-off documented per data entity
- [ ] Consistency model chosen per entity (linearizable, causal, eventual)
- [ ] Maximum acceptable staleness defined for eventually-consistent data
- [ ] Read-your-writes consistency provided where user experience requires it

## Failure Modes
- [ ] Network partition behavior documented (what happens when services can't communicate?)
- [ ] Split brain prevention mechanism in place (for leader election)
- [ ] Cascading failure protection: circuit breakers on all inter-service calls
- [ ] Timeout and retry policy defined per dependency
- [ ] Bulkhead pattern applied (failure in service A doesn't exhaust resources for service B)

## Data Replication
- [ ] Replication strategy documented (single-leader, multi-leader, leaderless)
- [ ] Failover procedure defined and tested
- [ ] Data loss window (RPO) calculated and accepted
- [ ] Recovery time objective (RTO) defined

## Messaging & Events
- [ ] Event schemas versioned (backward compatible evolution)
- [ ] Dead letter queue configured for every consumer
- [ ] Consumer lag monitored with alerting
- [ ] Message ordering guaranteed where needed (per partition key)

## Saga / Distributed Transactions
- [ ] Compensating transactions defined for every saga step
- [ ] Saga timeout defined (what happens if a step never completes?)
- [ ] Idempotency at every saga step


## Deep Verification

### Pipeline Quality
- [ ] Pipeline is idempotent (safe to re-run)
- [ ] Incremental processing implemented (not full re-load every run)
- [ ] Error handling: dead letter queue for failed records
- [ ] Retry logic with exponential backoff
- [ ] Pipeline timeout configured

### Data Quality Tests
- [ ] not_null tests on all required columns
- [ ] unique tests on primary key columns
- [ ] accepted_values tests on enum/status columns
- [ ] freshness test (data updated within SLO)
- [ ] row_count anomaly detection (>30% deviation = alert)
- [ ] Zero rows loaded triggers P0 alert
- [ ] Reconciliation check against source system

### Schema Management
- [ ] Schema changes are backward compatible (or migration plan)
- [ ] Up AND down migration scripts exist
- [ ] Schema changes tested on production-like data
- [ ] All consumers notified before breaking changes
- [ ] Schema registry updated

### Monitoring
- [ ] Pipeline runtime tracked and alerted (> 2x normal = warning)
- [ ] Data freshness dashboard available
- [ ] Error rate dashboard available  
- [ ] Lineage documented (source → transforms → consumers)
- [ ] Data SLO attainment reported weekly

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
