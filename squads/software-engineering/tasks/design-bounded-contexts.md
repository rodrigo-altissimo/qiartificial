---
task: design-bounded-contexts
squad: software-engineering
agent: eng-ddd
tags: [ddd, bounded-context, domain-modeling, strategic-design]
---

# Task: Design Bounded Contexts

## Purpose
Decompose a complex business domain into well-defined bounded contexts with explicit relationships, ubiquitous language, and integration patterns.

## Prerequisites
- Business domain and key processes understood at a high level
- Access to domain experts or subject-matter experts
- Existing system documentation (if brownfield)

## Steps

### 1. Identify Business Capabilities
List all major business capabilities the system supports:
```
Capability:      [name]
Description:     [what it does]
Key Entities:    [main concepts]
Change Drivers:  [what causes this to change?]
Criticality:     [Core | Supporting | Generic]
```

**Output:** Business capability map with criticality classification.

### 2. Conduct Event Storming (Big Picture)
Run a 2-hour event storming session:
- **Orange stickies:** Domain events (past tense — "OrderPlaced")
- **Blue stickies:** Commands that trigger events
- **Yellow stickies:** Aggregates that process commands
- **Pink stickies:** Hotspots and questions

**Output:** Event timeline on a wall/whiteboard.

### 3. Identify Bounded Context Candidates
Look for natural clusters:
- Where does the same word mean different things? → Boundary
- Where do events cross between clusters? → Integration point
- Which aggregates change together? → Same context

For each bounded context:
```
Context Name:       [name]
Responsibility:     [what it owns]
Key Aggregates:     [list]
Ubiquitous Language: [key terms and definitions]
Team:               [owning team]
```

### 4. Classify Subdomains
For each bounded context:
```
Context:     [name]
Subdomain:   [Core | Supporting | Generic]
Strategy:    [Build custom | Customize off-shelf | Buy SaaS]
Justification: [why this classification?]
```

**Rule:** Core subdomains are built in-house with best developers. Generic subdomains use off-the-shelf solutions.

### 5. Draw Context Map
Define relationships between bounded contexts:
```
Upstream:        [context A]
Downstream:      [context B]
Relationship:    [Partnership | Customer-Supplier | Conformist | ACL | Shared Kernel | Open Host]
Integration:     [Sync API | Domain Events | Shared DB (anti-pattern!)]
Data Flow:       [what data crosses the boundary]
```

### 6. Define Anti-Corruption Layers
For each external integration or legacy system:
```
External System:  [name]
Their Model:      [how they represent data]
Our Model:        [how we represent data]
ACL Strategy:     [Translation adapter between models]
```

## Deliverables
- [ ] Business capability map with criticality
- [ ] Event storming output (events, commands, aggregates)
- [ ] Bounded context definitions with ubiquitous language
- [ ] Subdomain classification (core/supporting/generic)
- [ ] Context map with relationship types
- [ ] ACL design for external integrations

## Quality Gate
- No bounded context without explicit ubiquitous language glossary
- No cross-context communication via shared database
- Core subdomains must NOT use off-the-shelf solutions


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
