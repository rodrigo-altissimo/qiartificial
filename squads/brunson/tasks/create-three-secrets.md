# create-three-secrets

## Metadata
```yaml
task_id: BR_WEB_003
agent: brunson-webinar
type: creation
complexity: high
estimated_time: 60-90min
source: "Expert Secrets — Chapter 12-14: The Three Secrets"
```

## Purpose
Create the Three Secrets with Epiphany Bridge stories for a Perfect Webinar. Each Secret systematically destroys one of the three false belief categories (Vehicle, Internal, External) and replaces it with a new empowering belief through story-based persuasion.

> "People don't buy based on logic. They buy based on emotion and then justify with logic. The Epiphany Bridge is how you create that emotional shift." — Russell Brunson

---

## The Framework: Three Secrets + Epiphany Bridges

### The Three Secrets Architecture
```
SECRET 1: The Vehicle (New Opportunity)
  → Destroys: "This approach won't work"
  → Replaces: "This new opportunity IS the answer"
  → Story: YOUR epiphany story

SECRET 2: Internal Belief
  → Destroys: "I can't do this"
  → Replaces: "I CAN do this (and here's proof)"
  → Story: A STUDENT/CLIENT epiphany story

SECRET 3: External Belief
  → Destroys: "External factors will prevent me"
  → Replaces: "Nothing can stop me with this system"
  → Story: An INDUSTRY/MARKET epiphany story
```

### The Epiphany Bridge Story Formula
```
1. BACKSTORY — Relatable starting point
2. DESIRE — What they wanted
3. WALL — The obstacle (false belief in action)
4. EPIPHANY — The breakthrough moment
5. PLAN — What they did differently
6. CONFLICT — It wasn't easy (builds believability)
7. RESOLUTION — The transformation/result
8. NEW BELIEF — The lesson/takeaway
```

---

## Input Required
```yaml
input_fields:
  new_opportunity: ""       # From BR_EXP_002
  big_domino: ""            # From BR_EXP_003
  false_beliefs: ""         # From BR_EXP_004
  your_origin_story: ""
  client_success_stories: []
  industry_examples: []
  target_audience: ""
  desired_outcome: ""
  your_framework: ""
  proof_points: []
```

---

## Step-by-Step Process

### Step 1: Select the Three False Beliefs to Target
Choose the most impactful false belief from each category.

```yaml
belief_selection:
  vehicle_belief:
    false_belief: ""
    why_they_believe_it: ""
    new_belief_to_install: ""
    impact_if_broken: ""    # High/Medium/Low
  internal_belief:
    false_belief: ""
    why_they_believe_it: ""
    new_belief_to_install: ""
    impact_if_broken: ""
  external_belief:
    false_belief: ""
    why_they_believe_it: ""
    new_belief_to_install: ""
    impact_if_broken: ""
```

### Step 2: Write Secret #1 — The Vehicle Secret
Teach why your New Opportunity is the right vehicle.

```yaml
secret_1:
  secret_title: ""          # Catchy name like "The Hidden Funnel"
  false_belief: ""
  new_belief: ""

  teaching_section:
    main_concept: ""        # The principle you're teaching
    supporting_points:
      - point: ""
        explanation: ""
      - point: ""
        explanation: ""
      - point: ""
        explanation: ""
    mini_framework: ""      # A named sub-framework within the secret
    visual_or_metaphor: ""  # Something they can picture

  epiphany_bridge:
    backstory:
      who: "You (the presenter)"
      where: ""
      when: ""
      situation: ""
      what_you_believed: "" # The old false belief
    desire:
      what_you_wanted: ""
      why_it_mattered: ""
    wall:
      what_stopped_you: ""
      how_it_felt: ""
      what_you_tried: ""
    epiphany:
      what_happened: ""     # The specific moment of realization
      what_you_realized: ""
      why_everything_changed: ""
    plan:
      what_you_did_next: ""
      first_action: ""
    conflict:
      challenge_faced: ""
      doubt_experienced: ""
    resolution:
      result_achieved: ""
      timeframe: ""
      specific_numbers: ""
    new_belief:
      statement: ""         # "And that's when I realized..."

  transition: ""            # Bridge to Secret 2
  estimated_duration: "12-15 minutes"
```

### Step 3: Write Secret #2 — The Internal Belief Secret
Prove they have what it takes to succeed.

```yaml
secret_2:
  secret_title: ""
  false_belief: ""
  new_belief: ""

  teaching_section:
    main_concept: ""
    supporting_points:
      - point: ""
        explanation: ""
      - point: ""
        explanation: ""
      - point: ""
        explanation: ""
    mini_framework: ""
    visual_or_metaphor: ""

  epiphany_bridge:
    backstory:
      who: ""               # Ideally a student/client (someone like them)
      where: ""
      when: ""
      situation: ""
      what_they_believed: ""
    desire:
      what_they_wanted: ""
      why_it_mattered: ""
    wall:
      what_stopped_them: ""
      internal_dialogue: "" # "I thought I couldn't because..."
    epiphany:
      what_happened: ""
      what_they_realized: ""
      the_shift: ""
    plan:
      what_they_did: ""
      how_simple_it_was: "" # Emphasize simplicity
    conflict:
      challenge: ""
      how_they_overcame: ""
    resolution:
      result: ""
      transformation: ""
      in_their_words: ""    # Direct quote if possible
    new_belief:
      statement: ""

  social_proof_stack:       # Add additional proof after the story
    - proof: ""
      type: ""              # Testimonial, screenshot, data
    - proof: ""
      type: ""

  transition: ""
  estimated_duration: "12-15 minutes"
```

### Step 4: Write Secret #3 — The External Belief Secret
Remove perceived external obstacles.

```yaml
secret_3:
  secret_title: ""
  false_belief: ""
  new_belief: ""

  teaching_section:
    main_concept: ""
    supporting_points:
      - point: ""
        explanation: ""
      - point: ""
        explanation: ""
      - point: ""
        explanation: ""
    mini_framework: ""
    visual_or_metaphor: ""

  epiphany_bridge:
    backstory:
      who: ""               # Industry example or counter-intuitive case
      where: ""
      when: ""
      situation: ""
      common_belief: ""     # What everyone assumed
    desire:
      what_was_wanted: ""
    wall:
      external_obstacle: ""
      why_it_seemed_impossible: ""
    epiphany:
      what_changed: ""
      new_perspective: ""
      paradigm_shift: ""
    plan:
      new_approach: ""
      how_external_factor_became_irrelevant: ""
    conflict:
      resistance: ""
      skeptics: ""
    resolution:
      result: ""
      proof: ""
      industry_impact: ""
    new_belief:
      statement: ""

  vision_painting:          # End Secret 3 with a vision of the future
    their_life_with_solution: ""
    their_life_without: ""
    emotional_peak: ""

  transition_to_offer: ""   # "So now let me show you how to get everything..."
  estimated_duration: "12-15 minutes"
```

### Step 5: Write the Transitions Between Secrets
Smooth bridges that maintain momentum.

```yaml
transitions:
  intro_to_secret_1:
    script: ""
    duration: "30 seconds"
  secret_1_to_secret_2:
    script: ""
    mini_recap: ""          # "So now you know [Secret 1]..."
    tease: ""               # "But knowing WHAT to do isn't enough..."
    duration: "1-2 minutes"
  secret_2_to_secret_3:
    script: ""
    mini_recap: ""
    tease: ""
    duration: "1-2 minutes"
  secret_3_to_offer:
    script: ""
    full_recap: ""          # Recap all 3 secrets
    bridge_to_stack: ""     # "Now let me show you how to implement..."
    duration: "2-3 minutes"
```

### Step 6: Create the Belief Shift Summary
Document the belief transformation for each secret.

```yaml
belief_shift_map:
  secret_1:
    before: ""              # What they believed BEFORE
    after: ""               # What they believe AFTER
    proof_used: ""          # What made the shift happen
  secret_2:
    before: ""
    after: ""
    proof_used: ""
  secret_3:
    before: ""
    after: ""
    proof_used: ""
  cumulative_effect: ""     # After all 3 secrets, they now believe...
```

---

## Output Template
```yaml
output:
  three_secrets:
    secret_1:
      title: ""
      belief_broken: ""
      story_type: ""
      duration: ""
    secret_2:
      title: ""
      belief_broken: ""
      story_type: ""
      duration: ""
    secret_3:
      title: ""
      belief_broken: ""
      story_type: ""
      duration: ""
    total_duration: ""
    total_word_count: 0
    belief_shifts: 3
    stories_included: 3
    supporting_proof_pieces: 0
```

---

## Quality Gate
```yaml
quality:
  - [ ] Each Secret targets a DIFFERENT belief type (V/I/E)
  - [ ] Each Secret has a complete Epiphany Bridge story
  - [ ] Stories follow the 8-part formula (backstory through new belief)
  - [ ] Secret 1 uses YOUR personal story
  - [ ] Secret 2 uses a CLIENT/STUDENT story
  - [ ] Transitions are smooth and build momentum
  - [ ] Combined duration is 35-45 minutes
  - [ ] All three belief shifts point to your offer as the solution
```

---

## Handoff
- → **brunson-webinar** for `create-perfect-webinar` (BR_WEB_001) — integrate into full script
- → **brunson-webinar** for `design-stack-slide` (BR_WEB_002) — follow secrets with stack
- → **brunson-copy** for email/ad adaptation of the secrets

---
*Task: BR_WEB_003 | Agent: brunson-webinar | Version: 1.0*
