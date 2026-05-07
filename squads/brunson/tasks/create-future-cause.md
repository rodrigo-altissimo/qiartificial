# create-future-cause

## Metadata
```yaml
task_id: BR_MOV_004
agent: brunson-movement
type: creation
complexity: medium
estimated_time: 30-45min
source: "Expert Secrets — Chapter 6: The Future-Based Cause + Chapter 19: Creating Your Mass Movement"
```

## Purpose
Create a future-based cause narrative that gives your audience something bigger than themselves to fight for. A movement needs a compelling vision of the future that members can rally behind — a cause that makes them feel like they're part of something important and lasting.

> "People don't follow leaders who just sell products. They follow leaders who paint a picture of a better future and invite them to help create it." — Russell Brunson

---

## The Framework: Future-Based Cause Architecture

Every great movement is built on a vision of the future. The cause answers the question: "What future are we creating together?" It transforms customers into crusaders.

### The 4 Elements of a Cause

```
ELEMENT                    PURPOSE                          EXAMPLE
────────────────────────   ──────────────────────────────   ──────────────────────
1. The Broken Present      What's wrong with the world      "Most entrepreneurs are stuck..."
2. The Enemy               Who/what keeps it broken         "The old way of marketing..."
3. The Promised Future      What the world WILL look like   "A world where every entrepreneur..."
4. The Role of the Member   How THEY help create it         "You're not just a customer..."
```

### Cause Strength Spectrum

```
WEAKEST                                                    STRONGEST
──────────────────────────────────────────────────────────────────────
Product-focused      →    Outcome-focused    →    Identity-focused    →    Movement-focused

"Buy my course"       "Get results"          "Become who you're        "Change the world
                                              meant to be"              together"
```

---

## Input Required
```yaml
input_fields:
  movement_name: ""
  leader_name: ""
  niche: ""
  target_avatar: ""
  current_frustration: ""       # What's broken for your audience?
  enemy: ""                     # Who/what is the antagonist?
  transformation: ""            # What does the future look like?
  core_values: []               # 3-5 values of the movement
  unique_perspective: ""        # How you see the world differently
```

---

## Step-by-Step Process

### Step 1: Articulate the Broken Present
Describe the current state of the world that your movement exists to change.

```yaml
broken_present:
  what_is_wrong: ""             # The fundamental problem
  who_suffers: ""               # Who is most affected?
  how_it_manifests: ""          # How people experience this problem daily
  hidden_cost: ""               # What this broken system really costs society
  why_it_persists: ""           # Why hasn't it been fixed?
  emotional_weight: ""          # How it FEELS to live in this reality
```

### Step 2: Name the Enemy
Every cause needs something to fight against. The enemy is not a person — it's a system, belief, or way of doing things.

```yaml
the_enemy:
  name: ""                      # The old way, the establishment, the broken system
  what_it_does: ""              # How the enemy keeps people stuck
  who_benefits: ""              # Who profits from the status quo?
  why_it_seems_impossible: ""   # Why do people think they can't fight it?
  how_your_movement_opposes: "" # How your approach is fundamentally different
  rallying_cry: ""              # The battle cry against the enemy
```

### Step 3: Paint the Promised Future
Describe the world your movement is creating — in vivid, emotional detail.

```yaml
promised_future:
  vision_statement: ""          # One paragraph vision of the future
  what_changes: ""              # Specifically what will be different
  who_benefits: ""              # Who wins when this future arrives?
  how_it_feels: ""              # The emotional experience of living in this future
  proof_its_possible: ""        # Evidence this future CAN exist
  timeline: ""                  # When will we see progress? (not necessarily completion)
  vivid_description: ""         # Paint the picture so clearly they can SEE it
```

### Step 4: Define the Member's Role
Transform members from passive customers into active participants in the cause.

```yaml
member_role:
  identity: ""                  # "You're not just a student — you're a [title]"
  contribution: ""              # How their participation advances the cause
  impact: ""                    # What changes because THEY showed up
  recognition: ""               # How they're acknowledged for their role
  community_bond: ""            # What connects members to each other
  progression: ""               # How their role deepens over time
```

### Step 5: Write the Cause Statement
Craft the 2-3 sentence statement that captures the entire cause.

```yaml
cause_statement:
  format: "We believe [belief]. We're building [future]. Together, we [action]."
  statement: ""
  short_version: ""             # One-sentence version for social bios, email signatures
  tagline: ""                   # 3-5 word movement tagline
```

### Step 6: Create Cause-Based Content Themes
Define the recurring content themes that reinforce the cause.

```yaml
content_themes:
  broken_present_content:
    purpose: "Remind them why the cause matters"
    examples: []
    frequency: "1-2x per week"
  enemy_content:
    purpose: "Unite against the common enemy"
    examples: []
    frequency: "1x per week"
  future_vision_content:
    purpose: "Inspire with the promised future"
    examples: []
    frequency: "2-3x per week"
  member_spotlight_content:
    purpose: "Celebrate members advancing the cause"
    examples: []
    frequency: "1-2x per week"
  progress_content:
    purpose: "Show that the movement is growing"
    examples: []
    frequency: "1x per week"
```

---

## Output Template
```yaml
output:
  future_cause:
    movement: ""
    broken_present: ""
    enemy: ""
    promised_future: ""
    member_role: ""
    cause_statement: ""
    tagline: ""
    content_themes:
      - theme: ""
        frequency: ""
    expected_impact:
      member_retention: "increased"
      referral_rate: "increased"
      brand_loyalty: "dramatically increased"
      organic_growth: "fueled by member advocacy"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Broken present is specific and emotionally resonant
  - [ ] Enemy is a system/belief, not a person or group
  - [ ] Promised future is vivid enough to visualize
  - [ ] Member role gives them agency and identity
  - [ ] Cause statement is 2-3 sentences, clear and memorable
  - [ ] Content themes reinforce the cause consistently
  - [ ] The cause is genuine (not manufactured for marketing)
  - [ ] Members would proudly share this cause with others
```

---

## Handoff
- -> **brunson-movement** for `write-manifesto` (BR_MOV_002) — write the full manifesto
- -> **brunson-movement** for `design-status-system` (BR_MOV_003) — create status tiers
- -> **brunson-stories** for `craft-origin-story` (BR_STR_001) — align the origin story with the cause

---
*Task: BR_MOV_004 | Agent: brunson-movement | Version: 1.0*
