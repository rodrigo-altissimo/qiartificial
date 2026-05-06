# Triage Problem

**Task ID:** `triage-problem`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Triage Problem |
| **status** | `pending` |
| **responsible_executor** | gold-chief |
| **execution_type** | `Agent` |
| **input** | User problem statement (raw text) |
| **output** | Complexity score + mode decision (full/condensed) |
| **action_items** | 5 steps |
| **acceptance_criteria** | 4 criteria |

**Estimated Time:** 1-2 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | gold-chief |
| **Rationale** | Requires pattern recognition to score complexity; fast execution needed |

## Overview

Receives a user's raw problem statement and scores its complexity across
3 dimensions (ambiguity, domain breadth, novelty) to determine whether
to route through the full pipeline (6 phases) or condensed pipeline (4 phases).

## Input

- **problem_statement** (string)
  - Description: The user's raw problem description
  - Required: Yes
  - Source: User input

## Output

- **complexity_assessment** (object)
  - Description: Scored complexity with mode decision
  - Format:
    ```yaml
    complexity:
      ambiguity: {1-10}
      domain_breadth: {1-10}
      novelty: {1-10}
      total: {3-30}
    mode: full | condensed
    rationale: "{why this mode was chosen}"
    ```

## Action Items

### Step 1: Capture Problem Statement

Receive and record the user's problem statement verbatim. Do not modify or interpret yet.

### Step 2: Score Ambiguity (1-10)

Evaluate how unclear or multi-interpretable the problem is:
- 1-3: Clear, specific problem with obvious solution category
- 4-6: Somewhat vague, could mean different things
- 7-10: Highly ambiguous, requires significant clarification

### Step 3: Score Domain Breadth (1-10)

Evaluate how many tech domains this problem spans:
- 1-3: Single domain (e.g., "need a database")
- 4-6: 2-3 domains intersect (e.g., "need real-time collaboration with analytics")
- 7-10: 4+ domains or cross-cutting concern (e.g., "need to rebuild entire workflow")

### Step 4: Score Novelty (1-10)

Evaluate how unprecedented or unconventional the requirement is:
- 1-3: Common problem with well-known solution categories
- 4-6: Known problem with unusual constraints
- 7-10: Novel problem or unique combination of requirements

### Step 5: Route Decision

Calculate total = ambiguity + domain_breadth + novelty.

- If total >= 18: Route to **FULL MODE** (6 phases)
- If total < 18: Route to **CONDENSED MODE** (4 phases)

Present the assessment to the user with rationale.

## Acceptance Criteria

- [ ] **AC-1:** All 3 dimensions scored with values 1-10
- [ ] **AC-2:** Total calculated correctly
- [ ] **AC-3:** Mode decision matches threshold (>= 18 = full, < 18 = condensed)
- [ ] **AC-4:** Rationale explains why this mode was chosen

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `reframe-problem` |
| **Trigger** | Mode decision made |
| **Executor** | problem-reframer |

### Handoff Package

- **problem_statement**: Original problem text
- **complexity_assessment**: Scored complexity object
- **mode**: full or condensed

## Error Handling

### No Clear Problem Statement

- **Trigger:** User input is too vague to score
- **Recovery:** Ask clarifying questions before scoring
- **Prevention:** Provide examples of good problem statements

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
