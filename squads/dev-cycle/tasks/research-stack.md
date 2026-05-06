# Research Stack

**Task ID:** `research-stack`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.1.0
**Last Updated:** 2026-03-10
**Phase:** DC-2

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Research Stack |
| **status** | `pending` |
| **responsible_executor** | cycle-chief + Context7 MCP |
| **execution_type** | `Hybrid` |
| **input** | Project root path, package manifests |
| **output** | stack-context.md |
| **action_items** | 4 steps |
| **acceptance_criteria** | 4 criteria |

**Skippable:** No — always execute. Stale stack knowledge causes rework.

## Overview

Detect the project's technology stack from manifest files (package.json, requirements.txt, pyproject.toml, etc.) and pull current documentation for each major library via Context7 MCP. Generates `stack-context.md` that all subagents receive during wave execution.

## Input

- **project_root** (string, required)
  - Description: Path to the project root directory
  - Source: Provided by caller or detected from cwd

## Output

- **stack-context.md** (markdown)
  - Description: Current stack documentation with versions, breaking changes, and current patterns
  - Destination: Pipeline output directory
  - Format:
    ```markdown
    # Stack Context
    Generated: {timestamp}
    Project: {project_root}

    ## Detected Stack
    | Library | Version | Source |
    |---------|---------|--------|
    | Next.js | 15.1.0 | package.json |
    | ...     | ...     | ...    |

    ## Library Notes
    ### Next.js 15.1
    - Key changes from 14.x: ...
    - Current middleware pattern: ...
    - Breaking changes: ...

    ### [Next library...]
    ```

## Action Items

### Step 1: Detect Stack

Scan project root for manifest files:
- `package.json` → Node.js/JavaScript dependencies
- `requirements.txt` / `pyproject.toml` / `Pipfile` → Python dependencies
- `go.mod` → Go dependencies
- `Cargo.toml` → Rust dependencies
- `pom.xml` / `build.gradle` → Java dependencies

Parse each manifest and extract:
- Library name
- Version (exact or range)
- Whether it's a primary dependency (not devDependency)

> **Executor Phase:** Worker (deterministic manifest parsing — JSON/TOML/YAML parse + field extraction)

### Step 2: Filter Primary Libraries

From detected dependencies, select primary libraries for research using these deterministic rules:

**Category Rules (Worker-eligible filtering):**
1. **Include** dependencies matching these categories:
   - Framework: packages with `next`, `react`, `vue`, `angular`, `fastapi`, `django`, `express`, `nest` in name
   - Database client: `supabase`, `prisma`, `drizzle`, `sqlalchemy`, `typeorm`, `mongoose`, `pg`, `mysql2`
   - UI framework: `tailwind`, `shadcn`, `@mui`, `chakra`, `ant-design`, `bootstrap`
   - Auth: `next-auth`, `@auth`, `clerk`, `passport`, `jose`, `jsonwebtoken`
   - Testing: `jest`, `vitest`, `pytest`, `mocha`, `playwright`, `cypress`
2. **Exclude** devDependencies (except testing category)
3. **Exclude** utility packages that don't match any category above

**Agent Judgment (for edge cases):**
- If more than 8 libraries match categories, Agent selects top 8 by relevance
- If a library doesn't match any category but appears central (e.g., imported in >50% of files), Agent includes it

**Heuristic:** Research top 5-8 primary libraries. Cap at 8 max.

> **Executor Phase:** Hybrid (Worker applies category rules, Agent handles edge cases and final selection)

### Step 3: Pull Current Docs via Context7

For each primary library:
1. Resolve library ID: `mcp__context7__resolve-library-id` with library name
2. Get library docs: `mcp__context7__query-docs` with relevant topics:
   - Breaking changes from previous major version
   - Current recommended patterns
   - Migration guides (if version jump detected)

**Veto:** If Context7 is unavailable, log warning and proceed with version-only stack context. Do NOT block the pipeline.

> **Executor Phase:** Worker (deterministic API calls with fixed parameters per library)

### Step 4: Generate stack-context.md

Compile all research into `stack-context.md`:
- Detected stack table
- Per-library notes with current patterns
- Breaking changes warnings
- Timestamp for freshness tracking

> **Executor Phase:** Agent (compilation requires judgment on emphasis, structure, and relevance ranking)

## Acceptance Criteria

- [ ] **AC-1:** Stack detected from at least 1 manifest file
- [ ] **AC-2:** Top 5-8 primary libraries identified
- [ ] **AC-3:** Context7 docs pulled for each primary library (or graceful fallback)
- [ ] **AC-4:** stack-context.md generated with complete structure

## Veto Conditions

- No manifest files found → BLOCK, ask user for project root
- Context7 unavailable → WARNING only (generate version-only context, do not block)

## Error Handling

### No Manifest Files
- **Trigger:** Project root has no package.json, requirements.txt, etc.
- **Recovery:** Ask user to provide project root or specify stack manually

### Context7 Timeout
- **Trigger:** MCP call times out
- **Recovery:** Skip that library's docs, note as "docs unavailable" in stack-context.md
- **Prevention:** Set reasonable timeout per library lookup

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `execute-wave` (DC-3) |
| **Trigger** | stack-context.md generated |
| **Executor** | cycle-chief (launches subagents) |

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Phase: DC-2 (Stack Research)_
