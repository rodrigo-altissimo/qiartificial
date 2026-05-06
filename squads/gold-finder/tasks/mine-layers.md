# Mine Layers

**Task ID:** `mine-layers`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Mine Layers |
| **status** | `pending` |
| **responsible_executor** | layer-miner |
| **execution_type** | `Agent` |
| **input** | Atomic functions list + layer map |
| **output** | Solutions discovered at each abstraction layer |
| **action_items** | 6 steps |
| **acceptance_criteria** | 5 criteria |

**Estimated Time:** 3-8 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | layer-miner |
| **Rationale** | Deep analytical work mapping functions to abstraction layers |

## Overview

Descends through 5 abstraction layers (SaaS → Protocol) for each atomic
function, identifying solutions at layers the user wouldn't normally explore.
Also runs obsolete premise detection against each assumption.

## Input

- **atomic_functions** (array)
  - Description: List of atomic functions from reframing
  - Required: Yes
  - Source: reframe-problem output

- **layer_map** (file)
  - Description: Abstraction layer hierarchy
  - Required: Yes
  - Source: `data/layer-map.yaml`

- **obsolete_premises** (file)
  - Description: Obsolete premises catalog
  - Required: Yes
  - Source: `data/obsolete-premises.yaml`

## Output

- **layer_mining_results** (object)
  - Description: Solutions discovered organized by layer and function
  - Format:
    ```yaml
    results_by_layer:
      saas:
        solutions: [{name, url, functions_solved, notes}]
      low_code:
        solutions: [{name, url, functions_solved, notes}]
      framework:
        solutions: [{name, url, functions_solved, notes}]
      runtime:
        solutions: [{name, url, functions_solved, notes}]
      protocol:
        solutions: [{name, url, functions_solved, notes}]
    obsolete_premises_detected:
      - premise_id: "OP-XXX-XXX"
        premise: "{text}"
        impact: "{how it changes solution space}"
    layer_traps_detected:
      - trap: "{name}"
        description: "{how it applies here}"
    total_solutions_found: {number}
    ```

## Action Items

### Step 1: Identify User's Current Layer

From the problem statement and current solutions, determine which
abstraction layer the user is currently operating at (usually SaaS or Low-Code).

### Step 2: Load Layer Map and Obsolete Premises

Read `data/layer-map.yaml` and `data/obsolete-premises.yaml`.

### Step 3: Descend Through Layers

For EACH atomic function, search for solutions at EACH layer below the user's
current layer. Use the search patterns defined in the layer map.

**Process per function per layer:**
1. Apply the layer's search patterns with the function name
2. Identify candidate solutions
3. Note which atomic functions each solution addresses
4. Document the trade-off (convenience lost vs capability gained)

### Step 4: Detect Obsolete Premises

Cross-reference the assumptions surfaced by problem-reframer against
the obsolete premises catalog:
1. Match assumption text against detection signals
2. For each match, document the updated reality
3. Identify new solutions unlocked by removing the obsolete premise

### Step 5: Detect Layer Traps

Check if the user is caught in any common layer traps:
- SaaS Lock-in
- Framework Overhead
- NIH Syndrome
- Premature Abstraction

### Step 6: Compile Layer Mining Results

Organize all discovered solutions by layer, noting:
- Which atomic functions each solves
- At which layer it operates
- Trade-offs compared to user's current layer

## Acceptance Criteria

- [ ] **AC-1:** At least 2 layers below user's current layer explored
- [ ] **AC-2:** Each atomic function searched at each explored layer
- [ ] **AC-3:** Obsolete premises checked (even if none found)
- [ ] **AC-4:** Layer traps evaluated
- [ ] **AC-5:** At least 5 candidate solutions identified across all layers

## Dependencies

### Depends On (Upstream)

- `reframe-problem` — Provides atomic functions and assumptions

### Required By (Downstream)

- `rank-solutions` — Uses discovered solutions for scoring

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `rank-solutions` |
| **Trigger** | Layer mining complete |
| **Executor** | solution-ranker |

### Handoff Package

- **layer_mining_results**: All solutions organized by layer
- **obsolete_premises_detected**: Premises that expand solution space

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
