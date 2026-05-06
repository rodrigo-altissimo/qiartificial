---
task: design-caching-strategy
squad: software-engineering
agent: eng-perf
tags: [caching, performance, redis]
---

# Task: Design Caching Strategy

## Purpose
Design application caching with invalidation strategies, TTLs, and thundering herd protection.

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
- Solution reviewed by eng-perf
- All verification criteria met
- No regressions introduced


## Practical Examples

### Example: Diagnosing a Slow Endpoint
```
STEP 1 — Define the problem:
  Endpoint: GET /api/v1/orders?status=active
  Current p99: 3,200ms
  Target SLO: p99 < 500ms
  Gap: 2,700ms
  Started: after deploy v2.14 (2 days ago)

STEP 2 — RED:
  Rate: 150 RPS (normal: 120 RPS, slight increase)
  Errors: 0.1% timeout errors
  Duration: p50=50ms, p95=800ms, p99=3,200ms → DURATION abnormal

STEP 3 — USE:
  CPU: 25% → not saturated
  Memory: 60% → normal
  Disk: 5% → normal
  DB Connections: 48/50 → 96% SATURATED ← BOTTLENECK

STEP 4 — Root cause:
  Hypothesis: "New code holds DB connections too long"
  Measurement: Query log shows new query scanning full orders table
  Confirmed: EXPLAIN ANALYZE shows Seq Scan (missing index)

STEP 5 — Fix:
  CREATE INDEX idx_orders_status ON orders(status);
  Result: p99 dropped from 3,200ms to 120ms ✅
```

### Flame Graph Interpretation
```
WIDE BAR AT TOP:
  Function: GC.collect() — 40% of CPU
  Diagnosis: Excessive garbage collection
  Fix: Reduce object allocation in hot path, reuse buffers

DEEP STACK (many frames):
  Pattern: Recursive JSON serialization
  Fix: Use streaming serializer, flatten data structure
```

## Common Pitfalls
1. **Optimizing without measuring** — always profile first
2. **Looking at averages** — p99 reveals real user experience
3. **Adding cache without strategy** — cache invalidation is hard
4. **Scaling wrong resource** — measure first, then scale the bottleneck
5. **Ignoring GC pressure** — high allocation rate = high pause time


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
