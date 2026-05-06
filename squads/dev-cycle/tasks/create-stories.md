# Create Stories

**Task ID:** `create-stories`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.1.0
**Last Updated:** 2026-03-10
**Phase:** DC-1
**Optimized By:** *optimize v4.1.0

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Create Stories |
| **status** | `pending` |
| **responsible_executor** | @pm → @sm → @po (sequential delegation) |
| **execution_type** | `Agent` (Hybrid routing — see model_routing) |
| **input** | entry-point-resolution.yaml, PRD or Epic file |
| **output** | Story files in docs/stories/ |
| **action_items** | 4 steps |
| **acceptance_criteria** | 5 criteria |

**Skippable:** No — DC-1 always runs. Creation steps (@pm/@sm) are skipped when stories exist, but @po validation always runs unless explicitly skipped by user (`po_validation: skip`).

## Model Routing

Per-step model assignment based on *optimize D6 analysis (Q1-Q6 decision tree applied).

| Step | Agent | Model | Rationale |
|------|-------|-------|-----------|
| 1 (Route) | cycle-chief | Worker (no LLM) | YAML parse + if/else — deterministic |
| 2a.1 (@pm create-epic) | @pm | **Opus** | PRD synthesis requires deep comprehension; error cascades to all stories |
| 2a.2 (@sm draft stories) | @sm | **Sonnet** | Template-driven decomposition; structured input/output; medium complexity |
| 2a.3 (@po validate) | @po | **Sonnet** | Gatekeeper pattern — binary GO/NO-GO with 10-point checklist; low impact (retry available) |
| 3 (Collect) | cycle-chief | Worker (no LLM) | File listing + score extraction — deterministic |
| 4 (Update YAML) | cycle-chief | Worker (no LLM) | YAML append — deterministic |

**Cost impact:** ~58% reduction on DC-1 ($0.54 → $0.228 per execution).

## Overview

Orchestrate AIOX agents to create and validate stories. The flow depends on the entry point type but @po validation ALWAYS runs unless explicitly skipped:
- **PRD:** @pm creates epic → @sm creates stories → @po validates
- **Epic:** @sm creates stories → @po validates
- **Stories:** @po validates existing stories (creation steps skipped, validation mandatory)

## Input

- **entry-point-resolution.yaml** (yaml, required)
  - Source: DC-0 output
- **PRD or Epic file** (markdown, required)
  - Source: Path from entry-point-resolution

## Output

- **Story files** (markdown)
  - Destination: `docs/stories/`
  - Format: `{epicNum}.{storyNum}.story.md`

## Action Items

### Step 1: Route by Entry Point Type

Read `entry-point-resolution.yaml` and route:

```
IF type == "prd":
  → Execute Step 2a (full flow: @pm → @sm → @po)
ELIF type == "epic":
  → Execute Step 2b (@sm → @po)
ELIF type == "stories":
  → Execute Step 2c (@po validates — skip creation, keep validation)

# PO validation gate (applies to ALL routes):
IF po_validation == "skip":
  → Skip @po validation step in any route above
  → Log: "PO validation skipped by user request"
```

### Step 2a: PRD Flow (@pm → @sm → @po)

1. **@pm** reads PRD and creates Epic
   - Use AIOX agent: `@pm *create-epic`
   - **Model: Opus** (deep PRD comprehension, strategic decomposition)
   - Input: PRD file path
   - Output: Epic file in docs/stories/

2. **@sm** reads Epic and creates Stories
   - Use AIOX agent: `@sm *draft` (for each story)
   - **Model: Sonnet** (template-driven, structured input→output)
   - Input: Epic file
   - Output: Story files in docs/stories/

3. **@po** validates all created Stories
   - Use AIOX agent: `@po *validate-story-draft` (for each story)
   - **Model: Sonnet** (gatekeeper — binary GO/NO-GO, explicit checklist)
   - Input: Each story file
   - Output: GO (score >= 7) or NO-GO (with required fixes)
   - If NO-GO: Return to @sm for fixes, re-validate (max 2 iterations)

### Step 2b: Epic Flow (@sm → @po)

1. **@sm** reads Epic and creates Stories (same as 2a step 2, **Model: Sonnet**)
2. **@po** validates (same as 2a step 3, **Model: Sonnet**)

### Step 2c: Stories Flow (@po validates)

1. **@po** validates existing stories
   - Creation steps skipped (stories already exist)
   - @po validation is MANDATORY by default — only skipped if `po_validation == "skip"` in entry-point-resolution.yaml
   - If `po_validation == "skip"`: log skip and proceed directly to Step 3

### Step 3: Collect Results

Gather all created/validated story files. Record:
- Total stories created
- Validation scores per story
- Any stories that failed validation

### Step 4: Update Entry Point Resolution

Update entry-point-resolution.yaml with:
- story_count: N
- stories_validated: true
- validation_scores: [...]

## Acceptance Criteria

- [ ] **AC-1:** All stories created follow AIOX story template structure
- [ ] **AC-2:** Each story has Acceptance Criteria section
- [ ] **AC-3:** @po validation score >= 7 for all stories (or user override)
- [ ] **AC-4:** Story files written to docs/stories/ with correct naming
- [ ] **AC-5:** Entry point resolution updated with story count

## Veto Conditions

- @po validation fails (score < 7) after 2 retry iterations → BLOCK, escalate to user
- @pm fails to create epic from PRD → BLOCK, report specific issue
- Story has no Acceptance Criteria → BLOCK, require AC before proceeding

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `research-stack` (DC-2) |
| **Trigger** | All stories created and validated |
| **Executor** | cycle-chief |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.2.0 | 2026-03-14 | DC-1 never fully skips. @po validation mandatory by default. Added po_validation gate (required/skip). Replaced skip_dc1 with skip_creation. |
| 1.1.0 | 2026-03-10 | D6 model routing: @sm Opus→Sonnet, @po Opus→Sonnet. Added Model Routing section. 58% cost reduction on DC-1. |
| 1.0.0 | 2026-03-10 | Initial version |

---

_Task Version: 1.2.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Phase: DC-1 (Epic & Story Creation)_
