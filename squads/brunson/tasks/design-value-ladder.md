# design-value-ladder

## Metadata
```yaml
task_id: BR_FUN_001
agent: brunson-funnels
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets — Chapter 1: The Secret Formula"
```

## Purpose
Design a complete Value Ladder with 4 ascending tiers, from free lead magnet to high-ticket backend. The Value Ladder is the foundational architecture of every funnel ecosystem — it determines what you sell, at what price, and in what sequence.

> "The only way to scale is to have a value ladder. You need something to sell at every level — from free to $100,000+." — Russell Brunson

---

## The Framework: Value Ladder Architecture

The Value Ladder is Brunson's core business architecture model. Every successful business has ascending tiers of value and price. Customers enter at the bottom (low risk, low price) and ascend as trust and results increase.

### The 4 Tiers

```
                    ▲ VALUE
                    │
          ┌─────────────────┐
          │  TIER 4: Backend │  $5,000-$100,000+
          │  (High-Touch)    │  Coaching/Mastermind/Done-For-You
          └────────┬─────────┘
               ┌───┴───────────┐
               │  TIER 3: Core  │  $500-$5,000
               │  (Main Offer)  │  Courses/Programs/Events
               └───────┬────────┘
                  ┌────┴──────────┐
                  │  TIER 2: Entry │  $7-$97
                  │  (Front-End)   │  Books/Mini-Courses/SLOs
                  └───────┬────────┘
                     ┌────┴────────────┐
                     │  TIER 1: Bait    │  FREE
                     │  (Lead Magnet)   │  Checklists/PDFs/Videos
                     └──────────────────┘
                    ──────────────────────► PRICE
```

### Key Principle
Each tier must provide 10x the value of its price so the customer feels compelled to ascend to the next level.

---

## Input Required
```yaml
input_fields:
  business_name: ""
  niche_market: ""
  target_avatar: ""
  dream_outcome: ""
  current_products_services: ""
  expertise_area: ""
  price_comfort_zone: ""
  delivery_capability: ""
  existing_audience_size: ""
  competition_landscape: ""
```

---

## Step-by-Step Process

### Step 1: Define the Dream Outcome
Identify the single most transformative result your market desires. This becomes the top of the ladder.

```yaml
dream_outcome:
  specific_result: ""       # What exactly do they achieve?
  timeframe: ""             # In what timeframe?
  transformation: ""        # Who do they become?
  emotional_payoff: ""      # How does it feel?
  social_proof_possible: "" # Can results be demonstrated?
```

**Test:** Can you say "I help [avatar] achieve [dream outcome] in [timeframe]"?

### Step 2: Design Tier 4 — Backend (High-Ticket)
Start from the TOP of the ladder and work down. Your highest-value offer defines everything below it.

```yaml
tier_4_backend:
  offer_name: ""
  price_range: "$5,000 - $100,000+"
  delivery_format: ""       # 1-on-1, Mastermind, Done-For-You, Live Event
  duration: ""              # 6 months, 12 months, ongoing
  access_level: ""          # Direct access to you? Team? Both?
  capacity: ""              # Max clients at this tier
  result_guarantee: ""      # What specific result do you guarantee?
  application_required: true
  ascension_trigger: ""     # What makes Tier 3 buyers ready for this?
```

**Key Question:** "If someone paid $25,000, what would I deliver to make them feel they got a bargain?"

### Step 3: Design Tier 3 — Core Offer (Mid-Ticket)
This is your main revenue driver. The offer most people will buy.

```yaml
tier_3_core:
  offer_name: ""
  price_range: "$500 - $5,000"
  delivery_format: ""       # Course, Group Coaching, Workshop, Membership
  duration: ""
  modules_or_components: []
  support_included: ""      # Community? Group calls? Email?
  result_promise: ""        # Specific outcome at this level
  bonuses: []
  ascension_trigger: ""     # What makes Tier 2 buyers ready for this?
```

**Key Question:** "What's the minimum someone needs to get 80% of the result?"

### Step 4: Design Tier 2 — Front-End (Low-Ticket)
Self-liquidating offer that acquires customers at break-even or small profit.

```yaml
tier_2_frontend:
  offer_name: ""
  price_range: "$7 - $97"
  delivery_format: ""       # Book, Mini-Course, Template Pack, Trial
  consumption_time: ""      # How long to consume?
  quick_win: ""             # What immediate result do they get?
  funnel_type: ""           # Tripwire, SLO, Book Funnel
  upsell_to_tier3: ""       # How does this naturally lead to Tier 3?
  ascension_trigger: ""     # What makes free leads ready to buy this?
```

**Key Question:** "What can I sell for under $100 that gives a quick win and creates hunger for more?"

### Step 5: Design Tier 1 — Bait (Lead Magnet)
Free value that attracts your dream customer and pre-frames them for Tier 2.

```yaml
tier_1_bait:
  offer_name: ""
  price: "FREE"
  delivery_format: ""       # PDF, Video, Webinar, Quiz, Challenge
  opt_in_mechanism: ""      # What do they trade their email for?
  immediate_value: ""       # What do they learn/get instantly?
  curiosity_gap: ""         # What question does this create?
  pre_frame_for_tier2: ""   # How does consuming this make them want Tier 2?
  distribution_channels: [] # Where will you promote this?
```

**Key Question:** "What free thing would my dream customer be irresponsible NOT to grab?"

### Step 6: Map the Ascension Triggers
Define the specific moments/results that trigger movement UP the ladder.

```yaml
ascension_map:
  tier1_to_tier2:
    trigger: ""             # They consumed the lead magnet and...
    mechanism: ""           # How do you present Tier 2?
    timeframe: ""           # How soon after opt-in?
  tier2_to_tier3:
    trigger: ""             # They bought Tier 2 and...
    mechanism: ""           # How do you present Tier 3?
    timeframe: ""           # How soon after purchase?
  tier3_to_tier4:
    trigger: ""             # They completed Tier 3 and...
    mechanism: ""           # How do you present Tier 4?
    timeframe: ""           # How soon after completing Tier 3?
```

### Step 7: Validate the 10x Rule
Each tier must feel like 10x the value of its price.

```yaml
value_validation:
  tier_1:
    price: "FREE"
    perceived_value: "$___"
    passes_10x: true/false
  tier_2:
    price: "$___"
    perceived_value: "$___"
    passes_10x: true/false
  tier_3:
    price: "$___"
    perceived_value: "$___"
    passes_10x: true/false
  tier_4:
    price: "$___"
    perceived_value: "$___"
    passes_10x: true/false
```

### Step 8: Revenue Model Projection
Model the financial impact of the complete ladder.

```yaml
revenue_model:
  monthly_leads: 0
  tier1_to_tier2_conversion: "5-10%"
  tier2_to_tier3_conversion: "10-20%"
  tier3_to_tier4_conversion: "5-10%"
  projected_monthly_revenue:
    tier2: "$___"
    tier3: "$___"
    tier4: "$___"
    total: "$___"
```

---

## Output Template
```yaml
output:
  value_ladder:
    business: ""
    niche: ""
    avatar: ""
    dream_outcome: ""
    tier_1:
      name: ""
      price: "FREE"
      format: ""
      quick_win: ""
    tier_2:
      name: ""
      price: "$"
      format: ""
      result: ""
    tier_3:
      name: ""
      price: "$"
      format: ""
      result: ""
    tier_4:
      name: ""
      price: "$"
      format: ""
      result: ""
    ascension_triggers:
      - from_to: "Tier 1 → Tier 2"
        trigger: ""
      - from_to: "Tier 2 → Tier 3"
        trigger: ""
      - from_to: "Tier 3 → Tier 4"
        trigger: ""
    revenue_projection: "$___/month"
```

---

## Quality Gate
```yaml
quality:
  - [ ] All 4 tiers defined with name, price, format, and result
  - [ ] Each tier passes the 10x value test
  - [ ] Ascension triggers are specific and actionable
  - [ ] Tiers have logical progression (not just random products)
  - [ ] Revenue model is realistic with conservative conversion rates
  - [ ] Tier 4 backend is genuinely transformative
  - [ ] Tier 1 bait attracts the RIGHT audience (not everyone)
  - [ ] Each tier can be delivered with current resources
```

---

## Handoff
- → **brunson-funnels** for `select-funnel-type` (BR_FUN_002) — select funnel for each tier
- → **brunson-offers** for `create-value-stack` (BR_OFR_001) — build out Tier 3 stack
- → **brunson-copy** for `write-sales-page` (BR_CPY_002) — write copy for each tier

---
*Task: BR_FUN_001 | Agent: brunson-funnels | Version: 1.0*
