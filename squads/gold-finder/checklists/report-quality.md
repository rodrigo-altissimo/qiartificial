# Report Quality Checklist

**Checklist ID:** GF-CL-001
**Used by:** gold-chief (before delivering final report)
**Version:** 1.0.0

---

## Structural Completeness

- [ ] Executive summary present and under 3 sentences
- [ ] Problem reformulation clearly stated (no tool names, only functions)
- [ ] Atomic functions listed with priorities
- [ ] At least 3 solution recommendations included
- [ ] Each recommendation has full score breakdown table
- [ ] Trade-off map comparing all solutions + mainstream
- [ ] Cost analysis with TCO comparison
- [ ] Implementation steps for each recommendation (minimum 3 steps)
- [ ] Risks and mitigations documented for each solution
- [ ] Next steps section with actionable items

## Scoring Integrity

- [ ] All 5 dimensions scored for each solution (0-10 raw)
- [ ] Weights correctly applied (3.0, 2.5, 2.0, 1.5, 1.0)
- [ ] Total score correctly calculated (max 100)
- [ ] Medal thresholds correctly applied (Gold >= 80, Silver 50-79, Bronze 30-49)
- [ ] No solution recommended with Non-Obviousness < 4
- [ ] No solution recommended with Technical Fit < 3
- [ ] Score justifications provided for each dimension
- [ ] Mainstream baseline scored for comparison

## Content Quality

- [ ] No fabricated tools — every solution is real and verifiable
- [ ] URLs/links provided for each recommended tool
- [ ] Pricing information is current (not from outdated sources)
- [ ] License type documented for each solution
- [ ] Last release date / activity status verified
- [ ] Description matches what the tool actually does
- [ ] No duplicate recommendations (same tool under different names)

## Analysis Depth

- [ ] At least 2 abstraction layers explored beyond user's comfort zone
- [ ] At least 2 industries cross-pollinated
- [ ] Obsolete premises checked and documented (even if none found)
- [ ] Cost-of-convenience calculated for mainstream vs alternatives
- [ ] Function coverage map shows which atomic functions each solution solves

## User Actionability

- [ ] Report can be understood without prior context
- [ ] Recommendations are ranked (not just listed)
- [ ] Clear winner identified or trade-off explained if tied
- [ ] Implementation paths are realistic and specific
- [ ] Budget implications clearly stated
- [ ] Time investment clearly stated

## Format

- [ ] Follows final-report-template.md structure
- [ ] Recommendation cards follow recommendation-card-template.md
- [ ] Trade-off map follows trade-off-map-template.md
- [ ] Markdown renders correctly
- [ ] Tables are properly formatted

---

## Gate Decision

| Criteria Met | Decision |
|-------------|----------|
| All structural + scoring checks pass | PASS — deliver report |
| 1-2 content quality items missing | CONDITIONAL — fix and re-check |
| Scoring integrity failure | FAIL — recalculate before delivery |
| Fabricated solutions detected | CRITICAL FAIL — restart ranking phase |

---

_Checklist v1.0.0 — Gold Finder Squad_
