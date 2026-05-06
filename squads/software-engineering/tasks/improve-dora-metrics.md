---
task: improve-dora-metrics
squad: software-engineering
agent: eng-devops
tags: [dora, metrics, accelerate, deployment-frequency, lead-time, mttr, cfr]
---

# Task: Improve DORA Metrics

## Purpose
Measure, classify, and systematically improve the team's DORA metrics to move at least one level up within 90 days.

## Prerequisites
- Access to deployment logs (last 30 days minimum)
- Access to incident/on-call history (last 30 days)
- Engineering team buy-in for measurement

## Steps

### 1. Measure Current State
```
DEPLOYMENT FREQUENCY:
  Count deploys in last 30 days: [___]
  Level: [Elite (daily+) | High (weekly) | Medium (monthly) | Low (< monthly)]

LEAD TIME FOR CHANGES:
  Measure 10 recent commits (commit timestamp → production timestamp): [___]
  Average: [___] days/hours
  Level: [Elite (< 1hr) | High (< 1 week) | Medium (< 1 month) | Low (> 1 month)]

CHANGE FAILURE RATE:
  Failed deploys / total deploys × 100 = [___]%
  Level: [Elite (< 15%) | High (16-30%) | Medium (16-30%) | Low (46-60%)]

MEAN TIME TO RESTORE (MTTR):
  Average restore time from last 5 incidents: [___]
  Level: [Elite (< 1hr) | High (< 1 day) | Medium (< 1 week) | Low (> 6 months)]
```

### 2. Identify the Constraint
```
Lowest metric:      [which DORA metric is worst?]
Root cause:         [why is this metric the lowest?]
Impact:             [how does this affect the other metrics?]
```

**Rule:** Fix the LOWEST metric first. It's the bottleneck.

### 3. Design Interventions (One Per Metric)
For the constraint metric, design 3 interventions:
```
Intervention 1:   [specific action]
Expected impact:  [how much will this metric improve?]
Effort:           [days of work]
Owner:            [person]
Timeline:         [when completed]

Intervention 2:   [...]
Intervention 3:   [...]
```

### 4. Implement Top Intervention
```
□ Sprint-plan the top intervention
□ Baseline measurement documented
□ Implementation complete
□ Re-measure after 2 weeks
□ Compare: before → after
```

### 5. Set 90-Day Targets
```
METRIC          | CURRENT LEVEL | 90-DAY TARGET |
----------------|---------------|---------------|
Deploy Freq     | [___]         | [next level]  |
Lead Time       | [___]         | [next level]  |
CFR             | [___]         | [stay/improve]|
MTTR            | [___]         | [next level]  |
```

## Deliverables
- [ ] DORA scorecard (current state with classification)
- [ ] Constraint identification
- [ ] Top 3 interventions designed
- [ ] Top intervention implemented
- [ ] 90-day improvement targets set
- [ ] Measurement cadence established (monthly re-measurement)

## Quality Gate
- All 4 metrics measured with real data (not estimates)
- Constraint metric targeted for one-level improvement
- Re-measurement scheduled within 30 days


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
