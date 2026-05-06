---
task: refactor-code-smells
squad: software-engineering
agent: eng-refactor
tags: [refactoring, code-quality, technical-debt]
---

# Task: Refactor Code Smells

## Purpose
Systematically identify and eliminate code smells through named, safe refactoring techniques.

## Steps

### 1. Identify Hotspots
Find the highest-priority refactoring targets:
```bash
# Find most complex files (cyclomatic complexity)
# Python: radon cc -s -a src/
# Java: PMD, Checkstyle
# JS: eslint complexity rule

# Find most frequently changed files (last 90 days)
git log --after="90 days ago" --name-only --pretty=format: | sort | uniq -c | sort -rn | head -20
```

Build the Refactoring Priority Matrix:
| File/Module | Complexity Score (1-10) | Change Frequency (commits/month) | Priority Score |
|-------------|------------------------|----------------------------------|----------------|
| [file]      | [X]                    | [Y]                              | X × Y          |

Attack in priority order (highest score first).

### 2. Write Characterization Tests (Before Any Change)
For each hotspot — before touching a single line:
```
Step 1: Run the code. Observe the actual output.
Step 2: Write a test asserting that exact output.
Step 3: Repeat for all important code paths.
Step 4: Confirm all tests are GREEN.
```

**RULE:** No refactoring starts without green characterization tests.

### 3. Name the Code Smells
Identify smells precisely:
```
FOUND SMELLS:
  [ ] Long Method (> 20 lines): [function name, line count]
  [ ] Large Class (multiple responsibilities): [class name]
  [ ] Duplicate Code: [locations]
  [ ] Feature Envy (method uses other class's data): [method name, envied class]
  [ ] Switch on Type: [location]
  [ ] Long Parameter List (> 3 params): [method name]
  [ ] Dead Code: [location]
  [ ] Speculative Generality: [location]
  [ ] Comments as Documentation (code not self-describing): [location]
```

### 4. Plan the Refactoring Sequence
For each smell, select the named refactoring:

| Smell | Refactoring | Steps |
|-------|------------|-------|
| Long Method | Extract Method | Extract sections to named functions |
| Large Class | Extract Class | Move fields + methods to new class |
| Duplicate Code | Extract Method + DRY | Unify to single authoritative version |
| Feature Envy | Move Method | Move method to the class it envies |
| Switch on Type | Replace Conditional with Polymorphism | Create subclasses for each branch |
| Long Parameter List | Introduce Parameter Object | Create value object for group |

### 5. Execute: One Refactoring at a Time
For each refactoring in sequence:
```
[ ] Tests are GREEN (precondition)
[ ] Apply the single named refactoring
[ ] Run all tests → must be GREEN
[ ] If RED: revert immediately. Understand and retry.
[ ] If GREEN: commit (small, atomic)
[ ] Move to next refactoring
```

**RULE:** Never mix refactoring with functionality changes.

### 6. Verify Improvement
After all refactorings complete:
- Re-run complexity metrics — score should be lower
- Code review of refactored code: simpler? More readable?
- All tests still green (behavior preserved)

## Deliverables
- [ ] Hotspot analysis table (complexity × frequency)
- [ ] Characterization test suite for each hotspot
- [ ] Named smell inventory
- [ ] Refactoring plan with technique per smell
- [ ] All refactorings applied with atomic commits
- [ ] Complexity metric before/after comparison

## Quality Gate
- All characterization tests written before first change
- All tests green after each individual refactoring
- Complexity score reduced by ≥ 25% in refactored hotspots
- No behavioral changes (refactoring only)


## Practical Examples

### Example: CDC Pipeline Design
```
Source: PostgreSQL (orders table)
Destination: BigQuery (analytics)
Tool: Debezium → Kafka → BigQuery sink connector

Pipeline:
  1. Debezium captures every INSERT/UPDATE/DELETE from WAL
  2. Events published to Kafka topic: orders.cdc
  3. Sink connector writes to BigQuery raw.orders table
  4. dbt transforms: raw → staging → marts
  5. Quality tests run after each dbt run

Quality Tests:
  not_null: [order_id, customer_id, total]
  unique: [order_id]
  freshness: source_freshness < 5 minutes
  row_count: daily increase vs 7-day rolling average

SLOs:
  Freshness: ≤ 5 minutes
  Completeness: NULL rate < 0.1%
  Volume: daily rows within 30% of average
```

### Example: Schema Migration (Rename Column)
```
Day 1:  ALTER TABLE orders ADD COLUMN full_name VARCHAR(255);
Day 2:  Application dual-writes (customer_name AND full_name)
Day 3:  UPDATE orders SET full_name = customer_name WHERE full_name IS NULL;
Day 7:  All consumers reading full_name (verified via query logs)
Day 14: Application stops writing customer_name
Day 30: ALTER TABLE orders DROP COLUMN customer_name;

Total: 30 days. Zero downtime. Zero data loss.
```

## Common Pitfalls
1. **No quality tests on pipeline** — zero rows loaded goes undetected
2. **Renaming columns directly** — breaks ALL downstream consumers
3. **Full reload every run** — wasteful, slow, expensive at scale
4. **No freshness alerting** — stale data served without anyone knowing
5. **Manual data fixes** — every fix must be scripted and reproducible


## War Room Protocol

### When This Task Is Triggered By An Incident

```
MINUTE 0-5: ASSESS
  □ Confirm the issue is real (not false positive)
  □ Check: Is it customer-facing?
  □ Check: Is data at risk?
  □ Classify severity:
     SEV1: > 50% users affected → all-hands
     SEV2: < 50% users degraded → team + lead
     SEV3: internal only → on-call

MINUTE 5-15: CONTAIN
  □ Can we rollback the last deploy?
  □ Can we toggle a feature flag?
  □ Can we scale up resources?
  □ Can we redirect traffic?
  □ Communicate: team channel + status page

MINUTE 15-30: DIAGNOSE
  □ Check dashboards (4 Golden Signals)
  □ Check logs (grep for errors in last 30 min)
  □ Check recent changes (deploys, config, infra)
  □ Check dependencies (are they healthy?)
  □ Form hypothesis: "I think the problem is ___"

MINUTE 30-60: FIX
  □ If hypothesis confirmed → implement fix
  □ If not confirmed → gather more data, new hypothesis
  □ Deploy fix through normal pipeline (or hotfix if SEV1)
  □ Verify fix: check dashboards, check affected users

AFTER RESOLUTION:
  □ Update status page: "Resolved"
  □ Notify stakeholders
  □ Schedule post-mortem (within 48h)
  □ Create action items to prevent recurrence
```

### Handoff Protocol

```
WHEN HANDING THIS TASK TO ANOTHER ENGINEER:

Provide:
  1. Context: What is the task and why?
  2. Current state: What has been done so far?
  3. Next steps: What needs to happen next?
  4. Blockers: Any known issues or dependencies?
  5. Contacts: Who to ask for help?
  6. Artifacts: Links to relevant docs, PRs, dashboards

Format:
  ## Handoff — [Task Name]
  **From:** [your name]  **To:** [their name]  **Date:** YYYY-MM-DD
  
  **Context:** [1-2 sentences]
  **Done:** [bulleted list]
  **Next:** [bulleted list]
  **Blockers:** [if any]
  **Links:** [dashboards, PRs, docs]
```

### Quality Gate

```
THIS TASK IS COMPLETE WHEN:
  □ All acceptance criteria met
  □ Tests written and passing
  □ Code reviewed by peer
  □ Documentation updated
  □ Deployed to staging and verified
  □ Product owner accepted
  □ No P0 or P1 issues outstanding

THIS TASK MAY BE DEFERRED IF:
  ○ Blocked by external dependency (document and escalate)
  ○ Scope discovered to be larger than estimated (split task)
  ○ Higher priority item emerged (document reason for deferral)
```
