# Reframing Quality Checklist

**Checklist ID:** GF-CL-002
**Used by:** problem-reframer (after reframing, before handoff)
**Version:** 1.0.0

---

## Problem Reformulation

- [ ] Original problem statement captured verbatim
- [ ] Reformulated problem contains NO tool/product names
- [ ] Reformulated problem describes FUNCTIONS, not solutions
- [ ] Why-chain applied (at least 3 levels deep)
- [ ] Root need identified and distinct from surface request

## Atomic Decomposition

- [ ] At least 3 atomic functions extracted
- [ ] Each function follows "Verb + Object" naming format
- [ ] Each function has defined input type
- [ ] Each function has defined output type
- [ ] Each function has assigned priority (critical / important / nice-to-have)
- [ ] No overlapping functions (each is truly atomic)
- [ ] Functions are ordered by priority (critical first)

## Constraint Documentation

- [ ] Budget constraints documented (or "no constraint" explicitly stated)
- [ ] Tech stack constraints documented (existing tools/languages)
- [ ] Team size / skill level constraints documented
- [ ] Timeline constraints documented
- [ ] Compliance / regulatory constraints documented (if applicable)
- [ ] At least one constraint per critical function

## Assumptions Surfaced

- [ ] All implicit assumptions in the original problem identified
- [ ] Each assumption labeled as: confirmed / unconfirmed / potentially obsolete
- [ ] Unconfirmed assumptions flagged for downstream agents
- [ ] Potentially obsolete assumptions flagged for layer-miner

## Completeness

- [ ] Output is sufficient for layer-miner to search each function independently
- [ ] Output is sufficient for cross-pollinator to map functions to other industries
- [ ] Output is sufficient for solution-ranker to evaluate technical fit
- [ ] No ambiguous terms left undefined

---

## Gate Decision

| Criteria Met | Decision |
|-------------|----------|
| All checks pass | PASS — hand off to layer-miner + cross-pollinator |
| Missing atomic functions or priorities | REVISE — decompose further before handoff |
| Tool names remain in reformulation | FAIL — re-apply Solution-to-Function Inversion |
| Fewer than 3 atomic functions | FAIL — problem may be too simple for full mode |

---

_Checklist v1.0.0 — Gold Finder Squad_
