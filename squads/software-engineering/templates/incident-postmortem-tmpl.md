# Incident Post-Mortem Template

## Post-Mortem: [Incident Title]

**Date:** [YYYY-MM-DD]
**Severity:** [P0 | P1 | P2]
**Duration:** [hh:mm — from detection to resolution]
**Author:** [name]
**Participants:** [list of people involved]

---

## Summary
[2-3 sentences: What happened, what was the impact, how was it resolved?]

## Impact
- **Users affected:** [number or percentage]
- **Revenue impact:** [estimated $ lost, if applicable]
- **Data impact:** [any data loss or corruption?]
- **SLO impact:** [which SLOs were breached? How much error budget consumed?]

---

## Timeline

| Time (UTC) | Event |
|------------|-------|
| HH:MM | [First symptom observed / alert fired] |
| HH:MM | [On-call engineer paged] |
| HH:MM | [Diagnosis began] |
| HH:MM | [Root cause identified] |
| HH:MM | [Mitigation applied (rollback / fix / scale)] |
| HH:MM | [Service restored] |
| HH:MM | [All-clear declared] |

---

## Root Cause Analysis (5 Whys)

**Why 1:** [immediate cause — what broke?]
↓
**Why 2:** [what allowed that to happen?]
↓
**Why 3:** [what systemic issue underlies that?]
↓
**Why 4:** [what process gap exists?]
↓
**Why 5:** [what structural/cultural issue?]

**Root Cause:** [one sentence — the deepest cause we can reasonably address]

---

## Contributing Factors
- [ ] Missing test coverage for the failure scenario
- [ ] Missing or insufficient monitoring/alerting
- [ ] Missing or outdated runbook
- [ ] Deployment without canary/rollback mechanism
- [ ] Configuration drift between environments
- [ ] Knowledge silo (only one person understood this area)
- [ ] Other: [describe]

---

## Action Items

| # | Action | Type | Owner | Deadline | Status |
|---|--------|------|-------|----------|--------|
| 1 | [specific, concrete action] | Prevent/Detect/Mitigate | [name] | [date] | TODO |
| 2 | [specific, concrete action] | Prevent/Detect/Mitigate | [name] | [date] | TODO |
| 3 | [specific, concrete action] | Prevent/Detect/Mitigate | [name] | [date] | TODO |

**Priority:** Prevent > Detect > Mitigate

---

## Lessons Learned
[What did we learn that applies broadly beyond this specific incident?]

---

## What Went Well
[What worked during the incident response? What should we keep doing?]

---

> **Reminder:** This is a BLAMELESS post-mortem. We focus on systems and processes,
> not individuals. The goal is to learn and prevent recurrence, not to assign blame.
