---
task: run-incident-postmortem
squad: software-engineering
agent: eng-devops
tags: [incident, postmortem, blameless, sre, learning]
---

# Task: Run Incident Post-Mortem

## Purpose
Conduct a blameless post-mortem after a production incident to identify systemic causes and prevent recurrence.

## Prerequisites
- Incident resolved and service restored
- Timeline of events available
- Participants identified (responders, service owners, stakeholders)

## Steps

### 1. Document the Timeline
```
[timestamp]: [what happened — factual, no blame]
[timestamp]: [alert fired — which alert, who was paged]
[timestamp]: [action taken — what was attempted]
[timestamp]: [resolution — what fixed it]
[timestamp]: [verification — how we confirmed it was fixed]
[timestamp]: [all-clear — service declared stable]
```

### 2. Classify Severity
```
Duration:     [time from detection to resolution]
Impact:       [users affected, revenue lost, data affected]
Severity:     [P0-outage | P1-degraded | P2-minor]
Blast Radius: [one service | one team | all users | external]
```

### 3. Root Cause Analysis (5 Whys)
```
Why 1: [immediate cause]
  Why 2: [what allowed that to happen?]
    Why 3: [what systemic issue underlies that?]
      Why 4: [what process gap exists?]
        Why 5: [what cultural or structural issue?]
Root Cause: [systemic issue at the deepest level]
```

**Rule:** BLAMELESS. Focus on systems and processes, never individuals.

### 4. Identify Contributing Factors
```
□ Missing or inadequate test coverage?
□ Missing monitoring/alerting?
□ Missing or outdated runbook?
□ Deployment without canary/rollback?
□ Configuration drift between environments?
□ Knowledge silo (only one person knows this area)?
□ Dependency on external service without fallback?
```

### 5. Define Action Items
For EACH contributing factor, define a SPECIFIC action:
```
Action:     [concrete task — not "improve testing"]
Owner:      [name]
Deadline:   [date — must be within 30 days]
Metric:     [how we'll know it's done and effective]
Type:       [prevent | detect | mitigate]
```

**Priority:** Prevent > Detect > Mitigate.

### 6. Write Post-Mortem Document
```markdown
# Post-Mortem: [Incident Title]
**Date:** [date]  **Severity:** [P0/P1/P2]  **Duration:** [hh:mm]

## Summary
[2-3 sentences describing what happened and impact]

## Timeline
[chronological events]

## Root Cause
[5 Whys analysis result]

## Contributing Factors
[list of systemic issues]

## Action Items
| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|

## Lessons Learned
[what we learned that applies broadly]
```

## Deliverables
- [ ] Incident timeline (factual, blameless)
- [ ] Severity classification
- [ ] Root cause analysis (5 Whys)
- [ ] Contributing factors identified
- [ ] Action items with owners and deadlines
- [ ] Post-mortem document shared with org

## Quality Gate
- Post-mortem completed within 48 hours of incident resolution
- Every contributing factor has a specific action item
- Every action item has an owner and deadline ≤ 30 days
- Zero blame language in the document


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


## Deep Dive: Configuration Templates

### Kubernetes Health Check
```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
        - name: order-api
          livenessProbe:
            httpGet:
              path: /health/live
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 15
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /health/ready
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 10
            failureThreshold: 2
          startupProbe:
            httpGet:
              path: /health/started
              port: 8080
            failureThreshold: 30
            periodSeconds: 5
```

### Prometheus Alert Rules
```yaml
groups:
  - name: order-api
    rules:
      - alert: HighErrorRate
        expr: |
          rate(http_requests_total{status=~"5.."}[5m]) 
          / rate(http_requests_total[5m]) > 0.01
        for: 5m
        labels:
          severity: P1
        annotations:
          summary: "Error rate > 1% for 5 minutes"
          runbook: "https://wiki.internal/runbooks/high-error-rate"

      - alert: HighLatency
        expr: |
          histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) > 0.5
        for: 5m
        labels:
          severity: P1
        annotations:
          summary: "p99 latency > 500ms for 5 minutes"

      - alert: SLOBudgetFastBurn
        expr: |
          slo:error_budget_remaining < 0.95
        for: 1h
        labels:
          severity: P1
        annotations:
          summary: "Error budget consumed > 5% in 1 hour"
```

### Grafana Dashboard JSON
```json
{
  "panels": [
    {
      "title": "Request Rate (RPS)",
      "type": "graph",
      "targets": [{"expr": "rate(http_requests_total[1m])"}]
    },
    {
      "title": "Error Rate (%)",
      "type": "stat",
      "targets": [{"expr": "rate(http_requests_total{status=~'5..'}[5m]) / rate(http_requests_total[5m]) * 100"}],
      "thresholds": [{"value": 0.1, "color": "yellow"}, {"value": 1, "color": "red"}]
    },
    {
      "title": "Latency Percentiles",
      "type": "graph",
      "targets": [
        {"expr": "histogram_quantile(0.50, rate(http_duration_bucket[5m]))", "legendFormat": "p50"},
        {"expr": "histogram_quantile(0.90, rate(http_duration_bucket[5m]))", "legendFormat": "p90"},
        {"expr": "histogram_quantile(0.99, rate(http_duration_bucket[5m]))", "legendFormat": "p99"}
      ]
    }
  ]
}
```


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
