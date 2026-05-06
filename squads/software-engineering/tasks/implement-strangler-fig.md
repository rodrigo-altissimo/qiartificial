---
task: implement-strangler-fig
squad: software-engineering
agent: eng-refactor
tags: [strangler-fig, migration, legacy]
---

# Task: Implement Strangler Fig Migration

## Purpose
Incrementally migrate from legacy monolith to new system using Strangler Fig pattern.

## Steps

### 1. Assess Current State
```
Current situation: [describe current state]
Gap identified: [what needs to change]
Impact: [business/technical impact]
```

### 2. Design Solution
```
Approach: [chosen approach with rationale]
Alternatives considered: [what else was evaluated]
Trade-offs: [what are we accepting]
Dependencies: [what needs to be in place first]
```

### 3. Implement
```
Implementation steps:
  1. [step 1 — specific action]
  2. [step 2 — specific action]
  3. [step 3 — specific action]
  4. [step 4 — specific action]
Risk mitigation: [how to reduce risk]
```

### 4. Verify
```
Verification criteria:
  - [criterion 1 — measurable]
  - [criterion 2 — measurable]
  - [criterion 3 — measurable]
Rollback plan: [how to revert if issues arise]
```

## Deliverables
- [ ] Assessment document
- [ ] Design document / ADR
- [ ] Implementation complete
- [ ] Verification passed
- [ ] Documentation updated

## Quality Gate
- Solution reviewed by eng-refactor
- All verification criteria met
- No regressions introduced


## Practical Examples

### Example: Strangler Fig
```
Phase 1 (Week 1-4):
  Route /api/v1/payments → NEW system
  Route /api/v1/orders → still LEGACY
  Route /api/v1/users → still LEGACY

Phase 2 (Week 5-8):
  Route /api/v1/payments → NEW ✅
  Route /api/v1/orders → NEW system
  Route /api/v1/users → still LEGACY

Phase 3 (Week 9-12):
  Route /api/v1/* → ALL through NEW system
  LEGACY decommissioned
```

### Example: Mikado Method
```
GOAL: Replace ORM with raw SQL

Naive attempt → breaks:
  1. Tests fail (mocked ORM, not SQL)
  2. Repository interface tied to ORM entities
  3. 12 services depend on ORM-specific features

Mikado graph:
  [Replace ORM]
    ├── [Decouple repository interface] (leaf → do first)
    ├── [Create SQL implementations]
    │   └── [Define raw query templates]
    └── [Update 12 services]
        └── [Add integration tests] (leaf → do first)

Execution order: leaves first, goal last
```

## Common Pitfalls
1. **Big-bang rewrite** — always incremental (strangler fig)
2. **No tests before refactoring** — refactoring without safety net = gambling
3. **Refactoring + adding features** — one or the other, never both
4. **Not committing small steps** — each step should compile and pass tests
5. **No Mikado graph for complex refactors** — you'll get lost


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
