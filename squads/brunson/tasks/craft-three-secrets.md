# craft-three-secrets

## Metadata
```yaml
task_id: BR_WEB_003
agent: brunson-webinar
type: creation
complexity: high
estimated_time: 60-90min
source: "Expert Secrets — Chapter 11: The Three Secrets"
```

## Purpose
Craft the Three Secrets presentation flow that forms the core teaching section of the Perfect Webinar. Each Secret systematically destroys a false belief (vehicle, internal, external) and replaces it with a new truth through Epiphany Bridge stories.

> "Each of your three secrets is designed to break one of the three core false beliefs that are keeping your audience from saying yes." — Russell Brunson

---

## The Framework: Three Secrets Architecture

The Three Secrets are not random teaching points. They are surgically designed to dismantle the three categories of false beliefs that prevent your audience from buying.

### The Three False Belief Categories

```
SECRET #1: The Vehicle (New Opportunity)
├── False Belief: "This type of solution won't work"
├── Story: Your Epiphany Bridge about discovering the vehicle
└── Reframe: Why THIS vehicle is different from everything else

SECRET #2: Internal Beliefs
├── False Belief: "I can't do this / I'm not capable"
├── Story: Someone like them who overcame the same doubt
└── Reframe: Why they ARE capable (it's the system, not them)

SECRET #3: External Beliefs
├── False Belief: "External forces will prevent my success"
├── Story: How someone overcame the exact external obstacle
└── Reframe: Why external factors don't apply with this vehicle
```

### The Pattern for Each Secret
```
1. State the Secret (curiosity hook)
2. Tell the Epiphany Bridge Story
3. Show the Framework/Strategy
4. Destroy the #1 Related False Belief
5. Reframe with New Belief
6. Stack Social Proof
7. Transition to Next Secret
```

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  new_opportunity: ""           # the vehicle/framework you're presenting
  target_avatar: ""
  dream_outcome: ""
  big_domino: ""                # the One Big Domino belief
  top_false_beliefs:
    vehicle: []                 # 3-5 false beliefs about the vehicle
    internal: []                # 3-5 false beliefs about themselves
    external: []                # 3-5 false beliefs about external factors
  origin_story: ""              # your Epiphany Bridge story
  case_studies: []              # success stories to reference
```

---

## Step-by-Step Process

### Step 1: Identify the #1 False Belief in Each Category
From the list of false beliefs, select the single most powerful one in each category.

```yaml
primary_false_beliefs:
  vehicle:
    belief: ""                  # "Funnels don't work for my industry"
    how_common: ""              # What % of audience holds this?
    emotional_charge: ""        # How strongly do they feel it?
    origin: ""                  # Where did they learn this?
  internal:
    belief: ""                  # "I'm not tech-savvy enough"
    how_common: ""
    emotional_charge: ""
    origin: ""
  external:
    belief: ""                  # "My market is too saturated"
    how_common: ""
    emotional_charge: ""
    origin: ""
```

**Test:** If you could only destroy ONE belief per category to make the sale, which would it be?

### Step 2: Craft Secret #1 — The Vehicle Secret
This secret proves that the NEW OPPORTUNITY (your vehicle) is the right path.

```yaml
secret_1_vehicle:
  secret_title: ""              # Curiosity-driven title
  opening_hook: ""              # Pattern interrupt that grabs attention
  epiphany_bridge_story:
    backstory: ""               # Where you were before
    wall_hit: ""                # The moment of frustration
    epiphany_moment: ""         # The breakthrough discovery
    framework_discovered: ""    # What you found
    results_achieved: ""        # The transformation
  framework_teach:
    name: ""                    # Name of the strategy/framework
    steps: []                   # 3-5 simple steps
    visual: ""                  # Diagram or visual aid description
  false_belief_break:
    state_belief: ""            # "Most people think..."
    show_evidence: ""           # Why it seems true
    reframe: ""                 # "But here's what I discovered..."
    new_belief: ""              # The replacement belief
  social_proof:
    example_1: ""               # Person who proved it works
    example_2: ""               # Different context, same result
  transition: ""                # Bridge to Secret #2
```

### Step 3: Craft Secret #2 — The Internal Belief Secret
This secret proves the AUDIENCE is capable of executing.

```yaml
secret_2_internal:
  secret_title: ""
  opening_hook: ""
  epiphany_bridge_story:
    character: ""               # Someone relatable to the audience
    internal_doubt: ""          # The doubt they had
    breakthrough_moment: ""     # What shifted
    system_not_talent: ""       # How the system (not talent) created the result
    results_achieved: ""
  framework_teach:
    name: ""
    steps: []
    visual: ""
  false_belief_break:
    state_belief: ""            # "You might think you need..."
    show_evidence: ""
    reframe: ""                 # "The truth is, with this system..."
    new_belief: ""
  social_proof:
    example_1: ""               # Unlikely success story
    example_2: ""               # "If they can, you definitely can"
  transition: ""
```

### Step 4: Craft Secret #3 — The External Belief Secret
This secret eliminates the "yes, but..." external excuses.

```yaml
secret_3_external:
  secret_title: ""
  opening_hook: ""
  epiphany_bridge_story:
    character: ""
    external_obstacle: ""       # The barrier they faced
    how_overcome: ""            # How the vehicle bypassed it
    advantage_revealed: ""      # Why the obstacle was actually an advantage
    results_achieved: ""
  framework_teach:
    name: ""
    steps: []
    visual: ""
  false_belief_break:
    state_belief: ""            # "Most people worry about..."
    show_evidence: ""
    reframe: ""                 # "But with this approach..."
    new_belief: ""
  social_proof:
    example_1: ""
    example_2: ""
  transition_to_close: ""       # Bridge to the Stack/Close
```

### Step 5: Validate the Belief Destruction Sequence
Ensure the three secrets work as a complete belief-elimination system.

```yaml
belief_chain_validation:
  after_secret_1:
    audience_thinks: ""         # "OK, this vehicle might work..."
    remaining_doubt: ""         # "But can I do it?"
  after_secret_2:
    audience_thinks: ""         # "OK, maybe I CAN do it..."
    remaining_doubt: ""         # "But what about [external factor]?"
  after_secret_3:
    audience_thinks: ""         # "There's nothing stopping me..."
    ready_for: "The Close / Stack Slide"
  big_domino_status: "TOPPLED"  # All false beliefs eliminated
```

### Step 6: Add Transition Bridges Between Secrets
Each transition must maintain momentum and increase anticipation.

```yaml
transitions:
  intro_to_secret_1: ""         # "Let me share the first thing I discovered..."
  secret_1_to_2: ""             # "Now that you know the vehicle works, let me show you why YOU can do this..."
  secret_2_to_3: ""             # "You have the vehicle and the ability. But I know what you're thinking..."
  secret_3_to_close: ""         # "Now that we've covered all three secrets, let me show you how to get started..."
```

---

## Output Template
```yaml
output:
  three_secrets:
    offer: ""
    avatar: ""
    secret_1:
      title: ""
      false_belief_destroyed: ""
      new_belief_installed: ""
      story_summary: ""
      framework_name: ""
      key_teaching_point: ""
    secret_2:
      title: ""
      false_belief_destroyed: ""
      new_belief_installed: ""
      story_summary: ""
      framework_name: ""
      key_teaching_point: ""
    secret_3:
      title: ""
      false_belief_destroyed: ""
      new_belief_installed: ""
      story_summary: ""
      framework_name: ""
      key_teaching_point: ""
    belief_chain_complete: true/false
    transitions_smooth: true/false
    total_presentation_time: "45-60 min"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Each secret targets a DIFFERENT belief category (vehicle, internal, external)
  - [ ] Each secret has a complete Epiphany Bridge story (not just data)
  - [ ] False beliefs are stated in the audience's own language
  - [ ] Reframes feel like genuine insights, not manipulation
  - [ ] Social proof examples are specific and relatable
  - [ ] Transitions maintain momentum and build anticipation
  - [ ] After all three secrets, the Big Domino belief is toppled
  - [ ] Total teaching time fits within 45-60 minutes
```

---

## Handoff
- -> **brunson-webinar** for `create-perfect-webinar` (BR_WEB_001) — integrate into full presentation
- -> **brunson-webinar** for `build-stack-slide` (BR_WEB_002) — create the close that follows
- -> **brunson-stories** for `craft-origin-story` (BR_STR_001) — deepen the Epiphany Bridge stories

---
*Task: BR_WEB_003 | Agent: brunson-webinar | Version: 1.0*
