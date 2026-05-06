# Gold Finder Squad — Architecture

## System Design

### Pipeline Architecture

The Gold Finder Squad uses a pipeline architecture with 5 specialized agents
organized in tiers. The pipeline supports two execution modes based on
problem complexity.

```
                    ┌──────────────┐
                    │  User Input  │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │  gold-chief  │  P0: Triage
                    │ (orchestrator)│  Score complexity → route mode
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │   problem-   │  P1: Reframe
                    │   reframer   │  Strip tools → atomic functions
                    │   (tier 0)   │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              │                         │
       ┌──────▼───────┐         ┌──────▼───────┐
       │  layer-miner │         │    cross-     │  P2+P3: PARALLEL
       │   (tier 1)   │         │  pollinator   │
       │              │         │   (tier 1)    │
       │ SaaS→Protocol│         │ Web research  │
       └──────┬───────┘         └──────┬───────┘
              │                         │
              └────────────┬────────────┘
                           │
                    ┌──────▼───────┐
                    │  solution-   │  P4: Rank
                    │   ranker     │  5-dim scoring + medals
                    │   (tier 2)   │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │  gold-chief  │  P5: Report
                    │ (orchestrator)│  Compile + deliver
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │    Report    │
                    │  Gold/Silver │
                    │   /Bronze   │
                    └──────────────┘
```

### Agent Responsibilities

| Agent | Inputs | Processing | Outputs |
|-------|--------|------------|---------|
| gold-chief | User problem | Triage + Report | Complexity score, Final report |
| problem-reframer | Raw problem | Reformulation | Atomic functions |
| layer-miner | Atomic functions | Layer descent | Solutions by layer |
| cross-pollinator | Atomic functions | Web search | Cross-industry solutions |
| solution-ranker | All solutions | Scoring | Ranked list with medals |

### Data Flow

```
User Problem
  │
  ├─→ complexity_assessment (P0)
  │
  ├─→ reframing_output (P1)
  │     ├─→ atomic_functions
  │     ├─→ assumptions
  │     └─→ constraints
  │
  ├─→ layer_mining_results (P2, parallel)
  │     ├─→ solutions_by_layer
  │     ├─→ obsolete_premises_detected
  │     └─→ layer_traps
  │
  ├─→ cross_pollination_results (P3, parallel)
  │     ├─→ solutions_from_industries
  │     ├─→ search_log
  │     └─→ transferability_ratings
  │
  ├─→ ranking_results (P4)
  │     ├─→ scored_solutions
  │     ├─→ medal_assignments
  │     ├─→ mainstream_baseline
  │     └─→ cost_analysis
  │
  └─→ final_report (P5)
        ├─→ executive_summary
        ├─→ recommendation_cards
        ├─→ trade_off_map
        └─→ next_steps
```

### Scoring Architecture

```
Total Score (max 100) = SUM of weighted dimensions:

  Non-Obviousness  ──── raw × 3.0 ──── max 30 pts
  Technical Fit    ──── raw × 2.5 ──── max 25 pts
  Cost Efficiency  ──── raw × 2.0 ──── max 20 pts
  Implementation   ──── raw × 1.5 ──── max 15 pts
  Longevity        ──── raw × 1.0 ──── max 10 pts
                                       ─────────
                                       max 100 pts

  Gold   >= 80 pts
  Silver  50-79 pts
  Bronze  30-49 pts

  Minimum: Non-Obviousness >= 4 AND Technical Fit >= 3
```

### Mode Selection

```
Complexity Score = ambiguity + domain_breadth + novelty (each 1-10)

  Score >= 18  →  FULL MODE   (6 phases, P2∥P3 parallel)
  Score < 18   →  CONDENSED   (4 phases, quick scan)
```

### Quality Gates

| Gate | After | Before | Type | Key Check |
|------|-------|--------|------|-----------|
| QG-GF-001 | P1 | P2 | Blocking | Zero tool names + 3+ functions |
| QG-GF-002 | P2+P3 | P4 | Blocking | Combined solutions >= 5 |
| QG-GF-003 | P4 | P5 | Blocking | Scoring integrity verified |
| QG-GF-004 | P5 | Delivery | Blocking | Report quality checklist |

### Key Design Decisions

1. **Non-Obviousness weighted highest (3.0x)** — The squad's core value proposition is finding what users can't find alone. This must be the primary scoring dimension.

2. **Parallel execution of P2+P3** — Layer mining and cross-pollination are independent; running them in parallel maximizes discovery breadth and saves time.

3. **Web search in cross-pollinator only** — Centralizing WebSearch/WebFetch in one agent keeps the research focused and verifiable.

4. **Minimum criteria filter** — Solutions below NO=4 or TF=3 are excluded to prevent recommending obvious or irrelevant tools.

5. **Dual-mode pipeline** — Simple problems don't need 6 phases. The condensed mode provides value faster without sacrificing scoring rigor.

6. **Mainstream baseline always scored** — Without a comparison point, absolute scores are meaningless. The baseline makes relative value clear.
