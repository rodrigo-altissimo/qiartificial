# Execute Story

**Task ID:** `execute-story`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 2.0.0
**Last Updated:** 2026-03-10
**Phase:** DC-3 (Inner — Subagent Execution)

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Execute Story |
| **status** | `pending` |
| **responsible_executor** | Subagent (dynamic: @dev, @data-engineer, or @ux-design-expert) |
| **execution_type** | `Agent` |
| **input** | Story file, stack-context.md, relevant source files |
| **output** | { status, files_changed, qa_verdict } |
| **action_items** | 5 steps |
| **acceptance_criteria** | 6 criteria |

## Overview

This task defines what each subagent executes for a single story. It's the inner loop of DC-3 — one instance per story, executed **sequentially**. The subagent receives a story, implements it, optionally runs a quality gate, always runs QA, and commits before returning.

**CRITICAL:** This task runs in a subagent for **context isolation** (orchestrator stays clean). The subagent works directly on the **current branch** — no worktree. Since stories execute sequentially, the subagent sees all previously committed code.

**YOLO MODE:** This task executes fully autonomously. Zero questions to the user. All decisions are made by the executor based on the story's AC and stack-context.md.

## Input

- **story_file** (markdown, required)
  - Description: Path to the story file to implement
- **stack-context.md** (markdown, required)
  - Description: Current stack documentation from DC-2
- **relevant_source_files** (array of paths, optional)
  - Description: Source files relevant to this story (for context)

## Output

- **execution_result** (yaml)
  - Format:
    ```yaml
    story_execution:
      story_id: "3.1"
      status: pass | fail
      executor: "@dev"  # or @data-engineer, @ux-design-expert
      files_changed:
        - path: "src/components/Button.tsx"
          action: modified
        - path: "src/components/Button.test.tsx"
          action: created
      quality_gate:
        ran: true | false
        verdict: pass | fail | skipped
        reviewer: "@architect"
      qa:
        verdict: pass | fail
        ac_results:
          - ac: "AC-1: Button renders with correct props"
            met: true
          - ac: "AC-2: Button handles click events"
            met: true
      retries: 0
    ```

## Action Items

### Step 1: Determine Executor

Analyze story file keywords to assign executor:

```
IF story contains keywords: ["database", "schema", "migration", "RLS", "SQL", "table", "index"]:
  executor = @data-engineer
ELIF story contains keywords: ["UI", "UX", "design", "component", "layout", "styling", "CSS", "frontend"]:
  executor = @ux-design-expert
ELSE:
  executor = @dev  # default
```

Read the story file completely. Read stack-context.md for current library patterns.

### Step 2: Implement Story

Execute as the assigned executor:

1. Read the story's Acceptance Criteria carefully
2. Read stack-context.md for relevant library patterns
3. Implement the story following the AC exactly
4. Run tests if applicable (`npm test`, `pytest`, etc.)
5. Run lint if applicable (`npm run lint`, etc.)
6. Stage and commit changes with conventional commit message:
   `feat: {story title} [Story {story_id}]`

**Veto:** Do NOT implement features not specified in the AC. Follow AC exactly.

### Step 3: Quality Gate (CONDITIONAL)

```
IF story_file has field "quality_gate":
  Run quality gate as specified:
  - Read quality_gate.reviewer (e.g., @architect)
  - Validate against quality_gate.criteria
  - Verdict: pass | fail
  IF fail:
    Fix issues and re-implement (back to Step 2)
    Max 2 QG iterations
ELSE:
  quality_gate.ran = false
  quality_gate.verdict = skipped
```

### Step 4: QA Validation (ALWAYS)

QA runs regardless of quality gate:

1. **@qa** validates each Acceptance Criterion:
   - Read each AC from the story
   - Check if implementation satisfies it
   - Record: met (true/false) per AC
2. Overall verdict:
   - ALL AC met → verdict: pass
   - ANY AC not met → verdict: fail

```
IF qa.verdict == "fail":
  IF retries < max_retries (3):
    Go back to Step 2 with QA feedback
    retries += 1
  ELSE:
    Return fail with detailed QA report
```

### Step 5: Update Story Progress (ON PASS ONLY)

**Trigger:** Only runs when `qa.verdict == "pass"` (final, no more retries).

Execute `update-story-progress` task with current execution result:

1. Mark AC checkboxes `[x]` in the story file for all met criteria
2. Populate File List section with files_changed
3. Update story status to `Done`
4. Amend the implementation commit to include story file changes

```
IF qa.verdict == "pass":
  Execute: tasks/update-story-progress.md
  Input: { story_file, execution_result }
ELSE:
  SKIP (story file remains unchanged on failure)
```

> **Executor Phase:** Worker (deterministic write-back — regex replace + git amend)

**Note:** This step ensures the story file reflects implementation progress. The update is committed atomically with the implementation code.

## Error Handling

### Test Failure
- **Trigger:** Tests fail after implementation
- **Recovery:** Fix failing tests, re-run. If tests were already failing before implementation, note in report.

### QA Rejection
- **Trigger:** QA says AC not met
- **Recovery:** Re-read AC, fix implementation, re-run QA (counts as retry)

### Build Failure
- **Trigger:** Project doesn't build after changes
- **Recovery:** Fix build errors. Check stack-context.md for breaking changes.

## Acceptance Criteria

- [ ] **AC-1:** Correct executor assigned based on story keywords
- [ ] **AC-2:** Story implementation satisfies all Acceptance Criteria
- [ ] **AC-3:** Quality Gate ran if story has quality_gate field
- [ ] **AC-4:** QA validated all AC with per-criterion results
- [ ] **AC-5:** Story file updated with checkboxes, File List, and status (on pass)
- [ ] **AC-6:** Zero questions asked to user during execution (YOLO)

## Veto Conditions

- Implementing features not in AC → VETO, revert to AC scope
- Skipping QA → VETO, QA is non-negotiable
- Committing without running tests (if test infrastructure exists) → VETO
- Exceeding max retries (3) → Return FAIL, do not keep retrying
- Asking user any question during execution → VETO (YOLO mode)
- Using worktree isolation → VETO (works on current branch directly)

## Notes

This task runs in a subagent for **context isolation**. The subagent has:
- The current branch state (with all previously committed stories)
- The story file
- The stack-context.md
- Relevant source files for context

Since stories execute **sequentially**, each subagent sees the committed code from all previous stories. No merge conflicts possible.

**YOLO enforcement:** The subagent must make ALL decisions autonomously:
- Executor selection → keyword-based, no confirmation
- Implementation approach → based on AC + stack-context
- Test strategy → run existing tests, add new where applicable
- Commit message → conventional format, automatic

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | 2026-03-10 | **BREAKING:** Removed worktree isolation. Works on current branch. Added YOLO enforcement. Added AC-6. Updated veto conditions. |
| 1.1.0 | 2026-03-10 | Added Step 5: update-story-progress (AC checkboxes, File List, status write-back) |
| 1.0.0 | 2026-03-10 | Initial version |

---

_Task Version: 2.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Phase: DC-3 (Wave Execution — Inner Subagent)_
