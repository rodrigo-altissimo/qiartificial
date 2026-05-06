---
task: design-system-architecture
squad: software-engineering
agent: eng-architect
tags: [architecture, system-design, fitness-functions]
---

# Task: Design System Architecture

## Purpose
Turn a system requirement into a documented architecture with fitness functions, ADRs, and measurable architectural characteristics.

## Prerequisites
- System purpose and business context defined
- Team size and operational maturity known
- Top 3-5 non-functional requirements identified

## Steps

### 1. Elicit Architectural Characteristics
Run through these questions with stakeholders:
- What are the top 3 non-functional requirements? (scalability, reliability, security, cost, maintainability...)
- What happens if the system is down for 1 hour? For 1 day?
- What is the expected growth in users/data over 12 months?
- How frequently will the system need to change?

**Output:** Ranked list of architectural characteristics with business justification.

### 2. Select Architectural Style
Apply the Architectural Style Selection framework:
```
Team size:            [___]
Domain clarity:       [High | Medium | Low]
Operational maturity: [High | Medium | Low]
Scale requirement:    [Single | Horizontal | Global]
Change frequency:     [Rare | Regular | Continuous]
```

**Output:** Chosen architectural style with rationale.

### 3. Define Fitness Functions
For each top architectural characteristic:
```
Characteristic:   [name]
Function:         [executable test or measurement]
Threshold:        [pass/fail boundary]
Execution:        [automated in CI | continuous | manual]
Owner:            [team]
```

**Minimum:** 3 fitness functions. At least 1 automated in CI.

### 4. Map Architectural Quantum Boundaries
Identify independently deployable components:
- What are the service boundaries?
- Which components share databases? (Violation: deploy separately but share data store)
- Which components have temporal coupling (must start in specific order)?

**Output:** Component diagram with coupling arrows labeled.

### 5. Write First ADR
For the most consequential architectural decision:
```
ADR-001: [Title]
Status: Proposed
Context: [situation]
Decision: [what we decided]
Consequences: [positive, negative, risks]
Fitness Function: [how we'll know it's working]
```

### 6. Identify Risks
Top 3 architectural risks with probability × impact:
```
Risk: [description]
Probability: [H/M/L]
Impact: [H/M/L]
Mitigation: [what we'll do]
Early warning: [what signal tells us this risk is materializing]
```

## Deliverables
- [ ] Architectural characteristics ranked list
- [ ] Architectural style selection with rationale
- [ ] ≥ 3 fitness functions (at least 1 automated)
- [ ] Component diagram with coupling analysis
- [ ] ADR-001 documenting the key decision
- [ ] Risk register with top 3 risks

## Quality Gate
- No fitness function without a measurable threshold
- No coupling without an explicit justification
- No architectural decision without an ADR


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
