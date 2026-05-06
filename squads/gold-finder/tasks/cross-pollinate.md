# Cross-Pollinate

**Task ID:** `cross-pollinate`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Cross-Pollinate Solutions |
| **status** | `pending` |
| **responsible_executor** | cross-pollinator |
| **execution_type** | `Agent` |
| **input** | Atomic functions + cross-pollination sources |
| **output** | Solutions discovered from other industries via web search |
| **action_items** | 6 steps |
| **acceptance_criteria** | 5 criteria |

**Estimated Time:** 5-15 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | cross-pollinator |
| **Rationale** | Requires creative analogical thinking + active web research (WebSearch/WebFetch) |

## Overview

For each atomic function, maps it to analogous functions in other industries,
then executes web searches to find solutions that solve the same underlying
problem with a different name. This is where the most non-obvious solutions
are discovered.

**CRITICAL:** This agent uses WebSearch and WebFetch MCP tools for active
web research. Searches must use atomic function names, NOT the user's
original problem phrasing.

## Input

- **atomic_functions** (array)
  - Description: List of atomic functions from reframing
  - Required: Yes
  - Source: reframe-problem output

- **cross_pollination_sources** (file)
  - Description: Industry categories and search patterns
  - Required: Yes
  - Source: `data/cross-pollination-sources.yaml`

## Output

- **cross_pollination_results** (object)
  - Format:
    ```yaml
    searches_executed:
      - query: "{search query}"
        industry: "{source industry}"
        function: "{atomic function}"
        results_count: {number}
    solutions_discovered:
      - name: "{tool/solution name}"
        url: "{url}"
        source_industry: "{industry}"
        analogous_function: "{how this industry calls it}"
        atomic_functions_solved: ["AF-001", "AF-002"]
        description: "{what it does}"
        transferability: high | medium | low
        evidence: "{why this works for the user's context}"
    industries_searched: ["{list}"]
    total_solutions: {number}
    ```

## Action Items

### Step 1: Load Cross-Pollination Sources

Read `data/cross-pollination-sources.yaml` to load industry categories,
analogous functions, and search patterns.

### Step 2: Map Functions to Industries

For each atomic function:
1. Identify which industries have analogous functions
2. Translate the function name to industry-specific terminology
3. Generate search queries using the industry's search patterns

### Step 3: Execute Web Searches

Using WebSearch MCP tool, execute searches for each function × industry combination.

**Search strategy:**
- Use atomic function names, NOT user's original phrasing
- Include "open source" or "self-hosted" variants
- Add current year for freshness
- Search GitHub, HackerNews, and directories as specified in sources

**Rate limiting:** Space searches to avoid rate limits. Prioritize:
1. Industries with highest analogous function match
2. Functions with highest priority (critical first)

### Step 4: Fetch and Evaluate Top Results

Using WebFetch MCP tool, fetch the top 3-5 results from each search:
1. Read the tool's homepage or GitHub README
2. Verify it actually solves the atomic function
3. Assess transferability to the user's context
4. Note pricing, license, and activity level

### Step 5: Filter for Transferability

Not every industry solution transfers well. Evaluate:
- Can it work outside its native industry? (high/medium/low)
- Does it require industry-specific knowledge to use?
- Is the learning curve justified by the value?

Discard solutions with "low" transferability.

### Step 6: Compile Cross-Pollination Results

Organize findings by solution, noting:
- Source industry and analogous function name
- Which atomic functions it solves
- URL and evidence of fit
- Transferability rating

## Acceptance Criteria

- [ ] **AC-1:** At least 3 industries searched
- [ ] **AC-2:** WebSearch used for active web research (not just LLM knowledge)
- [ ] **AC-3:** At least 5 candidate solutions discovered
- [ ] **AC-4:** Each solution verified via WebFetch (not fabricated)
- [ ] **AC-5:** Transferability rated for each solution

## Dependencies

### Depends On (Upstream)

- `reframe-problem` — Provides atomic functions

### Required By (Downstream)

- `rank-solutions` — Uses discovered solutions for scoring

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `rank-solutions` |
| **Trigger** | Cross-pollination complete |
| **Executor** | solution-ranker |

### Handoff Package

- **cross_pollination_results**: All solutions with evidence
- **searches_executed**: Log of all web searches performed

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
