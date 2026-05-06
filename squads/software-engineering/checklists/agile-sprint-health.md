---
checklist: agile-sprint-health
squad: software-engineering
agent: eng-agile
tags: [sprint, agile, health]
---

# Checklist: Sprint Health Check

## Purpose
Use this checklist to verify sprint health check quality and completeness.

---

## 🔍 Flow Metrics
- [ ] Cycle time measured and trending down
- [ ] WIP limits respected (no multitasking > 2 items)
- [ ] No items blocked for > 1 day without escalation

---

## ✅ Quality Metrics
- [ ] Escaped defects this sprint: [count]
- [ ] Test coverage trend: stable or improving
- [ ] Technical debt items addressed vs added

---

## 🛡️ Team Health
- [ ] Retrospective action items from last sprint completed
- [ ] Pair programming sessions conducted
- [ ] Knowledge sharing happened (mob/ensemble)

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


## Deep Verification

### Flow Metrics
- [ ] Cycle time tracked (from start to deployed)
- [ ] WIP limits defined and respected
- [ ] Throughput measured weekly
- [ ] Blocked items escalated within 1 day
- [ ] Lead time trending down over last 3 sprints

### Engineering Practices
- [ ] Pair programming sessions: minimum 2 per week per developer
- [ ] TDD adopted for new business logic
- [ ] Trunk-based development in use (branches < 1 day)
- [ ] Feature flags for in-progress features
- [ ] Collective code ownership (anyone can change any code)

### Retrospective Effectiveness
- [ ] Retro held every sprint
- [ ] Action items from previous retro tracked
- [ ] At least 70% of action items completed before next retro
- [ ] Psychological safety maintained (all voices heard)
- [ ] Experiments proposed and tracked

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
