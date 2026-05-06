---
task: implement-tdd-feature
squad: software-engineering
agent: eng-agile
tags: [tdd, testing, development]
---

# Task: Implement Feature with TDD

## Purpose
Build a new feature using Test-Driven Development — tests before code, red-green-refactor cycle.

## Steps

### 1. Define the Feature
Write the user story:
```
As a [user type]
I want to [action]
So that [value/outcome]

Acceptance Criteria:
- [Given / When / Then — testable scenario 1]
- [Given / When / Then — testable scenario 2]
```

### 2. Build the Test List (Before Writing Any Code)
List all tests that must pass for this feature. Do NOT write the tests yet — just list them:
```
[ ] Normal case: [happy path description]
[ ] Edge case: empty input
[ ] Edge case: maximum value / boundary
[ ] Error: invalid format / type
[ ] Error: unauthorized access
[ ] Error: external service unavailable
```

### 3. Execute Red-Green-Refactor Cycles
For each test in the list, repeat:

**RED phase:**
- Write the smallest possible failing test
- Run it — confirm it fails **for the right reason** (not compilation error)
- If it passes immediately → test doesn't describe new behavior

**GREEN phase:**
- Write the minimum code to make the test pass
- Do NOT write code that isn't required by a failing test (YAGNI)
- "Fake it" is acceptable here (hardcode if needed to get green)

**REFACTOR phase:**
- With tests green, improve the design
- Remove duplication
- Improve names
- Extract well-named functions
- Run tests — must stay green

**COMMIT:** After each green-refactor cycle, commit.

### 4. YAGNI Check (Before Calling Done)
Review all code written:
```
[ ] Every line of production code has a corresponding failing test that required it
[ ] No "just in case" abstractions or configurations
[ ] No over-engineering — simplest design that passes all tests
```

### 5. Simple Design Review (Beck's 4 Rules)
```
[ ] Passes all tests (correctness)
[ ] Reveals intent (naming is clear)
[ ] No duplication (DRY)
[ ] Fewest elements (no extra classes/methods)
```

## Deliverables
- [ ] Test list completed before coding starts
- [ ] All tests in test list implemented and passing
- [ ] YAGNI check passed
- [ ] Simple design review passed
- [ ] Code committed in small, atomic increments

## Quality Gate
- No production code without a preceding failing test
- Build time remains < 10 minutes after new tests added
- No flaky tests introduced


## Practical Examples

### Example: TDD Cycle
```python
# RED: Write failing test
def test_order_rejects_negative_total():
    with pytest.raises(ValueError, match="Total must be positive"):
        Order(customer_id="cust_1", total=-10.00)

# RUN: test FAILS (Order doesn't validate yet) ✅ correct failure

# GREEN: Write minimum code to pass
class Order:
    def __init__(self, customer_id, total):
        if total <= 0:
            raise ValueError("Total must be positive")
        self.customer_id = customer_id
        self.total = total

# RUN: test PASSES ✅

# REFACTOR: Improve without changing behavior
class Order:
    MIN_TOTAL = 0.01
    
    def __init__(self, customer_id: str, total: Decimal):
        self._validate_total(total)
        self.customer_id = customer_id
        self.total = total
    
    def _validate_total(self, total: Decimal) -> None:
        if total < self.MIN_TOTAL:
            raise ValueError(f"Total must be at least {self.MIN_TOTAL}")

# RUN: test still PASSES ✅
```

### Example: Characterization Test (Legacy)
```python
# LEGACY CODE (no docs, unclear behavior)
def calculate_discount(customer, order):
    # 200 lines of spaghetti...
    return result

# CHARACTERIZATION TEST: assert what the code DOES
def test_characterize_discount_for_vip_customer():
    customer = Customer(type="VIP", since="2020-01-01")
    order = Order(total=1000)
    result = calculate_discount(customer, order)
    assert result == 150  # we don't know WHY 150, but that's what it does
```

## Common Pitfalls
1. **Testing implementation** — test behavior (outputs), not how it works
2. **Over-mocking** — only mock external dependencies (DB, API)
3. **Skipping refactor phase** — technical debt accumulates
4. **Writing test after code** — that's not TDD, that's verification
5. **Brittle tests** — avoid testing internal method calls


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
