# Execute Wave

**Task ID:** `execute-wave`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 2.0.0
**Last Updated:** 2026-03-10
**Phase:** DC-3 (Outer — Wave Orchestration)

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Execute Wave |
| **status** | `pending` |
| **responsible_executor** | cycle-chief |
| **execution_type** | `Agent` |
| **input** | Story files, stack-context.md, dependency map |
| **output** | wave-results.yaml |
| **action_items** | 6 steps |
| **acceptance_criteria** | 6 criteria |

**Skippable:** No

## Overview

Orchestrate the execution of stories grouped in waves by dependency. Stories execute **sequentially** (one at a time), each in its own **subagent** for context isolation. No worktree isolation — each story builds directly on the previous one's committed code. Wave gates validate integrity between waves.

**Design rationale (v2.0.0):** Sequential execution eliminates merge conflicts and context bloat from parallel worktrees. Subagent-per-story keeps the orchestrator's context clean (only results come back). Each story commits before the next starts, so the codebase is always in a consistent state.

## Execution Mode

This task operates in **YOLO mode by default**:
- **Zero human interaction** during execution
- **No confirmation prompts** between stories or waves
- **Automatic retry** on failure (max 3 per story)
- **Wave plan displayed** but NOT waiting for approval — informational only
- **Checklist marking** is automatic after each step completes

Override: Only `*run --interactive` pauses for user confirmation at wave gates.

## Input

- **story_files** (array of paths, required)
  - Description: Paths to all story files to execute
- **stack-context.md** (markdown, required)
  - Source: DC-2 output
- **dependency_map** (optional)
  - Description: Story-to-story dependencies. If not provided, analyze from story files.

## Output

- **wave-results.yaml** (yaml)
  - Format:
    ```yaml
    wave_execution:
      total_stories: N
      total_waves: N
      execution_mode: sequential
      results:
        wave_1:
          stories:
            - id: "story-1"
              status: pass | fail
              files_changed: [...]
              qa_verdict: "all AC met"
              retries: 0
            - id: "story-2"
              status: pass | fail
              files_changed: [...]
              qa_verdict: "all AC met"
              retries: 0
          gate_verdict: pass | fail
        wave_2:
          stories: [...]
          gate_verdict: pass | fail
      summary:
        passed: N
        failed: N
        skipped: N
    ```

## Action Items

### Step 1: Analyze Dependencies

Read all story files and build dependency graph:
- Parse `depends_on` or `dependencies` fields in stories
- Detect implicit dependencies (shared files, sequential features)
- If no dependencies declared → all stories go in Wave 1

**Veto:** Circular dependencies detected → BLOCK, report to user.

> **Executor Phase:** Agent (dependency analysis may require interpreting implicit dependencies from shared files)

**Checklist:**
- [ ] All story files read
- [ ] Dependency graph built
- [ ] No circular dependencies

### Step 2: Group into Waves

Apply topological sort to create waves:
- Wave 1: Stories with no dependencies
- Wave 2: Stories that depend on Wave 1 stories
- Wave N: Stories that depend on Wave N-1 stories

Display wave plan (informational — do NOT wait for approval):
```
Wave Plan:
  Wave 1: [story-1, story-2, story-3] (3 stories, sequential)
  Wave 2: [story-4] (depends on story-1)
  Wave 3: [story-5] (depends on story-4)
Total: 5 stories across 3 waves. Executing sequentially.
```

> **Executor Phase:** Worker-eligible — topological sort is deterministic.

**Checklist:**
- [ ] Topological sort applied
- [ ] Wave plan displayed
- [ ] Proceeding without waiting for approval (YOLO)

### Step 3: Execute Each Wave SEQUENTIALLY

For each wave, execute stories **one at a time** via subagent:

```
FOR EACH wave IN waves:
  FOR EACH story IN wave.stories (SEQUENTIAL — one at a time):

    # Launch subagent for context isolation
    result = Agent(
      prompt: "Execute story following tasks/execute-story.md
               Story: {story_file}
               Stack context: {stack-context.md path}
               Mode: yolo (zero questions, execute fully)",
      # NO isolation: "worktree" — works on current branch directly
      # Subagent commits before returning
    )

    # Collect result from subagent
    wave.results.append(result)

    # Log progress
    Log: "Story {story.id}: {result.status} ({result.qa_verdict})"

    # FAIL-FAST within wave: if story has downstream dependents that fail,
    # mark dependents as SKIPPED immediately
  END FOR (next story in this wave)

  # Wave Gate (Step 4)
  Execute wave gate validation

  # Log wave completion
  Log: "Wave {N} complete: {passed}/{total} passed."

  Proceed to next wave
END FOR
```

**CRITICAL:** Each subagent works on the **current branch state**. Since stories execute sequentially, each story sees the committed code from all previous stories. No merge conflicts possible.

> **Executor Phase:** Agent (launches subagents sequentially, collects results)

**Checklist:**
- [ ] Stories executed one at a time
- [ ] Each story in its own subagent (context isolation)
- [ ] Each story committed before next starts
- [ ] Progress logged after each story

### Step 4: Wave Gate Validation

Between waves, validate:
- All stories in current wave have completed (pass or fail)
- Failed stories that have downstream dependents → skip those dependents
- Failed stories without dependents → log but don't block next wave

**No integration check needed** — sequential execution on same branch guarantees consistency.

**Checklist:**
- [ ] All stories in wave completed
- [ ] Downstream dependents of failed stories marked SKIPPED
- [ ] Wave gate verdict recorded

### Step 5: Collect and Write Results

Aggregate all wave results into `wave-results.yaml`:
- Per-story: status, files_changed, qa_verdict, retry_count
- Per-wave: gate_verdict
- Summary: total passed, failed, skipped

**Checklist:**
- [ ] wave-results.yaml written
- [ ] All stories accounted for
- [ ] Summary totals correct

### Step 6: Log Execution Summary

Display final summary:
```
DC-3 Wave Execution Complete
  Waves: {N}
  Stories: {passed}/{total} passed, {failed} failed, {skipped} skipped
  Mode: sequential (subagent per story)
  Conflicts: 0 (sequential execution)
```

## Acceptance Criteria

- [ ] **AC-1:** Stories correctly grouped into waves by dependency
- [ ] **AC-2:** Each story executed via subagent (Agent tool, NO worktree isolation)
- [ ] **AC-3:** Stories executed SEQUENTIALLY within each wave (one at a time)
- [ ] **AC-4:** Wave gate validates between each wave
- [ ] **AC-5:** Failed story dependents correctly marked as skipped
- [ ] **AC-6:** wave-results.yaml generated with complete structure

## Veto Conditions

- Circular dependencies in story graph → BLOCK, report specific cycle
- stack-context.md missing → BLOCK, run DC-2 first
- No story files provided → BLOCK, run DC-0/DC-1 first
- Launching stories in parallel → VETO, must be sequential
- Asking user for confirmation during execution → VETO (YOLO mode)

## Error Handling

### Subagent Timeout
- **Trigger:** Story execution exceeds timeout
- **Recovery:** Mark as FAIL, proceed to next story. Retry in next attempt if max_retries not reached.

### Story Failure
- **Trigger:** Story fails after max retries (3)
- **Recovery:** Mark as FAIL, check if downstream dependents exist, mark them SKIPPED. Continue with remaining stories.

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `consolidate-report` (DC-4) |
| **Trigger** | All waves completed |
| **Executor** | cycle-chief |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | 2026-03-10 | **BREAKING:** Sequential execution replaces parallel. Removed worktree isolation. Added YOLO mode. Subagent per story for context isolation. Added per-step checklists. Added Step 6 summary. |
| 1.1.0 | 2026-03-10 | Added executor phase annotations |
| 1.0.0 | 2026-03-10 | Initial version — parallel worktree execution |

---

_Task Version: 2.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Phase: DC-3 (Wave Execution — Outer Orchestration)_
