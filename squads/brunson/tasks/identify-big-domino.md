# identify-big-domino

## Metadata
```yaml
task_id: BR_EXP_003
agent: brunson-expert
type: analysis
complexity: medium
estimated_time: 30-45min
source: "Expert Secrets — Chapter 4: The Big Domino"
```

## Purpose
Identify the One Big Domino — the single belief that, if knocked down, makes every other objection irrelevant. Instead of fighting 50 objections, find the ONE belief that collapses them all.

> "If I can make them believe that [my new opportunity] is the key to [what they desire most] and is only attainable through [my specific vehicle], then all other objections and concerns become irrelevant." — Russell Brunson

---

## The Framework: The Big Domino Statement

### The Big Domino Formula
```
If I can make them believe that [NEW OPPORTUNITY]
is the key to [DREAM OUTCOME]
and is ONLY attainable through [MY VEHICLE]...
then all other objections become irrelevant and they MUST buy.
```

### Why One Belief Matters

Most marketers try to overcome dozens of objections. Brunson's insight is that every objection stems from ONE core disbelief. Knock down that ONE domino and all the smaller dominos fall with it.

```
Traditional Approach (Fighting Every Objection):
  ❌ "It's too expensive" → overcome
  ❌ "I don't have time" → overcome
  ❌ "Will it work for me?" → overcome
  ❌ "I've tried before" → overcome
  = Exhausting and unconvincing

Big Domino Approach (One Belief):
  ✅ "If you believe THIS one thing, everything else makes sense"
  = Elegant and persuasive
```

---

## Input Required
```yaml
input_fields:
  new_opportunity: ""       # From BR_EXP_002
  target_audience: ""
  dream_outcome: ""
  your_vehicle: ""          # Your specific method/product
  common_objections: []     # List all known objections
  competitors_claims: []    # What do competitors promise?
  audience_past_failures: [] # What have they tried before?
  your_unique_mechanism: ""
```

---

## Step-by-Step Process

### Step 1: List All Known Objections
Dump every objection you have ever heard or can imagine.

```yaml
objection_dump:
  price_objections:
    - ""
    - ""
  time_objections:
    - ""
    - ""
  trust_objections:
    - ""
    - ""
  capability_objections:
    - ""
    - ""
  relevance_objections:
    - ""
    - ""
  risk_objections:
    - ""
    - ""
```

### Step 2: Find the Root Belief Behind Each Objection
Every objection is a symptom of a deeper belief.

```yaml
root_belief_analysis:
  objection_1:
    surface_objection: ""
    root_belief: ""         # What do they actually believe?
    belief_category: ""     # Vehicle, Internal, or External
  objection_2:
    surface_objection: ""
    root_belief: ""
    belief_category: ""
  objection_3:
    surface_objection: ""
    root_belief: ""
    belief_category: ""
```

**Example:**
- Surface: "It's too expensive"
- Root: "I don't believe this will work well enough to justify the cost"
- Category: Vehicle (they doubt the mechanism)

### Step 3: Identify the Belief Categories
Group beliefs into Brunson's three categories.

```yaml
belief_categories:
  vehicle_beliefs:          # "Will THIS approach work?"
    - belief: ""
      strength: ""          # Strong/Medium/Weak
    - belief: ""
      strength: ""
  internal_beliefs:         # "Can I do it?"
    - belief: ""
      strength: ""
    - belief: ""
      strength: ""
  external_beliefs:         # "Will external factors prevent me?"
    - belief: ""
      strength: ""
    - belief: ""
      strength: ""
```

### Step 4: Find the One Big Domino
Look for the ONE belief that, if changed, makes all others fall.

```yaml
big_domino_candidates:
  candidate_1:
    belief: ""
    if_they_believed_this: ""
    objections_it_eliminates: []
    domino_score: 0         # How many other objections fall? (count)
  candidate_2:
    belief: ""
    if_they_believed_this: ""
    objections_it_eliminates: []
    domino_score: 0
  candidate_3:
    belief: ""
    if_they_believed_this: ""
    objections_it_eliminates: []
    domino_score: 0
```

**Selection Criteria:**
- Eliminates the MOST other objections
- Is believable (not too big a leap)
- Can be supported with evidence
- Relates to the unique mechanism

### Step 5: Craft the Big Domino Statement
Write the definitive statement using the formula.

```yaml
big_domino_statement:
  template: "If I can make them believe that [X] is the key to [Y] and is only attainable through [Z], then all other objections become irrelevant."
  x_new_opportunity: ""
  y_dream_outcome: ""
  z_your_vehicle: ""
  full_statement: ""
  simplified_version: ""    # One sentence version
```

### Step 6: Build the Evidence Chain
What proof do you need to make them believe the Big Domino?

```yaml
evidence_chain:
  logical_proof:
    - argument: ""
      supports: ""
  social_proof:
    - evidence: ""
      type: ""              # Testimonial, case study, data
  experiential_proof:
    - experience: ""        # Something they can try/see themselves
  emotional_proof:
    - story: ""             # Epiphany bridge story
      emotional_shift: ""
```

### Step 7: Test the Domino
Validate that the Big Domino actually works.

```yaml
domino_test:
  completeness_test:
    question: "If they 100% believed this, would they buy?"
    answer: true/false
    if_no_what_else: ""
  believability_test:
    question: "Is this believable with available evidence?"
    answer: true/false
    if_no_what_evidence_needed: ""
  exclusivity_test:
    question: "Does this only point to MY vehicle?"
    answer: true/false
    if_no_how_to_make_exclusive: ""
  simplicity_test:
    question: "Can this be stated in one sentence?"
    answer: true/false
    if_no_simplify: ""
```

---

## Output Template
```yaml
output:
  big_domino:
    statement: ""
    simplified: ""
    new_opportunity: ""
    dream_outcome: ""
    your_vehicle: ""
    objections_eliminated: []
    evidence_needed:
      - type: ""
        description: ""
    validated: true/false
```

---

## Quality Gate
```yaml
quality:
  - [ ] Big Domino eliminates majority of objections
  - [ ] Statement follows the formula exactly
  - [ ] Belief is specific (not vague or generic)
  - [ ] Evidence chain supports the belief
  - [ ] Passes all 4 validation tests
  - [ ] Points exclusively to your vehicle (not competitors)
  - [ ] Can be stated in one clear sentence
```

---

## Handoff
- → **brunson-expert** for `map-false-beliefs` (BR_EXP_004) — map remaining beliefs
- → **brunson-webinar** for `create-three-secrets` (BR_WEB_003) — build secrets around Big Domino
- → **brunson-copy** for `write-sales-page` (BR_CPY_002) — center copy around Big Domino

---
*Task: BR_EXP_003 | Agent: brunson-expert | Version: 1.0*
