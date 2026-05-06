---
checklist: deployment-readiness
squad: software-engineering
agent: eng-devops
tags: [deployment, operations, readiness]
---

# Checklist: Deployment Readiness

## Purpose
Validate that a change is ready for production deployment. Use before every production release.

---

## 🔬 Pre-Deployment Checks

### Code Quality Gate
- [ ] All tests passing in CI (unit, integration, contract)
- [ ] Test coverage ≥ baseline (no coverage regression)
- [ ] No critical or high severity findings from SAST (Semgrep, Snyk)
- [ ] No critical CVEs in dependencies (Trivy, Grype)
- [ ] Code review approved by at least 1 engineer

### Security Gate
- [ ] Threat model reviewed (for features touching auth, data, or external systems)
- [ ] OWASP Top 3 (Broken Access Control, Cryptography, Injection) verified clean
- [ ] No secrets exposed in code or environment variables
- [ ] New API endpoints have authentication + authorization

---

## 🚀 Deployment Mechanism

### Configuration
- [ ] All required env vars / config values present in the target environment
- [ ] No hardcoded environment-specific values (dev DB URL in code, etc.)
- [ ] Feature flags configured correctly (ON or OFF as intended for this release)

### Database Migrations
- [ ] Migrations tested in staging against production-size data
- [ ] Migrations are additive (backward compatible) — no column drops yet
- [ ] Migration rollback script exists and is tested
- [ ] Migration execution time is acceptable (long migrations → blue-green or feature flag)

### Rollout Strategy
- [ ] Deployment method chosen: [Blue-Green / Canary / Rolling / Direct]
- [ ] Canary: initial rollout percentage defined (e.g., 5%)
- [ ] Rollback procedure documented and tested (< 5 min execution)
- [ ] Feature flag available to disable the feature without redeployment

---

## 📊 Observability Readiness

### Before Deploying
- [ ] Four Golden Signals instrumented for new features: Latency, Traffic, Errors, Saturation
- [ ] Alerts configured for new SLOs or error rate thresholds
- [ ] Dashboard updated to include new service/feature metrics
- [ ] Log messages added for critical operations (not just errors)

### During Deployment
- [ ] Deployment window confirmed with on-call team
- [ ] Observability dashboard open during deployment
- [ ] Error rate and latency being monitored in real-time
- [ ] Deployment annotated in Grafana (so spike is correlated with deploy)

---

## 🧪 Staging Validation
- [ ] Feature tested end-to-end in staging environment
- [ ] Load test run if change affects high-traffic paths
- [ ] Integration with external dependencies verified in staging
- [ ] Staging data is representative of production data shape

---

## 📞 Communication
- [ ] On-call engineer notified of deployment
- [ ] Stakeholders aware if user-facing behavior changes
- [ ] Rollback contact chain known (who decides to rollback?)
- [ ] Deployment window is not during peak traffic (unless urgent)

---

## ✅ Post-Deployment Checks (First 15 minutes)
- [ ] Error rate at or below pre-deployment baseline
- [ ] p99 latency at or below pre-deployment baseline
- [ ] New feature working as expected (smoke test)
- [ ] No anomalies in saturation metrics (CPU, memory)
- [ ] Canary promotion scheduled (if canary deployment)

---

**Verdict:** ✅ DEPLOY | 🔄 HOLD (missing items) | ❌ BLOCK (P0 issue found)


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

### CI/CD Deep Verification
- [ ] Build reproducibility:
  - Same commit SHA → same artifact (deterministic build)
  - Dependencies from lock file (not latest)
  - Docker image pinned to specific base image digest
- [ ] Test reliability:
  - No flaky tests (< 0.1% failure rate on green builds)
  - Quarantine process for flaky tests (separate job)
  - Test duration tracked: if growing > 10%/month, optimize
- [ ] Security gates:
  - SAST running: SonarQube, Semgrep, or CodeQL
  - Dependency scan: Snyk, npm audit, safety, Trivy
  - Container scan: Trivy on Docker images
  - License check: compatibility verified
- [ ] Deploy verification:
  - Canary metrics compared to baseline (not absolute thresholds)
  - Rollback tested monthly (not just documented)
  - Post-deploy smoke test covers critical business path
  - Deploy takes < 15 minutes total

### Observability Deep Verification
- [ ] Log quality:
  - JSON format with consistent schema
  - Every log line has: timestamp, level, message, correlation_id
  - Error logs include: stack_trace, request_id, user_id (hashed)
  - No PII in plaintext (emails, passwords, tokens masked)
- [ ] Metric quality:
  - Histogram buckets appropriate for your latency (not default)
  - Labels cardinality reasonable (< 1000 unique values)
  - Business metrics tracked (not just infra)
  - Custom metrics for critical business logic (e.g., payment_success_rate)
- [ ] Alert quality:
  - Every alert fired in last 30 days was actionable
  - No alerts with > 50% false positive rate
  - Every alert has runbook (not just "see dashboard")
  - Escalation tested: P0 reaches human in < 5 minutes


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
