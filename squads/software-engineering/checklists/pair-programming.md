---
checklist: pair-programming
squad: software-engineering
agent: eng-agile
tags: [pair-programming, xp, collaboration]
---

# Checklist: Pair Programming Session

## Purpose
Use this checklist to verify pair programming session quality and completeness.

---

## 🔍 Setup
- [ ] Driver and Navigator roles assigned
- [ ] Goal defined: what will this session accomplish?
- [ ] Timer set for role rotation (every 25 min)
- [ ] Screen sharing / co-editing tool ready

---

## ✅ During Session
- [ ] Navigator thinking strategically (not line-by-line)
- [ ] Driver focused on writing code
- [ ] Both engaged (not passive observer)
- [ ] TDD cycle followed (red-green-refactor)

---

## 🛡️ After Session
- [ ] What we learned documented briefly
- [ ] Code committed and pushed
- [ ] Feedback exchanged both ways

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


## Deep Verification

### TDD Cycle Followed
- [ ] Test written BEFORE implementation code
- [ ] Test fails for the RIGHT reason before writing code
- [ ] Minimum code written to pass the test (no over-engineering)
- [ ] Refactoring done after green (not during red)
- [ ] Each commit is: failing test → passing test → refactor

### Test Quality
- [ ] Test names describe behavior: should_reject_negative_amount
- [ ] One assertion per test (or one logical assertion)
- [ ] Tests are independent (no shared mutable state)
- [ ] Tests are fast (< 100ms each, < 10s total suite)
- [ ] No flaky tests
- [ ] Tests run in any order
- [ ] Mocks used only for external dependencies (DB, API, file system)

### Coverage
- [ ] Business logic: 90%+ line coverage
- [ ] Happy path AND edge cases covered
- [ ] Error conditions covered (invalid input, exceptions)
- [ ] Boundary values tested (0, -1, max, null, empty)

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

### Flow Metrics Deep Verification
- [ ] Cycle time measurement:
  - Tracked from first commit to production deploy
  - Broken down by phase: coding, review, testing, deploy
  - Trending down over last 3 iterations
  - Outliers investigated (> 3x average)
- [ ] WIP limits:
  - Per developer: max 2 items in progress
  - Per team: max (team_size + 1) items in progress
  - Enforced on kanban board (blocked if over limit)
  - Violations tracked and discussed in retro
- [ ] Throughput:
  - Measured weekly (items completed)
  - Coefficient of variation < 50% (predictable delivery)
  - Used for forecasting (Monte Carlo simulation)

### Engineering Practices Deep Check
- [ ] Pair programming:
  - Minimum 2 sessions per developer per week
  - Tracked: who paired with whom (cross-pollination)
  - Complex/critical code always paired
  - New team members pair 100% first 2 weeks
- [ ] Continuous integration:
  - Every developer integrates at least daily
  - Build + test < 15 minutes
  - Broken build fixed within 15 minutes (or reverted)
  - No "broken for days" (ever)
- [ ] Collective ownership:
  - No "only John can change this code" bottlenecks
  - Knowledge sharing sessions weekly
  - Code rotation: everyone touches every area quarterly


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
