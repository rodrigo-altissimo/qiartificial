---
checklist: soak-test-results
squad: software-engineering
agent: eng-perf
tags: [soak-test, memory-leak, endurance]
---

# Checklist: Soak Test Results Review

## Purpose
Use this checklist to verify soak test results review quality and completeness.

---

## 🔍 Memory
- [ ] Memory usage stable over test duration (no linear growth)
- [ ] No OOM events during test
- [ ] GC pause times stable (no increasing pauses)

---

## ✅ Connections
- [ ] DB connection pool size stable
- [ ] No connection leaks (active connections < pool max)
- [ ] File descriptor count stable

---

## 🛡️ Performance
- [ ] Latency stable over time (no gradual degradation)
- [ ] Throughput stable (RPS not declining)
- [ ] Error rate stable (not increasing over time)

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


## Deep Verification

### Baseline Established
- [ ] p50, p90, p95, p99 latency measured for critical endpoints
- [ ] Throughput baseline: sustainable RPS under normal load
- [ ] Resource utilization baseline: CPU, memory, disk, network, DB connections
- [ ] Load test ran for >= 30 minutes sustained
- [ ] Test data realistic (production-like volume)

### SLO Adherence
- [ ] p99 latency within SLO target
- [ ] Error rate within SLO target
- [ ] Availability within SLO target
- [ ] Error budget consumption tracked

### Query Performance
- [ ] No N+1 queries (verified with query logging)
- [ ] All queries use indexes (EXPLAIN ANALYZE on critical queries)
- [ ] No full table scans on tables > 10K rows
- [ ] Connection pool configured (not default size)
- [ ] Slow query logging enabled (> 100ms threshold)

### Caching
- [ ] Cache hit rate measured (> 80% for read-heavy paths)
- [ ] Cache TTL defined per key type (not infinite)
- [ ] Cache invalidation strategy documented
- [ ] Thundering herd protection in place (stale-while-revalidate or locking)
- [ ] Cache memory limits set with eviction policy

### Resource Efficiency
- [ ] Memory stable over 24h (no leaks)
- [ ] No thread/goroutine leaks (count stable)
- [ ] File descriptors properly closed
- [ ] GC pauses within acceptable range

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

### Latency Analysis
- [ ] p50 latency: baseline established, within expected range
  - Typical: < 50ms for DB queries, < 200ms for API
- [ ] p90 latency: no more than 2x p50
  - If p90 >> p50: bimodal distribution, investigate
- [ ] p95 latency: no more than 3x p50
  - If spike: likely specific user pattern or data shape
- [ ] p99 latency: the TRUE user experience metric
  - Must be within SLO target
  - If p99 >> p95: tail latency problem (look for timeouts, GC, locks)
- [ ] Max latency: investigate outliers
  - Single max spike is ok (cold start)
  - Recurring max spikes indicate systemic issue

### Database Performance
- [ ] Query performance:
  - EXPLAIN ANALYZE on all critical queries
  - No Seq Scan on tables > 10K rows (must use index)
  - Index usage verified (pg_stat_user_indexes)
  - No unused indexes (pg_stat_user_indexes: idx_scan = 0)
- [ ] Connection management:
  - Pool size configured (not database default)
  - Pool utilization monitored (< 80% normal)
  - Connection timeout set (not infinite)
  - Idle connections recycled (max idle time)

### Memory Analysis
- [ ] Heap size stable over 24h (no linear growth → leak)
- [ ] GC metrics:
  - GC pause time: < 50ms p99
  - GC frequency: stable (not increasing)
  - Full GC: rare (< 1/hour)
- [ ] Off-heap memory tracked (native memory, mmap)
- [ ] Buffer pools sized correctly (no excessive allocation)


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
