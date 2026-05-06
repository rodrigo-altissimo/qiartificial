# Update Epic Progress

**Task ID:** `update-epic-progress`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10
**Phase:** DC-4 (Post-Consolidation)

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Update Epic Progress |
| **status** | `pending` |
| **responsible_executor** | cycle-chief |
| **execution_type** | `Worker` |
| **input** | wave-results.yaml, entry-point-resolution.yaml, epic file |
| **output** | Updated epic file with story checkboxes and progress metrics |
| **action_items** | 4 steps |
| **acceptance_criteria** | 4 criteria |

## Overview

Write-back task that updates the epic file with story completion results. Runs in DC-4 after report consolidation. Marks story checkboxes in the epic, updates progress metrics, and transitions epic status if all stories complete.

**Trigger:** Called by consolidate-report Step 5 (post-report generation).

**Design rationale:** Epic updates happen after all stories complete because they reflect the aggregate state. In sequential execution, the epic update sees the final state of all stories.

## Input

- **wave-results.yaml** (yaml, required)
  - Description: Complete wave execution results
  - Source: DC-3 output
- **entry-point-resolution.yaml** (yaml, required)
  - Description: Entry point metadata (includes epic path if applicable)
  - Source: DC-0 output
- **epic_file** (markdown, conditional)
  - Description: Path to the epic file
  - Source: Derived from entry-point-resolution (only if entry_point.type == "prd" or "epic")
  - Note: If entry_point.type == "stories" and no epic file exists, this task is SKIPPED

## Output

- **Updated epic file** (markdown, in-place)
  - Modifications:
    1. Story checkboxes marked `[x]` for passed stories
    2. Progress summary updated (N/M stories complete)
    3. Epic status updated if all stories pass

## Action Items

### Step 1: Resolve Epic File

```
READ entry-point-resolution.yaml
IF entry_point.type == "prd":
  epic_path = entry_point.epic_path  # created by @pm in DC-1
ELIF entry_point.type == "epic":
  epic_path = entry_point.path
ELIF entry_point.type == "stories":
  # Try to find epic from story metadata
  READ first story file
  IF story has "epic:" or "parent:" field:
    epic_path = resolve from field
  ELSE:
    SKIP this task (no epic to update)
    RETURN { skipped: true, reason: "No epic file found" }
```

> **Executor Phase:** Worker (YAML parse + conditional path resolution)

### Step 2: Mark Story Checkboxes in Epic

Read `wave-results.yaml` and update epic file:

```
FOR EACH story in wave_results.results.*.stories:
  IF story.status == "pass":
    Find matching story reference in epic file
    Patterns to match (ordered by specificity, first match wins):
      - "- [ ] Story {story_id}:"
      - "- [ ] Story {story_id} -"
      - "- [ ] Story {story_id} —"
      - "- [ ] **{story_id}**"
      - "- [ ] **Story {story_id}**"
      - "- [ ] #{story_id}"
      - "- [ ] {story_id}:"
      - "- [ ] {story_id}."
      - "- [ ] {story_id} -"
      - "- [ ] {story_id} —"
      - Fallback regex: /- \[ \] .*{story_id_escaped}.*/

    Log which pattern matched for debugging.
    If fallback regex matched, WARN: "Non-standard format detected for {story_id}. Consider standardizing."
    Replace "[ ]" with "[x]"
  ELIF story.status == "fail":
    Leave as "[ ]"
    Append "(FAILED — see dev-cycle-report.md)" if not already present
```

> **Executor Phase:** Worker (regex find-and-replace on known patterns)

**Veto:** Do NOT mark stories as complete if their QA verdict was `fail`. Only mark `pass` stories.

### Step 3: Update Progress Metrics

Add or update progress summary in epic:

```
total_stories = count all stories in wave-results
passed_stories = count stories with status == "pass"
failed_stories = count stories with status == "fail"
skipped_stories = count stories with status == "skipped"

IF epic has "## Progress" section:
  Update metrics
ELSE:
  Append "## Progress" section before footer

Content:
  ## Progress

  **{passed_stories}/{total_stories} stories complete** ({percentage}%)
  - Passed: {passed_stories}
  - Failed: {failed_stories}
  - Skipped: {skipped_stories}
  - Last updated: {timestamp}
  - Report: dev-cycle-report.md
```

> **Executor Phase:** Worker (arithmetic + string building)

### Step 4: Update Epic Status

```
IF passed_stories == total_stories:
  Update epic status to "Done"
  Append completion note: "Epic completed on {date} via dev-cycle pipeline"
ELIF passed_stories > 0:
  Update epic status to "InProgress"
ELSE:
  Leave status unchanged
```

> **Executor Phase:** Worker (conditional string replace)

**Commit the changes:**
```
git add {epic_path}
git commit -m "chore: update epic progress — {passed}/{total} stories complete"
```

## Acceptance Criteria

- [ ] **AC-1:** All passed stories marked `[x]` in epic file
- [ ] **AC-2:** Failed stories remain `[ ]` with failure annotation
- [ ] **AC-3:** Progress section reflects accurate counts from wave-results
- [ ] **AC-4:** Epic status transitions correctly (Done if all pass, InProgress if partial)

## Veto Conditions

- No epic file found and entry_point.type == "stories" → SKIP (not BLOCK)
- Marking a failed story as complete → VETO
- wave-results.yaml missing or incomplete → BLOCK (DC-3 must complete)
- Epic file is read-only or locked → WARN, log in report

## Error Handling

### No Epic File
- **Trigger:** Entry point was "stories" with no parent epic
- **Recovery:** Skip gracefully, log: "No epic file — story progress already updated in DC-3"

### Story Reference Not Found in Epic
- **Trigger:** Story ID doesn't match any checkbox pattern in epic
- **Recovery:**
  1. Log WARNING per story: "Story {id} not found in epic checkboxes. Patterns tried: {patterns}"
  2. Append to Progress section:
     ### Unmatched Stories
     The following stories were completed but could not be matched to epic checkboxes:
     - {story_id}: {status} (pattern not found)
  3. This ensures NO completed story goes unreported even if checkbox match fails

### Partial Execution
- **Trigger:** Some stories were skipped (dependency failures)
- **Recovery:** Mark skipped stories with "(SKIPPED — dependency {dep_id} failed)" annotation

## Notes

### Canonical Epic Checklist Format

For reliable checkbox matching, epic files SHOULD use this format:

- [ ] Story {id}: {title}

Example:
- [ ] Story 8A.1: Password validation
- [ ] Story 8A.2: Time range settings
- [ ] Story 8J.1: isPending on forms

Non-standard formats are supported via fallback regex but will generate warnings.

- This task runs in DC-4 consolidation after all stories have been executed sequentially.
- Epic updates are the last write operation in the pipeline.
- If the dev-cycle was called with stories entry point and no epic exists, this task silently skips.
- Multiple dev-cycle runs accumulate progress in the same epic (idempotent checkbox marking).

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Phase: DC-4 (Consolidation — Post-Report)_
