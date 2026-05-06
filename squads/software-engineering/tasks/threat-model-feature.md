---
task: threat-model-feature
squad: software-engineering
agent: eng-security
tags: [security, threat-model, STRIDE]
---

# Task: Threat Model a Feature

## Purpose
Apply STRIDE threat modeling to a new feature before implementation to identify and mitigate security risks proactively.

## Prerequisites
- Feature requirements documented
- Data flow diagram (even rough) available
- Architecture context understood

## Steps

### 1. Draw the Data Flow Diagram
Document the feature's data flow:
```
External Entities (who interacts):
  [user roles, external systems]

Processes (what transforms data):
  [operations, services, functions]

Data Stores (where data rests):
  [databases, caches, files, queues]

Data Flows (arrows with data description):
  [entity] → [process] → [data store]

Trust Boundaries (where privilege changes):
  [Internet → API Gateway | authenticated → admin]
```

### 2. Apply STRIDE per Element
For each element in the diagram, ask all 6 STRIDE questions:

**S — Spoofing:** Can an attacker impersonate a legitimate entity?
**T — Tampering:** Can data be modified without detection?
**R — Repudiation:** Can actors deny their actions?
**I — Information Disclosure:** Can unauthorized parties access data?
**D — Denial of Service:** Can attackers make it unavailable?
**E — Elevation of Privilege:** Can attackers gain more access than allowed?

### 3. Prioritize Threats
For each identified threat:
```
Threat:        [description]
STRIDE:        [category]
Component:     [which element]
Attack vector: [how it would be exploited]
Impact:        [H/M/L] — what is the consequence?
Likelihood:    [H/M/L] — how likely if no mitigations?
Risk score:    Impact × Likelihood
```

Sort by risk score descending.

### 4. Define Mitigations
For the top N threats:
```
Threat: [description]
Mitigation: [specific control]
Implementation: [code change / config / process]
Residual risk: [what remains after mitigation]
Acceptance: [who accepts residual risk]
```

### 5. Write Security Acceptance Criteria
Convert mitigations into testable acceptance criteria for the user story:
- "All API endpoints validate caller authorization before processing"
- "User input is parameterized in all database queries"
- "All errors return generic messages; details only in server logs"

### 6. Add to Definition of Done
Update team's DoD with security requirements for this feature:
- [ ] STRIDE threat model completed
- [ ] Top N threats mitigated
- [ ] Security acceptance criteria in test suite
- [ ] OWASP A01-A03 checked in code review

## Deliverables
- [ ] Data flow diagram with trust boundaries
- [ ] STRIDE analysis table (all elements × all 6 categories)
- [ ] Threat risk register (impact × likelihood × mitigation)
- [ ] Security acceptance criteria for the story
- [ ] OWASP top 3 check for this feature

## Quality Gate
- No threat without a mitigation or documented acceptance decision
- All mitigations are specific and implementable (not "add security")
- At least one security acceptance criterion is an automated test


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
