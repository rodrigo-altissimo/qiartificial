# Dev Cycle Squad — Architecture

## Overview

Squad operacional que centraliza o ciclo de desenvolvimento. Recebe entry points flexíveis (PRD, Epic ou Stories) e executa até a consolidação dos resultados.

## Design Decisions

| # | Decisão | Resolução | Justificativa |
|---|---------|-----------|---------------|
| D9 | Squad separado vs acoplado | **Squad separado** | Ciclo de dev é domínio próprio. Reutilizável por qualquer squad/pipeline. |
| D10 | Agents próprios vs AIOX agents | **Tasks prescritivas + agents AIOX** | Problema de obediência é da task, não do agent. Tasks rígidas forçam comportamento. |
| D11 | Estratégia de subagentes | ~~Agent tool com worktree~~ → **Subagent sequencial sem worktree (v2.0.0)** | Worktree causava merge conflicts e context bloat. Sequencial + subagent = contexto limpo, zero conflitos. |
| D14 | Modo de execução | **YOLO por default** | Fire and forget. Zero perguntas. `--mode interactive` para quem quer supervisionar. |
| D12 | Quality Gate + QA redundante? | **QG condicional + QA sempre** | QG só quando story tem campo `quality_gate`. QA sempre como safety net funcional. |
| D13 | Contexto desatualizado da stack | **Stack Research obrigatória** | Context7 puxa docs atuais. Resolve problemas de APIs desatualizadas. |

## Pipeline (6 Fases)

```
PRD/Epic/Stories (entry point flexível)
    │
    ▼
[DC-0] Entry Point Resolution
    │  Detecta: PRD? Epic? Stories?
    │  Valida artefatos
    ▼
[DC-1] Epic & Story Creation (pulável)  ─┐
    │  PRD → @pm cria epic → @sm cria     │ paralelo
    │  stories → @po valida                │
[DC-2] Stack Research                    ─┘
    │  Detecta stack (package.json, etc.)
    │  Context7 → docs atuais de cada lib
    │  Gera stack-context.md
    ▼
[DC-3] Wave Execution (SEQUENTIAL, YOLO)
    │  Agrupa stories em waves por dependência
    │  Executa SEQUENCIALMENTE (uma por vez)
    │
    ├─ Wave 1: [Story A, Story B] (sequencial, subagent por story)
    │   ├─ Agent(story_A) → dev → QG? → QA → commit ✓
    │   └─ Agent(story_B) → dev → QG? → QA → commit ✓
    │
    ├─ Wave Gate (dependency check)
    │
    ├─ Wave 2: [Story C] (depende de A)
    │   └─ Agent(story_C) → dev → QG? → QA → commit ✓
    │
    ▼
[DC-4] Consolidation & Report
    │  Merge results
    │  Gera dev-cycle-report.md
    ▼
[DC-5] Product Validation (pulável)
    │  Modos: auto | skip | elicit | standalone
    │  Playwright: Discovery → Test Plan → Execution → Consolidation
    │  Verdict: APPROVED | APPROVED_WITH_CONDITIONS | REJECTED
    ▼
  DONE → retorna ao caller
```

## Subagent Execution Model (DC-3) — v2.0.0

```
[Subagent - contexto isolado, branch atual]
    │
    ├─ Recebe: story file + stack-context.md + relevant files
    │  (sem worktree — trabalha no branch atual, vê código das stories anteriores)
    │
    ├─ STEP 1: Dev executa story (YOLO — zero perguntas)
    │   Executor dinâmico: @dev | @data-engineer | @ux-design-expert
    │   (baseado em keywords da story)
    │
    ├─ STEP 2: Quality Gate (CONDICIONAL)
    │   Só roda se story tem campo quality_gate
    │
    ├─ STEP 3: QA (SEMPRE)
    │   @qa valida acceptance criteria
    │
    ├─ STEP 4: Update Story Progress (ON PASS)
    │   Marca AC checkboxes [x], popula File List, status → Done
    │
    ├─ STEP 5: Commit (ON PASS)
    │   Conventional commit: feat: {title} [Story {id}]
    │
    └─ Retorna: { status, files_changed, qa_verdict }

Vantagens v2.0.0 vs v1.x:
  - Zero merge conflicts (sequencial, sem worktree)
  - Contexto do orchestrador limpo (subagent descartado após retorno)
  - Cada story vê o código commitado das anteriores
  - YOLO: fire and forget
```

## Integration Points

| Consumer | Ponto de Integração | Como |
|----------|---------------------|------|
| sottani-forge | Greenfield Phase 10 (Execution) | Passa PRD/stories, dev-cycle executa e retorna relatório |
| sottani-forge | Brownfield BF-7 (Execution) | Fase CORE non-skippable do brownfield |
| Qualquer squad | Direto | Passa stories, recebe relatório |

## Component Map

| Componente | Tipo | Responsabilidade |
|------------|------|------------------|
| cycle-chief | Agent | Entry agent, orchestrador do pipeline |
| resolve-entry-point | Task | DC-0: Detecta e valida entry point |
| create-stories | Task | DC-1: Orquestra @pm/@sm/@po para criação |
| research-stack | Task | DC-2: Context7 + codebase scan |
| execute-wave | Task | DC-3: Orquestração de waves sequenciais |
| execute-story | Task | DC-3: Inner — o que cada subagent executa |
| consolidate-report | Task | DC-4: Merge results e relatório final |
| validate-product | Task | DC-5: Orquestra product validation |
| wf-dev-cycle | Workflow | Pipeline principal (6 fases) |
| wf-product-validation | Workflow | DC-5: Playwright-based product validation |

## What This Squad Does NOT Own

- Agents próprios (usa AIOX agents)
- Worktree management (removido na v2.0.0)
- Mind clones (operacional, não expert)
- PRD/Architecture/Design (delegados a respectivos squads)
