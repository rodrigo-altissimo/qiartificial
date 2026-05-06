---
task: design-data-pipeline
squad: software-engineering
agent: eng-data
tags: [data-engineering, pipeline, etl, elt, quality]
---

# Task: Design Data Pipeline

## Purpose
Design a production-grade data pipeline with quality checks, idempotent execution, monitoring, and schema evolution strategy.

## Prerequisites
- Source system(s) identified
- Destination system identified (warehouse, lake, API)
- Freshness requirement defined (real-time, hourly, daily)

## Steps

### 1. Map Data Lifecycle
```
Source:          [app DB, API, event stream, files]
Ingestion:      [CDC | batch export | API polling | streaming]
Storage:        [raw zone → curated zone → serving zone]
Transformation: [dbt | Spark | SQL | custom]
Serving:        [dashboard | API | ML features | reports]
```

### 2. Choose Batch vs Streaming
```
Freshness SLO:  [< 1 min → streaming | < 1 hour → micro-batch | < 24h → daily batch]
Volume:         [GB/day estimate]
Complexity:     [simple transforms → batch | joins across streams → streaming framework]
Cost:           [streaming is 3-5x more expensive than batch]
```

### 3. Design Ingestion Layer
```
Source:          [name]
Method:         [CDC | full refresh | incremental by updated_at]
Idempotency:    [MERGE/upsert, never INSERT-only]
Schema Source:   [schema registry | source DDL | manual definition]
Validation:     [schema check on ingestion, reject malformed]
```

### 4. Design Transformation Layer
Use the staging → intermediate → marts pattern:
```
staging/stg_[source]_[entity]:  Clean, type-cast, rename (1:1 with source)
intermediate/int_[concept]:     Business logic, joins, deduplication
marts/mart_[domain]_[entity]:   Consumer-ready, denormalized, documented
```

### 5. Implement Data Quality Tests
Per model/table:
```
□ not_null:         [critical columns]
□ unique:           [primary keys]
□ accepted_values:  [enum columns]
□ relationships:    [foreign key integrity]
□ freshness:        [max acceptable staleness]
□ row_count:        [expected range — alert if outside]
□ custom:           [business rule validations]
```

### 6. Design Monitoring
```
Pipeline Runtime:  [alert if > 2x normal duration]
Data Freshness:    [alert if serving data is staler than SLO]
Row Counts:        [alert if delta > 20% from previous run]
Quality Scores:    [dashboard showing test pass rate per model]
DLQ Depth:         [alert if failed records accumulate]
```

## Deliverables
- [ ] Data lifecycle diagram (source → serving)
- [ ] Ingestion design per source (method, idempotency, validation)
- [ ] Transformation models (staging → intermediate → marts)
- [ ] Quality tests per model (≥ 5 tests per critical model)
- [ ] Monitoring and alerting configuration
- [ ] Schema evolution strategy (backward compatible changes)

## Quality Gate
- No pipeline without idempotent execution
- No model without quality tests
- No production data without monitoring
- Schema changes follow backward compatibility protocol


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
