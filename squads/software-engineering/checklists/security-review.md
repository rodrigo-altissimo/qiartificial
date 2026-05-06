---
checklist: security-review
squad: software-engineering
agent: eng-security
tags: [security, OWASP, appsec]
---

# Checklist: Security Review

## Purpose
Security review for new features. Based on OWASP Top 10 (2021) and Tanya Janca's shift-left AppSec methodology.

---

## 🎯 Threat Model Coverage
- [ ] Threat model completed (STRIDE applied to data flow diagram)
- [ ] Trust boundaries identified and documented
- [ ] Top threats identified with mitigations
- [ ] Security acceptance criteria written in user stories

---

## A01 — Broken Access Control (Most Critical)
- [ ] Authentication enforced on all non-public endpoints
- [ ] Authorization checked per-resource (not just per-type): does this user own THIS record?
- [ ] Insecure Direct Object Reference (IDOR) impossible: IDs not guessable without ownership
- [ ] Least privilege applied: users/services have minimum required permissions
- [ ] Privilege escalation impossible: clients cannot self-elevate their role
- [ ] Admin endpoints not accessible to regular users
- [ ] Function-level access control: every function checks both auth AND authz

---

## A02 — Cryptographic Failures
- [ ] Passwords hashed with bcrypt (cost ≥ 12), Argon2id, or scrypt — NOT MD5/SHA1/SHA256
- [ ] All data in transit over TLS 1.2+ (no HTTP for sensitive data)
- [ ] Sensitive data at rest encrypted (PII, payment data, health data)
- [ ] No secrets in code, environment logs, or Docker images
- [ ] Secrets stored in vault/secret manager
- [ ] JWT: algorithm verified explicitly (reject "alg:none"), short expiry (≤ 15 min access token)
- [ ] Cookies: HttpOnly + Secure + SameSite=Strict

---

## A03 — Injection
- [ ] All SQL queries parameterized (no string concatenation with user input)
- [ ] All NoSQL queries use safe query builders
- [ ] All OS commands use safe subprocess (shell=False / array form)
- [ ] All output HTML-encoded in context (prevents XSS)
- [ ] File uploads: type allowlist, size limit, stored outside web root
- [ ] XML inputs: external entity processing disabled (XXE prevention)

---

## A04 — Insecure Design
- [ ] Security requirements defined before implementation started
- [ ] Threat model referenced during design review
- [ ] No security-critical logic on the client side alone

---

## A05 — Security Misconfiguration
- [ ] Debug mode disabled in production
- [ ] Stack traces not exposed in API error responses
- [ ] Default credentials changed or disabled
- [ ] Security headers set: HSTS, X-Frame-Options, Content-Security-Policy
- [ ] CORS policy restrictive (not `*` for authenticated endpoints)
- [ ] Unnecessary features/ports/services disabled

---

## A06 — Vulnerable and Outdated Components
- [ ] Dependency scan run: `npm audit` / `pip audit` / `snyk test`
- [ ] No dependencies with critical CVEs (CVSS ≥ 9.0) unaddressed
- [ ] Dependencies pinned to specific versions (not floating `^`)
- [ ] No unmaintained packages (check last release date)

---

## A07 — Authentication and Session Management
- [ ] Session IDs regenerated after successful login (prevent session fixation)
- [ ] Session terminated completely on logout (server-side invalidation)
- [ ] Session idle timeout ≤ 30 minutes
- [ ] Brute force protection on auth endpoints (rate limiting + lockout)
- [ ] MFA available/enforced for sensitive operations
- [ ] Password reset tokens are single-use and expire promptly

---

## A09 — Security Logging Failures
- [ ] Authentication events logged (success and failure)
- [ ] Authorization failures logged (with user, resource, action)
- [ ] Sensitive data NOT in logs (no passwords, tokens, or PII in log lines)
- [ ] Logs include timestamp, correlation ID, user ID, action
- [ ] Logs are tamper-evident (write-only for application processes)
- [ ] Alerts on repeated authentication failures

---

## A10 — SSRF
- [ ] URL inputs validated against allowlist (not denylist)
- [ ] Internal IP ranges blocked from user-supplied URLs (169.254.x.x, 10.x.x.x, etc.)
- [ ] Redirects to internal resources blocked

---

## Dependency and Supply Chain
- [ ] Third-party scripts loaded from CDN pinned with Subresource Integrity (SRI) hashes
- [ ] Docker base images from trusted registries, pinned by digest
- [ ] No `eval()` of external data (JS or equivalent in other languages)

---

**Verdict:** ✅ APPROVE | 🔄 REMEDIATION REQUIRED | ❌ BLOCK (P0 vulnerability found)

**P0 Examples (block release):** SQL injection present, plain-text passwords, missing auth on endpoints, secrets in code.


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
