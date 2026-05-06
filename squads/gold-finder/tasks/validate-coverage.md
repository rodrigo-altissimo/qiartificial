# Validate Coverage

**Task ID:** `validate-coverage`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Validate Coverage |
| **status** | `pending` |
| **responsible_executor** | gold-chief |
| **execution_type** | `Agent` |
| **input** | Layer mining results + cross-pollination results + atomic functions |
| **output** | Coverage validation result with gap analysis |
| **action_items** | 4 steps |
| **acceptance_criteria** | 3 criteria |

**Estimated Time:** 1-3 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | gold-chief |
| **Rationale** | Orchestrator validates completeness across all agent outputs |

## Overview

Validates that the combined outputs from layer-miner and cross-pollinator
provide adequate coverage across abstraction layers and industries.
Identifies gaps where additional research may be needed.

## Input

- **atomic_functions** (array)
  - Description: Functions from reframing
  - Required: Yes

- **layer_mining_results** (object)
  - Description: Solutions by layer
  - Required: Yes

- **cross_pollination_results** (object)
  - Description: Solutions by industry
  - Required: Yes

## Output

- **coverage_validation** (object)
  - Format:
    ```yaml
    result: adequate | gaps_found
    layer_coverage:
      - layer: "{name}"
        functions_covered: ["AF-001", ...]
        functions_missing: ["AF-003", ...]
    industry_coverage:
      industries_searched: {count}
      industries_productive: {count}
    function_coverage:
      - function: "AF-001"
        solutions_found: {count}
        layers_with_solutions: ["{list}"]
    gaps:
      - type: "uncovered_function"
        function: "AF-003"
        recommendation: "Search specifically for..."
    ```

## Action Items

### Step 1: Map Function Coverage

For each atomic function, check how many solutions were found
and from which layers/industries.

### Step 2: Check Layer Depth

Verify at least 2 layers below user's current layer were explored.
Flag any layers that were skipped.

### Step 3: Check Industry Breadth

Verify at least 3 industries were searched.
Identify if any high-potential industries were missed.

### Step 4: Identify Gaps and Recommend

List any functions with zero or insufficient coverage.
Recommend additional searches if gaps are critical.

## Acceptance Criteria

- [ ] **AC-1:** Every atomic function checked for solution coverage
- [ ] **AC-2:** Layer depth validated (>= 2 layers below comfort zone)
- [ ] **AC-3:** Gaps clearly documented with recommendations

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `rank-solutions` (if coverage adequate) or `cross-pollinate` (if gaps found) |
| **Trigger** | Validation complete |

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
