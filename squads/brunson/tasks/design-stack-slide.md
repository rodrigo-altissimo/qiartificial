# design-stack-slide

## Metadata
```yaml
task_id: BR_WEB_002
agent: brunson-webinar
type: creation
complexity: medium
estimated_time: 30-45min
source: "Expert Secrets — Chapter 15: The Stack"
```

## Purpose
Design the Stack Slide presentation — the single most important slide in any webinar or presentation. The Stack Slide is a visual summary of everything included in the offer, with assigned values, that makes the price feel insignificant compared to the total value.

> "The Stack Slide is worth more than every other slide combined. It's the one slide that does the selling. Everything before it is just setting the stage." — Russell Brunson

---

## The Framework: The Stack Slide

### Why the Stack Works
Psychology of value perception:
- **Anchoring** — High total value anchors perception
- **Contrast** — Price feels small against total value
- **Tangibility** — Each component is named and valued
- **Accumulation** — Value builds with each item revealed
- **FOMO** — Bonuses create fear of missing out

### Stack Slide Structure
```
┌────────────────────────────────────────────────┐
│             EVERYTHING YOU GET:                  │
├────────────────────────────────────────────────┤
│                                                  │
│  ✅ Core Program: [Name]           Value: $X     │
│  ✅ Component 2: [Name]            Value: $X     │
│  ✅ Component 3: [Name]            Value: $X     │
│  ✅ Component 4: [Name]            Value: $X     │
│                                                  │
│  🎁 BONUS 1: [Name]               Value: $X     │
│  🎁 BONUS 2: [Name]               Value: $X     │
│  🎁 BONUS 3: [Name]               Value: $X     │
│                                                  │
│  ─────────────────────────────────────────────   │
│  TOTAL VALUE:                      $XX,XXX       │
│                                                  │
│  Today's Price:     [CROSSED OUT: $X,XXX]        │
│                                                  │
│  YOUR INVESTMENT:   Only $XXX                    │
│                                                  │
│  + [Guarantee]                                   │
│                                                  │
│  [CTA BUTTON]                                    │
└────────────────────────────────────────────────┘
```

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  offer_price: ""
  target_audience: ""
  core_product: ""
  additional_components: []
  potential_bonuses: []
  guarantee_type: ""
  competitor_prices: []     # What do alternatives cost?
  delivery_format: ""
  urgency_mechanism: ""
```

---

## Step-by-Step Process

### Step 1: Define the Core Offer Component
The main thing they are buying.

```yaml
core_component:
  name: ""                  # Give it a premium name
  description: ""           # 1-2 sentence description
  what_it_includes: []      # Modules, lessons, resources
  result_it_produces: ""    # What outcome does this deliver?
  assigned_value: ""        # Conservative market value
  value_justification: ""   # "A private coaching session costs $500/hr..."
```

**Naming Rule:** Make it sound like a THING, not a feature.
- Bad: "Access to our course"
- Good: "The Funnel Blueprint Masterclass ($1,997 value)"

### Step 2: Design Supporting Components
Additional deliverables that enhance the core offer.

```yaml
supporting_components:
  component_1:
    name: ""
    type: ""                # Tool, template, resource, training
    description: ""
    result: ""
    assigned_value: ""
    value_justification: ""
  component_2:
    name: ""
    type: ""
    description: ""
    result: ""
    assigned_value: ""
    value_justification: ""
  component_3:
    name: ""
    type: ""
    description: ""
    result: ""
    assigned_value: ""
    value_justification: ""
```

**Component Types That Stack Well:**
- Templates and swipe files
- Software tools or access
- Community/group access
- Implementation guides
- Done-for-you elements
- Expert interviews or trainings

### Step 3: Design the Bonuses
Bonuses that create urgency and tip the decision.

```yaml
bonuses:
  bonus_1:
    name: ""
    description: ""
    assigned_value: ""
    urgency: ""             # "Only available for the next 48 hours"
    why_valuable: ""        # Why this bonus matters
    delivery: ""            # Immediate, within 24hrs, etc.
  bonus_2:
    name: ""
    description: ""
    assigned_value: ""
    urgency: ""
    why_valuable: ""
    delivery: ""
  bonus_3:
    name: ""
    description: ""
    assigned_value: ""
    urgency: ""
    why_valuable: ""
    delivery: ""
```

**Brunson's Bonus Rules:**
1. Bonuses should address remaining objections
2. At least one bonus should have a deadline
3. Bonuses should feel like they could be sold separately
4. The best bonus is the one that speeds up results

### Step 4: Calculate the Value Stack
Add up all values and create the contrast.

```yaml
value_calculation:
  core_component: "$0"
  supporting_component_1: "$0"
  supporting_component_2: "$0"
  supporting_component_3: "$0"
  bonus_1: "$0"
  bonus_2: "$0"
  bonus_3: "$0"
  total_value: "$0"
  actual_price: "$0"
  savings: "$0"
  value_to_price_ratio: "0x"   # Should be 10x minimum
```

**Pricing Psychology:**
- Total value should be 10-15x the price
- Each component value should be justifiable (not inflated)
- Price should feel like a "no-brainer" after seeing total value

### Step 5: Create the Reveal Sequence
The ORDER in which you reveal stack items matters.

```yaml
reveal_sequence:
  slide_1:
    reveal: "Core component"
    cumulative_value: "$X"
    script: "The first thing you get is..."
  slide_2:
    reveal: "Component 2"
    cumulative_value: "$X + Y"
    script: "But that's not all. You also get..."
  slide_3:
    reveal: "Component 3"
    cumulative_value: "$X + Y + Z"
    script: "And to make it even easier..."
  slide_4:
    reveal: "Bonus 1"
    cumulative_value: "Running total"
    script: "Plus, if you act today, I'm including..."
  slide_5:
    reveal: "Bonus 2"
    cumulative_value: "Running total"
    script: "And because I want to remove all risk..."
  slide_6:
    reveal: "Bonus 3 + Total + Price"
    script: "When you add it all up, that's $X in value. But you won't pay anywhere near that..."
```

**Reveal Rule:** Each new item should get its own moment. Never rush through the stack.

### Step 6: Design the Price Anchor and Reveal
Create the contrast between value and price.

```yaml
price_presentation:
  anchor_1: ""              # "If you hired me privately: $25,000"
  anchor_2: ""              # "If you bought everything separately: $12,000"
  anchor_3: ""              # "The total value is: $8,997"
  not_that_price: ""        # "But you won't pay $8,997"
  not_this_either: ""       # "Not even $4,997"
  actual_price: ""          # "Your investment today is just $997"
  payment_plan: ""          # "Or 3 easy payments of $397"
  comparison: ""            # "That's less than $3.30/day"
```

### Step 7: Add the Guarantee
Remove the final barrier to purchase.

```yaml
guarantee:
  type: ""                  # 30-day money back, results-based, double-guarantee
  duration: ""
  conditions: ""
  description: ""
  visual: ""                # Badge, seal, certification
  risk_reversal_statement: "" # "You literally can't lose..."
```

---

## Output Template
```yaml
output:
  stack_slide:
    offer_name: ""
    components:
      - name: ""
        value: ""
      - name: ""
        value: ""
    bonuses:
      - name: ""
        value: ""
    total_value: ""
    actual_price: ""
    value_ratio: ""
    guarantee: ""
    reveal_sequence: []
    slides_needed: 0
    script_word_count: 0
```

---

## Quality Gate
```yaml
quality:
  - [ ] Value-to-price ratio is at least 10x
  - [ ] Each component value is justifiable (not absurdly inflated)
  - [ ] Components are named as tangible deliverables (not features)
  - [ ] At least 2-3 bonuses with urgency
  - [ ] Price anchoring creates clear contrast
  - [ ] Guarantee removes risk completely
  - [ ] Reveal sequence builds anticipation
  - [ ] Stack feels overwhelming in a good way
```

---

## Handoff
- → **brunson-webinar** for `create-perfect-webinar` (BR_WEB_001) — integrate into webinar
- → **brunson-copy** for `write-sales-page` (BR_CPY_002) — translate to sales page
- → **brunson-offers** for `create-value-stack` (BR_OFR_001) — detailed pricing strategy

---
*Task: BR_WEB_002 | Agent: brunson-webinar | Version: 1.0*
