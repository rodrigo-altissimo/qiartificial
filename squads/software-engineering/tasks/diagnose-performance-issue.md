---
task: diagnose-performance-issue
squad: software-engineering
agent: eng-perf
tags: [performance, profiling, USE, RED]
---

# Task: Diagnose a Performance Problem

## Purpose
Apply Brendan Gregg's scientific methodology to diagnose a performance bottleneck and recommend targeted optimizations.

## Steps

### 1. Define the Problem Precisely
Before touching anything:
```
Symptom:          [what is slow? in what context?]
Metric observed:  [current p99 latency: X ms / CPU: X% / error rate: X%]
Baseline:         [what was it before the problem appeared?]
SLO/threshold:    [what is the target?]
Gap:              [current - target = what we need to improve]
Time first observed: [when did this start?]
Correlation:      [any deployment, traffic spike, or config change at that time?]
```

### 2. Apply RED Method (Service-Level)
For the affected service:
```
RATE:    Current requests/second: [X]
         Normal requests/second:  [X]
         Spike? [YES/NO]

ERRORS:  Current error rate: [X%]
         Types of errors: [timeout / 5xx / specific exceptions]

DURATION: p50 latency: [X ms]
           p95 latency: [X ms]
           p99 latency: [X ms]
           
Abnormal dimension: [RATE / ERRORS / DURATION]
```

### 3. Apply USE Method (Resource-Level)
For each resource, measure:
```
CPU:
  Utilization: $ top / mpstat → [X%] user, [X%] sys, [X%] iowait
  Saturation:  $ vmstat 1 → r queue [X] (> #CPUs = saturated)
  Errors:      MCE errors in kern.log?

MEMORY:
  Utilization: $ free -h → used [X GB] / total [X GB]
  Saturation:  Swap activity? $ vmstat → si/so [X] (> 0 = problem)

DISK:
  Utilization: $ iostat -x → util [X%]
  Saturation:  $ iostat -x → await [X ms] vs svctm [X ms] (await >> svctm = saturated)

NETWORK:
  Utilization: $ ifconfig / netstat → throughput [X Mbps]
  Saturation:  Packet drops? $ netstat -s → retransmits [X]
```

### 4. Generate and Interpret Flame Graph
If CPU-bound (CPU utilization high):
```bash
# Linux
sudo perf record -F 99 -g -p [PID] -- sleep 30
perf script | ./FlameGraph/stackcollapse-perf.pl | ./FlameGraph/flamegraph.pl > profile.svg

# Java
sudo async-profiler -d 30 -f profile.html [PID]

# Go
go tool pprof http://localhost:6060/debug/pprof/profile?seconds=30

# Node.js
node --prof app.js && node --prof-process isolate-*.log
```

Interpret the flame graph:
```
Widest function at top: [name] → [X%] of CPU time
Pattern: [GC pressure / I/O / lock contention / application logic]
Root call path to hot function: [stack trace]
```

### 5. Analyze Distributed Traces
If latency issue spans multiple services:
- Open Jaeger/Zipkin for the slow requests (p99 traces)
- Identify the critical path (sequential non-parallel spans)
- Find the longest single span in the critical path
- That service/operation is the bottleneck

### 6. Root Cause Hypothesis and Test
```
Hypothesis: [e.g., "DB query X is doing a full table scan"]
Prediction:  [if true, what measurement confirms it?]
Measurement: [EXPLAIN ANALYZE query / profiler output / trace]
Result:      [confirmed / rejected]
```

### 7. Targeted Optimization
Only optimize the confirmed bottleneck:
```
Bottleneck: [name]
Optimization: [specific change]
Expected improvement: [X% reduction in metric Y]
Implementation: [code/config change]
Risk: [any downside to this optimization?]
```

### 8. Validate Improvement
After applying optimization:
- Re-measure the same metric
- Compare p50/p95/p99 before and after
- Confirm SLO is now met
- Confirm no regression in other metrics

## Deliverables
- [ ] Problem definition with measurable gap
- [ ] RED analysis output
- [ ] USE analysis output (all 3 resources)
- [ ] Flame graph (if CPU-bound)
- [ ] Distributed trace analysis (if cross-service)
- [ ] Root cause statement (confirmed by measurement)
- [ ] Optimization applied and validated

## Quality Gate
- No optimization applied without confirmed root cause
- Improvement measured with the same metrics as diagnosis
- SLO met after optimization


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
