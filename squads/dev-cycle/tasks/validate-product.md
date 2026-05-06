# Validate Product

**Task ID:** validate-product
**Version:** 1.2.0
**Phase:** DC-5 (Product Validation)

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Validate Product |
| **status** | `pending` |
| **responsible_executor** | cycle-chief → delegates to @qa |
| **execution_type** | Agent |
| **input** | project_path, dev-cycle-report.md (optional), credentials (optional) |
| **output** | product-validation.md, test-results.md, test-plan.md |
| **action_items** | 5 steps |
| **acceptance_criteria** | 5 criteria |

## Overview

Orchestration task that launches wf-product-validation.yaml. Supports 4 activation modes:
- AUTO: Triggered automatically after DC-4 when validation.auto=true AND epic is 100% complete
- SKIP: Skipped when validation.skip=true, --skip-validation flag, or epic is incomplete
- ELICIT: (default in pipeline) Asks user if they want to run validation (only when epic complete)
- STANDALONE: Called directly via *validate without pipeline context (bypasses epic gate)

## Pre-condition: Epic Completeness Gate

When running as DC-5 (pipeline mode), this task checks epic completeness **before** resolving activation mode:

```
IF invoked via pipeline (post DC-4):
  READ epic file from entry-point-resolution.yaml
  COUNT stories with status Done vs total stories

  IF done_count < total_count:
    LOG "DC-5 skipped — epic not fully complete ({done_count}/{total_count} stories Done)."
    LOG "Product validation will run automatically when all stories are Done."
    RETURN (skip gracefully)

  # Epic is 100% complete — proceed to Step 1
```

> **Rationale:** Partial validation causes false negatives due to missing migrations, incomplete features, and cross-story dependencies. Validating only when the epic is complete ensures all code, migrations, and integrations are in place.

## Input

- **project_path** (string, required)
  - Source (pipeline): Derived from entry-point-resolution.yaml
  - Source (standalone): User provides or defaults to "."
- **dev-cycle-report.md** (markdown, optional)
  - Source: DC-4 output (enriches Discovery phase with story results)
  - Note: Only available when running as DC-5, not standalone
- **credentials** (object, optional)
  - Description: Pre-provided { email, password } for auth-protected apps
- **validation_mode** (enum, required)
  - Values: auto | skip | elicit | standalone
  - Source (pipeline): Derived from flags or entry-point config
  - Source (standalone): Always "standalone"
- **force_discovery** (boolean, optional, default: false)
  - Description: Force Phase A re-execution even if cache exists
  - Source (pipeline): Flag --force-discovery
  - Source (standalone): User provides or defaults to false
- **test_scope** (enum, optional)
  - Values: full | delta
  - Source (pipeline): Automatically set to "delta" when DC-5 has dev-cycle-report
  - Source (standalone): Derived from user choice (elicit)
  - Default: "full" for standalone, "delta" for pipeline

## Action Items

### Step 1: Resolve Activation Mode

```
IF invoked via *validate (standalone):
  validation_mode = "standalone"
  project_path = user-provided OR "."
  test_scope = "full"  # default for standalone

  ASK user:
    "Qual escopo de validação?
     1. Full — testar TUDO (recomendado para primeira vez)
     2. Contextual — informar rotas ou áreas específicas para testar
     3. Re-run — reusar Discovery anterior (se existir cache)"

  IF user says "full" → test_scope = "full", force_discovery = false
  IF user says "contextual":
    ASK user for routes/areas to test
    Build delta_context from user input:
      delta_context = { routes_affected: [user_routes], files_modified: [], passed_stories: [], components_affected: [] }
    test_scope = "delta"
  IF user says "re-run" → test_scope = "full", force_discovery = false

  GOTO Step 3

IF invoked via pipeline (post DC-4):
  # Epic completeness already verified in Pre-condition gate above
  READ flags/config:
    --skip-validation OR validation.skip=true → SKIP, RETURN
    --auto-validation OR validation.auto=true → validation_mode = "auto"
    ELSE → validation_mode = "elicit"

  test_scope = "delta"  # pipeline default

  IF validation_mode == "elicit":
    ASK user:
      "DC-4 complete. {passed}/{total} stories passed.
       Rodar Product Validation com Playwright?
       1. Sim, validar mudanças do sprint (delta — recomendado)
       2. Sim, validar TUDO (full — mais demorado)
       3. Não, pular"
    IF user says skip → RETURN
    IF user says full → test_scope = "full"
    IF user says delta → test_scope = "delta"
```

> **Executor Phase:** Agent (conditional logic + user elicitation)

### Step 2: Enrich Inputs (pipeline only)

```
IF dev-cycle-report.md exists AND test_scope == "delta":
  Parse dev-cycle-report.md and extract:

  delta_context = {
    passed_stories: [
      FOR EACH story with status PASS in Wave Results:
        { id: story_id, title: story_title, acceptance_criteria: [...] }
    ],
    files_modified: [
      FROM "Files Modified" section:
        { file: file_path, stories: [story_ids], action: "modified|created|deleted" }
    ],
    routes_affected: [
      DERIVE from files_modified:
        - Match page/route files (pages/*.tsx, app/**/page.tsx, routes/*.tsx)
        - Extract route path from file path convention
        - Also check component files that map to known routes from Discovery
    ],
    components_affected: [
      DERIVE from files_modified:
        - Match component files (components/*.tsx, *.vue, *.svelte)
        - Extract component names
    ]
  }

  LOG "Delta context: {N} stories, {M} files, {K} routes, {J} components"

IF dev-cycle-report.md NOT exists AND test_scope == "delta":
  LOG "WARN: Delta scope requested but no dev-cycle-report found. Falling back to full."
  test_scope = "full"
```

> **Executor Phase:** Worker (YAML parse + context extraction)

### Step 3: Execute wf-product-validation.yaml

```
LOAD workflows/wf-product-validation.yaml
PASS inputs: {
  project_path,
  credentials,
  force_discovery,
  test_scope,
  delta_context    # null if test_scope == "full"
}
EXECUTE all 4 phases (A → B → C → D)
CAPTURE output: { verdict, pass_rate, artifacts, cache_status, effective_scope }
```

> **Executor Phase:** Agent (workflow orchestration)

### Step 4: Report Results

```
IF running as DC-5:
  Append validation summary to dev-cycle-report.md:
    ## Product Validation (DC-5)
    **Verdict:** {verdict}
    **MUST_HAVE pass rate:** {rate}%
    **Scope:** {effective_scope} ({N} tests)
    **Discovery cache:** {cache_status}
    **Report:** {project_path}/product-validation.md

IF standalone:
  Display results directly to user
```

> **Executor Phase:** Worker (string building + file append)

### Step 5: Cache Feedback

```
IF cache_status == "hit":
  LOG "Discovery cache was reused — Phase A skipped (saved ~5-15 min)"

IF cache_status == "miss" OR cache_status == "not_found":
  LOG "Discovery cache saved — next run will be faster if sources don't change"

IF cache_status == "corrupted":
  LOG "WARN: Previous cache was corrupted and was rebuilt"
```

> **Executor Phase:** Worker (log output)

## Acceptance Criteria

- [ ] **AC-1:** wf-product-validation executes all 4 phases without manual intervention
- [ ] **AC-2:** Results appended to dev-cycle-report when running as DC-5
- [ ] **AC-3:** Standalone mode works without any DC-0 to DC-4 artifacts
- [ ] **AC-4:** Discovery cache is created on first run and reused when sources unchanged
- [ ] **AC-5:** Pipeline mode (DC-5) generates delta-scoped test plan using dev-cycle-report context

## Veto Conditions

- Running DC-5 validation with incomplete epic (stories not all Done) → VETO (skip with notice)
- Running validation without a startable server → HALT (detected in Phase C)
- Marking validation as "passed" when verdict is REJECTED → VETO
- Skipping validation silently when mode is "elicit" → VETO (must ask user)

## Error Handling

### Server Not Startable
- **Trigger:** Phase C cannot start server
- **Recovery:** HALT with clear error. Suggest checking build/start command.

### No Documentation Found
- **Trigger:** Phase A finds no PRD, specs, or stories
- **Recovery:** HALT with clear error. Suggest providing project docs.

### Partial Results
- **Trigger:** Some test batches timeout
- **Recovery:** Consolidate available results, mark timed-out tests as "timeout"

### Cache Corrupted
- **Trigger:** .discovery-cache.yaml exists but is malformed or has wrong version
- **Recovery:** Delete corrupted cache, run full Discovery, save new cache. LOG warning.

### Delta Context Insufficient
- **Trigger:** test_scope == "delta" but dev-cycle-report has no files_modified or routes
- **Recovery:** Fall back to full scope with LOG warning. Never generate 0 tests.

### First Run (No Cache)
- **Trigger:** No .discovery-cache.yaml exists
- **Recovery:** Normal behavior — run full Discovery, save cache at end.

## Notes

- When running as DC-5, the dev-cycle-report enrichment is the key value-add over standalone mode.
- Standalone mode is useful for validating any project without running the full pipeline.
- The workflow's own human_gate (Phase D) still applies in all modes.

---

_Task Version: 1.2.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Phase: DC-5 (Product Validation)_
