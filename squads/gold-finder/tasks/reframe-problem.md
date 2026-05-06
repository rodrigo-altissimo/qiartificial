# Reframe Problem

**Task ID:** `reframe-problem`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Reframe Problem |
| **status** | `pending` |
| **responsible_executor** | problem-reframer |
| **execution_type** | `Agent` |
| **input** | Problem statement + complexity assessment |
| **output** | Reformulated problem + atomic functions list |
| **action_items** | 6 steps |
| **acceptance_criteria** | 5 criteria |

**Estimated Time:** 2-5 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | problem-reframer |
| **Rationale** | Requires analytical reasoning to decompose problems into functions |

## Overview

Transforms the user's problem from a solution-oriented description into a
function-oriented description, then decomposes it into atomic functions.
This is the foundation that all downstream agents (layer-miner, cross-pollinator,
solution-ranker) depend on.

## Input

- **problem_statement** (string)
  - Description: Original user problem text
  - Required: Yes
  - Source: triage-problem handoff

- **complexity_assessment** (object)
  - Description: Scored complexity from triage
  - Required: Yes
  - Source: triage-problem output

- **reformulation_patterns** (file)
  - Description: Reformulation patterns reference
  - Required: Yes
  - Source: `data/reformulation-patterns.yaml`

## Output

- **reframing_output** (object)
  - Description: Complete reformulation with atomic functions
  - Format:
    ```yaml
    original_problem: "{verbatim user input}"
    reformulated_problem: "{function-oriented description}"
    why_chain:
      - level_1: "{surface need}"
      - level_2: "{deeper need}"
      - level_3: "{root need}"
    atomic_functions:
      - id: AF-001
        name: "{Verb + Object}"
        description: "{what this function does}"
        input_type: "{what it takes in}"
        output_type: "{what it produces}"
        priority: critical | important | nice-to-have
        current_solution: "{what user currently uses}"
        constraints: [...]
    assumptions:
      - assumption: "{text}"
        status: confirmed | unconfirmed | potentially_obsolete
    constraints_global:
      budget: "{amount or 'no constraint'}"
      tech_stack: "{languages/tools}"
      team_size: "{number}"
      timeline: "{deadline}"
    ```

## Action Items

### Step 1: Load Reformulation Patterns

Read `data/reformulation-patterns.yaml` to load available techniques.

### Step 2: Apply Solution-to-Function Inversion (RF-001)

Strip all tool/product names from the problem statement. Replace each
with the underlying function it serves.

**Before:** "I need Notion for project management"
**After:** "I need to organize tasks, track progress, and collaborate with my team"

### Step 3: Apply Why-Chain Decomposition (RF-002)

Ask "why" 3-5 times to get from surface problem to root need.
Document each level of the chain.

### Step 4: Extract Atomic Functions (RF-004 + RF-005)

Using Verb Extraction and Input-Output Mapping:

1. List every verb/action in the reformulated problem
2. Group into distinct functions
3. For each function, define: input, output, priority
4. Assign current solution (if any)
5. Document constraints per function

Ensure at least 3 atomic functions are extracted.

### Step 5: Surface Assumptions

Identify all implicit assumptions in the original problem:
- What does the user take for granted?
- Which assumptions might be obsolete?
- Flag potentially obsolete assumptions for layer-miner

### Step 6: Validate Against Checklist

Run `checklists/reframing-quality.md` to verify output quality.

## Acceptance Criteria

- [ ] **AC-1:** Reformulated problem contains zero tool/product names
- [ ] **AC-2:** At least 3 atomic functions extracted with complete fields
- [ ] **AC-3:** Each atomic function has input_type, output_type, and priority
- [ ] **AC-4:** Why-chain has at least 3 levels
- [ ] **AC-5:** Reframing quality checklist passes

## Dependencies

### Depends On (Upstream)

- `triage-problem` — Provides problem statement and complexity assessment

### Required By (Downstream)

- `mine-layers` — Uses atomic functions to search at each layer
- `cross-pollinate` — Uses atomic functions to map to other industries
- `rank-solutions` — Uses atomic functions to evaluate technical fit

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `mine-layers` + `cross-pollinate` (parallel) |
| **Trigger** | Reframing validated |
| **Executor** | layer-miner + cross-pollinator |

### Handoff Package

- **reframing_output**: Complete reformulation with atomic functions
- **mode**: full or condensed (from triage)

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
