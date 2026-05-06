# Code Review Template

## PR: [title]
**Author:** [name]  **Reviewer:** [name]  **Date:** [date]

---

## Summary
[1-2 sentences describing what this PR does and why]

## Changes
- [file/area changed and what was done]

---

## Review Checklist

### 🔴 P0 — Blockers (must fix before merge)
- [ ] No hardcoded secrets or credentials
- [ ] No SQL injection or XSS vectors
- [ ] No data loss risk
- [ ] Tests pass in CI

### 🟡 P1 — Important (should fix before merge)
- [ ] Error handling is appropriate (no silent failures)
- [ ] Logging includes correlation_id and relevant context
- [ ] Edge cases handled (null, empty, boundary values)
- [ ] No N+1 queries or unbounded data fetches

### 🟢 P2 — Quality (address before or after merge)
- [ ] Names reveal intent (no `data`, `info`, `temp`, `process`)
- [ ] No code duplication (DRY)
- [ ] Functions are small (< 20 lines, < 2 nesting levels)
- [ ] Comments explain WHY, not WHAT
- [ ] No dead code or commented-out code

### 🔵 P3 — Enhancement (optional, future improvement)
- [ ] Could benefit from additional abstraction
- [ ] Performance optimization opportunity
- [ ] Additional test coverage opportunity

---

## Findings

| # | Severity | File:Line | Finding | Suggestion |
|---|----------|-----------|---------|------------|
| 1 | P0/P1/P2/P3 | [file:line] | [what's wrong] | [how to fix] |

---

## Verdict

- [ ] **APPROVED** — Ship it
- [ ] **APPROVED WITH COMMENTS** — Minor issues, fix and merge
- [ ] **REQUEST CHANGES** — Must address findings before re-review
- [ ] **REJECT** — Fundamental issues, needs rethinking
