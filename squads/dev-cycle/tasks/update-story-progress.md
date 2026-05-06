# Update Story Progress

**Task ID:** `update-story-progress`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10
**Phase:** DC-3 (Inner — Post-QA Write-Back)

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Update Story Progress |
| **status** | `pending` |
| **responsible_executor** | Subagent (same as execute-story) |
| **execution_type** | `Worker` |
| **input** | Story file, execution_result (from execute-story) |
| **output** | Updated story file with checkboxes, File List, and status |
| **action_items** | 4 steps |
| **acceptance_criteria** | 4 criteria |

## Overview

Write-back task that updates the story file with execution results. Runs inside the same subagent as execute-story, immediately after QA passes. Marks AC checkboxes, populates File List section, and transitions story status.

**Trigger:** Called by execute-story Step 5 (post-QA, only on pass).

**Design rationale:** The story file update is committed together with the implementation code in the same subagent, so progress is atomically tied to the actual changes.

## Input

- **story_file** (markdown, required)
  - Description: Path to the story file being executed
  - Source: Same as execute-story input
- **execution_result** (yaml, required)
  - Description: Result from execute-story (status, files_changed, qa.ac_results)
  - Source: execute-story output (in-memory during subagent execution)

## Output

- **Updated story file** (markdown, in-place)
  - Modifications:
    1. AC checkboxes marked `[x]` for met criteria
    2. File List section populated with files_changed
    3. Status field updated to `Done` (or `InReview` if partial)

## Action Items

### Step 1: Mark AC Checkboxes

Read `execution_result.qa.ac_results` and update the story file:

```
FOR EACH ac in execution_result.qa.ac_results:
  IF ac.met == true:
    Find matching "- [ ] **AC-{N}:**" line in story file
    Replace "[ ]" with "[x]"
  ELSE:
    Leave as "[ ]" (should not happen — this task only runs on pass)
```

> **Executor Phase:** Worker (regex find-and-replace on known pattern `- [ ] **AC-`)

**Veto:** Do NOT mark checkboxes that don't have a matching ac_result. Only mark what was explicitly validated.

### Step 2: Populate File List Section

Read `execution_result.files_changed` and update/create the File List section:

```
IF story has "## File List" section:
  Clear existing content below header
ELSE:
  Append "## File List" section before "---" footer

FOR EACH file in execution_result.files_changed:
  Append: "- `{file.path}` — {file.action}"
```

Output format in story:
```markdown
## File List

- `src/components/Button.tsx` — modified
- `src/components/Button.test.tsx` — created
- `src/styles/button.css` — modified
```

> **Executor Phase:** Worker (string building from structured data)

### Step 3: Update Status Field

Update the story's status based on execution result:

```
IF execution_result.status == "pass":
  Find "status:" field in story frontmatter or Task Anatomy table
  Update to "Done"
ELIF execution_result.status == "fail":
  Do NOT update (this step should not run on fail — see veto)
```

> **Executor Phase:** Worker (regex replace on known field pattern)

### Step 4: Commit Updated Story

Amend the existing implementation commit to include story progress:

```
git add {story_file_path}
git commit --amend --no-edit
```

> **Executor Phase:** Worker (git command)

**Note:** This amends the same commit from execute-story Step 2 (the `feat: {story title} [Story {story_id}]` commit), keeping implementation + progress tracking atomic.

## Acceptance Criteria

- [ ] **AC-1:** All met AC checkboxes marked `[x]` in story file
- [ ] **AC-2:** File List section populated with all files_changed
- [ ] **AC-3:** Story status updated to `Done`
- [ ] **AC-4:** Story changes included in the implementation commit

## Veto Conditions

- Execution result status is `fail` → SKIP this task entirely (do not update story on failure)
- AC checkbox not found in story file → WARN, continue with remaining checkboxes
- File List section cannot be created (malformed story) → WARN, log in execution_result

## Error Handling

### Malformed Story File
- **Trigger:** Story file doesn't have recognizable AC checkbox pattern
- **Recovery:** Log warning, skip checkbox marking, continue with File List and status

### Git Amend Failure
- **Trigger:** `git commit --amend` fails
- **Recovery:** Create new commit instead: `chore: update story progress [Story {story_id}]`

## Notes

- This task runs **inside the subagent** alongside execute-story. It is NOT a separate phase.
- The story file update is committed together with implementation changes.
- On story FAIL, this task is skipped — the story file remains unchanged.
- On retry (execute-story goes back to Step 2), previous progress is overwritten on next pass.

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Phase: DC-3 (Wave Execution — Inner Subagent, Post-QA)_
