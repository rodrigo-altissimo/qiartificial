# Rank Solutions

**Task ID:** `rank-solutions`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Rank Solutions |
| **status** | `pending` |
| **responsible_executor** | solution-ranker |
| **execution_type** | `Agent` |
| **input** | Solutions from layer-miner + cross-pollinator + scoring criteria |
| **output** | Ranked solutions with scores and medal assignments |
| **action_items** | 6 steps |
| **acceptance_criteria** | 5 criteria |

**Estimated Time:** 3-8 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | solution-ranker |
| **Rationale** | Requires systematic evaluation across 5 weighted dimensions |

## Overview

Takes all solutions discovered by layer-miner and cross-pollinator,
evaluates each across 5 weighted dimensions, calculates total scores,
assigns medals (Gold/Silver/Bronze), and produces a ranked list.

## Input

- **layer_mining_results** (object)
  - Description: Solutions from layer descent
  - Required: Yes
  - Source: mine-layers output

- **cross_pollination_results** (object)
  - Description: Solutions from cross-industry search
  - Required: Yes (can be empty in condensed mode)
  - Source: cross-pollinate output

- **atomic_functions** (array)
  - Description: Functions to evaluate technical fit against
  - Required: Yes
  - Source: reframe-problem output

- **scoring_criteria** (file)
  - Description: Scoring dimensions, weights, and thresholds
  - Required: Yes
  - Source: `data/scoring-criteria.yaml`

## Output

- **ranking_results** (object)
  - Format:
    ```yaml
    ranked_solutions:
      - rank: 1
        name: "{solution name}"
        url: "{url}"
        medal: gold | silver | bronze | unranked
        total_score: {0-100}
        scores:
          non_obviousness: {raw: X, weighted: Y, justification: "..."}
          technical_fit: {raw: X, weighted: Y, justification: "..."}
          cost_efficiency: {raw: X, weighted: Y, justification: "..."}
          implementation_effort: {raw: X, weighted: Y, justification: "..."}
          longevity: {raw: X, weighted: Y, justification: "..."}
        functions_solved: ["AF-001", ...]
        source: "layer-miner | cross-pollinator"
        layer: "{abstraction layer}"
    mainstream_baseline:
      name: "{mainstream solution}"
      total_score: {0-100}
      scores: {same structure}
    total_evaluated: {number}
    total_recommended: {number}
    ```

## Action Items

### Step 1: Load Scoring Criteria

Read `data/scoring-criteria.yaml` for dimensions, weights, rubrics.

### Step 2: Merge Solution Lists

Combine solutions from:
- layer_mining_results (all layers)
- cross_pollination_results (all industries)

Deduplicate if the same solution appears in both.

### Step 3: Identify Mainstream Baseline

Determine what the "obvious" mainstream solution is for this problem.
Score it as the baseline for comparison.

### Step 4: Score Each Solution

For each candidate solution, score across 5 dimensions:

1. **Non-Obviousness (weight 3.0):** Use rubric from scoring criteria.
   Would the user find this alone?

2. **Technical Fit (weight 2.5):** How many atomic functions does it
   solve natively? Use the atomic functions list.

3. **Cost Efficiency (weight 2.0):** Compare TCO against mainstream.
   Include hidden costs.

4. **Implementation Effort (weight 1.5):** How hard to adopt?
   Consider docs quality, learning curve, migration complexity.

5. **Longevity (weight 1.0):** Open source? Active development?
   Community size? Funding stability?

Calculate total: SUM(raw * weight) for each solution.

### Step 5: Apply Minimum Criteria and Medals

Filter out solutions that don't meet minimum criteria:
- Non-Obviousness < 4: exclude (too obvious)
- Technical Fit < 3: exclude (doesn't solve the problem)

Assign medals:
- Gold: score >= 80
- Silver: score 50-79
- Bronze: score 30-49
- Unranked: score < 30

### Step 6: Sort and Finalize

Sort by total score descending. Select top 3-5 for the final report.

## Acceptance Criteria

- [ ] **AC-1:** All 5 dimensions scored for every solution
- [ ] **AC-2:** Weights correctly applied (3.0, 2.5, 2.0, 1.5, 1.0)
- [ ] **AC-3:** Medal thresholds correctly applied
- [ ] **AC-4:** Mainstream baseline scored for comparison
- [ ] **AC-5:** Justification provided for each dimension score

## Dependencies

### Depends On (Upstream)

- `mine-layers` — Provides layer-mined solutions
- `cross-pollinate` — Provides cross-pollinated solutions
- `reframe-problem` — Provides atomic functions for technical fit evaluation

### Required By (Downstream)

- `compile-report` — Uses ranked solutions for final report

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `compile-report` |
| **Trigger** | Ranking complete |
| **Executor** | gold-chief |

### Handoff Package

- **ranking_results**: Complete ranked solutions with scores
- **mainstream_baseline**: Baseline comparison data

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
