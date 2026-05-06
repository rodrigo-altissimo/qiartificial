# Architecture Decision Record (ADR) Template

## ADR-[NNN]: [Title — short descriptive name]

**Date:** [YYYY-MM-DD]
**Status:** [Proposed | Accepted | Deprecated | Superseded by ADR-NNN]
**Deciders:** [list of people involved in the decision]
**Technical Story:** [ticket/issue link]

---

## Context

[Describe the forces at play. What is the technical situation? What constraints exist?
Why is a decision needed? What are the non-functional requirements driving this?]

## Decision Drivers

- [driver 1 — e.g., "Need to support 10x traffic growth in 12 months"]
- [driver 2 — e.g., "Team has no experience with message queues"]
- [driver 3 — e.g., "Budget constraint: $5k/month infrastructure"]

## Considered Options

### Option 1: [Name]
- **Pros:** [list advantages]
- **Cons:** [list disadvantages]
- **Effort:** [estimated effort to implement]

### Option 2: [Name]
- **Pros:** [list advantages]  
- **Cons:** [list disadvantages]
- **Effort:** [estimated effort to implement]

### Option 3: [Name]
- **Pros:** [list advantages]
- **Cons:** [list disadvantages]
- **Effort:** [estimated effort to implement]

## Decision

[State the decision clearly. "We will use [option N] because [primary reason]."]

## Consequences

### Positive
- [positive consequence 1]
- [positive consequence 2]

### Negative
- [negative consequence 1 — accepted trade-off]
- [negative consequence 2 — mitigated by X]

### Risks
- [risk 1 — mitigation: X]
- [risk 2 — mitigation: Y]

## Fitness Function

[How will we know this decision is working? Define a measurable test.]

```
Characteristic:  [what we're protecting]
Measurement:     [how we measure it]
Threshold:       [pass/fail boundary]
Frequency:       [how often we check]
```

## Review Date

[When should this decision be revisited? Set a calendar reminder.]
