# Consolidate Report

**Task ID:** `consolidate-report`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.1.0
**Last Updated:** 2026-03-10
**Phase:** DC-4

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Consolidate Report |
| **status** | `pending` |
| **responsible_executor** | cycle-chief |
| **execution_type** | `Worker` |
| **input** | wave-results.yaml, entry-point-resolution.yaml |
| **output** | dev-cycle-report.md |
| **action_items** | 5 steps |
| **acceptance_criteria** | 6 criteria |

**Skippable:** No

## Overview

Merge results from all waves into a final report. Includes: stories completed, stories failed, files modified, QA verdicts, quality gate results, and execution metrics.

## Input

- **wave-results.yaml** (yaml, required)
  - Source: DC-3 output
- **entry-point-resolution.yaml** (yaml, required)
  - Source: DC-0 output

## Output

- **dev-cycle-report.md** (markdown)
  - Format:
    ```markdown
    # Dev Cycle Report
    Generated: {timestamp}
    Entry Point: {type} — {path}

    ## Summary
    | Metric | Value |
    |--------|-------|
    | Total Stories | N |
    | Passed | N |
    | Failed | N |
    | Skipped | N |
    | Waves | N |
    | Total Retries | N |

    ## Wave Results
    ### Wave 1
    | Story | Status | Executor | QG | QA | Files Changed |
    |-------|--------|----------|----|----|---------------|
    | 3.1   | PASS   | @dev     | -  | PASS | 3 files    |
    | 3.2   | PASS   | @data-engineer | PASS | PASS | 2 files |

    ### Wave 2
    ...

    ## Failed Stories
    ### story-X
    - Reason: QA rejected — AC-3 not met
    - Retries: 3 (max)
    - Details: ...

    ## Files Modified (All Stories)
    | File | Stories | Action |
    |------|---------|--------|
    | src/components/Button.tsx | 3.1 | modified |
    | ...  | ...     | ...    |

    ## Conflicts (if any)
    ...

    ## Recommendations
    ...
    ```

## Action Items

### Step 1: Read Wave Results

Parse `wave-results.yaml` and extract:
- Per-story results (status, files_changed, qa_verdict, retries)
- Per-wave gate verdicts
- Summary metrics

### Step 2: Aggregate File Changes

Combine all files_changed across stories:
- Detect files modified by multiple stories (potential conflicts)
- Build complete file manifest

### Step 3: Generate Report

Write `dev-cycle-report.md` with:
- Summary table
- Per-wave results table
- Failed stories detail section (if any)
- Complete files modified manifest
- Conflict warnings (if any)
- Recommendations for failed stories

### Step 4: Update Epic Progress

Execute `update-epic-progress` task to write back results to the epic file:

1. Resolve epic file from entry-point-resolution.yaml
2. Mark story checkboxes `[x]` for passed stories in epic
3. Update progress metrics (N/M stories complete)
4. Transition epic status (Done if all pass, InProgress if partial)
5. Commit epic changes

```
Execute: tasks/update-epic-progress.md
Input: { wave-results.yaml, entry-point-resolution.yaml }

IF no epic file found (entry_point.type == "stories" without parent):
  SKIP gracefully — story progress was already updated in DC-3
```

> **Executor Phase:** Worker (deterministic write-back — YAML parse + regex replace + git commit)

### Step 5: Return to Caller

Report generation and progress tracking complete. Return path to `dev-cycle-report.md` to the caller (sottani-forge or direct user).

## Acceptance Criteria

- [ ] **AC-1:** Report includes summary with correct counts
- [ ] **AC-2:** All wave results documented per-story
- [ ] **AC-3:** Failed stories have detailed failure reasons
- [ ] **AC-4:** Complete file manifest generated
- [ ] **AC-5:** Epic file updated with story checkboxes and progress (if epic exists)
- [ ] **AC-6:** Epic status transitioned correctly (Done/InProgress)

## Veto Conditions

- wave-results.yaml missing → BLOCK, DC-3 must complete first
- Incomplete wave results (stories without status) → BLOCK, investigate

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | None (terminal) |
| **Trigger** | Report generated |
| **Executor** | Returns to caller |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.1.0 | 2026-03-10 | Added Step 4: update-epic-progress (epic checkboxes, progress metrics, status) |
| 1.0.0 | 2026-03-10 | Initial version |

---

_Task Version: 1.1.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Phase: DC-4 (Consolidation & Report)_
