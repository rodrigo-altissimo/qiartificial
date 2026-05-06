# Resolve Entry Point

**Task ID:** `resolve-entry-point`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 2.0.0
**Last Updated:** 2026-03-27
**Phase:** DC-0

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Resolve Entry Point |
| **status** | `pending` |
| **responsible_executor** | cycle-chief |
| **execution_type** | `Worker` (prd/epic/stories) · `Agent` (demand — triage requires orchestration) |
| **input** | Entry point path (PRD, Epic, Story files) OR free-text demand |
| **output** | entry-point-resolution.yaml |
| **action_items** | 6 steps (prd/epic/stories) · 8 steps (demand) |
| **acceptance_criteria** | 8 criteria |

## Overview

Detect the type of entry point provided (PRD, Epic, Stories, or Demand) and validate that all required artefacts exist before the pipeline proceeds. This is the first phase (DC-0) and is non-skippable.

When the entry point is a **demand** (free-text description without pre-existing artefacts), DC-0 performs an inline triage: understands the request, runs contextual analyses with specialist agents, classifies complexity, and creates the appropriate artefacts (story or epic) before handing off to the rest of the pipeline.

## Input

- **entry_point** (string, required)
  - Description: Path to the entry point file/directory, OR free-text demand description
  - Examples:
    - `docs/prd/my-feature.md` (PRD)
    - `docs/stories/epic-3/` (Epic)
    - `docs/stories/3.1.story.md` (Stories)
    - `"Preciso adicionar dark mode no meu site"` (Demand)
    - `"O formulário de contato não está enviando emails"` (Demand — bug)

## Output

- **entry-point-resolution.yaml** (yaml)
  - Description: Structured detection result
  - Format:
    ```yaml
    entry_point:
      type: prd | epic | stories | demand
      path: "detected/path"          # null when type=demand
      demand_text: "user description" # only when type=demand
      triage_required: false          # true only when type=demand
      triage_result:                  # only when type=demand
        complexity: simple | medium | complex
        analyses_performed:
          - agent: "@architect"
            finding: "summary of analysis"
          - agent: "@data-engineer"
            finding: "summary of analysis"
        routed_to: "@sm *draft | @pm *create-epic"
        artefacts_created:
          - path: "docs/stories/..."
            type: story | epic
      artefacts:
        - path: "file1.md"
          exists: true
          valid: true
      story_count: N
      skip_creation: true | false
      po_validation: required | skip
    ```

## Action Items

### Step 1: Detect Entry Point Type

Analyze the provided input:
- If input is a path to a file matching `*prd*.md` or contains PRD markers → type: `prd`
- If input is a path to a file matching `*epic*.md` or `*epic*.yaml` → type: `epic`
- If input is a path to story files (`*.story.md`) or a directory containing them → type: `stories`
- If input is free text (not a valid file path, or no matching file exists) → type: `demand`
- If ambiguous → ASK user to clarify

### Step 2: Validate Artefacts Exist

For each detected type, validate:
- **PRD:** File exists, has sections (Problem, Solution, Requirements, Success Metrics)
- **Epic:** File exists, has story references or enough context for story creation
- **Stories:** Files exist, each has Acceptance Criteria section
- **Demand:** Validate that the target project/repo exists (check cwd or ask user)

### Step 3: Count Stories (if applicable)

If type is `stories`, count how many story files are present and validate each has minimum required structure.

If type is `demand`, skip — stories don't exist yet.

### Step 4: Determine Creation Skip

DC-1 NEVER fully skips — it always runs. Only the creation steps are skippable:

- type=`prd` → skip_creation: false (need full epic + story creation)
- type=`epic` → skip_creation: false (need story creation from epic)
- type=`stories` → skip_creation: true (stories exist, skip @pm/@sm, but @po still validates)
- type=`demand` → determined by triage (Step 5d sets this based on complexity)

### Step 5: Elicit PO Validation Preference (prd/epic/stories only)

Ask the user whether @po should validate stories before development begins:

```
"Validar stories com @po antes de iniciar desenvolvimento? (S/n)"
```

- Default: **S (required)** — @po validates all stories
- If user says **n**: po_validation: skip — stories go directly to DC-3 without PO gate
- If execution_mode == yolo AND user already provided flag `--skip-po`: po_validation: skip (no question asked)

This is the ONLY elicitation in DC-0 for prd/epic/stories types. After this answer, pipeline goes full YOLO.

**When type=demand:** Skip this step — triage flow (Steps 5a-5d) handles elicitation differently.

### Step 5a: Understand Demand (demand only)

Gather structured understanding of the user's request:

1. Parse the demand text for intent signals:
   - **Bug/fix signals:** "não funciona", "erro", "bug", "quebrou", "falha"
   - **Feature signals:** "adicionar", "criar", "novo", "implementar", "quero"
   - **Improvement signals:** "melhorar", "otimizar", "refatorar", "atualizar"
   - **Design signals:** "visual", "layout", "UI", "UX", "design", "estilo", "tema"
   - **Data signals:** "banco", "tabela", "migração", "schema", "query", "dados"
   - **Architecture signals:** "arquitetura", "estrutura", "integração", "API", "serviço"

2. If intent is unclear after parsing, ask UP TO 2 clarifying questions:
   - "Pode detalhar o que precisa ser feito?"
   - "Em qual projeto/repo isso se aplica?" (only if not obvious from cwd)

3. Output: structured demand understanding with intent, scope, and domain signals detected.

### Step 5b: Contextual Analysis (demand only, conditional)

Run specialist analyses IN PARALLEL based on domain signals detected in Step 5a:

| Signal Detected | Agent | Analysis |
|----------------|-------|----------|
| Architecture/integration/API/structure | @architect | Quick architecture scan — read key files, identify patterns, assess impact |
| Database/schema/migration/data | @data-engineer | Quick DB scan — read schema, check migrations, assess data impact |
| UI/UX/design/visual/layout | @ux-design-expert | Quick UX scan — read components, identify patterns, assess visual impact |
| Bug/error/failure | @qa | Quick diagnostic — read logs/errors, identify root cause area |

**Rules:**
- Run ONLY the analyses triggered by signals — don't run all 4 by default
- Each analysis is a quick scan (read key files, summarize findings), NOT a full assessment
- Analyses run in PARALLEL via Agent tool (independent of each other)
- If NO signals detected → skip this step entirely (simple feature request)
- Max 1 analysis per domain (don't run @architect twice)

**Output per analysis:**
```yaml
agent: "@architect"
finding: "Next.js App Router, 12 routes, API routes in /app/api/. Change impacts 2 routes."
recommendation: "Isolated change, no architectural risk."
```

### Step 5c: Classify Complexity (demand only)

Based on demand understanding (5a) and analyses (5b), classify:

| Complexity | Criteria | Result |
|-----------|----------|--------|
| **SIMPLE** | 1-2 files, single concern, no cross-cutting impact | 1 story, no QG |
| **MEDIUM** | 3-8 files, single feature, may cross layers (UI+API+DB) | 1-3 stories with QG, PO validation |
| **COMPLEX** | 8+ files, multiple features, architectural impact, cross-system | Epic with stories |

**Heuristics:**
- Bug fix with clear root cause → SIMPLE
- New feature in existing pattern → SIMPLE or MEDIUM
- New feature requiring new patterns → MEDIUM
- Multiple features or new system integration → COMPLEX
- Anything @architect flagged as high-impact → bump up one level

### Step 5d: Create Artefacts and Route (demand only)

Based on complexity classification:

**SIMPLE:**
- Create 1 story via @sm *draft (inline, fast)
- skip_creation: true (story already created)
- po_validation: skip (simple enough to skip PO)
- Pipeline continues: DC-1 (PO skip) → DC-2 → DC-3

**MEDIUM:**
- Create 1-3 stories via @sm *draft
- skip_creation: true (stories already created)
- po_validation: required (PO validates before dev)
- Pipeline continues: DC-1 (@po validates) → DC-2 → DC-3

**COMPLEX:**
- Create epic via @pm *create-epic with demand context + analysis findings
- skip_creation: false (DC-1 creates stories from epic)
- po_validation: required
- Pipeline continues: DC-1 (full: @pm epic → @sm stories → @po validates) → DC-2 → DC-3

### Step 6: Write Resolution

Write `entry-point-resolution.yaml` to the pipeline output directory.

## Acceptance Criteria

- [ ] **AC-1:** Entry point type correctly detected (prd, epic, stories, or demand)
- [ ] **AC-2:** All referenced artefacts validated for existence
- [ ] **AC-3:** skip_creation flag correctly set based on entry point type
- [ ] **AC-4:** po_validation preference captured (required or skip)
- [ ] **AC-5:** entry-point-resolution.yaml written with complete structure
- [ ] **AC-6:** (demand) Triage correctly classifies complexity (simple/medium/complex)
- [ ] **AC-7:** (demand) Contextual analyses run only when relevant signals detected
- [ ] **AC-8:** (demand) Appropriate artefacts created (story or epic) before pipeline continues

## Veto Conditions

- Entry point path does not exist (for prd/epic/stories types) → BLOCK pipeline, report to user
- Entry point type cannot be determined → BLOCK, ask user to clarify
- PRD/Epic file exists but is empty or malformed → BLOCK, report specific issues
- (demand) Demand text is empty or unintelligible → BLOCK, ask user to clarify
- (demand) Target project/repo cannot be determined → BLOCK, ask user to specify
- (demand) Complexity classified as COMPLEX but no @architect analysis was run → BLOCK, run analysis first

## Error Handling

### Missing Entry Point
- **Trigger:** Path does not exist
- **Detection:** File system check
- **Recovery:** Ask user for correct path
- **Prevention:** Validate path before starting pipeline

### Ambiguous Type
- **Trigger:** Path matches multiple types
- **Detection:** Multiple type signals detected
- **Recovery:** Present options to user, ask for confirmation
- **Prevention:** Clear naming conventions

### Demand Triage Failure
- **Trigger:** Specialist analysis agent fails or times out
- **Detection:** Agent tool returns error or no output
- **Recovery:** Skip failed analysis, proceed with available findings. Log warning.
- **Prevention:** Set reasonable timeout per analysis (30s). Triage continues with partial data.

### Demand Classification Uncertainty
- **Trigger:** Signals are mixed or insufficient to classify confidently
- **Detection:** No clear majority signal, or conflicting indicators
- **Recovery:** Default to MEDIUM (safest middle ground — creates stories with PO validation)
- **Prevention:** Ask 1 clarifying question before defaulting

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `create-stories` (DC-1) ‖ `research-stack` (DC-2) — always both in parallel |
| **Trigger** | Resolution complete and valid |
| **Executor** | @pm (if DC-1) or cycle-chief (if DC-2) |

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | 2026-03-27 | Added type=demand with inline triage (Steps 5a-5d). Contextual analysis with @architect/@data-engineer/@ux-design-expert/@qa. Complexity classification (simple/medium/complex). Auto-creation of stories or epics. New ACs (6-8) and veto conditions for demand flow. execution_type now Agent when demand. |
| 1.1.0 | 2026-03-14 | Replaced skip_dc1 with skip_creation + po_validation. Added Step 5 (PO elicitation). Added --skip-po flag support. |
| 1.0.0 | 2026-03-10 | Initial version |

---

_Task Version: 2.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Phase: DC-0 (Entry Point Resolution)_
