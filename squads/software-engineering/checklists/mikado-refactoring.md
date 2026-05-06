---
checklist: mikado-refactoring
squad: software-engineering
agent: eng-refactor
tags: [mikado, refactoring, dependency-graph]
---

# Checklist: Mikado Method Refactoring

## Purpose
Use this checklist to verify mikado method refactoring quality and completeness.

---

## 🔍 Preparation
- [ ] Goal defined: what is the target state?
- [ ] Naive attempt made (try the change, see what breaks)
- [ ] Dependencies captured in Mikado graph
- [ ] Leaves identified (changes with zero dependencies)

---

## ✅ Execution
- [ ] Start from leaves (no dependencies to resolve)
- [ ] Each change committed and tested individually
- [ ] Graph updated as changes are completed
- [ ] No big-bang merge (incremental delivery)

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


## Deep Verification

### Safety Net
- [ ] Tests exist covering code being refactored
- [ ] Characterization tests added if coverage insufficient
- [ ] Test coverage on target area measured before starting

### Process
- [ ] Each step is ONE refactoring (rename, extract, inline, move)
- [ ] Tests run after EVERY step
- [ ] Commits are small and frequent (1 per refactoring step)
- [ ] No behavior changes during refactoring
- [ ] IDE automated refactoring tools used when available

### Debt Tracking
- [ ] Technical debt backlog maintained
- [ ] Each debt item has: description, impact, effort, priority
- [ ] 20% of sprint capacity allocated to debt reduction
- [ ] Debt not growing faster than it's being paid down

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

### Strangler Fig Verification
- [ ] Migration progress tracked:
  - Percentage of routes through new system: [X]%
  - Remaining routes in legacy: [list with timeline]
  - No big-bang migration planned (incremental only!)
- [ ] Parity verification:
  - Each migrated route tested for functional parity
  - Response format identical (unless intentionally improved)
  - Performance same or better (benchmarked)
- [ ] Rollback capability:
  - Each route can individually rollback to legacy
  - Rollback tested before each batch migration
  - Data consistency maintained during rollback

### Code Smell Detection
- [ ] Long Method (> 20 lines):
  - Count: [X] methods over threshold
  - Action: Extract Method for each
  - Priority: most-changed files first (hotspots)
- [ ] Large Class (> 200 lines):
  - Count: [X] classes over threshold
  - Action: Extract Class by responsibility
  - Indicator: class has methods in unrelated groups
- [ ] Duplicate Code:
  - Tool: PMD CPD, SonarQube, jscpd
  - Threshold: > 10 lines of identical/similar code
  - Action: Extract to shared method/module
- [ ] Feature Envy:
  - Method uses another class's data more than its own
  - Action: Move Method to the class it envies
- [ ] Shotgun Surgery:
  - One logical change requires editing 5+ files
  - Indicates scattered responsibilities
  - Action: Move related code closer together


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
