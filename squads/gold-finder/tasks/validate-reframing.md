# Validate Reframing

**Task ID:** `validate-reframing`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Validate Reframing |
| **status** | `pending` |
| **responsible_executor** | problem-reframer |
| **execution_type** | `Agent` |
| **input** | Reframing output |
| **output** | Validation result (pass/fail) with issues list |
| **action_items** | 3 steps |
| **acceptance_criteria** | 3 criteria |

**Estimated Time:** 1-2 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | problem-reframer |
| **Rationale** | Self-validation against quality checklist |

## Overview

Validates the reframing output against the reframing quality checklist.
Acts as a quality gate before passing reframed problem to downstream agents.

## Input

- **reframing_output** (object)
  - Description: Output from reframe-problem task
  - Required: Yes
  - Source: reframe-problem output

- **reframing_quality_checklist** (file)
  - Description: Quality checklist
  - Required: Yes
  - Source: `checklists/reframing-quality.md`

## Output

- **validation_result** (object)
  - Format:
    ```yaml
    result: pass | fail | revise
    issues: ["{list of issues found}"]
    fixes_applied: ["{list of fixes if auto-corrected}"]
    ```

## Action Items

### Step 1: Load Checklist

Read `checklists/reframing-quality.md`.

### Step 2: Evaluate Each Criterion

Check every item in the checklist against the reframing output.
Document pass/fail for each criterion.

### Step 3: Decide and Report

- **All pass:** Return `pass`
- **Minor issues:** Auto-fix and return `pass` with fixes_applied
- **Major issues:** Return `fail` with issues list; reframe-problem must redo

## Acceptance Criteria

- [ ] **AC-1:** Every checklist item evaluated
- [ ] **AC-2:** Result is clearly pass, fail, or revise
- [ ] **AC-3:** Issues documented if any

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
