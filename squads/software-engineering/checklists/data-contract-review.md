---
checklist: data-contract-review
squad: software-engineering
agent: eng-data
tags: [data-contract, schema, quality]
---

# Checklist: Data Contract Review

## Purpose
Use this checklist to verify data contract review quality and completeness.

---

## 🔍 Schema
- [ ] All columns documented with name, type, nullable, description
- [ ] Enum values documented for constrained fields
- [ ] Primary key and unique constraints defined
- [ ] Foreign key relationships documented

---

## ✅ Quality SLOs
- [ ] Freshness SLO defined (max staleness)
- [ ] Completeness SLO defined (max NULL rate)
- [ ] Uniqueness guarantee defined
- [ ] Reconciliation process documented

---

## 🛡️ Change Management
- [ ] Breaking change notification period defined (30+ days)
- [ ] Consumer registry maintained and up-to-date
- [ ] Changelog for all schema changes

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


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

### Pipeline Idempotency
- [ ] Running pipeline twice produces identical result
  - Test: run pipeline → record output → run again → compare
  - MERGE/upsert used (not raw INSERT)
  - Deduplication by natural key or event ID
- [ ] Incremental processing correct:
  - Watermark/bookmark tracked (high-water mark)
  - Late-arriving data handled (reprocessing window)
  - No data gaps between runs

### Quality Test Details
- [ ] not_null tests:
  - All business-required fields tested (not just PKs)
  - Custom message: "Field X has N nulls (threshold: < 1%)"
  - Severity: ERROR for critical fields, WARN for optional
- [ ] unique tests:
  - Primary keys: zero duplicates always
  - Business keys: zero duplicates with exception log
  - Deduplication strategy documented (first/last/merge)
- [ ] freshness tests:
  - Per-source freshness SLO defined
  - Alert: WARN at 80% of SLO, ERROR at 100%
  - Dashboard: freshness gauge per dataset
- [ ] row_count tests:
  - Comparison: today vs 7-day rolling average
  - Alert: > 30% deviation (could indicate source issue)
  - P0 Alert: zero rows (pipeline failed silently)
- [ ] distribution tests:
  - Key numeric columns (revenue, counts): mean ± 3 stddev
  - Categorical columns: unexpected new values detected
  - NULL rate: stable compared to historical

### Data Contract Verification
- [ ] Schema documented: every column has name, type, description
- [ ] Owner defined: team responsible for data quality
- [ ] SLOs defined: freshness, completeness, accuracy targets
- [ ] Consumer registry: list of all downstream consumers
- [ ] Change notification: 30+ day notice for breaking changes


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
