---
checklist: zero-trust-security
squad: software-engineering
agent: eng-security
tags: [zero-trust, security, authentication]
---

# Checklist: Zero Trust Security

## Purpose
Use this checklist to verify zero trust security quality and completeness.

---

## 🔍 Identity
- [ ] Every request authenticated (no implicit trust)
- [ ] Service-to-service authentication enforced (mTLS)
- [ ] Tokens are short-lived (< 15 minutes)
- [ ] Token rotation and refresh mechanism in place

---

## ✅ Authorization
- [ ] Principle of least privilege applied
- [ ] RBAC or ABAC enforced per endpoint
- [ ] Authorization checked at every layer (not just gateway)

---

## 🛡️ Network
- [ ] Network segmentation in place
- [ ] No trusted network zones (verify every hop)
- [ ] Encrypted communication between all services

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


## Deep Verification

### Authentication
- [ ] All non-public endpoints require valid authentication
- [ ] JWT tokens expire in < 15 minutes
- [ ] Refresh tokens stored server-side with rotation
- [ ] Session invalidated on logout (token blacklisted)
- [ ] Brute force protection: account lockout after 5 failed attempts
- [ ] Password policy: minimum 12 chars, complexity required
- [ ] MFA available for admin/sensitive operations

### Authorization
- [ ] Every resource access verified: does THIS user own THIS resource?
- [ ] IDOR (Insecure Direct Object Reference) tested
- [ ] Admin endpoints require admin role (not just authentication)
- [ ] Role changes audit-logged
- [ ] API keys scoped to minimum permissions

### Data Protection
- [ ] All PII encrypted at rest (AES-256)
- [ ] All data in transit encrypted (TLS 1.2+, HSTS enabled)
- [ ] Sensitive data masked in logs (no passwords, tokens, PII in logs)
- [ ] Database credentials via secrets manager (never env vars or hardcode)
- [ ] Backup encryption verified

### Input Validation
- [ ] ALL user input validated server-side
- [ ] SQL injection prevented (parameterized queries, ORM)
- [ ] XSS prevented (output encoding, CSP headers)
- [ ] CSRF protection on state-changing operations
- [ ] File upload: type whitelist + size limit + virus scan
- [ ] Path traversal prevented (no ../ in file paths from user input)

### Dependency Security
- [ ] Dependency scanner in CI (Snyk, npm audit, safety)
- [ ] No CRITICAL CVEs in any dependency
- [ ] Lock file committed and reviewed
- [ ] License compatibility verified

## Process

### Before Checking
```
1. Gather all relevant artifacts (code, config, docs)
2. Review the checklist items systematically
3. Mark each item: ✅ pass, ❌ fail, ⚠️ needs attention
4. Document evidence for each finding
```

### After Checking
```
1. Calculate pass rate: passed / total items
2. Flag any ❌ items as P0 or P1
3. Create action items for ❌ and ⚠️ items
4. Schedule re-check after fixes
```

## Scoring

| Score | Meaning | Action |
|-------|---------|--------|
| 100% | Exemplary | Proceed |
| 80-99% | Good with minor gaps | Fix ⚠️ items |
| 60-79% | Significant gaps | Fix ❌ items first |
| < 60% | Failing | Block until fixed |



## Detailed Sub-Checks

### Authentication Deep Dive
- [ ] Password hashing algorithm: bcrypt with cost factor ≥ 12
  - Not MD5, SHA-1, SHA-256 (too fast for passwords)
  - Each password has unique salt (auto with bcrypt)
- [ ] Login endpoint rate limited: max 5 attempts per 15 minutes per user
  - Progressive delay: 1s, 2s, 4s, 8s between attempts
  - Account lockout after 10 failed attempts (manual unlock required)
- [ ] Session management:
  - Session ID regenerated after authentication state change
  - Session expires after inactivity (30 min default)
  - Absolute session timeout (24h max)
  - Secure + HttpOnly + SameSite flags on session cookies
- [ ] JWT implementation:
  - Algorithm: RS256 (asymmetric) preferred over HS256
  - Access token expiry: ≤ 15 minutes
  - Refresh token: stored server-side, rotated on use
  - JTI (unique token ID) for blacklisting
  - Clock skew tolerance: ≤ 30 seconds

### Data Protection Deep Dive
- [ ] Encryption at rest:
  - Algorithm: AES-256-GCM (authenticated encryption)
  - Key management: AWS KMS / HashiCorp Vault / GCP KMS
  - Key rotation: every 90 days (automatic)
  - Envelope encryption for large data
- [ ] Encryption in transit:
  - TLS 1.2 minimum (TLS 1.3 preferred)
  - HSTS header with max-age ≥ 31536000 (1 year)
  - Certificate pinning for mobile apps
  - No mixed content (all resources over HTTPS)
- [ ] Log sanitization:
  - Passwords: never logged
  - Tokens: first 4 chars only
  - PII (email, phone, address): masked (j***@e***.com)
  - Credit cards: last 4 digits only
  - SSN: never logged

### Dependency Security Deep Dive
- [ ] Scanner runs in CI on every PR
  - Snyk, npm audit, pip safety, or Trivy
  - Build fails if CRITICAL CVE found
  - MEDIUM+ CVEs tracked with remediation timeline
- [ ] Lock file integrity:
  - package-lock.json / yarn.lock / poetry.lock committed
  - Lock file changes reviewed in PR (unexpected additions?)
  - Integrity checksums verified on install
- [ ] Supply chain:
  - Dependencies from official registries only
  - No typosquatting risk (verified package names)
  - SBOM (Software Bill of Materials) generated
  - License compatibility verified (no GPL in proprietary code)


## Troubleshooting Guide

### When Items Fail

```
IF any critical item fails:
  1. STOP — Do not proceed to next phase
  2. DOCUMENT the failure:
     - Which item failed?
     - What was the expected state?
     - What was the actual state?
     - What evidence confirms the failure?
  3. CLASSIFY severity:
     P0: Security breach, data loss risk → Immediate fix
     P1: SLO breach, degraded service → Fix within 24h
     P2: Below standard but not impacting → Fix within 1 week
     P3: Nice to have improvement → Backlog
  4. CREATE action item:
     Title: [Checklist item] — [Specific failure]
     Owner: [name]
     Deadline: [based on severity]
     Verification: [how to confirm fix]
  5. SCHEDULE re-check after fix

IF multiple items fail:
  1. Group by root cause
  2. Fix root cause (not symptoms)
  3. Re-run entire checklist section
```

### Evidence Collection Template

```yaml
checklist_run:
  date: YYYY-MM-DD
  runner: [name]
  environment: [staging / production]
  
  results:
    total_items: ___
    passed: ___
    failed: ___
    skipped: ___
    pass_rate: ___%
    
  failures:
    - item: "[checklist item text]"
      expected: "[what should be true]"
      actual: "[what was found]"
      evidence: "[screenshot, log, query result]"
      severity: P0/P1/P2/P3
      action: "[what needs to be done]"
      owner: "[name]"
      deadline: "[date]"

  approval:
    approved_by: [name]
    date: YYYY-MM-DD
    condition: "APPROVED / CONDITIONAL / REJECTED"
    notes: "[any conditions or follow-up required]"
```

### Automation Opportunities

```
ITEMS THAT CAN BE AUTOMATED:
  □ Dependency scan → CI pipeline (Snyk, npm audit)
  □ Code coverage → CI pipeline (coverage report)
  □ Complexity metrics → CI pipeline (SonarQube)
  □ API contract validation → CI pipeline (Pact)
  □ Security headers → CI pipeline (OWASP ZAP)
  □ Performance baseline → Scheduled load test
  □ Data freshness → Scheduled query + alert
  □ Schema validation → dbt test
  □ Health check → Synthetic monitoring (every 1 min)
  
ITEMS THAT REQUIRE HUMAN REVIEW:
  ○ Architecture fitness (judgment needed)
  ○ Code readability (subjective quality)
  ○ Domain model accuracy (domain expert needed)
  ○ Threat model completeness (security expertise)
  ○ UX of error messages (empathy check)
  
GOAL: Automate 70%+ of checklist items
  Benefit: checklist runs in CI on every PR
  Manual items: reviewed weekly or per release
```

### Cross-Reference to Related Assets

```
RELATED TASKS:
  → [domain]-specific task for implementation steps
  → diagnose-[domain]-issue for troubleshooting
  → setup-[domain] for initial configuration

RELATED DOCS:
  → [domain]-guide.md for comprehensive reference
  → [domain]-patterns.md for patterns and best practices
  → [domain]-antipatterns.md for what to avoid

RELATED DATA:
  → eng-[domain]-dna.yaml for specialist DNA profile
  → patterns-library.yaml for pattern catalog
  → antipatterns-database.yaml for anti-pattern catalog
```

### Versioning

```
CHECKLIST VERSION HISTORY:
  v1.0 — Initial checklist creation
  v1.1 — Added deep verification sub-checks
  v1.2 — Added troubleshooting guide and automation
  
UPDATE POLICY:
  - Review checklist quarterly
  - Update after every P0/P1 incident (add checks that would have caught it)
  - Remove obsolete items (technology no longer used)
  - Add items from industry updates (new OWASP, new CVEs)
```
