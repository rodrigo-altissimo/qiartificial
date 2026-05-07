# create-value-stack

## Metadata
```yaml
task_id: BR_OFR_001
agent: brunson-offers
type: creation
complexity: high
estimated_time: 60-90min
source: "Expert Secrets — Chapter 15: The Stack + DotCom Secrets — Offer Architecture"
```

## Purpose
Create a complete value stack with strategic pricing that makes the offer feel like an absolute no-brainer. The value stack is the comprehensive breakdown of everything included in your offer, with assigned values, structured to maximize perceived value and justify the price.

> "The goal of your value stack is to make the price feel IRRELEVANT. When the total value is 10x the price, the only question left is 'Where do I sign up?'" — Russell Brunson

---

## The Framework: Value Stack Architecture

### The Value Stack Hierarchy
```
┌─────────────────────────────────────────────────┐
│           COMPLETE VALUE STACK                    │
├─────────────────────────────────────────────────┤
│                                                   │
│  LAYER 1: CORE OFFER                             │
│  The main deliverable (course, service, program)  │
│  Value: $$$$$                                     │
│                                                   │
│  LAYER 2: TOOLS & RESOURCES                      │
│  Templates, checklists, software, swipe files     │
│  Value: $$$$                                      │
│                                                   │
│  LAYER 3: ACCESS & SUPPORT                       │
│  Community, Q&A calls, email support              │
│  Value: $$$                                       │
│                                                   │
│  LAYER 4: FAST-ACTION BONUSES                    │
│  Time-limited extras that drive urgency           │
│  Value: $$$                                       │
│                                                   │
│  LAYER 5: GUARANTEE                              │
│  Risk reversal that makes "yes" easy              │
│  Value: PRICELESS                                │
│                                                   │
│  ─────────────────────────────────────────────    │
│  TOTAL VALUE:    $XX,XXX                          │
│  YOUR PRICE:     $X,XXX (or payment plan)         │
│  YOU SAVE:       $XX,XXX                          │
│  GUARANTEE:      [Risk-free]                      │
└─────────────────────────────────────────────────┘
```

### Pricing Psychology Principles
1. **Anchoring** — Show the high value first, then the lower price
2. **10x Rule** — Total value should be 10x+ the actual price
3. **Unbundling** — Name and value each component separately
4. **Decoy Pricing** — Compare against more expensive alternatives
5. **Payment Plans** — Lower the barrier with monthly payments

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  target_audience: ""
  primary_outcome: ""
  delivery_format: ""       # Course, coaching, service, software
  target_price_point: ""
  current_components: []
  competitor_pricing: []
  customer_ltv: ""
  cost_to_deliver: ""
  profit_margin_target: ""
  urgency_mechanism: ""
  guarantee_comfort: ""     # What are you comfortable guaranteeing?
```

---

## Step-by-Step Process

### Step 1: Design the Core Offer
The main thing they are paying for.

```yaml
core_offer:
  name: ""                  # Premium name (not generic)
  what_it_is: ""
  what_they_get:
    - module_or_component: ""
      description: ""
      standalone_value: ""  # What would this cost separately?
    - module_or_component: ""
      description: ""
      standalone_value: ""
    - module_or_component: ""
      description: ""
      standalone_value: ""
  primary_outcome: ""
  delivery_method: ""
  access_duration: ""       # Lifetime, 12 months, etc.
  assigned_value: ""
  value_justification: ""   # "Private coaching costs $500/hr x 20 hours = $10,000"
```

### Step 2: Design Tools & Resources
Tangible assets that speed up implementation.

```yaml
tools_resources:
  resource_1:
    name: ""                # E.g., "The Funnel Blueprint Templates"
    type: ""                # Template, checklist, swipe file, software, spreadsheet
    what_it_does: ""
    time_it_saves: ""       # "Saves you 40+ hours of work"
    assigned_value: ""
    value_justification: ""
  resource_2:
    name: ""
    type: ""
    what_it_does: ""
    time_it_saves: ""
    assigned_value: ""
    value_justification: ""
  resource_3:
    name: ""
    type: ""
    what_it_does: ""
    time_it_saves: ""
    assigned_value: ""
    value_justification: ""
```

**Resource Rule:** The best resources remove implementation friction. Ask: "What would make it EASY for them to get results?"

### Step 3: Design Access & Support
How they get help during implementation.

```yaml
access_support:
  community:
    name: ""
    platform: ""            # Facebook group, Circle, Slack, etc.
    what_they_get: ""
    assigned_value: ""
    value_justification: "" # "Membership communities charge $97/month"
  live_support:
    type: ""                # Q&A calls, office hours, coaching calls
    frequency: ""
    duration: ""
    assigned_value: ""
    value_justification: ""
  direct_access:
    type: ""                # Email, DM, Voxer, etc.
    response_time: ""
    assigned_value: ""
  additional_trainings:
    name: ""
    type: ""                # Guest expert, updated content, etc.
    assigned_value: ""
```

### Step 4: Design Fast-Action Bonuses
Bonuses that create urgency and tip the decision.

```yaml
fast_action_bonuses:
  bonus_1:
    name: ""
    what_it_is: ""
    why_valuable: ""
    assigned_value: ""
    urgency: ""             # "Only for those who join in the next 48 hours"
    addresses_objection: "" # Which objection does this handle?
  bonus_2:
    name: ""
    what_it_is: ""
    why_valuable: ""
    assigned_value: ""
    urgency: ""
    addresses_objection: ""
  bonus_3:
    name: ""
    what_it_is: ""
    why_valuable: ""
    assigned_value: ""
    urgency: ""
    addresses_objection: ""
  surprise_bonus:
    name: ""                # Unannounced bonus for buyers
    what_it_is: ""
    why: ""                 # Creates delight and reduces refunds
```

**Bonus Design Rules:**
1. Each bonus should be valuable enough to sell separately
2. At least one bonus speeds up results
3. At least one bonus removes a common obstacle
4. Best bonuses address the #1 objection
5. Time-limited bonuses create urgency

### Step 5: Design the Guarantee
Remove all risk from the buyer's decision.

```yaml
guarantee:
  type: ""                  # Money-back, results-based, keep-everything, double
  duration: ""              # 30 days, 60 days, 90 days
  conditions: ""            # Any requirements for the guarantee
  name: ""                  # Give it a branded name
  description: ""           # Full guarantee copy
  risk_reversal_statement: "" # "You literally risk nothing..."
  visual: ""                # Badge, seal, certificate
```

**Guarantee Types:**
- **Unconditional** — "No questions asked refund within 30 days"
- **Conditional** — "If you complete X and don't get Y, full refund"
- **Results-Based** — "If you don't achieve [result] in [time], refund"
- **Double Guarantee** — "Full refund + I'll pay you $100 for your time"
- **Better-Than-Risk-Free** — "Keep everything even if you refund"

### Step 6: Calculate the Complete Stack
Add up all values and design the pricing.

```yaml
value_calculation:
  components:
    core_offer: "$0"
    resource_1: "$0"
    resource_2: "$0"
    resource_3: "$0"
    community: "$0"
    live_support: "$0"
    bonus_1: "$0"
    bonus_2: "$0"
    bonus_3: "$0"
  total_value: "$0"
  pricing_strategy:
    full_pay_price: "$0"
    payment_plan_price: "$0 x N payments"
    payment_plan_total: "$0"
    early_bird_price: "$0"  # If applicable
  value_to_price_ratio: "0x"
  daily_cost: "$0/day"      # Full price / 365
  comparison: ""            # "Less than a [relatable expense]"
```

### Step 7: Design the Price Presentation Sequence
Script how you reveal the price.

```yaml
price_presentation:
  step_1_anchor_high:
    script: ""              # "If you hired a consultant..."
    anchor_price: ""
  step_2_competitor_compare:
    script: ""              # "Most programs charge..."
    competitor_prices: []
  step_3_total_value:
    script: ""              # "The total value is..."
    total: ""
  step_4_not_that:
    script: ""              # "But you won't pay anywhere near that..."
  step_5_actual_price:
    script: ""              # "Your investment is just..."
    price: ""
  step_6_payment_plan:
    script: ""              # "Or you can split it into..."
    plan: ""
  step_7_daily_cost:
    script: ""              # "That's less than $X per day..."
    comparison: ""
  step_8_guarantee:
    script: ""              # "And remember, you're completely protected by..."
```

### Step 8: Validate the Offer
Test the value stack against Brunson's criteria.

```yaml
offer_validation:
  value_10x_test:
    total_value: ""
    price: ""
    ratio: ""
    passes: true/false
  no_brainer_test:
    question: "Would a rational person consider this a steal?"
    answer: true/false
  component_test:
    question: "Could each component be sold separately?"
    answer: true/false
  objection_test:
    question: "Does the stack handle the top 3 objections?"
    answer: true/false
  urgency_test:
    question: "Is there a reason to buy NOW vs later?"
    answer: true/false
  guarantee_test:
    question: "Does the guarantee make 'yes' risk-free?"
    answer: true/false
```

---

## Output Template
```yaml
output:
  value_stack:
    offer_name: ""
    total_components: 0
    total_value: ""
    price: ""
    payment_plan: ""
    value_ratio: ""
    guarantee: ""
    fast_action_bonuses: []
    urgency_mechanism: ""
    validation_passed: true/false
    price_presentation_script: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Total value is at least 10x the price
  - [ ] Each component has a justified value (not inflated randomly)
  - [ ] Components are named as tangible deliverables
  - [ ] At least 3 fast-action bonuses with urgency
  - [ ] Guarantee removes all perceived risk
  - [ ] Price presentation has anchor, contrast, and reveal
  - [ ] Payment plan option is available
  - [ ] Daily cost comparison makes price feel small
  - [ ] Offer passes all 6 validation tests
  - [ ] Stack addresses top objections through bonuses
```

---

## Handoff
- → **brunson-webinar** for `design-stack-slide` (BR_WEB_002) — present in webinar
- → **brunson-copy** for `write-sales-page` (BR_CPY_002) — write the sales page
- → **brunson-offers** for `design-oto-sequence` (BR_OFR_002) — add upsells
- → **brunson-funnels** for funnel integration (BR_FUN_003)

---
*Task: BR_OFR_001 | Agent: brunson-offers | Version: 1.0*
