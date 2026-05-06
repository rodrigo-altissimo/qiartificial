# Delete Dev Cycle

**Task ID:** `delete-dev-cycle`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.1.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Delete Dev Cycle |
| **status** | `pending` |
| **responsible_executor** | cycle-chief |
| **execution_type** | `Worker` |
| **input** | Confirmation from user |
| **output** | Squad removed |
| **action_items** | 3 steps |
| **acceptance_criteria** | 3 criteria |

## Overview

Remove the dev-cycle squad from the AIOX ecosystem. Requires explicit user confirmation due to destructive nature.

## Action Items

### Step 1: Confirm Deletion

**MANDATORY:** Ask user to confirm:
```
WARNING: This will delete the entire dev-cycle squad:
  - squads/dev-cycle/ (all files)
  - .claude/commands/devCycle/ (if exists)
  - Registry entry in ecosystem-registry.yaml

Type "DELETE dev-cycle" to confirm.
```

### Step 2: Remove Squad

Only after explicit confirmation:
1. Remove `squads/dev-cycle/` directory
2. Remove `.claude/commands/devCycle/` directory (if exists)
3. Update ecosystem-registry.yaml to remove dev-cycle entry

### Step 3: Verify Removal

- Confirm directory no longer exists
- Confirm registry updated
- Report: "dev-cycle squad removed successfully"

## Acceptance Criteria

- [ ] **AC-1:** User explicitly confirmed deletion
- [ ] **AC-2:** All squad files removed
- [ ] **AC-3:** Registry updated

## Veto Conditions

- User did not type exact confirmation string → BLOCK deletion
- Squad has active pipeline running → BLOCK, wait for completion

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
