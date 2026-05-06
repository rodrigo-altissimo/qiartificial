---
checklist: incident-response
squad: software-engineering
agent: eng-devops
tags: [incident, postmortem, on-call]
---

# Checklist: Incident Response

## Purpose
Use this checklist to verify incident response quality and completeness.

---

## 🔍 Detection
- [ ] Automated alerting triggered (not user report)
- [ ] Alert has severity classification (SEV1-4)
- [ ] On-call engineer paged within 5 minutes

---

## ✅ Response
- [ ] Incident channel created (Slack/Teams)
- [ ] Incident commander assigned
- [ ] Customer communication sent if user-facing
- [ ] Focus: restore service first, investigate later

---

## 🛡️ Post-Incident
- [ ] Blameless postmortem within 48 hours
- [ ] Timeline of events documented
- [ ] Root cause identified
- [ ] Action items with owners and deadlines
- [ ] Monitoring improved to catch this earlier next time

---

**Verdict:** ✅ PASS | ⚠️ CONDITIONAL | ❌ FAIL


## Deep Verification

### CI/CD Pipeline
- [ ] Build time < 5 minutes
- [ ] All tests run in CI (not just locally)
- [ ] Test time < 15 minutes total
- [ ] No flaky tests (or quarantined separately)
- [ ] Build artifacts cached
- [ ] Security scan in pipeline (SAST + dependency scan)

### Deployment
- [ ] Deployment fully automated (zero manual steps)
- [ ] Canary or blue-green deployment strategy
- [ ] Rollback automated and tested (< 5 min to rollback)
- [ ] Post-deploy health check runs automatically
- [ ] Feature flags for high-risk changes
- [ ] Deployment notification to team channel

### Observability
- [ ] Structured logging (JSON format, correlation_id)
- [ ] Health check endpoint (/health and /health/ready)
- [ ] 4 Golden Signals dashboarded (latency, traffic, errors, saturation)
- [ ] Distributed tracing enabled (OpenTelemetry)
- [ ] Alerts have runbooks linked
- [ ] On-call rotation defined

### Reliability
- [ ] SLOs defined and measured
- [ ] Error budget tracked in dashboard
- [ ] Incident response plan documented
- [ ] Postmortem template available
- [ ] Backup and recovery tested quarterly

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
