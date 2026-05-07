# build-irresistible-offer

## Metadata
```yaml
task_id: BR_OFR_001
agent: brunson-offers
type: creation
complexity: high
estimated_time: 60-90min
source: "Expert Secrets — Chapter 15: The Stack + DotCom Secrets — Offer Creation"
```

## Purpose
Build an irresistible offer stack that makes the price feel insignificant compared to the perceived value. An irresistible offer is not about lowering price — it's about stacking so much value that saying "no" feels like losing money.

> "An irresistible offer is when the value is so much more than the price that it would be irresponsible to say no." — Russell Brunson

---

## The Framework: Irresistible Offer Architecture

Brunson's offer architecture follows the Stack Slide methodology — building value through multiple components that each solve a different aspect of the customer's problem.

### The Offer Stack Hierarchy

```
┌────────────────────────────────────────────────┐
│  CORE OFFER                                     │  The main product/service
│  The thing they're actually buying               │  Value: $___
├────────────────────────────────────────────────┤
│  TOOL/RESOURCE #1                               │  Helps them implement
│  Something that makes implementation easier      │  Value: $___
├────────────────────────────────────────────────┤
│  TOOL/RESOURCE #2                               │  Removes a specific obstacle
│  Addresses a secondary pain point               │  Value: $___
├────────────────────────────────────────────────┤
│  TANGIBLE COMPONENT #1                          │  Physical or downloadable
│  Something they can hold or reference            │  Value: $___
├────────────────────────────────────────────────┤
│  ACCESS/COMMUNITY                               │  Ongoing support
│  Group, community, or ongoing access             │  Value: $___
├────────────────────────────────────────────────┤
│  BONUS #1 (Time-Sensitive)                      │  Creates urgency
│  Extra value available only right now             │  Value: $___
├────────────────────────────────────────────────┤
│  BONUS #2 (Time-Sensitive)                      │  Creates urgency
│  Another urgency-driven bonus                    │  Value: $___
├────────────────────────────────────────────────┤
│  TOTAL PERCEIVED VALUE                          │  $_____ (10-20x price)
│  YOUR PRICE TODAY                               │  $_____
└────────────────────────────────────────────────┘
```

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  target_avatar: ""
  dream_outcome: ""
  main_product: ""
  price_point: ""
  delivery_format: ""           # digital, physical, coaching, hybrid
  biggest_objections: []        # Top 3-5 reasons they wouldn't buy
  competitor_offers: []         # What similar offers exist?
  unique_mechanism: ""          # What makes your approach different?
  time_to_result: ""            # How fast can they see results?
```

---

## Step-by-Step Process

### Step 1: Define the Core Offer
The foundation of the stack — the main product or service they're purchasing.

```yaml
core_offer:
  name: ""
  description: ""
  delivery: ""                  # Course, coaching, software, physical
  result_promise: ""            # The primary transformation
  time_to_deliver: ""           # How long to consume/implement
  standalone_value: ""          # What would someone pay for just this?
  differentiator: ""            # Why this is different from alternatives
```

### Step 2: Identify the Implementation Gaps
What obstacles will the customer face AFTER buying? Each gap becomes a stack component.

```yaml
implementation_gaps:
  gap_1:
    obstacle: ""                # "They won't know how to start"
    solution: ""                # Quick-start guide, templates
    stack_component: ""         # What to add to the offer
  gap_2:
    obstacle: ""                # "They'll get stuck on [technical thing]"
    solution: ""                # Tutorial, done-for-you setup
    stack_component: ""
  gap_3:
    obstacle: ""                # "They'll lose momentum"
    solution: ""                # Accountability, community
    stack_component: ""
  gap_4:
    obstacle: ""                # "They won't know if they're on track"
    solution: ""                # Checklist, scorecard
    stack_component: ""
```

### Step 3: Build the Value Stack
Assemble each component with its own value anchor.

```yaml
value_stack:
  component_1:
    name: ""
    type: "Core Offer"
    description: ""
    value: "$___"
    value_justification: ""     # Why is it worth this amount?
  component_2:
    name: ""
    type: "Tool/Resource"
    description: ""
    value: "$___"
    value_justification: ""
  component_3:
    name: ""
    type: "Tool/Resource"
    description: ""
    value: "$___"
    value_justification: ""
  component_4:
    name: ""
    type: "Tangible"
    description: ""
    value: "$___"
    value_justification: ""
  component_5:
    name: ""
    type: "Access/Community"
    description: ""
    value: "$___"
    value_justification: ""
  total_value: "$___"
  actual_price: "$___"
  value_to_price_ratio: "___x"
```

### Step 4: Add Time-Sensitive Bonuses
Bonuses that are only available right now to create urgency.

```yaml
bonuses:
  bonus_1:
    name: ""
    description: ""
    value: "$___"
    urgency: ""                 # "Only for the next 24 hours"
    why_valuable: ""            # Why this bonus matters
  bonus_2:
    name: ""
    description: ""
    value: "$___"
    urgency: ""
    why_valuable: ""
  bonus_3:
    name: ""
    description: ""
    value: "$___"
    urgency: ""
    why_valuable: ""
```

### Step 5: Validate the Offer Against Objections
Each major objection should be addressed by a stack component.

```yaml
objection_mapping:
  objection_1:
    objection: ""               # "I don't have time"
    addressed_by: ""            # "Quick-Start Guide (15 min to first result)"
  objection_2:
    objection: ""               # "I'm not tech-savvy"
    addressed_by: ""            # "Done-for-you templates"
  objection_3:
    objection: ""               # "What if it doesn't work?"
    addressed_by: ""            # "30-day money-back guarantee"
  objection_4:
    objection: ""               # "I've tried things before"
    addressed_by: ""            # "Case studies + community support"
  objection_5:
    objection: ""               # "It's too expensive"
    addressed_by: ""            # "Value stack = 10x the price"
```

### Step 6: Set the Price and Payment Options
Price relative to value, with payment plan option.

```yaml
pricing:
  full_pay:
    price: "$___"
    discount_vs_plan: ""
  payment_plan:
    per_payment: "$___"
    number_of_payments: ""
    total: "$___"
  value_to_price_messaging:
    total_value: "$___"
    you_save: "$___"
    framing: ""                 # "Less than $X per day" or "Less than a cup of coffee"
```

---

## Output Template
```yaml
output:
  irresistible_offer:
    name: ""
    avatar: ""
    core_offer: ""
    value_stack:
      - component: ""
        value: "$___"
      - component: ""
        value: "$___"
    total_value: "$___"
    price: "$___"
    value_ratio: "___x"
    bonuses:
      - bonus: ""
        value: "$___"
    guarantee: ""
    payment_options:
      full_pay: "$___"
      plan: "$___/x payments"
    objections_addressed: []
    irresistible_score: "/10"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Core offer delivers a clear, specific transformation
  - [ ] Value stack has 4-6 components (not just the core offer)
  - [ ] Each component addresses a real implementation gap
  - [ ] Value-to-price ratio is at least 10x
  - [ ] Bonuses create genuine urgency (not fake scarcity)
  - [ ] All top 5 objections are addressed by stack components
  - [ ] Payment plan option is available for higher-priced offers
  - [ ] The offer feels irresponsible to say "no" to
```

---

## Handoff
- -> **brunson-offers** for `design-value-stack` (BR_OFR_002) — visual stack presentation
- -> **brunson-copy** for `write-sales-letter` (BR_CPY_001) — write copy for the offer
- -> **brunson-webinar** for `build-stack-slide` (BR_WEB_002) — create the webinar stack slide

---
*Task: BR_OFR_001 | Agent: brunson-offers | Version: 1.0*
