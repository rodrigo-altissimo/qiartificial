---
task: run-tech-radar
squad: software-engineering
agent: eng-audit
tags: [tech-radar, governance, technology]
---

# Task: Run Technology Radar Assessment

## Purpose
Evaluate all technologies in use and classify as Adopt / Trial / Assess / Hold with sunset plans.

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
- Solution reviewed by eng-audit
- All verification criteria met
- No regressions introduced


## Practical Examples

### Example: Audit Report (Summarized)
```
Service: order-api
Date: 2024-01-15

| Pillar | Score | Key Finding |
|--------|-------|-------------|
| Security | 4/5 | Minor: 2 deps with MEDIUM CVEs |
| Performance | 3/5 | p99=800ms, SLO=500ms |
| Operability | 2/5 | No structured logging, no health check |
| Code Quality | 5/5 | Clean code, 92% coverage |
| Testability | 4/5 | Missing integration tests for payments |
| Data | 4/5 | Migrations reversible |
| **OVERALL** | **3.6** | **CONDITIONAL** |

P0: None
P1: Fix p99 latency, add structured logging, add health check
Deadline: 2 weeks
Re-audit after P1 fixes
```

## Common Pitfalls
1. **"Looks good to me"** — always require evidence
2. **Skipping pillars** — all 6 must be assessed
3. **P0 classified as P1** — credentials in code is ALWAYS P0
4. **No re-audit** — CONDITIONAL without re-audit = no accountability
5. **Opinion-based scores** — every score backed by specific evidence


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
