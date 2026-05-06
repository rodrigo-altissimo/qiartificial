---
task: implement-feature-flags
squad: software-engineering
agent: eng-devops
tags: [feature-flags, progressive-delivery, trunk-based, rollout]
---

# Task: Implement Feature Flag Strategy

## Purpose
Design and implement a feature flag system enabling trunk-based development, progressive rollout, instant kill switches, and A/B testing.

## Prerequisites
- Feature flag tool selected (LaunchDarkly, Unleash, Flagsmith, or custom)
- Trunk-based development model in place (or being adopted)

## Steps

### 1. Define Flag Naming Convention
```
Format:   [product].[feature].[variant]
Examples: checkout.express-pay.enabled
          search.new-ranking-algo.enabled
          billing.v2-invoice-format.enabled
```

### 2. Define Flag Types
```
Release Toggle:  Enable/disable incomplete features in trunk
  TTL: Remove within 30 days of full rollout
  
Experiment Toggle:  A/B testing
  TTL: Remove after experiment concludes (max 90 days)
  
Ops Toggle:  Circuit breaker / kill switch
  TTL: Permanent (reviewed quarterly)
  
Permission Toggle:  Feature access by user role/tier
  TTL: Semi-permanent (linked to product tiers)
```

### 3. Define Rollout Strategy
```
Flag:       [feature flag name]
Phase 1:    Internal team only (dogfooding)
Phase 2:    5% of users (canary)
Phase 3:    25% of users (watch error rates for 24h)
Phase 4:    50% → 75% → 100% (progressive, 24h between each)
Rollback:   Flip flag OFF (instant, no deploy needed)
```

### 4. Implement Flag Cleanup Policy
```
Rule:       Every release toggle is removed within 30 days of 100% rollout
Process:    
  1. Flag hits 100% → schedule cleanup ticket
  2. Remove flag check from code
  3. Remove flag from flag system
  4. Code review verifies no dead branches remain
Enforcement: Monthly flag cleanup audit
```

### 5. Define Flag Testing Strategy
```
Unit tests:     Test both flag ON and flag OFF paths
Integration:    Test flag transitions (OFF → ON, ON → OFF)
E2E:            Test critical paths with flag ON (new behavior)
```

## Deliverables
- [ ] Flag naming convention documented
- [ ] Flag types defined with TTL policies
- [ ] Rollout strategy for first feature
- [ ] Cleanup policy and enforcement process
- [ ] Testing strategy for flagged code

## Quality Gate
- No feature branch alive > 2 days (use flags for incomplete work)
- No release flag alive > 30 days after 100% rollout
- Every flag has a cleanup schedule


## Practical Examples

### Example: SLO Definition
```yaml
service: order-api
slos:
  availability:
    indicator: successful_requests / total_requests
    target: 99.9%
    window: 30 days rolling
    error_budget: 0.1% = 43.2 minutes/month
    
  latency:
    indicator: p99_response_time
    target: < 500ms
    window: 30 days rolling
    
  error_rate:
    indicator: 5xx_responses / total_responses
    target: < 0.1%

alerts:
  fast_burn:
    condition: "error budget consumed > 5% in 1 hour"
    severity: P1
    action: page on-call
    
  slow_burn:
    condition: "error budget consumed > 10% in 6 hours"  
    severity: P2
    action: notify team channel
```

### Example: Post-Mortem
```
INCIDENT: Order API down for 23 minutes
DATE: 2024-01-15 14:30-14:53 UTC
SEV: 2 (user-facing degradation)

TIMELINE:
  14:30 — Alert fired: order-api error rate > 5%
  14:33 — On-call acknowledged, began investigation
  14:38 — Root cause: DB connection pool exhausted
  14:42 — Deployed config change: pool size 20 → 50
  14:53 — Error rate back to normal

ROOT CAUSE: Slow query (full table scan) holding connections
FIX: Added missing index + increased pool size

ACTION ITEMS:
  1. Add slow query alerting (> 500ms) [owner: SRE, ETA: 1 week]
  2. Add connection pool utilization alert [owner: SRE, ETA: 3 days]
  3. Review all queries for missing indexes [owner: backend, ETA: 2 weeks]
```

## Common Pitfalls
1. **Manual deployments** — always automate (including rollback)
2. **No rollback plan** — test rollback BEFORE you need it
3. **Alerts without runbooks** — alert fires, no one knows what to do
4. **Blame culture** — blame prevents learning, focus on systems
5. **No error budget** — without budget, reliability vs features is a war


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
