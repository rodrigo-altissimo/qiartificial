---
task: implement-data-contract
squad: software-engineering
agent: eng-data
tags: [data-contract, schema, quality]
---

# Task: Implement a Data Contract

## Purpose
Define a formal agreement between data producer and consumer covering schema, semantics, quality SLOs, and change policy.

## Steps

### 1. Identify Producer and Consumers
```
Producer team: [team name]
Dataset: [dataset name]
Consumers: [list of teams/services consuming this data]
```

### 2. Define Schema Contract
```yaml
schema:
  table: orders
  columns:
    - name: order_id
      type: BIGINT
      nullable: false
      description: "Unique order identifier"
    - name: customer_id
      type: BIGINT
      nullable: false
      description: "FK to customers table"
    - name: total_amount
      type: DECIMAL(10,2)
      nullable: false
      description: "Order total in BRL"
    - name: status
      type: VARCHAR(20)
      nullable: false
      enum: [pending, confirmed, shipped, delivered, cancelled]
```

### 3. Define Quality SLOs
```yaml
quality_slos:
  freshness: "Data updated within 15 minutes"
  completeness: "NULL rate < 1% on required columns"
  uniqueness: "Zero duplicate order_ids"
  accuracy: "Reconciliation with source < 0.1% discrepancy"
```

### 4. Define Change Policy
```
- Breaking changes: 30-day notice + migration guide
- Non-breaking changes: add column with default → notify consumers
- Emergency changes: same-day with rollback plan
- All changes: documented in changelog
```

### 5. Register in Data Catalog
```
- Schema published to schema registry
- Documentation in data catalog (DataHub / Amundsen)
- Consumers registered for change notifications
```

## Deliverables
- [ ] Schema contract YAML file
- [ ] Quality SLO definitions
- [ ] Change management policy
- [ ] Consumer registry
- [ ] Data catalog entry

## Quality Gate
- All consumers reviewed and approved the contract
- Quality tests automated in pipeline
- Change notification system tested


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
