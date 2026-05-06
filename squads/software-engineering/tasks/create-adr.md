---
task: create-adr
squad: software-engineering
agent: eng-architect
tags: [architecture, decision, ADR]
---

# Task: Create an Architectural Decision Record (ADR)

## Purpose
Document a significant architectural decision so it can be understood, revisited, and improved in the future.

## When to Write an ADR
Write an ADR for any decision that:
- Is difficult or expensive to reverse
- Affects multiple teams or services
- Involves a significant trade-off
- Will surprise future engineers who encounter the code

## Template

```markdown
# ADR-[NUMBER]: [TITLE]

**Status:** [Proposed | Accepted | Deprecated | Superseded by ADR-X]  
**Date:** YYYY-MM-DD  
**Deciders:** [names and roles]  
**Tags:** [architecture | security | data | deployment]

## Context

[Describe the situation, forces, and constraints that led to this decision.
Include: business context, technical constraints, team constraints, timeline.
Be honest about what was uncertain at the time.]

## Decision

[State clearly and specifically what was decided.
Not "we chose microservices" but "we will extract the payment processing
from the monolith into a separate service owned by the payments team."]

## Alternatives Considered

### Option A: [Name] — REJECTED
[Description + why rejected]

### Option B: [Name] — REJECTED
[Description + why rejected]

### Chosen: Option C: [Name]
[Why this was chosen over the alternatives]

## Consequences

**Positive:**
- [What becomes easier or better]

**Negative:**
- [What becomes harder or worse]

**Risks:**
- [What could go wrong, and what we're doing about it]

## Fitness Function

[How will we know this decision is working?]
[What automated or manual check validates the outcome we expected?]

Example:
  Automated: "All services pass the independent deployment test in CI"
  Manual: "Quarterly coupling report shows no increase in cross-service dependencies"

## Review Trigger

[Under what conditions should this ADR be revisited?]
Example: "Review if team grows past 50 engineers or if load exceeds 100K RPS"
```

## Steps

### 1. Choose the Decision to Document
Identify the decision:
```
What is the decision? [one sentence]
Is it hard to reverse? [YES → write ADR]
Does it affect multiple teams? [YES → write ADR]
Will future engineers be surprised? [YES → write ADR]
```

### 2. Fill the Template
Complete all sections. Do not skip "Alternatives Considered" — this is the most valuable section.

### 3. Write Fitness Function
Mandatory: define HOW you'll know this decision is working. Executable if possible.

### 4. Get Review
ADR should be reviewed by:
- Affected team leads
- Architecture review group (if exists)
- Security team (if security-involved)

### 5. Commit to Repository
- Store in `docs/adr/` or `./adr/` directory
- Number sequentially: `ADR-001-title.md`
- Reference ADR number in related code comments

## Deliverables
- [ ] ADR written with all sections complete
- [ ] Alternatives Considered with at least 2 alternatives
- [ ] Fitness function defined (executable preferred)
- [ ] ADR reviewed and status set to Accepted
- [ ] ADR committed to repository
- [ ] Related code includes ADR number in comments

## Quality Gate
- No decision with "Alternatives Considered" section empty
- Fitness function must be specific and measurable
- Status must not remain "Proposed" for more than 2 weeks


## Practical Examples

### Example: OWASP Quick Scan
```
1. SQL Injection Test:
   Input: ' OR 1=1 --
   If response changes → VULNERABLE
   Fix: Parameterized queries (NEVER string concatenation)

2. XSS Test:
   Input: <script>alert('xss')</script>
   If script executes → VULNERABLE
   Fix: Output encoding + Content-Security-Policy header

3. IDOR Test:
   Logged as User A, try GET /api/v1/users/B/profile
   If returns User B data → VULNERABLE
   Fix: Check ownership in every query (WHERE user_id = $current_user)

4. Secrets Scan:
   grep -rn "AKIA\|password\s*=\|api_key\s*=" ./src
   If matches found → VULNERABLE
   Fix: Move to secrets manager, rotate compromised keys
```

### STRIDE Threat Model Example
```
Threat: Spoofing — attacker pretends to be another user
  Control: JWT with short expiration + signature verification
  
Threat: Tampering — attacker modifies request data
  Control: HMAC signature on critical payloads

Threat: Repudiation — attacker denies performing action
  Control: Audit log with user_id, action, timestamp, IP

Threat: Information Disclosure — attacker reads sensitive data
  Control: Encryption at rest + transit + access control

Threat: Denial of Service — attacker overwhelms the system
  Control: Rate limiting + WAF + auto-scaling

Threat: Elevation of Privilege — attacker gains admin access
  Control: RBAC + MFA for admin + principle of least privilege
```

## Common Pitfalls
1. **Client-side validation only** — server must validate everything
2. **Trusting internal network** — zero trust, always verify
3. **Secrets in env vars** — visible in process list, use secrets manager
4. **Error messages with internals** — never expose stack traces to users
5. **Default credentials in production** — change ALL defaults


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
