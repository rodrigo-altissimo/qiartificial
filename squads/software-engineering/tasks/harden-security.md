---
task: harden-security
squad: software-engineering
agent: eng-security
tags: [security, owasp, hardening, shift-left, appsec]
---

# Task: Harden Application Security

## Purpose
Systematically harden an application's security posture using OWASP Top 10 as the framework, with concrete fixes and automated verification.

## Prerequisites
- Application code accessible
- Deployment environment known (cloud provider, runtime)
- Authentication mechanism identified

## Steps

### 1. OWASP Top 10 Scan
Run through each category and check:
```
□ A01 Broken Access Control:    Authorization checked on every endpoint?
□ A02 Cryptographic Failures:   Sensitive data encrypted at rest and in transit?
□ A03 Injection:                All user input parameterized? (no string concat in SQL)
□ A04 Insecure Design:          Threat model exists? Business logic abuse cases?
□ A05 Security Misconfiguration: Default credentials removed? Headers configured?
□ A06 Vulnerable Components:    Dependency scan clean? (Trivy, npm audit, pip-audit)
□ A07 Authentication Failures:  MFA available? Rate limiting on login? Lockout policy?
□ A08 Data Integrity Failures:  CI/CD pipeline secure? Signed artifacts?
□ A09 Logging Failures:         Security events logged? Anomaly detection?
□ A10 SSRF:                     Outbound requests validated? No user-controlled URLs?
```

### 2. Security Headers Configuration
Verify all production HTTP headers:
```
Content-Security-Policy:       default-src 'self'; script-src 'self'
X-Content-Type-Options:        nosniff
X-Frame-Options:               DENY
Strict-Transport-Security:     max-age=31536000; includeSubDomains
Referrer-Policy:               strict-origin-when-cross-origin
Permissions-Policy:            camera=(), microphone=(), geolocation=()
```

### 3. Secrets Management
```
□ No secrets in source code (git history checked)
□ No secrets in environment variables visible in logs
□ Secrets stored in vault (AWS SSM, HashiCorp Vault, etc.)
□ Secret rotation policy defined (90-day max for API keys)
□ .gitignore includes: .env, *.pem, *.key, credentials.*
□ Pre-commit hook: gitleaks or trufflehog
```

### 4. Dependency Vulnerability Scan
```
Tool:        [Trivy | Snyk | npm audit | pip-audit | safety]
Baseline:    Run scan, document all findings
Policy:      CRITICAL → fix within 48 hours
             HIGH → fix within 7 days
             MEDIUM → fix within 30 days
Automation:  Scan runs in CI pipeline, block merge on CRITICAL
```

### 5. Authentication & Authorization Hardening
```
□ Password policy enforced (min 12 chars, complexity)
□ Account lockout after 5 failed attempts
□ Rate limiting on auth endpoints (10 req/min)
□ JWT tokens have short TTL (15 min access, 7 day refresh)
□ RBAC/ABAC model documented
□ Admin endpoints on separate network/port
```

### 6. STRIDE Threat Model
For the top 3 critical features:
```
Feature:          [name]
Spoofing:         [can someone impersonate a user?]
Tampering:        [can someone modify data in transit/rest?]
Repudiation:      [can someone deny an action there's no log of?]
Info Disclosure:  [can someone access data they shouldn't?]
DoS:              [can someone overwhelm a resource?]
Elevation:        [can someone escalate privileges?]
```

## Deliverables
- [ ] OWASP Top 10 checklist completed with status per category
- [ ] Security headers configured and verified
- [ ] Secrets management audit (no secrets in code/logs)
- [ ] Dependency scan clean (no CRITICAL/HIGH)
- [ ] Auth hardening implemented
- [ ] STRIDE threat model for top 3 features

## Quality Gate
- Zero CRITICAL findings in dependency scan
- Zero hardcoded secrets in codebase (including git history)
- All endpoints behind authentication and authorization
- Security headers verified with securityheaders.com score ≥ A


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
