---
checklist: clean-architecture-review
squad: software-engineering
agent: eng-clean-code
tags: [clean-architecture, hexagonal, layers]
---

# Checklist: Clean Architecture Review

## Purpose
Use this checklist to verify clean architecture review quality and completeness.

---

## 🔍 Dependency Rule
- [ ] Dependencies point INWARD (domain knows nothing about infra)
- [ ] No framework imports in domain layer
- [ ] Ports (interfaces) defined in domain layer
- [ ] Adapters implement ports in infrastructure layer

---

## ✅ Layer Separation
- [ ] Domain entities have no persistence annotations
- [ ] Use cases/services contain only business logic
- [ ] Controllers/handlers only translate and delegate
- [ ] Infrastructure concerns (DB, HTTP, messaging) in adapters only

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


## Deep Verification

### Naming
- [ ] All variables describe what they HOLD (nouns)
- [ ] All functions describe what they DO (verbs)
- [ ] No abbreviations unless universally understood (id, url, html)
- [ ] No single-letter variables outside loop counters
- [ ] Boolean names read as questions: isActive, hasPermission, canEdit
- [ ] Class names are nouns: OrderService, EmailSender (not OrderManager)

### Functions
- [ ] Each function does ONE thing (no "and/or" in description)
- [ ] Functions < 20 lines (< 10 ideal)
- [ ] Maximum 3 parameters (0-2 ideal)
- [ ] No side effects hidden by function name
- [ ] Functions at same abstraction level (no mixing high and low)

### Structure
- [ ] Classes < 200 lines
- [ ] Files < 400 lines
- [ ] Cyclomatic complexity < 10 per function
- [ ] Cognitive complexity < 15 per function
- [ ] No deep nesting (> 3 levels)

### Code Smells Absent
- [ ] No Long Method (> 20 lines)
- [ ] No Large Class (> 200 lines)
- [ ] No Duplicate Code (same logic in 2+ places)
- [ ] No Feature Envy (method uses another class more than its own)
- [ ] No Shotgun Surgery (one change affects many files)
- [ ] No Dead Code (unreachable or unused code)
- [ ] No commented-out code

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

### Naming Deep Check
- [ ] Method names:
  - All verbs or verb phrases: calculateTotal(), sendEmail(), validate()
  - No generic names: process(), handle(), manage(), do()
  - Consistency: getX() always returns X, findX() may return null
  - Boolean methods: isActive(), hasPermission(), canEdit()
- [ ] Variable names:
  - All nouns or noun phrases: customerName, orderTotal
  - No single letters (except i/j/k in short loops)
  - No abbreviations: mgr→manager, btn→button, usr→user
  - Scope-proportional length: short scope = short name ok
- [ ] Class names:
  - Noun or noun phrase: OrderService, EmailSender
  - Not: OrderManager (what does "manage" mean?)
  - Not: OrderHelper (helper = code smell)
  - Not: OrderUtils (utils = dumping ground)

### Function Quality Deep Check
- [ ] Single responsibility:
  - Can you describe it in one sentence WITHOUT "and"?
  - If name has "and": split into two functions
  - If function has sections (commented blocks): extract methods
- [ ] Parameter count:
  - 0 params: ideal
  - 1 param: good
  - 2 params: acceptable
  - 3 params: justify or introduce parameter object
  - 4+ params: refactor (Extract Class or Parameter Object)
- [ ] Side effects:
  - Function name predicts all effects
  - checkPassword() should NOT change session state
  - getUser() should NOT log analytics events

### Complexity Deep Check
- [ ] Cyclomatic complexity per function:
  - 1-5: simple, clear → ✅
  - 6-10: moderate, acceptable for complex business logic → ⚠️
  - 11-20: complex, should split → ❌
  - 21+: very complex, must refactor → 🔴
- [ ] Nesting depth:
  - Max 3 levels of nesting (if/for/while)
  - Fix: early return (guard clause)
  - Fix: extract inner block to named method
  - Fix: replace nested conditionals with polymorphism


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
