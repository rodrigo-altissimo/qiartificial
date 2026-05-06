---
task: setup-cicd-pipeline
squad: software-engineering
agent: eng-devops
tags: [devops, ci-cd, automation]
---

# Task: Set Up CI/CD Pipeline

## Purpose
Build a production-grade CI/CD pipeline from scratch or upgrade an existing one to elite performer standards (DORA).

## Prerequisites
- Version control repository (Git)
- Application can build locally
- At least one test exists

## Steps

### 1. Baseline DORA Measurement
Before starting, measure current state:
```
Metric                   | Current | Target
Deployment Frequency     | [?]     | ≥ 1/day
Lead Time for Changes    | [?]     | < 1 hour
Change Failure Rate      | [?]     | < 15%
Mean Time to Recovery    | [?]     | < 1 hour
```

### 2. Define Pipeline Stages
```
Stage 1: Commit Validation (< 5 min)
  - Lint / static analysis
  - Unit tests
  - Security SAST scan (Semgrep, Snyk)

Stage 2: Build (< 5 min)
  - Compile / package
  - Build container image
  - Push to registry

Stage 3: Integration Tests (< 10 min)
  - Integration tests (containerized dependencies)
  - Contract tests (Pact)
  - API smoke tests

Stage 4: Deploy to Staging (< 5 min)
  - Automated deployment to staging environment
  - Environment parity check

Stage 5: Acceptance Tests (< 15 min)
  - Automated acceptance tests
  - Performance baseline check
  - Security DAST scan (OWASP ZAP)

Stage 6: Deploy to Production (< 5 min)
  - Canary or blue-green deployment
  - Health check monitoring
  - Automated rollback trigger
```

**Total target: ≤ 45 minutes commit → production.**

### 3. Implement Gates and Quality Rules
```
Commit Gate (blocks Stage 1):
  - Linting passes
  - No new Semgrep CRITICAL findings
  - Unit test coverage ≥ threshold (set initial, raise incrementally)

Build Gate:
  - Image scan: no critical CVEs (Trivy, Grype)

Staging Gate:
  - All integration tests green
  - No contract test failures
  - Performance: p99 latency within threshold

Production Gate:
  - Canary health check passes (0% error rate increase in first 5 min)
  - SLO burn rate < 1x the normal rate
```

### 4. Configure Rollback
- Automated: rollback triggered if health check fails post-deploy
- Manual: ability to rollback in 1 command (git revert + pipeline trigger)
- Test rollback procedure: deploy, break it, rollback, verify

### 5. Validate DORA Metrics
After pipeline is operational for 2 weeks:
```
[ ] Measure deployment frequency (count of production deployments per week)
[ ] Measure lead time (commit timestamp → deploy timestamp in CI logs)
[ ] Measure change failure rate (% of deployments that need hotfix)
[ ] Measure MTTR (incident start → resolved timestamps)
```

## Deliverables
- [ ] All 6 pipeline stages implemented and running
- [ ] Quality gates defined and enforced
- [ ] Automated rollback tested
- [ ] Baseline DORA metrics documented
- [ ] Pipeline README with stage descriptions and ownership

## Quality Gate
- Pipeline completes in ≤ 45 minutes end-to-end
- Rollback takes ≤ 5 minutes to execute
- Zero manual steps required for standard deployment


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
