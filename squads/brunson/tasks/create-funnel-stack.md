# create-funnel-stack

## Metadata
```yaml
task_id: BR_FUN_005
agent: brunson-funnels
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets — Chapter 14: Funnel Stacking"
```

## Purpose
Create a multi-funnel stacking strategy where multiple funnels work together as an ecosystem. Instead of one funnel, build a network of interconnected funnels that feed into each other across the entire Value Ladder.

> "One funnel makes you money. A funnel stack builds an empire. Each funnel feeds the next, and the whole is greater than the sum of its parts." — Russell Brunson

---

## The Framework: Funnel Stacking

Funnel stacking is the strategy of connecting multiple funnels so that the output of one becomes the input of another. This creates a self-reinforcing ecosystem where every funnel increases the value of every other funnel.

### The Funnel Stack Model
```
FRONT-END FUNNELS (Acquire Customers)
  ├── Lead Squeeze Funnel → builds list
  ├── Book Funnel → acquires buyers
  └── Challenge Funnel → builds engagement
        │
        ▼
MIDDLE FUNNELS (Convert & Ascend)
  ├── Webinar Funnel → sells core offer
  ├── VSL Funnel → sells mid-ticket
  └── Application Funnel → qualifies for high-ticket
        │
        ▼
BACKEND FUNNELS (Maximize LTV)
  ├── High-Ticket Funnel → sells premium
  ├── Continuity Funnel → recurring revenue
  └── Event Funnel → sells live experience
```

---

## Input Required
```yaml
input_fields:
  business_name: ""
  value_ladder: ""          # From BR_FUN_001
  existing_funnels: []
  monthly_budget: ""
  team_capacity: ""         # Who can build/manage funnels?
  primary_revenue_goal: ""
  timeline: ""
  current_list_size: 0
  current_monthly_revenue: ""
  products_available: []
```

---

## Step-by-Step Process

### Step 1: Audit Existing Funnel Assets
Catalog everything you already have before building new.

```yaml
existing_assets:
  funnels:
    - name: ""
      type: ""
      status: ""            # Active/Paused/Broken
      monthly_revenue: ""
      conversion_rate: ""
  email_lists:
    - segment: ""
      size: 0
      engagement: ""
  content:
    - type: ""              # Videos, articles, podcasts
      quantity: 0
      repurposable: true/false
  offers:
    - name: ""
      price: ""
      tier: ""              # Which value ladder tier?
```

### Step 2: Identify the Stack Architecture
Determine which funnels you need at each level.

```yaml
stack_architecture:
  front_end_funnels:
    funnel_1:
      type: ""
      purpose: ""           # Build list / Acquire buyer / Build engagement
      offer: ""
      price: ""
      feeds_into: ""        # Which middle funnel?
    funnel_2:
      type: ""
      purpose: ""
      offer: ""
      price: ""
      feeds_into: ""
  middle_funnels:
    funnel_1:
      type: ""
      purpose: ""
      offer: ""
      price: ""
      receives_from: []     # Which front-end funnels?
      feeds_into: ""        # Which backend funnel?
  backend_funnels:
    funnel_1:
      type: ""
      purpose: ""
      offer: ""
      price: ""
      receives_from: []
```

### Step 3: Map the Inter-Funnel Connections
Define how traffic flows between funnels.

```yaml
funnel_connections:
  connection_1:
    from_funnel: ""
    trigger: ""             # Purchase, completion, time-based, behavior
    to_funnel: ""
    mechanism: ""           # Email, retarget, direct redirect, application
    delay: ""               # Immediately, 3 days, 7 days, 30 days
  connection_2:
    from_funnel: ""
    trigger: ""
    to_funnel: ""
    mechanism: ""
    delay: ""
```

**Brunson's Rule:** "The best time to sell someone the next thing is right after they buy the current thing. The second best time is 7 days later."

### Step 4: Design the Email Bridge Sequences
Create email sequences that bridge between funnels.

```yaml
bridge_sequences:
  bridge_1:
    from_funnel: ""
    to_funnel: ""
    emails: 0
    duration: ""
    theme: ""               # Value delivery, case study, deadline
    sequence_type: ""       # Soap Opera, Seinfeld, Direct
  bridge_2:
    from_funnel: ""
    to_funnel: ""
    emails: 0
    duration: ""
    theme: ""
    sequence_type: ""
```

### Step 5: Create the Retargeting Web
Design retargeting audiences that connect funnels.

```yaml
retargeting_web:
  audience_1:
    name: ""
    source: ""              # Which funnel/page?
    behavior: ""            # Visited, opted in, purchased, abandoned
    retarget_to: ""         # Which funnel/offer?
    ad_message: ""
    budget_allocation: ""
  audience_2:
    name: ""
    source: ""
    behavior: ""
    retarget_to: ""
    ad_message: ""
    budget_allocation: ""
```

### Step 6: Prioritize the Build Order
You cannot build everything at once. Sequence the stack.

```yaml
build_priority:
  phase_1:
    timeline: ""
    funnels_to_build: []
    expected_result: ""
    investment: ""
  phase_2:
    timeline: ""
    funnels_to_build: []
    expected_result: ""
    investment: ""
  phase_3:
    timeline: ""
    funnels_to_build: []
    expected_result: ""
    investment: ""
```

**Priority Rule:** Build the funnel with the highest revenue impact per effort first.

### Step 7: Model the Stack Economics
Project the financial impact of the complete stack.

```yaml
stack_economics:
  individual_funnel_revenue:
    funnel_1: "$0/month"
    funnel_2: "$0/month"
    funnel_3: "$0/month"
  synergy_multiplier: "1.3-2x"
  combined_projected_revenue: "$0/month"
  total_customer_ltv: "$0"
  break_even_timeline: ""
  roi_at_12_months: ""
```

---

## Output Template
```yaml
output:
  funnel_stack:
    business: ""
    total_funnels: 0
    architecture:
      front_end: []
      middle: []
      backend: []
    connections: []
    email_bridges: []
    retargeting_web: []
    build_order:
      phase_1: ""
      phase_2: ""
      phase_3: ""
    projected_revenue: "$0/month"
    total_investment: ""
    roi_timeline: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Stack covers all Value Ladder tiers
  - [ ] Inter-funnel connections are specific and logical
  - [ ] Email bridge sequences are defined for each transition
  - [ ] Retargeting audiences are mapped
  - [ ] Build order is prioritized by ROI
  - [ ] Economics are modeled with conservative estimates
  - [ ] No funnel is an island — every funnel connects to at least one other
  - [ ] Team capacity can handle the build timeline
```

---

## Handoff
- → **brunson-funnels** for individual funnel mapping (BR_FUN_003)
- → **brunson-traffic** for traffic strategy across the stack (BR_TRF_002)
- → **brunson-email** for bridge sequence creation (BR_EML_001/003)
- → **brunson-webinar** if webinar funnel is in the stack (BR_WEB_001)

---
*Task: BR_FUN_005 | Agent: brunson-funnels | Version: 1.0*
