---
task: design-event-driven-architecture
squad: software-engineering
agent: eng-distributed
tags: [distributed, event-sourcing, cqrs, saga, async]
---

# Task: Design Event-Driven Architecture

## Purpose
Design a system using event-driven patterns — event sourcing, CQRS, or sagas — with explicit consistency models, failure handling, and idempotency.

## Prerequisites
- Bounded contexts defined (run design-bounded-contexts first)
- Non-functional requirements known (latency, consistency, throughput)
- Current pain points with synchronous architecture documented

## Steps

### 1. CAP Analysis Per Data Entity
For each data entity crossing service boundaries:
```
Data Entity:      [name]
During Partition:  [Consistency | Availability]
During Normal:     [Latency | Consistency]
Justification:     [business consequence of wrong/stale data]
Technology Fit:    [recommended store/protocol]
```

### 2. Define Domain Events
For each bounded context that produces events:
```
Event Name:       [PastTenseVerb, e.g. OrderPlaced]
Producer:         [bounded context]
Consumers:        [list of bounded contexts]
Schema (v1):      [key fields]
Delivery:         [at-least-once + idempotent consumer]
Ordering:         [per partition key, e.g. order_id]
```

### 3. Design Event Schemas
Apply schema evolution rules:
- ✅ Adding optional fields (backward compatible)
- ❌ Removing fields (breaking)
- ❌ Changing field types (breaking)

```
Event:           OrderPlaced v1
Schema Registry: [Avro | Protobuf | JSON Schema]
Compatibility:   BACKWARD
```

### 4. Saga Design (for distributed transactions)
For each business process spanning multiple services:
```
Saga Name:        [e.g. OrderFulfillment]
Style:            [Choreography | Orchestration]
Steps:
  1. [Service A] → [Action] → Compensation: [rollback action]
  2. [Service B] → [Action] → Compensation: [rollback action]
  3. [Service C] → [Action] → Compensation: [rollback action]
Failure Mode:     [what happens if step N fails]
Idempotency:      [how each step is safe to retry]
```

### 5. Idempotency Design
For every write operation:
```
Endpoint/Consumer:  [name]
Idempotency Key:    [how generated — UUID from client or event_id]
Storage:            [idempotency key store with TTL]
Behavior on Dup:    [return cached result, no re-execution]
```

### 6. Dead Letter Queue Strategy
```
DLQ Name:         [topic_name.dlq]
Retry Policy:     [3 retries with exponential backoff]
Alert:            [notify on-call if DLQ depth > threshold]
Manual Review:    [dashboard for DLQ inspection and replay]
```

## Deliverables
- [ ] CAP analysis per data entity
- [ ] Domain event catalog with schemas
- [ ] Schema evolution strategy
- [ ] Saga definitions with compensating transactions
- [ ] Idempotency design per write endpoint
- [ ] Dead letter queue strategy
- [ ] Monitoring plan (consumer lag, DLQ depth, processing latency)

## Quality Gate
- No event without schema versioning strategy
- No saga without compensating transactions defined
- No consumer without idempotency mechanism
- No "exactly-once" claims — use "effectively-once" (at-least-once + idempotent)


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
