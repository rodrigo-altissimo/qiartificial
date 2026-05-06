---
task: rescue-legacy-code
squad: software-engineering
agent: eng-tdd
tags: [legacy, testing, characterization-tests, seams, sprout-wrap]
---

# Task: Rescue Legacy Code

## Purpose
Get untested legacy code under test using the safest possible techniques: characterization tests, seams, sprout/wrap methods — to enable safe modifications.

## Prerequisites
- Identified area of code that needs modification
- Understanding of what the code currently does (even if undocumented)
- Version control in place (rollback point)

## Steps

### 1. Identify the Change Point
```
File/Class:    [where the change needs to happen]
Method:        [specific method to modify]
Reason:        [why we need to change this]
Risk:          [what could break if we change it wrong]
```

### 2. Map Dependencies
List ALL external dependencies in the target code:
```
□ Database connections
□ External API calls
□ File system access
□ System clock / time
□ Random number generators
□ Global/static state
□ Configuration files
□ Message queues
□ Email/notification services
```

### 3. Write Characterization Tests
For each public method in the change area:
```python
def test_characterization_[method_name]_[scenario]():
    # Arrange: set up inputs matching production usage
    input_data = [real-world input]
    
    # Act: call the method
    result = method_under_test(input_data)
    
    # Assert: capture CURRENT behavior (even if "wrong")
    assert result == [actual observed output]
```

**Rule:** Assert what the code DOES, not what it SHOULD do.

### 4. Break Dependencies
For each hard dependency, apply the least invasive technique:
```
Dependency:   [what it is]
Seam Type:    [Object | Link | Preprocessor]
Technique:    [Extract & Override | Parameterize Constructor | Subclass & Override]
Test Double:  [Fake | Stub | Mock]
```

### 5. Apply Sprout or Wrap for New Behavior
Choose the safest technique:

**Sprout Method:** New behavior as a separate, fully tested method
```
New method:   [name] — fully tested independently
Integration:  Add ONE line calling new method in legacy code
Risk:         Only 1 line of legacy code touched
```

**Wrap Method:** New behavior before/after existing behavior
```
Original:     [rename to _original_xxx]
Wrapper:      [new method with original name — calls _original + new logic]
Risk:         Original behavior untouched, new behavior separately tested
```

### 6. Verify and Commit
- [ ] All characterization tests passing
- [ ] New behavior tests passing
- [ ] Original behavior preserved (characterization tests protect it)
- [ ] Commit with clear message: "feat: [new capability] via sprout/wrap on [legacy area]"

## Deliverables
- [ ] Dependency map of the legacy code area
- [ ] Characterization tests covering change area
- [ ] Dependency-breaking changes (minimal, safe)
- [ ] New behavior via sprout/wrap (fully tested)
- [ ] All tests green, legacy behavior preserved

## Quality Gate
- No legacy code modification without characterization tests
- No new behavior without its own tests
- Maximum 3 lines of legacy code touched for integration


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
