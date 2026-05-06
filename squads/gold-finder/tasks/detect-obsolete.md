# Detect Obsolete Premises

**Task ID:** `detect-obsolete`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Detect Obsolete Premises |
| **status** | `pending` |
| **responsible_executor** | layer-miner |
| **execution_type** | `Agent` |
| **input** | Assumptions from reframing + obsolete premises catalog |
| **output** | List of detected obsolete premises with impact analysis |
| **action_items** | 4 steps |
| **acceptance_criteria** | 3 criteria |

**Estimated Time:** 1-3 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | layer-miner |
| **Rationale** | Requires domain knowledge to match assumptions against known obsolete premises |

## Overview

Cross-references the assumptions surfaced during problem reframing against
a catalog of known obsolete premises in tech. When an obsolete premise is
detected, it expands the solution space by removing artificial constraints.

This task is typically executed as a sub-task within mine-layers, but can
also be invoked independently.

## Input

- **assumptions** (array)
  - Description: Assumptions from reframing output
  - Required: Yes
  - Source: reframe-problem output

- **obsolete_premises** (file)
  - Description: Obsolete premises catalog
  - Required: Yes
  - Source: `data/obsolete-premises.yaml`

## Output

- **obsolete_detection_results** (object)
  - Format:
    ```yaml
    detected:
      - premise_id: "OP-XXX-XXX"
        premise: "{text}"
        was_true_until: "{date}"
        reality_now: "{current reality}"
        unlock: "{what this enables}"
        new_solutions_to_explore: ["{solution categories}"]
    not_detected:
      count: {number}
      note: "All other assumptions appear current"
    ```

## Action Items

### Step 1: Load Obsolete Premises Catalog

Read `data/obsolete-premises.yaml` to load all known obsolete premises
with their detection signals.

### Step 2: Match Assumptions Against Catalog

For each assumption from the reframing:
1. Compare against detection_signals of each premise
2. Use semantic matching (not just keyword matching)
3. Consider the problem domain context

### Step 3: Analyze Impact

For each matched obsolete premise:
1. Document what was true and when it changed
2. Describe the current reality
3. List new solution categories that become available
4. Estimate impact on the solution space (high/medium/low)

### Step 4: Report Results

Compile findings, even if no obsolete premises were detected.
A null result is valid — document it as "all assumptions appear current."

## Acceptance Criteria

- [ ] **AC-1:** Every assumption checked against the catalog
- [ ] **AC-2:** Each detected premise includes impact analysis
- [ ] **AC-3:** Results documented (even if zero premises detected)

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `mine-layers` (sub-task return) or `rank-solutions` |
| **Trigger** | Detection complete |
| **Executor** | layer-miner or solution-ranker |

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
