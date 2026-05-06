# Update Dev Cycle

**Task ID:** `update-dev-cycle`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Update Dev Cycle |
| **status** | `pending` |
| **responsible_executor** | cycle-chief |
| **execution_type** | `Hybrid` |
| **input** | Change request, current squad files |
| **output** | Updated squad files |
| **action_items** | 4 steps |
| **acceptance_criteria** | 3 criteria |

## Overview

Maintenance task for updating the dev-cycle squad. Handles: adding new tasks, modifying pipeline phases, updating config, or adjusting workflow parameters.

## Action Items

### Step 1: Understand Change Request

Elicit from user:
- What needs to change? (task, workflow, config, agent)
- Why? (new requirement, bug fix, optimization)
- Impact scope? (single file, multiple files, pipeline flow)

### Step 2: Read Current State

Read the files that will be affected:
- config.yaml for configuration changes
- Relevant task/workflow files
- ARCHITECTURE.md for structural changes

### Step 3: Apply Changes

Make targeted edits following existing patterns:
- Maintain HO-TP-001 compliance for tasks
- Maintain workflow template compliance for workflows
- Update CHANGELOG.md with the change

### Step 4: Validate

After changes:
- Verify YAML syntax (config.yaml, workflow files)
- Verify task anatomy compliance
- Update version in config.yaml if appropriate

## Acceptance Criteria

- [ ] **AC-1:** Changes applied following existing squad patterns
- [ ] **AC-2:** CHANGELOG.md updated with change entry
- [ ] **AC-3:** All modified files pass syntax validation

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
