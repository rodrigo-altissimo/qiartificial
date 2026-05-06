# Software Engineering Squad: Runbook Index

This runbook index serves as the central orchestration matrix for the Software Engineering Squad. It maps common operational problems or technical requirements directly to the workflows, tasks, and checklists that structure the Squad's response.

## 🧭 Navigation Matrix

### 🚀 Architecture & System Design
| Scenario / Problem | Recommended Workflow | Key Agents | Checklists / Validation |
| :--- | :--- | :--- | :--- |
| Designing a completely new system from scratch | `wf-system-design.yaml` | `@eng-architect`, `@eng-ddd` | `architecture-quality.md`, `ddd-model-review.md` |
| Monolithic application is too hard to scale/deploy | `wf-scaling-decision.yaml` | `@eng-architect`, `@eng-devops` | `strangler-fig-progress.md`, `context-map-review.md` |
| Designing a new public-facing API | `wf-api-design.yaml` | `@eng-api`, `@eng-security` | `api-design-review.md`, `graphql-review.md` |

### 🛠️ Development & Refactoring
| Scenario / Problem | Recommended Workflow | Key Agents | Checklists / Validation |
| :--- | :--- | :--- | :--- |
| Refactoring a massive legacy class safely | `wf-tech-debt-reduction.yaml` | `@eng-refactor`, `@eng-tdd` | `refactoring-safety.md`, `legacy-code-safety.md` |
| Bootstrapping a new microservice or repository | `wf-new-project-bootstrap.yaml` | `@eng-devops`, `@eng-agile` | `cicd-pipeline-health.md`, `clean-architecture-review.md` |
| Reviewing a complex Pull Request | `wf-code-review.yaml` | `@eng-clean-code`, `@eng-security` | `code-review.md`, `clean-code-review.md` |
| Designing a comprehensive testing strategy for a new module | `wf-test-strategy.yaml` | `@eng-tdd`, `@eng-agile` | `tdd-cycle.md`, `load-test-review.md` |

### 🚢 Deployment & Operations
| Scenario / Problem | Recommended Workflow | Key Agents | Checklists / Validation |
| :--- | :--- | :--- | :--- |
| Rolling out a highly risky new feature | `wf-feature-rollout.yaml` | `@eng-devops`, `@eng-perf` | `release-readiness.md`, `deployment-readiness.md` |
| Altering a critical database schema without downtime | `wf-database-migration.yaml` | `@eng-data`, `@eng-api` | `schema-migration-safety.md`, `data-contract-review.md` |
| Upgrading core dependencies (e.g., React, Spring Boot) | `wf-dependency-upgrade.yaml` | `@eng-security`, `@eng-tdd` | `dependency-scan.md`, `soak-test-results.md` |

### 🚨 Incident Response & Performance
| Scenario / Problem | Recommended Workflow | Key Agents | Checklists / Validation |
| :--- | :--- | :--- | :--- |
| Production is down (Sev-1 or Sev-2 Incident) | `wf-incident-response.yaml` | `@eng-devops`, `@eng-perf`, `@eng-audit` | `incident-response.md` |
| Application is slow under load | `wf-performance-audit.yaml` | `@eng-perf`, `@eng-distributed` | `performance-review.md`, `load-test-review.md` |
| Security vulnerability detected in production | `wf-security-review.yaml` | `@eng-security`, `@eng-audit` | `security-review.md`, `owasp-top10.md` |
| After resolving an incident, preventing recurrence | `wf-feedback-loop.yaml` | `@eng-chief`, `@eng-agile` | `case-library.yaml` updates |

## 🛡️ Veto Gate Reminders
Before executing any workflow, remember the core Tier 0 Veto Conditions:
1. **[VETO-001] No Architecture without ADR:** Structural changes require documented decisions.
2. **[VETO-002] No Deploy without Tests:** >80% coverage on new logic is mandatory.
3. **[VETO-003] No Review without Checklist:** All PRs must pass the standard checklist.

---
*Maintained by: `@eng-chief` & `@eng-audit`*
