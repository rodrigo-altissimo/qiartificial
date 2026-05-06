# Compile Report

**Task ID:** `compile-report`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Compile Report |
| **status** | `pending` |
| **responsible_executor** | gold-chief |
| **execution_type** | `Agent` |
| **input** | Ranking results + reframing output + all pipeline data |
| **output** | Complete Gold Finder report with recommendations |
| **action_items** | 6 steps |
| **acceptance_criteria** | 5 criteria |

**Estimated Time:** 3-8 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | gold-chief |
| **Rationale** | Orchestrator synthesizes all agent outputs into coherent report |

## Overview

Synthesizes outputs from all pipeline agents into a comprehensive
final report following the report template. Includes ranked recommendations
with score breakdowns, trade-off map, cost analysis, and next steps.

## Input

- **reframing_output** (object)
  - Description: Reformulated problem + atomic functions
  - Required: Yes
  - Source: reframe-problem output

- **ranking_results** (object)
  - Description: Scored and ranked solutions
  - Required: Yes
  - Source: rank-solutions output

- **layer_mining_results** (object)
  - Description: Solutions per layer + obsolete premises
  - Required: Yes (full mode) / No (condensed mode)
  - Source: mine-layers output

- **cross_pollination_results** (object)
  - Description: Cross-industry solutions
  - Required: Yes
  - Source: cross-pollinate output

- **final_report_template** (file)
  - Description: Report template
  - Required: Yes
  - Source: `templates/final-report-template.md`

- **recommendation_card_template** (file)
  - Description: Recommendation card template
  - Required: Yes
  - Source: `templates/recommendation-card-template.md`

- **trade_off_map_template** (file)
  - Description: Trade-off map template
  - Required: Yes
  - Source: `templates/trade-off-map-template.md`

## Output

- **final_report** (markdown)
  - Description: Complete Gold Finder report
  - Format: Follows `templates/final-report-template.md`

## Action Items

### Step 1: Load Templates

Read all 3 templates:
- `templates/final-report-template.md`
- `templates/recommendation-card-template.md`
- `templates/trade-off-map-template.md`

### Step 2: Write Executive Summary

Synthesize the problem, approach, and key findings into 2-3 sentences.
Include: mode used, number of solutions evaluated, top recommendation.

### Step 3: Generate Recommendation Cards

For the top 3-5 ranked solutions, create detailed recommendation cards:
- Full score breakdown with justifications
- Cost analysis
- Implementation path
- Risks and mitigations

### Step 4: Create Trade-Off Map

Build the comparison table showing all solutions vs mainstream:
- Score comparison across all 5 dimensions
- Decision matrix by priority
- Cost-of-convenience analysis
- Function coverage map

### Step 5: Compile Supplementary Sections

- Obsolete premises detected
- Layers explored with solution counts
- Cross-pollination sources and best finds
- Next steps (actionable, specific)

### Step 6: Run Quality Checklist

Validate against `checklists/report-quality.md`:
- All structural sections present
- Scoring integrity verified
- No fabricated solutions
- User-actionable recommendations

## Acceptance Criteria

- [ ] **AC-1:** Report follows final-report-template.md structure
- [ ] **AC-2:** Top 3-5 solutions with complete recommendation cards
- [ ] **AC-3:** Trade-off map comparing all solutions + mainstream
- [ ] **AC-4:** Report quality checklist passes
- [ ] **AC-5:** Next steps are specific and actionable

## Dependencies

### Depends On (Upstream)

- `reframe-problem` — Reformulated problem and atomic functions
- `rank-solutions` — Ranked solutions with scores
- `mine-layers` — Layer analysis (full mode)
- `cross-pollinate` — Cross-industry findings

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `export-report` (optional) |
| **Trigger** | Report compiled and validated |
| **Executor** | gold-chief |

### Handoff Package

- **final_report**: Complete markdown report

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
