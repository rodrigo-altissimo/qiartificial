---
task: design-aggregate-root
squad: software-engineering
agent: eng-ddd
tags: [ddd, aggregate, entity, value-object, consistency-boundary]
---

# Task: Design Aggregate Root

## Purpose
Design an aggregate with correct consistency boundaries, entity/VO classification, invariant enforcement, and cross-aggregate communication via domain events.

## Prerequisites
- Bounded context defined
- Business rules (invariants) documented
- Ubiquitous language established

## Steps

### 1. Identify Invariants
List all business rules that must ALWAYS be true:
```
Invariant 1:  [e.g. "Order total = sum of line item prices"]
Invariant 2:  [e.g. "Order cannot have more than 50 items"]
Invariant 3:  [e.g. "Order status transitions: Draft → Placed → Shipped → Delivered"]
```

### 2. Define Aggregate Boundary
Everything that must be consistent in a single transaction belongs in the aggregate:
```
Aggregate Root:  [e.g. Order]
Internal Entities: [e.g. OrderLineItem — cannot exist without Order]
Value Objects:   [e.g. Money(amount, currency), ShippingAddress(street, city, zip)]
Excluded:        [e.g. Customer → separate aggregate, referenced by customerId]
```

**Size Rule:** Make aggregates as SMALL as possible. Large aggregates = contention.

### 3. Design the Root Entity
```
class Order:
  id:              OrderId (UUID)
  customerId:      CustomerId (reference, NOT embedded object)
  items:           List[OrderLineItem] (internal)
  status:          OrderStatus (enum)
  totalPrice:      Money (VO)
  shippingAddress: ShippingAddress (VO)
  
  addItem(product, quantity):
    → enforce invariant: max 50 items
    → recalculate totalPrice
  
  place():
    → enforce invariant: items not empty
    → enforce invariant: shippingAddress set
    → transition status: Draft → Placed
    → emit: OrderPlaced event
```

### 4. Define Domain Events
For each state change that other contexts care about:
```
Event:   OrderPlaced
Data:    { orderId, customerId, items[], totalPrice, placedAt }
Emitted: When order.place() succeeds
Consumers: [Inventory (reserve stock), Payment (charge), Notification (confirm)]
```

### 5. Define Repository Interface
```
interface OrderRepository:
  findById(orderId: OrderId) → Order | None
  save(order: Order) → void
  findByCustomer(customerId: CustomerId) → List[Order]
```
**Rule:** Repository only loads/saves the aggregate root. Never individual entities.

## Deliverables
- [ ] Invariant list
- [ ] Aggregate boundary (what's in, what's out)
- [ ] Root entity with methods enforcing invariants
- [ ] Value objects identified and designed (immutable)
- [ ] Domain events defined
- [ ] Repository interface

## Quality Gate
- Aggregate is as small as possible (only what MUST be consistent)
- Other aggregates referenced by ID only (no embedded objects)
- All invariants enforced inside the aggregate (not in services)
- Value objects are immutable


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
