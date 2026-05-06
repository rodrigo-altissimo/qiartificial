# Dev Cycle Squad — Changelog

## [Unreleased]

### Added
- PO validation always runs — DC-1 never fully skips (`8810d67`)
- dev-cycle v2.0.0 — Sequential execution, YOLO mode, product validation (`c41ebb3`)
- add dev-cycle squad with optimized 5-phase pipeline (`90f4ed4`)

### Changed
- migrate minds/ paths + add new squads (`e40da7c`)

### Fixed
- brownfield upgrade — workflow contracts, agent naming, score 7→7 PASS (`28b7ea8`)


## [2.2.0] - 2026-03-27

### Added
- **type=demand** entry point — free-text requests sem artefatos pre-existentes (brownfield ad-hoc)
- Triage inline no DC-0: entende demanda, analisa contexto, classifica complexidade, cria artefatos
- Steps 5a-5d no `resolve-entry-point.md`: understand → contextual analysis → classify → route
- Analise contextual condicional com agentes especialistas (@architect, @data-engineer, @ux-design-expert, @qa)
- Classificacao de complexidade: SIMPLE (1 story, skip PO) → MEDIUM (stories + PO) → COMPLEX (epic)
- 3 novos Acceptance Criteria (AC-6 a AC-8) para fluxo demand
- 3 novos Veto Conditions para demand (texto vazio, repo indefinido, COMPLEX sem @architect)
- Error handling para triage failure e classification uncertainty
- `@ux-design-expert` adicionado a `aiox_agents_used` no config.yaml
- Handoff prompt `dc-0_demand_triage` no workflow
- Quality checklist expandido com 3 checks de triage

### Changed
- `resolve-entry-point.md` v1.1.0 → **v2.0.0**: execution_type agora Worker|Agent (Agent quando demand)
- `wf-dev-cycle.yaml` v2.1.0 → **v2.2.0**: DC-0 description, inputs, checkpoint, best_for atualizados
- `config.yaml` v2.0.0 → **v2.1.0**: description menciona demand/brownfield

### Rationale
- O pipeline so aceitava artefatos prontos (PRD/Epic/Stories), exigindo que o usuario criasse manualmente
- Demandas brownfield pontuais (bug fix, feature simples) nao precisam de PRD/Epic para serem executadas
- O triage inteligente permite que o pipeline classifique e crie os artefatos corretos automaticamente
- Analyses rodam em paralelo e apenas quando sinais relevantes sao detectados (zero overhead para demandas simples)


## [2.0.0] - 2026-03-10

### BREAKING
- **DC-3 now executes stories SEQUENTIALLY** (was parallel with worktrees)
- Removed worktree isolation — stories work on current branch directly
- Added subagent-per-story for context isolation (orchestrator stays clean)

### Added
- **YOLO mode** as default (`--mode yolo`) — zero human interaction, fire and forget
- `--mode interactive` flag for manual wave gate approval
- `execution_mode` config in config.yaml and wf-dev-cycle.yaml
- `story_execution` config (strategy: sequential, isolation: subagent)
- Per-step checklists in execute-wave.md (progress tracking)
- YOLO enforcement veto conditions (asking user = VETO)
- AC-6 in execute-story.md (zero questions asked)
- Step 6 in execute-wave.md (execution summary)

### Changed
- cycle-chief v2.0.0: updated principles, voice_dna, anti_patterns, output_examples
- execute-wave.md v2.0.0: sequential loop, no worktree, YOLO mode
- execute-story.md v2.0.0: no worktree, YOLO enforcement
- wf-dev-cycle.yaml v2.0.0: sequential strategy, YOLO config, updated checkpoints
- config.yaml v2.0.0: added execution_mode + story_execution sections

### Rationale
- Parallel worktree execution caused merge conflicts and long resolution times
- Context bloat from multiple parallel subagents degraded performance
- User wanted fire-and-forget (YOLO) like the original batch-dev-cycle
- Sequential + subagent = context isolation without conflicts

## [1.4.0] - 2026-03-10

### Changed
- DC-5 Product Validation now only executes when epic is 100% complete (all stories Done)
- Added `epic_completeness_gate` to DC-5 phase in wf-dev-cycle.yaml
- Added Pre-condition section to validate-product.md with epic completeness check
- Added veto condition for running DC-5 with incomplete epic
- DC-5 skips gracefully with notice when epic is incomplete (no silent skip)
- Standalone mode (`*validate`) bypasses epic gate — can be used anytime
- Updated quality checklist with epic completeness checks
- Updated handoff prompts for DC-5 skip/launch scenarios

### Rationale
- Partial epic validation caused false negatives due to missing migrations, incomplete features, and cross-story dependencies
- Product validation is most meaningful when all code, migrations, and integrations are in place

## [1.3.0] - 2026-03-10

### Added
- DC-5 Product Validation phase with 4 activation modes (auto/skip/elicit/standalone)
- `validate-product.md` task — orchestrates wf-product-validation.yaml
- `wf-product-validation.yaml` workflow (moved from sottani-forge)
- `*validate` command on cycle-chief agent
- Playwright + webapp-testing tooling in config.yaml
- PHASE-5 in wf-dev-cycle.yaml with agents, quality checklist, handoff prompts

### Fixed
- Epic checklist matching: expanded from 3 patterns to 10 + fallback regex
- Unmatched stories now logged with detailed patterns tried
- Added canonical epic checklist format note in update-epic-progress.md

### Changed
- Pipeline is now 6 phases (DC-0 through DC-5), up from 5
- config.yaml version bumped to 1.3.0
- sottani-forge Phase 11 now delegates to dev-cycle via cross-squad

### Removed
- `wf-product-validation.yaml` from sottani-forge (moved here)

## [1.1.0] - 2026-03-10

### Changed
- `delete-dev-cycle`: execution_type Hybrid → Worker (all 3 steps are deterministic)
- `research-stack`: execution_type Agent → Hybrid (Steps 1/3 Worker-eligible, Steps 2/4 Agent judgment)
- `execute-wave`: Step 2 (topological sort) marked as Worker-eligible with deterministic algorithm note

### Added
- Executor Phase annotations (Worker/Agent/Hybrid) on individual steps for determinism clarity
- Codified filtering heuristics in research-stack Step 2 (category-based rules for library selection)

## [1.0.0] - 2026-03-10

### Added
- Initial squad creation
- `cycle-chief` agent (entry agent / orchestrator)
- 5-phase pipeline: DC-0 through DC-4
- Tasks: resolve-entry-point, create-stories, research-stack, execute-wave, execute-story, consolidate-report
- Operational tasks: update-dev-cycle, delete-dev-cycle
- Workflow: wf-dev-cycle.yaml
- Architecture documentation
