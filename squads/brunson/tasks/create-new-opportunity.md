# create-new-opportunity

## Metadata
```yaml
task_id: BR_EXP_002
agent: brunson-expert
type: creation
complexity: high
estimated_time: 45-60min
source: "Expert Secrets — Chapter 5-6: The New Opportunity"
```

## Purpose
Create a New Opportunity positioning for your offer using Brunson's Opportunity Switch or Opportunity Stack framework. Instead of being "another option" in an existing category, you create an entirely new vehicle that makes the old ways obsolete.

> "Don't try to improve what they're already doing. Create a new opportunity that replaces it entirely. People don't want improvement — they want NEW." — Russell Brunson

---

## The Framework: New Opportunity vs. Improvement

### Why New Opportunity Wins

| Improvement Offer | New Opportunity |
|-------------------|-----------------|
| "Better diet plan" | "The first protocol that resets your metabolism" |
| "Improved marketing" | "A new kind of funnel that eliminates selling" |
| "Faster weight loss" | "A body transformation system (not a diet)" |
| Competes on features | Creates new category |
| Triggers comparison | Triggers curiosity |
| "This vs. That" | "This changes everything" |

### Two Types of New Opportunity

**Opportunity Switch:** Replace their current vehicle entirely.
- "Stop doing Facebook ads. Here's a completely different approach."

**Opportunity Stack:** Add a new layer ON TOP of what they do.
- "Keep your current business, but add this funnel system on top."

---

## Input Required
```yaml
input_fields:
  current_market_solution: ""     # What are people currently doing?
  why_current_solution_fails: ""  # Why does the old way not work?
  your_unique_mechanism: ""       # What's different about your approach?
  target_audience: ""
  their_biggest_frustration: ""
  desired_outcome: ""
  competitors: []
  your_expertise: ""
  available_proof: []
```

---

## Step-by-Step Process

### Step 1: Identify the Current Vehicle
What is your audience currently using to try to achieve their goal?

```yaml
current_vehicle:
  name: ""                  # What do they call it?
  category: ""              # What market category is it in?
  common_approaches:        # Specific methods they use
    - approach: ""
      why_it_fails: ""
    - approach: ""
      why_it_fails: ""
    - approach: ""
      why_it_fails: ""
  emotional_state: ""       # How do they feel about it?
  sunk_cost: ""             # What have they already invested?
  identity_attachment: ""   # How attached are they to this approach?
```

### Step 2: Determine Switch vs. Stack
Decide which New Opportunity type to use.

```yaml
opportunity_type_decision:
  switch:
    viable: true/false
    reasoning: ""
    risk: ""                # People resist abandoning what they know
    reward: ""              # Creates entirely new category
  stack:
    viable: true/false
    reasoning: ""
    risk: ""                # Less disruptive positioning
    reward: ""              # Easier for prospect to say yes
  selected_type: ""
  selection_reasoning: ""
```

**Decision Rule:**
- **Switch** when the current vehicle is fundamentally broken
- **Stack** when the current vehicle works but is incomplete

### Step 3: Define Your New Opportunity
Create the language and positioning for your new vehicle.

```yaml
new_opportunity:
  name: ""                  # What do you call this new thing?
  category: ""              # New category name you're creating
  one_line_description: ""
  how_its_different:
    from_approach_1: ""
    from_approach_2: ""
    from_approach_3: ""
  unique_mechanism: ""      # The specific thing that makes it work
  mechanism_name: ""        # Give it a proprietary name
  why_now: ""               # Why is this possible NOW?
  who_its_for: ""
  who_its_not_for: ""
```

### Step 4: Create the "Old Way vs. New Way" Contrast
Build the comparison that makes the old way look obsolete.

```yaml
contrast_table:
  old_way:
    name: ""
    belief_1: ""
    belief_2: ""
    belief_3: ""
    typical_result: ""
    time_to_result: ""
    effort_required: ""
    cost: ""
    failure_rate: ""
  new_way:
    name: ""
    belief_1: ""
    belief_2: ""
    belief_3: ""
    typical_result: ""
    time_to_result: ""
    effort_required: ""
    cost: ""
    success_rate: ""
```

### Step 5: Build the Status Opportunity
Position the new opportunity as a status INCREASE, not just a result.

```yaml
status_positioning:
  current_status: ""        # How do they feel about themselves now?
  status_with_old_way: ""   # What status does the old way give them?
  status_with_new_way: ""   # What status does the new opportunity give?
  identity_shift: ""        # Who do they BECOME?
  tribe_membership: ""      # What group do they join?
  external_signals: ""      # How will others SEE their transformation?
```

**Brunson's Rule:** "People buy for status. The new opportunity must make them feel like they're gaining status, not losing it by abandoning the old way."

### Step 6: Craft the Opportunity Pitch
Write the core pitch that introduces the new opportunity.

```yaml
opportunity_pitch:
  hook: ""                  # Opening that creates curiosity
  problem_amplification: "" # Why the old way is broken
  epiphany_bridge: ""       # Story of discovering the new way
  new_opportunity_reveal: "" # Introduction of the new vehicle
  mechanism_explanation: "" # How it works differently
  proof: ""                 # Evidence it works
  invitation: ""            # Call to join the new opportunity
```

### Step 7: Validate the New Opportunity
Test the positioning against Brunson's validation criteria.

```yaml
validation:
  does_it_replace_old_vehicle: true/false
  is_it_truly_new_or_just_rebranded: ""
  does_it_increase_status: true/false
  is_the_mechanism_believable: true/false
  can_you_tell_an_epiphany_story: true/false
  does_it_make_old_way_obsolete: true/false
  would_prospect_feel_excited_not_guilty: true/false
```

---

## Output Template
```yaml
output:
  new_opportunity:
    type: ""                # Switch or Stack
    name: ""
    category_created: ""
    unique_mechanism: ""
    mechanism_name: ""
    positioning:
      old_way: ""
      new_way: ""
    status_promise: ""
    identity_shift: ""
    pitch_summary: ""
    validation_passed: true/false
```

---

## Quality Gate
```yaml
quality:
  - [ ] New opportunity is genuinely NEW (not rebranded improvement)
  - [ ] Switch vs. Stack decision is justified
  - [ ] Unique mechanism is named and explained
  - [ ] Old Way vs. New Way contrast is compelling
  - [ ] Status increase is clearly articulated
  - [ ] Opportunity pitch follows hook → problem → epiphany → reveal arc
  - [ ] Validation criteria are met
  - [ ] Prospect would feel excited, not skeptical
```

---

## Handoff
- → **brunson-expert** for `identify-big-domino` (BR_EXP_003) — find the one belief to change
- → **brunson-expert** for `map-false-beliefs` (BR_EXP_004) — map objection beliefs
- → **brunson-webinar** for `create-three-secrets` (BR_WEB_003) — teach the new opportunity
- → **brunson-copy** for `write-sales-page` (BR_CPY_002) — sell the new opportunity

---
*Task: BR_EXP_002 | Agent: brunson-expert | Version: 1.0*
