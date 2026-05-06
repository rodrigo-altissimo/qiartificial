---
checklist: architecture-quality
squad: software-engineering
agent: eng-architect
tags: [architecture, fitness-functions, coupling]
---

# Checklist: Architecture Quality

## Purpose
Evaluate the architectural quality of a system. Use during architecture reviews, before significant new features, or quarterly architectural health checks.

---

## 🎯 Definition and Fitness Functions
- [ ] Top 3-5 architectural characteristics (the -ilities) are defined and prioritized
- [ ] Fitness function exists for each top architectural characteristic
- [ ] At least 1 fitness function is automated in CI (not just documented)
- [ ] Fitness functions have explicit pass/fail thresholds

---

## 📐 Architectural Style Fit
- [ ] Architectural style is appropriate for team size and operational maturity
- [ ] No Microservices with < 10 engineers team (unless specific justified need)
- [ ] No "distributed monolith" pattern: services can be deployed independently
- [ ] Deployment independence verified: deploy A without deploying B
- [ ] Microservices: each service has its own data store

---

## 🔗 Coupling Analysis
- [ ] No cyclic dependencies between modules/services (verified with tooling)
- [ ] All inter-service communication uses defined interfaces (not direct DB access)
- [ ] Shared databases: identified, documented, and plan to eliminate
- [ ] Event-driven coupling vs synchronous coupling conscious choice
- [ ] New dependencies justified: each has explicit reason

---

## 🗺️ Architecture Decisions
- [ ] ADRs exist for the top 5 system-level decisions
- [ ] Each ADR includes: context, decision, alternatives, consequences, fitness function
- [ ] Deprecated ADRs marked and linked to superseding decision
- [ ] Architecture decisions are discoverable (linked from README)

---

## 🧩 Domain Boundaries
- [ ] Bounded contexts are defined (Evans)
- [ ] Context map exists showing integrations between contexts
- [ ] Each bounded context has a clear owner (team)
- [ ] Anti-corruption layers in place where external systems threaten model purity
- [ ] Core domain identified: best engineers assigned here

---

## 📊 Observability and Operability
- [ ] Four Golden Signals instrumented for all services: Latency, Traffic, Errors, Saturation
- [ ] SLOs defined for critical user-facing services
- [ ] Distributed tracing covers cross-service calls
- [ ] No service is a black box (all have meaningful logs, metrics, traces)

---

## 🔄 Evolvability
- [ ] Can the team deploy individual services independently?
- [ ] Can the team add a new service without changing existing ones?
- [ ] Are database schemas backward compatible (no breaking schema changes)?
- [ ] Can individual components be scaled independently?
- [ ] Is the most-likely-to-change part of the system the most isolated?

---

## 🛡️ Resilience
- [ ] Single points of failure identified — are they acceptable?
- [ ] Circuit breakers in place for external dependencies
- [ ] Retry logic with exponential backoff for transient failures
- [ ] Timeouts defined on all external calls (no infinite hangs)
- [ ] Graceful degradation: system partially works when dependencies fail

---

## Scoring
Count checks completed:

| Score | Assessment |
|-------|------------|
| 35-40 | Elite: Architectural excellence |
| 28-34 | High: Minor improvements needed |
| 20-27 | Medium: Significant investment needed |
| < 20  | Low: Architectural debt is costing velocity |

**Action items from this review:**
1. [P0 issue — fix before next release]
2. [P1 issue — fix this sprint]
3. [P2 issue — plan in next quarter]


## Deep Verification

### Pipeline Quality
- [ ] Pipeline is idempotent (safe to re-run)
- [ ] Incremental processing implemented (not full re-load every run)
- [ ] Error handling: dead letter queue for failed records
- [ ] Retry logic with exponential backoff
- [ ] Pipeline timeout configured

### Data Quality Tests
- [ ] not_null tests on all required columns
- [ ] unique tests on primary key columns
- [ ] accepted_values tests on enum/status columns
- [ ] freshness test (data updated within SLO)
- [ ] row_count anomaly detection (>30% deviation = alert)
- [ ] Zero rows loaded triggers P0 alert
- [ ] Reconciliation check against source system

### Schema Management
- [ ] Schema changes are backward compatible (or migration plan)
- [ ] Up AND down migration scripts exist
- [ ] Schema changes tested on production-like data
- [ ] All consumers notified before breaking changes
- [ ] Schema registry updated

### Monitoring
- [ ] Pipeline runtime tracked and alerted (> 2x normal = warning)
- [ ] Data freshness dashboard available
- [ ] Error rate dashboard available  
- [ ] Lineage documented (source → transforms → consumers)
- [ ] Data SLO attainment reported weekly

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

### Architecture Decision Quality
- [ ] ADR exists for every significant decision:
  - Technology choice (database, framework, language)
  - Architecture style (monolith, microservices, event-driven)
  - Integration pattern (API, events, shared DB)
  - Data strategy (SQL vs NoSQL, batch vs streaming)
- [ ] Each ADR is complete:
  - Context: what problem are we solving?
  - Decision: what was chosen?
  - Alternatives: what was considered and rejected?
  - Consequences: what are the trade-offs?
  - Status: proposed / accepted / deprecated / superseded

### Fitness Function Quality
- [ ] Structural fitness functions:
  - Module dependencies enforced (ArchUnit, depcheck)
  - No circular dependencies (detected in CI)
  - Layer violations caught automatically
  - Package/module cohesion measured
- [ ] Operational fitness functions:
  - Latency SLO verified in CI (load test)
  - Error rate SLO verified (synthetic monitoring)
  - Deployment frequency tracked (DORA metric)
  - MTTR tracked and alerted
- [ ] Evolutionary fitness functions:
  - API compatibility verified (contract tests)
  - Schema compatibility verified (migration tests)
  - Feature flag cleanup tracked

### Modularity Assessment
- [ ] Module boundaries clear:
  - Each module has defined public API
  - Internal implementation hidden
  - Dependencies explicit (not implicit)
- [ ] Coupling measured:
  - Afferent coupling (modules depending on this one)
  - Efferent coupling (modules this one depends on)
  - Instability = Ce / (Ca + Ce) — balanced is ideal
- [ ] Cohesion measured:
  - All methods in a class use most of the class fields
  - LCOM (Lack of Cohesion in Methods) < 0.5


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
