# Gold Finder Squad

## Overview

The Gold Finder Squad is a pipeline squad that discovers non-obvious, high-impact tech/tool solutions for any given problem. It combines functional reformulation, abstraction layer mining, cross-industry web research, and weighted scoring to produce ranked Gold/Silver/Bronze recommendations.

## Purpose

This squad exists because most people search for solutions only at their comfort level (usually SaaS) and within their own industry. The Gold Finder systematically descends through 5 abstraction layers and crosses industry boundaries to find solutions that are high-impact but non-obvious.

## When to Use This Pack

Use gold-finder when you want to:

- Find the best tech tool or solution for a specific problem
- Discover alternatives you wouldn't find through normal searching
- Get a scored comparison between obvious and non-obvious options
- Understand the "convenience premium" you're paying for mainstream tools
- Explore solutions at deeper abstraction layers (frameworks, runtimes, protocols)

## What's Included

### Agents

| Agent | Tier | Role |
|-------|------|------|
| `gold-chief` | Orchestrator | Triage, routing, report compilation |
| `problem-reframer` | Tier 0 | Functional reformulation + atomic decomposition |
| `layer-miner` | Tier 1 | Layer descent (SaaS→Protocol) + obsolete premise detection |
| `cross-pollinator` | Tier 1 | Cross-industry discovery via WebSearch/WebFetch |
| `solution-ranker` | Tier 2 | 5-dimension scoring + cost-of-convenience analysis |

### Tasks (13)

- `triage-problem` — Score complexity, route to full/condensed mode
- `reframe-problem` — Functional reformulation + atomic decomposition
- `mine-layers` — Descend through abstraction layers
- `detect-obsolete` — Check for obsolete premises
- `cross-pollinate` — Cross-industry web search
- `search-tools` — Targeted tool search
- `rank-solutions` — 5-dimension weighted scoring
- `calculate-cost` — Cost-of-convenience analysis
- `compile-report` — Build final report
- `export-report` — Export in preferred format
- `quick-scan` — Condensed mode combined search+rank
- `validate-reframing` — Quality gate for reframing
- `validate-coverage` — Quality gate for solution coverage

### Templates

- `final-report-template.md` — Gold/Silver/Bronze report structure
- `recommendation-card-template.md` — Individual solution cards
- `trade-off-map-template.md` — Multi-solution comparison map

### Checklists

- `report-quality.md` — Final report quality validation
- `reframing-quality.md` — Problem reframing quality validation

### Data

- `scoring-criteria.yaml` — 5-dimension weights, rubrics, medal thresholds
- `layer-map.yaml` — Tech abstraction layer hierarchy
- `obsolete-premises.yaml` — Catalog of outdated tech assumptions
- `cross-pollination-sources.yaml` — Industry categories and search patterns
- `reformulation-patterns.yaml` — Problem reformulation techniques

## Pipeline Flow

```
Full Mode (complex problems, score >= 18):
  P0: Triage ─────────────── [gold-chief]
  P1: Reframe ────────────── [problem-reframer]
  P2: Mine Layers ─────┐─── [layer-miner]        PARALLEL
  P3: Cross-Pollinate ─┘─── [cross-pollinator]
  P4: Rank & Score ───────── [solution-ranker]
  P5: Report ─────────────── [gold-chief]

Condensed Mode (simple problems, score < 18):
  P0: Triage ─────────────── [gold-chief]
  P1: Quick Reframe ──────── [problem-reframer]
  P2: Quick Search + Rank ── [cross-pollinator]
  P3: Report ─────────────── [gold-chief]
```

## Scoring System

| Dimension | Weight | What It Measures |
|-----------|--------|------------------|
| Non-Obviousness | 3.0 | Would user find this alone? |
| Technical Fit | 2.5 | Solves atomic functions? |
| Cost Efficiency | 2.0 | TCO vs mainstream |
| Implementation Effort | 1.5 | Adoption difficulty (inverted) |
| Longevity | 1.0 | Open source? Active dev? |

**Medal Thresholds:** Gold >= 80 | Silver 50-79 | Bronze 30-49

## Usage Examples

### Example 1: Simple Problem (Condensed Mode)

```
User: *find best tool for building landing pages

Gold Chief:
  Triage: 10/30 → Condensed Mode
  Quick Reframe: 4 atomic functions
  Quick Scan: 3 industries searched

  Result:
  🥇 Gold: Astro + Tailwind (85/100)
  🥈 Silver: Framer (62/100)
  🥉 Bronze: Carrd (38/100)
```

### Example 2: Complex Problem (Full Mode)

```
User: *find system for real-time collaboration with version control
      and automated visual regression testing for remote team of 15

Gold Chief:
  Triage: 21/30 → Full Mode
  Reframe: 6 atomic functions
  Mine Layers: 18 solutions across 5 layers
  Cross-Pollinate: 12 solutions from 4 industries

  Result:
  🥇 Gold: Yjs + Hocuspocus (87/100)
  🥈 Silver: Liveblocks (71/100)
  🥈 Silver: PartyKit (68/100)
```

## Pack Structure

```
Squads/gold-finder/
├── agents/
│   ├── gold-chief.md
│   ├── problem-reframer.md
│   ├── layer-miner.md
│   ├── cross-pollinator.md
│   └── solution-ranker.md
├── tasks/
│   ├── triage-problem.md
│   ├── reframe-problem.md
│   ├── mine-layers.md
│   ├── detect-obsolete.md
│   ├── cross-pollinate.md
│   ├── search-tools.md
│   ├── rank-solutions.md
│   ├── calculate-cost.md
│   ├── compile-report.md
│   ├── export-report.md
│   ├── quick-scan.md
│   ├── validate-reframing.md
│   └── validate-coverage.md
├── workflows/
│   └── wf-gold-analysis.yaml
├── data/
│   ├── scoring-criteria.yaml
│   ├── layer-map.yaml
│   ├── obsolete-premises.yaml
│   ├── cross-pollination-sources.yaml
│   └── reformulation-patterns.yaml
├── templates/
│   ├── final-report-template.md
│   ├── recommendation-card-template.md
│   └── trade-off-map-template.md
├── checklists/
│   ├── report-quality.md
│   └── reframing-quality.md
├── docs/
│   └── architecture.md
├── config.yaml
└── README.md
```

## Key Features

1. **Dual-Mode Pipeline** — Full (6 phases) for complex problems; Condensed (4 phases) for simple ones
2. **Layer Descent Mining** — Systematically explores SaaS → Low-Code → Framework → Runtime → Protocol
3. **Cross-Industry Pollination** — Active web research across 10 industries using WebSearch/WebFetch
4. **5-Dimension Weighted Scoring** — Transparent, justified scoring with Gold/Silver/Bronze medals
5. **Cost-of-Convenience Analysis** — Quantifies the premium paid for mainstream options

## Dependencies

This squad requires:

- Core AIOX framework
- WebSearch MCP tool (for cross-pollinator)
- WebFetch MCP tool (for cross-pollinator)

## Version History

- **v1.0.0** — Initial creation with 5 agents, 13 tasks, dual-mode pipeline

---

**Ready to find gold? Activate `gold-chief` and describe your problem.**

_Version: 1.0.0_
_Compatible with: AIOX v4+_
