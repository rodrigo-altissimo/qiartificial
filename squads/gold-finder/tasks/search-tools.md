# Search Tools

**Task ID:** `search-tools`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Search Tools |
| **status** | `pending` |
| **responsible_executor** | cross-pollinator |
| **execution_type** | `Agent` |
| **input** | Specific search query or function to search for |
| **output** | List of tools matching the search criteria |
| **action_items** | 4 steps |
| **acceptance_criteria** | 3 criteria |

**Estimated Time:** 2-5 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | cross-pollinator |
| **Rationale** | Uses WebSearch/WebFetch for targeted tool discovery |

## Overview

Executes targeted web searches for specific tools or categories. This is
a focused sub-task of cross-pollinate, used when a specific search direction
is identified or when the user wants to explore a particular category.

## Input

- **search_query** (string)
  - Description: Specific function or category to search for
  - Required: Yes

- **search_constraints** (object)
  - Description: Optional filters (price range, license, layer)
  - Required: No

## Output

- **search_results** (array)
  - Format:
    ```yaml
    - name: "{tool name}"
      url: "{url}"
      description: "{brief description}"
      pricing: "{pricing model}"
      license: "{license type}"
      last_activity: "{date or status}"
      relevance: high | medium | low
    ```

## Action Items

### Step 1: Formulate Search Queries

Based on the input, create 3-5 search queries:
- Direct query with function name
- "open source alternative to {mainstream tool}"
- "site:github.com {function} {language}"
- "{function} tool {year}"

### Step 2: Execute WebSearch

Run each query through WebSearch. Collect top 5 results per query.

### Step 3: Fetch and Verify

Use WebFetch on top candidates to:
- Verify the tool exists and is active
- Extract pricing information
- Check last release/commit date
- Read description and feature list

### Step 4: Compile Results

Return verified tools sorted by relevance.

## Acceptance Criteria

- [ ] **AC-1:** At least 3 search queries executed via WebSearch
- [ ] **AC-2:** Top results verified via WebFetch
- [ ] **AC-3:** No fabricated tools — all URLs are real

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | Returns to calling task (cross-pollinate or gold-chief) |
| **Trigger** | Search complete |

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
