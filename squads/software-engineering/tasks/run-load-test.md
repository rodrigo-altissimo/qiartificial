---
task: run-load-test
squad: software-engineering
agent: eng-perf
tags: [performance, load-test, stress-test, capacity-planning, k6]
---

# Task: Run Load Test

## Purpose
Design and execute load tests to determine system capacity, breaking point, and performance under stress. Establish baseline and identify bottlenecks.

## Prerequisites
- Production-like environment available (or staging that mirrors prod)
- SLO targets defined (p99 latency, error rate thresholds)
- Critical user paths identified

## Steps

### 1. Define Test Scenarios
```
BASELINE TEST:   Normal traffic (current average RPS × 1.0)
  Duration:      30 minutes
  Goal:          Establish performance baseline

LOAD TEST:       Expected peak (current average RPS × 2.0)
  Duration:      30 minutes
  Goal:          Verify system handles expected peak

STRESS TEST:     Beyond peak (current average RPS × 3-5x)
  Duration:      15 minutes
  Goal:          Find breaking point and degradation pattern

SOAK TEST:       Normal traffic for extended period
  Duration:      4-8 hours
  Goal:          Detect memory leaks, connection pool exhaustion, GC pressure
```

### 2. Define Critical User Paths
```
Path 1:  [e.g. Browse products → Add to cart → Checkout]
  Endpoints: GET /products, POST /cart, POST /checkout
  Weight:    60% of virtual users

Path 2:  [e.g. Login → View dashboard → Generate report]
  Endpoints: POST /auth/login, GET /dashboard, GET /reports
  Weight:    30% of virtual users

Path 3:  [e.g. Search → Filter → View details]
  Weight:    10% of virtual users
```

### 3. Write Load Test Script
```javascript
// Example using k6
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5m', target: 50 },   // Ramp up
    { duration: '30m', target: 50 },   // Steady state
    { duration: '5m', target: 100 },   // Stress
    { duration: '5m', target: 0 },     // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(99)<200'],   // p99 < 200ms
    http_req_failed: ['rate<0.01'],     // Error rate < 1%
  },
};
```

### 4. Execute Tests and Collect Results
```
METRIC               | BASELINE | LOAD    | STRESS  | SLO TARGET |
---------------------|----------|---------|---------|------------|
RPS achieved         | [___]    | [___]   | [___]   | [___]      |
p50 latency          | [___]ms  | [___]ms | [___]ms | [___]ms    |
p99 latency          | [___]ms  | [___]ms | [___]ms | [___]ms    |
Error rate           | [___]%   | [___]%  | [___]%  | < [___]%   |
CPU utilization      | [___]%   | [___]%  | [___]%  | < 80%      |
Memory utilization   | [___]%   | [___]%  | [___]%  | < 85%      |
DB connections used  | [___]    | [___]   | [___]   | < [max]    |
Breaking point (RPS) | —        | —       | [___]   | —          |
```

### 5. Identify Bottleneck
```
Bottleneck:    [which resource saturated first?]
At what RPS:   [when did degradation start?]
Fix:           [scale horizontally / optimize code / add cache / increase pool]
Re-test after fix: [planned date]
```

## Deliverables
- [ ] Test scenarios defined (baseline, load, stress, soak)
- [ ] Critical user paths with weights
- [ ] Load test script (k6/Locust/Gatling)
- [ ] Results table (latency, error rate, resource utilization)
- [ ] Bottleneck identified with fix recommendation
- [ ] Capacity planning: max safe RPS at current infrastructure

## Quality Gate
- p99 latency meets SLO under load test (expected peak)
- Error rate < 1% under load test
- Breaking point identified with stress test
- Soak test shows no memory leaks (memory stable over 4+ hours)


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
