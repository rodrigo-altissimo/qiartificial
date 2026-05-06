# Changelog - Software Engineering Squad

All notable changes to this squad will be documented in this file.

## [1.1.0] - 2026-02-21

### Added
- **20 Real-World Engineering Cases** (`docs/case-library.yaml`): Expanded from 5 to 20 cases for contextual calibration.
- **5 Automated Workflows**:
  - `wf-database-migration.yaml` (Expand/Contract pattern)
  - `wf-feature-rollout.yaml` (Progressive routing)
  - `wf-scaling-decision.yaml` (Architecture tiering)
  - `wf-dependency-upgrade.yaml` (Automated CVE patching)
  - `wf-feedback-loop.yaml` (Blameless postmortems)
- **Runbook Index** (`docs/runbook-index.md`): Centralized matrix mapping operational problems to workflows and agents.
- **8 Minds Enrichment Documents** (`docs/minds-enrichment/`): Integrating top engineering literature into agent DNA (e.g., Clean Code, BPF, DDD, K8s).
- **Golden Masters / Code Examples** (`examples/`):
  - `clean-api`: Minimalist Ports & Adapters REST API template.
  - `tdd-suite`: Arrange-Act-Assert testing strategy with Fakes instead of Mocks.
  - `ddd-bounded-context`: Event-driven architecture example.
  - `observability-stack`: Distributed tracing, metrics, and structured logs reference.
  - `cicd-pipeline`: Safe pipeline reference with Shift-Left security.
  - `data-contract`: YAML data contract schemas for backend/analytics integrations.
- **Maintenance Guide** (`docs/examples-maintenance-guide.md`): Workflow definition for keeping examples up to date.
- **Smoke Tests** (`scripts/smoke-tests/run_smoke_tests.py`): Real Python script to check YAML syntax, validate declared vs existing DNA files, and verify workflow agent references.
- **Squad README** (`README.md`): The official entry point for users mapping the squad architecture and capabilities.

### Changed
- **Veto Conditions** (`config/veto-conditions.yaml`): Expanded from 6 gates to 20 strict gates across 4 tiers (Integrity, Phase, Agent, and Handoffs), including Secret Scanning, PII Audits, and Contract Testing.
- **Config & Agent Routing** (`config.yaml`):
  - Added `@eng-tdd` as Tier 1 explicit agent.
  - Removed outdated or sub-optimized agents (`@eng-legacy`, `@eng-ml-eng`).

## [1.0.0] - Initial Release

### Added
- Base generation of the 14 software engineering agents.
- Foundational `config.yaml` with 10 mental models.
- Minimal workflows and checklists base.
