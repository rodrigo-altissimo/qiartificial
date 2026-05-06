# Quick Scan

**Task ID:** `quick-scan`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Quick Scan |
| **status** | `pending` |
| **responsible_executor** | cross-pollinator |
| **execution_type** | `Agent` |
| **input** | Atomic functions (quick reframe) |
| **output** | Combined search results + preliminary ranking |
| **action_items** | 5 steps |
| **acceptance_criteria** | 4 criteria |

**Estimated Time:** 3-8 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | cross-pollinator (with solution-ranker inline) |
| **Rationale** | Condensed mode combines search + ranking in one pass |

## Overview

Used in **condensed mode** (complexity < 18). Combines the work of
cross-pollinate and rank-solutions into a single pass. Does a quick
web search across 2-3 industries, then applies scoring immediately
without the full layer-descent analysis.

## Input

- **atomic_functions** (array)
  - Description: Atomic functions from quick reframe
  - Required: Yes
  - Source: reframe-problem output

- **scoring_criteria** (file)
  - Description: Scoring weights
  - Required: Yes
  - Source: `data/scoring-criteria.yaml`

- **cross_pollination_sources** (file)
  - Description: Industry search patterns
  - Required: Yes
  - Source: `data/cross-pollination-sources.yaml`

## Output

- **quick_scan_results** (object)
  - Format:
    ```yaml
    solutions:
      - rank: 1
        name: "{solution name}"
        url: "{url}"
        medal: gold | silver | bronze
        total_score: {0-100}
        brief_justification: "{1-2 sentences}"
        functions_solved: ["AF-001", ...]
    searches_performed: {count}
    industries_checked: ["{list}"]
    ```

## Action Items

### Step 1: Quick Industry Selection

Select top 2-3 most relevant industries for the atomic functions.
Don't exhaustively search all industries — pick the best matches.

### Step 2: Focused Web Search

Execute 5-8 targeted WebSearch queries:
- 2-3 direct function searches
- 2-3 cross-industry searches
- 1-2 "open source alternative" searches

### Step 3: Quick Verification

WebFetch top 3-5 results. Quick verification:
- Does it exist? Is it active?
- Does it solve the core function?
- What's the pricing?

### Step 4: Inline Scoring

Apply the 5-dimension scoring system, but with abbreviated justifications.
Focus on Non-Obviousness and Technical Fit as the most important dimensions.

### Step 5: Return Ranked List

Sort by total score, assign medals, return top 3-5 recommendations.

## Acceptance Criteria

- [ ] **AC-1:** At least 2 industries searched
- [ ] **AC-2:** At least 3 solutions discovered and verified
- [ ] **AC-3:** Each solution scored across 5 dimensions
- [ ] **AC-4:** Results sorted and medals assigned

## Dependencies

### Depends On (Upstream)

- `reframe-problem` — Provides atomic functions

### Required By (Downstream)

- `compile-report` — Uses results for condensed report

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `compile-report` |
| **Trigger** | Quick scan complete |
| **Executor** | gold-chief |

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
