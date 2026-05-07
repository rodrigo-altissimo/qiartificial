# map-false-beliefs

## Metadata
```yaml
task_id: BR_EXP_004
agent: brunson-expert
type: analysis
complexity: medium
estimated_time: 45-60min
source: "Expert Secrets — Chapter 7-9: Breaking False Beliefs"
```

## Purpose
Map the complete false belief landscape of your audience across three categories: Vehicle beliefs (will this work?), Internal beliefs (can I do it?), and External beliefs (will outside factors stop me?). Each false belief gets an Epiphany Bridge story to break it.

> "Everyone has false beliefs holding them back. Your job is to identify each one and create an Epiphany Bridge story that shatters it." — Russell Brunson

---

## The Framework: The Three Types of False Beliefs

### The False Belief Triad

```
                 ┌──────────────────┐
                 │   BIG DOMINO     │
                 │ (Core Belief)    │
                 └────────┬─────────┘
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
  ┌───────────────┐ ┌──────────────┐ ┌───────────────┐
  │   VEHICLE     │ │  INTERNAL    │ │   EXTERNAL    │
  │   Beliefs     │ │  Beliefs     │ │   Beliefs     │
  │               │ │              │ │               │
  │ "Will THIS    │ │ "Can I       │ │ "Will outside │
  │  approach     │ │  personally  │ │  factors let  │
  │  work?"       │ │  do this?"   │ │  me succeed?" │
  └───────────────┘ └──────────────┘ └───────────────┘
```

### Vehicle Beliefs
Doubt about the METHOD or APPROACH itself.
- "Funnels don't work in my industry"
- "Online marketing is oversaturated"
- "This is just another guru scheme"

### Internal Beliefs
Doubt about their own ABILITY to execute.
- "I'm not tech-savvy enough"
- "I don't have enough experience"
- "I'm not a good writer/speaker"

### External Beliefs
Doubt about EXTERNAL factors they can't control.
- "My market is different"
- "The economy is bad"
- "I don't have enough money to start"

---

## Input Required
```yaml
input_fields:
  new_opportunity: ""       # From BR_EXP_002
  big_domino: ""            # From BR_EXP_003
  target_audience: ""
  audience_demographics: ""
  common_objections: []
  sales_call_recordings: "" # Any notes from real conversations?
  support_ticket_themes: "" # Common questions/concerns?
  competitor_messaging: ""  # What are competitors saying?
  industry_myths: []        # Common misconceptions
```

---

## Step-by-Step Process

### Step 1: Brainstorm Vehicle False Beliefs
List every belief about WHY your approach won't work.

```yaml
vehicle_false_beliefs:
  belief_1:
    false_belief: ""
    why_they_believe_it: ""
    truth: ""
    evidence_against: ""
    severity: ""            # High/Medium/Low impact on conversion
  belief_2:
    false_belief: ""
    why_they_believe_it: ""
    truth: ""
    evidence_against: ""
    severity: ""
  belief_3:
    false_belief: ""
    why_they_believe_it: ""
    truth: ""
    evidence_against: ""
    severity: ""
```

**Common Vehicle Beliefs:**
- "This doesn't work in my niche/industry"
- "This is only for [certain type of person]"
- "I've tried something similar and it didn't work"
- "This sounds too good to be true"
- "Technology like this changes too fast"

### Step 2: Brainstorm Internal False Beliefs
List every belief about WHY they can't personally do it.

```yaml
internal_false_beliefs:
  belief_1:
    false_belief: ""
    why_they_believe_it: ""
    truth: ""
    evidence_against: ""
    severity: ""
  belief_2:
    false_belief: ""
    why_they_believe_it: ""
    truth: ""
    evidence_against: ""
    severity: ""
  belief_3:
    false_belief: ""
    why_they_believe_it: ""
    truth: ""
    evidence_against: ""
    severity: ""
```

**Common Internal Beliefs:**
- "I'm not smart/talented/experienced enough"
- "I don't have the right skills"
- "I'm too old/young/busy"
- "I've failed before, so I'll fail again"
- "I'm not a natural at [required skill]"

### Step 3: Brainstorm External False Beliefs
List every belief about EXTERNAL obstacles.

```yaml
external_false_beliefs:
  belief_1:
    false_belief: ""
    why_they_believe_it: ""
    truth: ""
    evidence_against: ""
    severity: ""
  belief_2:
    false_belief: ""
    why_they_believe_it: ""
    truth: ""
    evidence_against: ""
    severity: ""
  belief_3:
    false_belief: ""
    why_they_believe_it: ""
    truth: ""
    evidence_against: ""
    severity: ""
```

**Common External Beliefs:**
- "The market is too competitive"
- "I don't have enough money to start"
- "My spouse/family won't support me"
- "The economy/algorithm/platform won't allow it"
- "I don't have the right connections"

### Step 4: Prioritize the Beliefs
Rank beliefs by impact on conversion.

```yaml
belief_priority_matrix:
  highest_impact:           # Fix these first — most sales lost here
    - belief: ""
      category: ""
      estimated_conversion_impact: ""
  medium_impact:            # Important but secondary
    - belief: ""
      category: ""
      estimated_conversion_impact: ""
  lower_impact:             # Address if time allows
    - belief: ""
      category: ""
      estimated_conversion_impact: ""
```

### Step 5: Create Epiphany Bridge Stories
For each high-impact belief, craft a story that breaks it.

```yaml
epiphany_bridges:
  bridge_1:
    false_belief_targeted: ""
    category: ""            # Vehicle/Internal/External
    story:
      backstory: ""         # Setting and character
      journey: ""           # What they tried (failed)
      epiphany: ""          # The moment of realization
      new_belief: ""        # What they now believe
      result: ""            # What happened after the shift
    who_tells_story: ""     # You, a client, a case study?
    where_in_funnel: ""     # Webinar Secret 1/2/3, sales page, email
  bridge_2:
    false_belief_targeted: ""
    category: ""
    story:
      backstory: ""
      journey: ""
      epiphany: ""
      new_belief: ""
      result: ""
    who_tells_story: ""
    where_in_funnel: ""
  bridge_3:
    false_belief_targeted: ""
    category: ""
    story:
      backstory: ""
      journey: ""
      epiphany: ""
      new_belief: ""
      result: ""
    who_tells_story: ""
    where_in_funnel: ""
```

**Brunson's Epiphany Bridge Formula:**
1. **Backstory** — Relatable starting point
2. **Desire** — What they wanted
3. **Wall** — What stopped them (the false belief)
4. **Epiphany** — The AHA moment
5. **Plan** — What they did differently
6. **Result** — The transformation

### Step 6: Map Beliefs to Funnel Locations
Assign each belief-breaking element to a specific funnel touchpoint.

```yaml
belief_funnel_map:
  webinar_secret_1:
    false_belief: ""        # Vehicle belief (usually)
    epiphany_bridge: ""
  webinar_secret_2:
    false_belief: ""        # Internal belief (usually)
    epiphany_bridge: ""
  webinar_secret_3:
    false_belief: ""        # External belief (usually)
    epiphany_bridge: ""
  sales_page_sections:
    - section: ""
      belief_addressed: ""
  email_sequence:
    - email_number: 0
      belief_addressed: ""
  ads_and_hooks:
    - hook: ""
      belief_challenged: ""
```

---

## Output Template
```yaml
output:
  false_belief_map:
    big_domino: ""
    vehicle_beliefs:
      - belief: ""
        epiphany_bridge: ""
        funnel_location: ""
    internal_beliefs:
      - belief: ""
        epiphany_bridge: ""
        funnel_location: ""
    external_beliefs:
      - belief: ""
        epiphany_bridge: ""
        funnel_location: ""
    total_beliefs_mapped: 0
    total_stories_created: 0
    priority_order: []
```

---

## Quality Gate
```yaml
quality:
  - [ ] At least 3 beliefs per category (Vehicle/Internal/External)
  - [ ] Each high-impact belief has an Epiphany Bridge story
  - [ ] Stories follow the backstory→epiphany→result arc
  - [ ] Beliefs are mapped to specific funnel locations
  - [ ] Priority ranking is based on conversion impact
  - [ ] Beliefs are specific to this audience (not generic)
  - [ ] Epiphany stories feel authentic and relatable
  - [ ] No false belief is left without a counter-story
```

---

## Handoff
- → **brunson-webinar** for `create-three-secrets` (BR_WEB_003) — use top 3 beliefs as secrets
- → **brunson-copy** for `write-sales-page` (BR_CPY_002) — address beliefs in copy
- → **brunson-email** for `create-soap-opera-sequence` (BR_EML_001) — break beliefs over email

---
*Task: BR_EXP_004 | Agent: brunson-expert | Version: 1.0*
