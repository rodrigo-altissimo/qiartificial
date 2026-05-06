---
checklist: code-review
squad: software-engineering
agent: eng-audit
tags: [code-review, quality-gate]
---

# Checklist: Code Review

## Purpose
Use this checklist for every pull request. Priority order: security first, correctness second, design third.

---

## 🚨 P0 — Immediate Rejection (merge blocked)
- [ ] No hardcoded secrets, API keys, passwords, or credentials in code
- [ ] No SQL strings built from unsanitized user input (CWE-89: SQL injection)
- [ ] No user input executed as OS commands (CWE-78: command injection)
- [ ] No authorization skipped on new API endpoints
- [ ] No critical CVEs introduced in new dependencies

---

## 🔒 Security
- [ ] All user inputs validated server-side (client-side only = insufficient)
- [ ] Error messages generic to users; details only in server logs
- [ ] Authentication enforced on all non-public endpoints
- [ ] Authorization verified per-resource (IDOR check: does caller own this resource?)
- [ ] New sensitive data encrypted at rest
- [ ] Secrets accessed via secret manager (not env vars or hardcode)
- [ ] Dependencies added are scanned for known vulnerabilities

---

## ✅ Correctness
- [ ] Code does what the PR description says
- [ ] Edge cases handled: null inputs, empty collections, boundary values
- [ ] Error conditions handled (not just happy path)
- [ ] Database transactions scoped correctly (not too broad, not too narrow)
- [ ] Race conditions and concurrent access considered
- [ ] No data loss possible (migrations reversible, deletes safe)

---

## 🧪 Testability
- [ ] New business logic has unit tests
- [ ] Tests pass (not just locally — in CI)
- [ ] Tests are meaningful (not just coverage lines)
- [ ] No new flaky tests introduced
- [ ] Test names describe the behavior being tested
- [ ] Tests are fast (no unnecessary external dependencies in unit tests)

---

## 🧩 Design Quality
- [ ] No new code smells (Long Method, Large Class, Duplicate Code)
- [ ] Names reveal intent (no `getData()`, `Manager`, `Handler`)
- [ ] Methods do one thing (Single Responsibility)
- [ ] New dependencies justified and minimal
- [ ] Code follows existing patterns in the codebase
- [ ] No speculative generality (YAGNI applied)

---

## 🚀 Operability
- [ ] New behavior is observable (logs, metrics, or traces added for new paths)
- [ ] Schema migrations are backward compatible (additive only if possible)
- [ ] Feature flag used if change is high-risk or gradual rollout needed
- [ ] No performance regression on critical paths
- [ ] Runbook updated if new operational procedure required

---

## 📝 Final Check
- [ ] PR description explains WHAT changed and WHY (not just how)
- [ ] Linked to the ticket/story
- [ ] No commented-out code left in
- [ ] No debug/print statements left in production code
- [ ] README/docs updated if behavior changed for users

---

**Verdict:** ✅ APPROVE | 🔄 REQUEST CHANGES | ❌ REJECT (P0 found)


## Deep Verification

### HTTP Methods
- [ ] GET: read-only, cacheable, no side effects
- [ ] POST: create resource, returns 201 + Location header
- [ ] PUT: full replacement, idempotent
- [ ] PATCH: partial update, returns updated resource
- [ ] DELETE: idempotent (2nd delete = 204 or 404, not error)

### Response Codes
- [ ] 200: successful retrieval or update
- [ ] 201: resource created (with Location header)
- [ ] 204: successful delete (no body)
- [ ] 400: client error with actionable message
- [ ] 401: unauthenticated (not logged in)
- [ ] 403: unauthorized (logged in but no permission)
- [ ] 404: resource not found
- [ ] 409: conflict (duplicate, concurrent edit)
- [ ] 422: validation failed (with field-level errors)
- [ ] 429: rate limited (with Retry-After header)
- [ ] 500: server error (generic message to client, details in logs)

### Pagination
- [ ] All list endpoints paginated (never return unbounded results)
- [ ] Default page size: 20 (configurable, max 100)
- [ ] Cursor-based for large/live datasets
- [ ] Response includes total_count and has_more

### Versioning
- [ ] Breaking changes only in new version (v2)
- [ ] Old version sunset communicated 12+ months ahead
- [ ] Sunset header in deprecated version responses
- [ ] Migration guide published

### Documentation
- [ ] OpenAPI 3.0 spec auto-generated and current
- [ ] Every endpoint has examples (request + response)
- [ ] Error responses documented with all possible error codes
- [ ] Authentication guide with code examples
- [ ] Rate limit tiers documented

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

### Security Pillar (25% weight)
- [ ] OWASP Top 10 reviewed:
  - A01 Broken Access Control: IDOR test passed
  - A02 Crypto: AES-256 at rest, TLS 1.2+ in transit
  - A03 Injection: parameterized queries only
  - A05 Misconfiguration: no defaults, no debug mode
  - A07 Auth: strong passwords, MFA available
- [ ] Dependency scan: no CRITICAL CVEs
- [ ] Secrets: none in code/config/env (scanner ran)
- [ ] Score: [1-5]

### Performance Pillar (15% weight)
- [ ] SLO defined and measured:
  - Availability: [target]% actual: [measured]%
  - Latency p99: target [X]ms actual: [Y]ms
- [ ] Load test executed with production-like data
- [ ] No N+1 queries (query logging verified)
- [ ] No unbounded queries (all lists paginated)
- [ ] Score: [1-5]

### Operability Pillar (20% weight)
- [ ] Health check endpoint: /health returns 200
- [ ] Structured logging: JSON with correlation_id
- [ ] 4 Golden Signals dashboarded
- [ ] Alerts configured with runbooks
- [ ] Rollback tested and documented
- [ ] On-call rotation defined
- [ ] Score: [1-5]

### Code Quality Pillar (15% weight)
- [ ] No function > 20 lines (or justified exceptions)
- [ ] No class > 200 lines
- [ ] Cyclomatic complexity < 10 per function
- [ ] No dead code (unused functions/variables)
- [ ] Test coverage > 80% on business logic
- [ ] Score: [1-5]

### Testability Pillar (15% weight)
- [ ] Unit tests exist for all business logic
- [ ] Integration tests for external dependencies
- [ ] Tests run in CI (not just locally)
- [ ] No flaky tests
- [ ] TDD practiced for new features
- [ ] Score: [1-5]

### Data Integrity Pillar (10% weight)
- [ ] Migrations reversible (up + down scripts)
- [ ] Schema changes backward compatible
- [ ] Backup verified recently (< 30 days)
- [ ] Data quality tests in pipeline
- [ ] Score: [1-5]

### Overall Score Calculation
```
Score = (security × 0.25) + (performance × 0.15) + 
        (operability × 0.20) + (quality × 0.15) + 
        (testability × 0.15) + (data × 0.10)

≥ 4.0: APPROVED ✅
3.0-3.9: CONDITIONAL ⚠️ (fix P1s, re-audit in 2 weeks)
< 3.0: REJECTED ❌ (fix P0s and P1s, re-audit required)
```


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
