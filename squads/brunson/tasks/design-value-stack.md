# design-value-stack

## Metadata
```yaml
task_id: BR_OFR_002
agent: brunson-offers
type: creation
complexity: medium
estimated_time: 30-45min
source: "Expert Secrets — Chapter 15: The Stack Slide + DotCom Secrets Ignite — Offer Stacking"
```

## Purpose
Design the visual and presentational format of the offer value stack — the specific way you reveal each component to build perceived value before showing the price. The stack is not just a list of features; it's a choreographed reveal that makes the price feel like a steal.

> "The Stack Slide is where you visually build the value of your offer, component by component, until the total is so high that your price feels like nothing." — Russell Brunson

---

## The Framework: Value Stack Presentation

The value stack is presented component by component, each with its own name, description, and dollar value. The total value grows visually until the price reveal creates a dramatic contrast.

### Stack Slide Visual Pattern

```
┌─────────────────────────────────────────────┐
│  "Here's Everything You're Getting Today"    │
│                                              │
│  ✓ [Component 1 Name]         Value: $X,XXX │
│  ✓ [Component 2 Name]         Value: $X,XXX │
│  ✓ [Component 3 Name]         Value: $X,XXX │
│  ✓ [Component 4 Name]         Value: $X,XXX │
│  ✓ [Component 5 Name]         Value: $X,XXX │
│                                              │
│  TOTAL VALUE:                      $XX,XXX   │
│                                              │
│  ───────────────────────────────────────     │
│                                              │
│  YOUR PRICE TODAY:                 $XXX      │
│                                              │
│  [GET INSTANT ACCESS]                        │
└─────────────────────────────────────────────┘
```

---

## Input Required
```yaml
input_fields:
  offer_components: []          # from build-irresistible-offer task
  bonuses: []
  price: ""
  presentation_context: ""      # webinar, sales page, VSL
  brand_style: ""               # colors, fonts, visual identity
```

---

## Step-by-Step Process

### Step 1: Order the Stack Components
Components are presented in a specific order for maximum psychological impact.

```yaml
stack_order:
  position_1:
    component: ""               # Core offer — establish the foundation
    value: "$___"
    reveal_technique: "Anchor the main value"
  position_2:
    component: ""               # Most impressive tool/resource
    value: "$___"
    reveal_technique: "Build on the foundation"
  position_3:
    component: ""               # Implementation aid
    value: "$___"
    reveal_technique: "Remove objection (ease of use)"
  position_4:
    component: ""               # Tangible deliverable
    value: "$___"
    reveal_technique: "Make it feel real and physical"
  position_5:
    component: ""               # Access/community
    value: "$___"
    reveal_technique: "Add ongoing support dimension"

  ordering_rules:
    - Core offer always first (anchors the value)
    - Alternate between high-value and practical items
    - End with something that adds ongoing value
    - Each item should make the total feel bigger
```

### Step 2: Write Stack Component Descriptions
Each component needs a compelling name and 1-2 sentence value description.

```yaml
component_descriptions:
  component_1:
    name: ""                    # Specific, benefit-driven name
    description: ""             # 1-2 sentences: what it is + why it matters
    value_justification: ""     # Why this specific dollar amount
  component_2:
    name: ""
    description: ""
    value_justification: ""
  component_3:
    name: ""
    description: ""
    value_justification: ""

  naming_rules:
    - Use benefit-driven names, not feature names
    - "The [Result] Blueprint" > "Module 3"
    - "Done-For-You [Asset]" > "Template File"
    - Each name should create desire on its own
```

### Step 3: Design the Value Accumulation
Plan how the total value builds as each component is revealed.

```yaml
value_accumulation:
  after_component_1: "$___"     # Running total
  after_component_2: "$___"
  after_component_3: "$___"
  after_component_4: "$___"
  after_component_5: "$___"
  after_bonuses: "$___"
  final_total_value: "$___"
  actual_price: "$___"
  contrast_ratio: "___x"

  psychological_effect:
    midpoint: "They're already thinking 'this is a lot'"
    before_price: "Total feels overwhelming (in a good way)"
    price_reveal: "Relief — 'that's all?'"
```

### Step 4: Design the Price Reveal Sequence
The price reveal is a choreographed sequence, not just a number.

```yaml
price_reveal:
  step_1_anchor:
    text: "If I charged $[high number], it would be fair..."
    value: "$___"
  step_2_comparison:
    text: "Most [competitors] charge $[competitor price] for just [one piece]..."
    value: "$___"
  step_3_not_that:
    text: "But you're not going to pay $[anchor]..."
    value: "$___"
  step_4_not_even:
    text: "You're not even going to pay $[lower anchor]..."
    value: "$___"
  step_5_reveal:
    text: "Your investment today is just $[actual price]"
    value: "$___"
  step_6_savings:
    text: "That's a savings of $[total - price]"
    emphasis: "LARGE, highlighted"
```

### Step 5: Create Visual Stack Templates
Design the visual layout for different presentation contexts.

```yaml
visual_templates:
  webinar_stack_slide:
    format: "Single slide with all components listed"
    style: "Clean, professional, each item on its own line"
    running_total: "Right-aligned dollar values"
    price_reveal: "Separate slide with dramatic contrast"
  sales_page_stack:
    format: "Scrolling section with component cards"
    style: "Each component has icon, name, description, value"
    running_total: "Accumulating counter animation"
    price_reveal: "Below the stack with CTA button"
  vsl_stack:
    format: "Progressive slides, one component per slide"
    style: "Build up visually as each is added"
    running_total: "Growing bar or counter"
    price_reveal: "Final slide with full stack + price"
```

### Step 6: Add the Bonus Stack
Bonuses are presented AFTER the main stack to push value even higher.

```yaml
bonus_stack:
  transition: "But wait — I'm also including these special bonuses..."
  bonus_1:
    name: ""
    value: "$___"
    urgency: ""
  bonus_2:
    name: ""
    value: "$___"
    urgency: ""
  post_bonus_total: "$___"
  new_contrast_ratio: "___x"
```

---

## Output Template
```yaml
output:
  value_stack:
    offer: ""
    components:
      - name: ""
        value: "$___"
        position: 1
      - name: ""
        value: "$___"
        position: 2
    bonuses:
      - name: ""
        value: "$___"
    total_value: "$___"
    price: "$___"
    contrast_ratio: "___x"
    price_reveal_sequence: []
    visual_template: ""
    recommended_context: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Components ordered for maximum psychological impact
  - [ ] Each component has a benefit-driven name (not generic)
  - [ ] Value justifications are believable (not inflated beyond reason)
  - [ ] Total value is at least 10x the price
  - [ ] Price reveal follows the 5-step anchoring sequence
  - [ ] Visual template matches the presentation context
  - [ ] Bonuses are time-sensitive and add genuine urgency
  - [ ] Stack could be understood by someone seeing it for the first time
```

---

## Handoff
- -> **brunson-offers** for `build-irresistible-offer` (BR_OFR_001) — if components need refinement
- -> **brunson-webinar** for `build-stack-slide` (BR_WEB_002) — create the webinar presentation
- -> **brunson-pages** for `design-sales-page` (BR_PAG_002) — design the page layout

---
*Task: BR_OFR_002 | Agent: brunson-offers | Version: 1.0*
