# Dev Cycle Squad

## Overview

Squad operacional dedicado ao ciclo de desenvolvimento — desde a resolução do entry point (PRD/Epic/Stories) até a consolidação dos resultados. Executor que outros squads delegam quando precisam de desenvolvimento de código.

## Purpose

O `dev-cycle` centraliza, prescreve e isola o ciclo de desenvolvimento. Substitui padrões fragmentados entre vários arquivos, usando tasks prescritivas com veto conditions que forçam obediência ao pipeline.

## When to Use This Squad

Use `dev-cycle` quando você quer:

- Executar um batch de stories a partir de um PRD ou Epic
- Delegar execução de desenvolvimento de outro squad (e.g., sottani-forge)
- Rodar stories em paralelo com orquestração de waves por dependência
- Garantir que a stack está atualizada via Context7 antes de codar

## What's Included

### Agents

| Agent | Role | Tier |
|-------|------|------|
| `cycle-chief` | Entry agent / Pipeline Orchestrator | 0 |

### Tasks

| Task | Phase | Description |
|------|-------|-------------|
| `resolve-entry-point` | DC-0 | Detecta e valida entry point (PRD/Epic/Stories) |
| `create-stories` | DC-1 | Orquestra @pm/@sm/@po para criação de stories |
| `research-stack` | DC-2 | Detecta stack e puxa docs via Context7 |
| `execute-wave` | DC-3 | Orquestração de waves paralelas |
| `execute-story` | DC-3 | Inner — o que cada subagent executa |
| `consolidate-report` | DC-4 | Merge results e relatório final |
| `validate-product` | DC-5 | Orquestra product validation via Playwright |
| `update-dev-cycle` | Ops | Manutenção do squad |
| `delete-dev-cycle` | Ops | Remoção do squad |

### Workflows

| Workflow | Description |
|----------|-------------|
| `wf-dev-cycle` | Pipeline principal — 6 fases (DC-0 a DC-5) |
| `wf-product-validation` | Product validation via Playwright (DC-5, standalone) |

## Squad Structure

```
squads/dev-cycle/
├── agents/
│   └── cycle-chief.md           # Entry agent / orchestrator
├── tasks/
│   ├── resolve-entry-point.md   # DC-0
│   ├── create-stories.md        # DC-1
│   ├── research-stack.md        # DC-2
│   ├── execute-wave.md          # DC-3 (outer)
│   ├── execute-story.md         # DC-3 (inner)
│   ├── consolidate-report.md    # DC-4
│   ├── validate-product.md      # DC-5
│   ├── update-dev-cycle.md      # Maintenance
│   └── delete-dev-cycle.md      # Removal
├── workflows/
│   ├── wf-dev-cycle.yaml        # Main pipeline
│   └── wf-product-validation.yaml # DC-5 validation workflow
├── data/                        # Runtime data
├── config.yaml                  # Squad configuration
├── README.md                    # This file
├── CHANGELOG.md                 # Version history
└── ARCHITECTURE.md              # Design decisions
```

## Key Features

- **Entry Point Flexível:** Aceita PRD, Epic ou Stories como ponto de entrada
- **Stack Research Obrigatória:** Context7 puxa docs atuais antes de codar
- **Wave Execution:** Stories sequenciais via subagents (contexto isolado, zero conflitos)
- **Quality Gate Condicional + QA Obrigatória:** QG só quando necessário, QA sempre
- **Product Validation (DC-5):** Playwright-based E2E validation com 4 modos (auto/skip/elicit/standalone)
- **Tasks Prescritivas:** Task file é a autoridade, não o judgment do agent

## Integration with Core AIOX

O dev-cycle integra com:

- **AIOX Agents:** Usa @pm, @sm, @po, @dev, @qa, @architect, @data-engineer como executores
- **Agent Tool:** Subagents nativos do Claude Code (context isolation, sem worktree)
- **Context7 MCP:** Documentação atualizada de libraries
- **sottani-forge:** Consumer principal — delega Greenfield Phase 10 e Brownfield BF-7

## Workspace Integration Governance

- **Integration level:** `read_only`
- **Rationale:** Lê artefatos do projeto (PRD, stories, architecture) mas não escreve no workspace
- **Read paths:** `docs/stories/`, `docs/prd/`, `docs/architecture/`
- **Write paths:** Nenhum (escreve no projeto alvo, não no workspace)

## Getting Started

1. Ative o squad: `/AIOX:squads:dev-cycle` ou invoque o cycle-chief
2. Forneça um entry point: PRD, Epic, ou Stories
3. Execute: `*run` (YOLO por default — fire and forget)
4. O pipeline executa as 6 fases automaticamente (sequencial, zero perguntas)
5. Receba o `dev-cycle-report.md` com resultados consolidados

## Dependencies

- Core AIOX framework (agents: @pm, @sm, @po, @dev, @qa, @architect, @data-engineer)
- Context7 MCP (para stack research)
- Agent tool (subagent execution)

## Version History

- **v2.0.0** - Sequential execution + YOLO mode + subagent per story (BREAKING: removed parallel worktree)
- **v1.4.0** - DC-5 epic completeness gate
- **v1.3.0** - DC-5 Product Validation + epic checklist fix
- **v1.1.0** - Executor type annotations, filtering heuristics
- **v1.0.0** - Initial creation — 5-phase pipeline, 8 tasks, 1 workflow

---

**Ready to execute dev cycles? `*run` and let the pipeline work.**

_Version: 1.3.0_
_Compatible with: AIOX v4+_
