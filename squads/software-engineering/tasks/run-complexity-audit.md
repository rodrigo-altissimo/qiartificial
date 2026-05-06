---
task: run-complexity-audit
squad: software-engineering
agent: eng-clean-code
tags: [complexity, code-quality, modules, naming, ousterhout]
---

# Task: Run Complexity Audit

## Purpose
Measure code complexity using Ousterhout's framework: change amplification, cognitive load, and unknown unknowns. Identify the top 5 complexity hotspots and provide refactoring plans.

## Prerequisites
- Codebase accessible
- Ability to run static analysis tools
- Recent git log available (for churn analysis)

## Steps

### 1. Identify High-Churn Files (Complexity Hotspots)
```bash
# Top 20 most-changed files in the last 6 months
git log --since="6 months ago" --name-only --pretty=format: | \
  sort | uniq -c | sort -rn | head -20
```
**These are your complexity hotspots.** Files that change often AND are complex cost the most.

### 2. Module Depth Analysis
For the top 10 high-churn files, analyze:
```
File/Class:         [name]
Public Methods:     [count]
Parameters total:   [sum of all method parameters]
Lines:              [line count]
Hidden Functionality: [what does the caller not need to know?]
Depth Ratio:        hidden / (methods + params) → target > 3
Classification:     [DEEP ✅ | SHALLOW ⚠️ | PASSTHROUGH ❌]
```

### 3. Complexity Symptom Scan
For each hotspot, check for:
```
□ Change Amplification: Does a simple change require edits in 3+ files?
□ Cognitive Load: Does a developer need to understand 5+ things to make a change?
□ Unknown Unknowns: Can a change break something the developer doesn't know about?
```

### 4. Naming Quality Scan
```
□ Vague names: process(), handle(), getData(), Manager, Utils, Helper?
□ Inconsistent vocabulary: fetch vs get vs retrieve used interchangeably?
□ Boolean names that aren't questions: flag, status, check?
□ Short names in long scopes: single-letter variables in class fields?
```

### 5. Information Leakage Scan
```
□ Temporal decomposition: separate modules for sequential steps?
□ Implementation details in interfaces: caller needs to know internal state?
□ Configuration leakage: caller provides implementation-level config?
```

### 6. Create Refactoring Plan (Top 5 Hotspots)
For each:
```
Hotspot:         [file/class]
Symptoms:        [which complexity symptoms present]
Severity:        [P1 critical | P2 significant | P3 moderate]
Refactoring:     [specific named refactoring moves]
Before/After:    [code example showing the improvement]
Estimated Effort: [hours]
```

## Deliverables
- [ ] High-churn file list (top 20)
- [ ] Module depth analysis (top 10)
- [ ] Complexity symptom report
- [ ] Naming quality report
- [ ] Refactoring plan for top 5 hotspots with before/after examples

## Quality Gate
- Every finding has a specific before/after code example
- Refactoring plan uses named moves from Fowler's catalog
- Highest-churn AND highest-complexity files are addressed first


## Practical Examples

### Example: CDC Pipeline Design
```
Source: PostgreSQL (orders table)
Destination: BigQuery (analytics)
Tool: Debezium → Kafka → BigQuery sink connector

Pipeline:
  1. Debezium captures every INSERT/UPDATE/DELETE from WAL
  2. Events published to Kafka topic: orders.cdc
  3. Sink connector writes to BigQuery raw.orders table
  4. dbt transforms: raw → staging → marts
  5. Quality tests run after each dbt run

Quality Tests:
  not_null: [order_id, customer_id, total]
  unique: [order_id]
  freshness: source_freshness < 5 minutes
  row_count: daily increase vs 7-day rolling average

SLOs:
  Freshness: ≤ 5 minutes
  Completeness: NULL rate < 0.1%
  Volume: daily rows within 30% of average
```

### Example: Schema Migration (Rename Column)
```
Day 1:  ALTER TABLE orders ADD COLUMN full_name VARCHAR(255);
Day 2:  Application dual-writes (customer_name AND full_name)
Day 3:  UPDATE orders SET full_name = customer_name WHERE full_name IS NULL;
Day 7:  All consumers reading full_name (verified via query logs)
Day 14: Application stops writing customer_name
Day 30: ALTER TABLE orders DROP COLUMN customer_name;

Total: 30 days. Zero downtime. Zero data loss.
```

## Common Pitfalls
1. **No quality tests on pipeline** — zero rows loaded goes undetected
2. **Renaming columns directly** — breaks ALL downstream consumers
3. **Full reload every run** — wasteful, slow, expensive at scale
4. **No freshness alerting** — stale data served without anyone knowing
5. **Manual data fixes** — every fix must be scripted and reproducible


## War Room Protocol

### When This Task Is Triggered By An Incident

```
MINUTE 0-5: ASSESS
  □ Confirm the issue is real (not false positive)
  □ Check: Is it customer-facing?
  □ Check: Is data at risk?
  □ Classify severity:
     SEV1: > 50% users affected → all-hands
     SEV2: < 50% users degraded → team + lead
     SEV3: internal only → on-call

MINUTE 5-15: CONTAIN
  □ Can we rollback the last deploy?
  □ Can we toggle a feature flag?
  □ Can we scale up resources?
  □ Can we redirect traffic?
  □ Communicate: team channel + status page

MINUTE 15-30: DIAGNOSE
  □ Check dashboards (4 Golden Signals)
  □ Check logs (grep for errors in last 30 min)
  □ Check recent changes (deploys, config, infra)
  □ Check dependencies (are they healthy?)
  □ Form hypothesis: "I think the problem is ___"

MINUTE 30-60: FIX
  □ If hypothesis confirmed → implement fix
  □ If not confirmed → gather more data, new hypothesis
  □ Deploy fix through normal pipeline (or hotfix if SEV1)
  □ Verify fix: check dashboards, check affected users

AFTER RESOLUTION:
  □ Update status page: "Resolved"
  □ Notify stakeholders
  □ Schedule post-mortem (within 48h)
  □ Create action items to prevent recurrence
```

### Handoff Protocol

```
WHEN HANDING THIS TASK TO ANOTHER ENGINEER:

Provide:
  1. Context: What is the task and why?
  2. Current state: What has been done so far?
  3. Next steps: What needs to happen next?
  4. Blockers: Any known issues or dependencies?
  5. Contacts: Who to ask for help?
  6. Artifacts: Links to relevant docs, PRs, dashboards

Format:
  ## Handoff — [Task Name]
  **From:** [your name]  **To:** [their name]  **Date:** YYYY-MM-DD
  
  **Context:** [1-2 sentences]
  **Done:** [bulleted list]
  **Next:** [bulleted list]
  **Blockers:** [if any]
  **Links:** [dashboards, PRs, docs]
```

### Quality Gate

```
THIS TASK IS COMPLETE WHEN:
  □ All acceptance criteria met
  □ Tests written and passing
  □ Code reviewed by peer
  □ Documentation updated
  □ Deployed to staging and verified
  □ Product owner accepted
  □ No P0 or P1 issues outstanding

THIS TASK MAY BE DEFERRED IF:
  ○ Blocked by external dependency (document and escalate)
  ○ Scope discovered to be larger than estimated (split task)
  ○ Higher priority item emerged (document reason for deferral)
```
