---
task: implement-clean-architecture
squad: software-engineering
agent: eng-clean-code
tags: [clean-architecture, hexagonal, ports-adapters]
---

# Task: Implement Clean Architecture

## Purpose
Restructure a module using Clean Architecture (ports & adapters) with dependency inversion.

## Steps

### 1. Assess Current State
```
Current situation: [describe current state]
Gap identified: [what needs to change]
Impact: [business/technical impact]
```

### 2. Design Solution
```
Approach: [chosen approach with rationale]
Alternatives considered: [what else was evaluated]
Trade-offs: [what are we accepting]
Dependencies: [what needs to be in place first]
```

### 3. Implement
```
Implementation steps:
  1. [step 1 — specific action]
  2. [step 2 — specific action]
  3. [step 3 — specific action]
  4. [step 4 — specific action]
Risk mitigation: [how to reduce risk]
```

### 4. Verify
```
Verification criteria:
  - [criterion 1 — measurable]
  - [criterion 2 — measurable]
  - [criterion 3 — measurable]
Rollback plan: [how to revert if issues arise]
```

## Deliverables
- [ ] Assessment document
- [ ] Design document / ADR
- [ ] Implementation complete
- [ ] Verification passed
- [ ] Documentation updated

## Quality Gate
- Solution reviewed by eng-clean-code
- All verification criteria met
- No regressions introduced


## Practical Examples

### Example: Naming Improvements
```python
# BAD
def process(d):
    for i in d:
        if i.s == 'A':
            i.v = i.v * 1.1
    return d

# GOOD
def apply_premium_markup(orders):
    for order in orders:
        if order.status == 'ACTIVE':
            order.value = order.value * 1.1
    return orders
```

### Example: Extract Method
```python
# BEFORE (Long Method — 30 lines, mixed abstraction levels)
def process_order(order):
    # validate
    if not order.customer_id: raise ValueError("Missing customer")
    if not order.items: raise ValueError("No items")
    if order.total <= 0: raise ValueError("Invalid total")
    # calculate
    subtotal = sum(item.price * item.qty for item in order.items)
    tax = subtotal * 0.12
    total = subtotal + tax
    # persist
    db.save(Order(total=total, tax=tax))
    # notify
    email.send(order.customer_id, f"Order {order.id} confirmed")
    
# AFTER (each method does ONE thing)
def process_order(order):
    validate_order(order)
    total, tax = calculate_totals(order.items)
    persist_order(order, total, tax)
    notify_customer(order)
```

## Common Pitfalls
1. **Premature abstraction** — YAGNI applies to patterns too
2. **Over-commenting** — good names eliminate the need for comments
3. **Deep nesting** — extract methods to flatten conditionals
4. **Boolean parameters** — split into two methods instead
5. **God classes** — break into focused classes by responsibility


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
