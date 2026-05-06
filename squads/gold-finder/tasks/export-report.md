# Export Report

**Task ID:** `export-report`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Export Report |
| **status** | `pending` |
| **responsible_executor** | gold-chief |
| **execution_type** | `Agent` |
| **input** | Final compiled report |
| **output** | Exported report in requested format |
| **action_items** | 3 steps |
| **acceptance_criteria** | 2 criteria |

**Estimated Time:** 1-2 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | gold-chief |
| **Rationale** | Simple formatting task; orchestrator handles delivery |

## Overview

Exports the final report in the user's preferred format. Default is
markdown (displayed in conversation). Can also save to file.

## Input

- **final_report** (markdown)
  - Description: Complete Gold Finder report
  - Required: Yes
  - Source: compile-report output

- **export_format** (string)
  - Description: Desired output format
  - Required: No
  - Default: "markdown" (displayed in conversation)
  - Options: markdown | file

## Output

- **exported_report** (varies)
  - Description: Report in the requested format

## Action Items

### Step 1: Determine Export Format

Check user preference. Default to displaying markdown in conversation.

### Step 2: Format Output

Apply any format-specific adjustments:
- **markdown**: Display directly in conversation
- **file**: Save to a specified path

### Step 3: Deliver

Present the report to the user with a brief summary of findings.

## Acceptance Criteria

- [ ] **AC-1:** Report exported in requested format
- [ ] **AC-2:** All content preserved during export (no truncation)

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
