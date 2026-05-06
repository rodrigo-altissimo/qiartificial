---
task: design-observability-stack
squad: software-engineering
agent: eng-devops
tags: [observability, monitoring, alerting, slo, sli]
---

# Task: Design Observability Stack

## Purpose
Design comprehensive observability for a system: metrics, logs, traces, dashboards, alerts, SLOs, and on-call runbooks.

## Prerequisites
- System architecture documented (services, dependencies)
- SLA requirements from product/business
- Team on-call capacity known

## Steps

### 1. Define SLOs per Service
```
Service:      [name]
SLI:          [measurement — e.g. successful requests / total requests]
SLO:          [target — e.g. ≥ 99.9% over 30 days]
Error budget: [100% - SLO = remaining allowed downtime]
Owner:        [team]
```

### 2. Instrument Four Golden Signals
For each service:
```
LATENCY:     p50, p90, p95, p99 per endpoint
TRAFFIC:     RPS per endpoint, by status code
ERRORS:      Error rate (5xx / total × 100), by endpoint
SATURATION:  CPU, memory, disk, connections, queue depth
```

### 3. Design Structured Logging
```
Format:      JSON
Fields:      timestamp, level, service, correlation_id, message, context
Levels:      ERROR (actionable), WARN (investigate), INFO (business events)
Redaction:   PII, passwords, tokens — NEVER in logs
Retention:   [hot: 7 days | warm: 30 days | cold: 90 days]
```

### 4. Configure Distributed Tracing
```
Tool:         [OpenTelemetry | Jaeger | Datadog APM]
Propagation:  trace_id in headers across all services
Sampling:     100% for errors, 10% for success (adjustable)
Spans:        HTTP requests, DB queries, external API calls, queue operations
```

### 5. Design Alert Rules
For each alert:
```
Alert:        [descriptive name]
Condition:    [metric > threshold for duration]
Severity:     [P0 | P1 | P2]
Routing:      [on-call channel | team channel | email]
Runbook:      [link to step-by-step diagnosis and resolution]
```

**Rules:** Every alert must be actionable. If you get an alert and do nothing → delete it.

### 6. Design Dashboard Layout
```
Dashboard:    [name — e.g. "Order Service Overview"]
Row 1:        Traffic (RPS) and Error Rate
Row 2:        Latency (p50, p99) per endpoint
Row 3:        Saturation (CPU, Memory, Connections)
Row 4:        Business metrics (orders/min, revenue/hour)
Variables:    environment, time range, endpoint filter
```

### 7. Create Runbook Template
```
# Runbook: [Alert Name]
## Symptoms
[What the on-call engineer will see]
## Diagnosis Steps
1. [Check X metric/dashboard]
2. [Look at Y logs with correlation_id]
3. [Trace Z request in distributed tracing]
## Resolution
- [Option A: rollback last deploy]
- [Option B: scale up service]
- [Option C: toggle feature flag off]
## Escalation
[If not resolved in 15 min → escalate to team lead]
```

## Deliverables
- [ ] SLO definitions per service with error budgets
- [ ] Four golden signals instrumented
- [ ] Structured logging standard
- [ ] Distributed tracing configured
- [ ] Alert rules with runbooks
- [ ] Dashboard layouts
- [ ] On-call rotation and escalation policy

## Quality Gate
- No service in production without at least 1 SLO
- No alert without a runbook
- No runbook without resolution steps
- SLO targets are based on measured baselines, not guesses


## Practical Examples

### Example: Order API
```yaml
POST /api/v1/orders:
  request:
    headers:
      Authorization: Bearer <token>
      Idempotency-Key: order_req_abc123
      Content-Type: application/json
    body:
      customer_id: "cust_456"
      items:
        - product_id: "prod_789"
          quantity: 2
          unit_price: 49.90
      shipping_address:
        street: "Rua das Flores, 100"
        city: "Florianópolis"
        state: "SC"
        zip: "88000-000"
  response:
    status: 201
    headers:
      Location: /api/v1/orders/order_123
    body:
      id: "order_123"
      status: "pending"
      total: 99.80
      created_at: "2024-01-15T10:30:00Z"
```

### Error Response Example
```json
{
  "error": {
    "code": "INSUFFICIENT_STOCK",
    "message": "Product prod_789 has only 1 unit available",
    "details": [{
      "field": "items[0].quantity",
      "issue": "requested 2 but only 1 available"
    }],
    "request_id": "req_xyz789",
    "documentation_url": "https://docs.example.com/errors"
  }
}
```

## Common Pitfalls
1. **Not validating input server-side** — client validation is for UX only
2. **Exposing internal IDs** — use UUIDs or opaque identifiers
3. **Breaking changes without versioning** — always version breaking changes
4. **Missing pagination** — unbounded lists will eventually crash
5. **Inconsistent error formats** — one schema for ALL errors

## Automation Checklist
- [ ] OpenAPI spec generated and published
- [ ] Contract tests running in CI
- [ ] Rate limit headers returned on every response
- [ ] Request/response logging (without PII)
- [ ] API metrics dashboard (RPS, latency, errors)


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
