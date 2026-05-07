# design-order-bump-oto

## Metadata
```yaml
task_id: BR_OFR_004
agent: brunson-offers
type: creation
complexity: high
estimated_time: 45-60min
source: "DotCom Secrets — Chapter 6: Order Bumps & OTOs + DotCom Secrets Ignite — Maximizing AOV"
```

## Purpose
Design the complete order bump and OTO (One Time Offer) flow that maximizes Average Order Value (AOV) at every transaction point. The order bump adds value at checkout, while OTOs capture additional revenue in the post-purchase window. Together, they can 2-5x your revenue per customer.

> "Every transaction is an opportunity. The order bump and OTO flow is how you turn a $47 customer into a $500 customer without acquiring any new traffic." — Russell Brunson

---

## The Framework: AOV Maximization Flow

The AOV flow has 4 sequential opportunities to increase the value of each transaction.

### The Transaction Flow

```
CHECKOUT PAGE
  │
  ├── ORDER BUMP (checkbox on checkout form)
  │   Price: $17-$97 | Conversion: 30-50%
  │   "Add [complement] for just $X"
  │
  ▼ [PURCHASE COMPLETES]
  │
  ├── OTO #1 (Upsell)
  │   Price: $97-$497 | Conversion: 10-25%
  │   "Upgrade to [enhanced version]"
  │
  ├── [If YES] → OTO #2 (Higher Upsell)
  │   Price: $197-$997 | Conversion: 5-15%
  │   "Go all-in with [premium]"
  │
  ├── [If NO to OTO #1] → DOWNSELL
  │   Price: $47-$197 | Conversion: 10-20%
  │   "How about [lighter version] instead?"
  │
  ▼ THANK YOU PAGE
```

### Key Metrics

```
METRIC                     BENCHMARK        IMPACT
─────────────────────     ────────────      ──────────────────────
Order Bump Take Rate       30-50%           Adds $15-$50 per order
OTO #1 Conversion          10-25%           Adds $30-$100 per order
OTO #2 Conversion          5-15%            Adds $20-$75 per order
Downsell Conversion        10-20%           Recovers $10-$40 per order
Combined AOV Increase      2x-5x           Doubles or triples revenue
```

---

## Input Required
```yaml
input_fields:
  front_end_offer: ""
  front_end_price: ""
  target_avatar: ""
  product_ecosystem: []         # All available products/services
  delivery_capability: ""       # What can you actually deliver?
  margin: ""                    # Gross margin on front-end
  current_aov: ""               # If known
  target_aov: ""                # Desired AOV
```

---

## Step-by-Step Process

### Step 1: Design the Order Bump
The order bump is a checkbox offer on the checkout page — impulse purchase territory.

```yaml
order_bump:
  product: ""
  price: ""                     # $17-$97
  complementary_to: ""          # How it pairs with the main offer
  description: ""               # 1-2 compelling sentences
  checkbox_text: ""             # "YES! Add [product] for just $X"
  bump_types:
    speed_bump: "Get results faster"
    depth_bump: "Go deeper on the topic"
    tool_bump: "Get the tool that makes it easier"
    done_for_you_bump: "We set it up for you"
  selected_type: ""
  delivery: ""                  # How they receive it
  target_conversion: "30-50%"

  rules:
    - Must complement the main offer (not compete with it)
    - Price should feel like an impulse purchase
    - Description must be 1-2 sentences max
    - Must be instantly deliverable (no fulfillment delay)
```

### Step 2: Design OTO #1 (Primary Upsell)
The first post-purchase offer — highest conversion opportunity.

```yaml
oto_1:
  product: ""
  price: ""                     # $97-$497
  relationship_to_front_end: "" # How it enhances the original purchase
  offer_type: ""
  oto_types:
    accelerator: "Get the result 3x faster"
    advanced: "The advanced version"
    done_for_you: "We do the hard part for you"
    bundle: "Get everything in one package"
  selected_type: ""
  headline: ""
  key_benefit: ""
  one_click_purchase: true
  target_conversion: "10-25%"
  page_design:
    video: true/false
    length: "2-5 minutes"
    urgency: ""
    decline_text: ""
```

### Step 3: Design OTO #2 (Secondary Upsell)
For buyers who said YES to OTO #1 — go bigger.

```yaml
oto_2:
  product: ""
  price: ""                     # $197-$997
  relationship_to_oto_1: ""     # Next level up
  offer_type: ""
  oto_types:
    mastermind: "Join the inner circle"
    coaching: "Get personal guidance"
    annual: "Lock in for a full year"
    premium: "The premium everything package"
  selected_type: ""
  headline: ""
  key_benefit: ""
  one_click_purchase: true
  target_conversion: "5-15%"
  page_design:
    video: true/false
    length: ""
    urgency: ""
    decline_text: ""
```

### Step 4: Design the Downsell
For buyers who said NO to OTO #1 — offer a lighter version.

```yaml
downsell:
  product: ""
  price: ""                     # $47-$197 (lower than OTO #1)
  what_it_is: ""                # Reduced version of OTO #1
  reduction_type: ""
  downsell_types:
    smaller_version: "Just the core component"
    payment_plan: "Same offer, spread over payments"
    trial: "Try it for 30 days at reduced price"
    different_format: "Same content, different delivery"
  selected_type: ""
  headline: ""
  key_benefit: ""
  decline_text: ""
  target_conversion: "10-20%"
```

### Step 5: Calculate AOV Impact
Model the financial impact of the complete flow.

```yaml
aov_calculation:
  front_end:
    price: "$___"
    conversion: "100%"          # Already bought
    revenue_per_customer: "$___"
  order_bump:
    price: "$___"
    conversion: "____%"
    revenue_per_customer: "$___" # price x conversion
  oto_1:
    price: "$___"
    conversion: "____%"
    revenue_per_customer: "$___"
  oto_2:
    price: "$___"
    conversion: "____%"         # Of OTO1 buyers
    revenue_per_customer: "$___"
  downsell:
    price: "$___"
    conversion: "____%"         # Of OTO1 decliners
    revenue_per_customer: "$___"

  total_aov: "$___"
  aov_multiplier: "___x"
  monthly_projection:
    at_100_customers: "$___"
    at_500_customers: "$___"
    at_1000_customers: "$___"
```

### Step 6: Map the Complete Flow Logic
Define the if/then logic for the entire sequence.

```yaml
flow_logic:
  step_1: "Customer lands on checkout page"
  step_2: "Order bump checkbox displayed"
  step_3: "Customer completes purchase"
  step_4: "OTO #1 page displayed"
  step_5a: "IF yes to OTO #1 → Show OTO #2"
  step_5b: "IF no to OTO #1 → Show Downsell"
  step_6a: "IF yes/no to OTO #2 → Thank You Page"
  step_6b: "IF yes/no to Downsell → Thank You Page"
  step_7: "Thank You Page with order summary + next steps"
```

---

## Output Template
```yaml
output:
  order_bump_oto_flow:
    front_end: ""
    front_end_price: "$___"
    order_bump:
      product: ""
      price: "$___"
      target_conversion: ""
    oto_1:
      product: ""
      price: "$___"
      target_conversion: ""
    oto_2:
      product: ""
      price: "$___"
      target_conversion: ""
    downsell:
      product: ""
      price: "$___"
      target_conversion: ""
    projected_aov: "$___"
    aov_multiplier: "___x"
    monthly_revenue_at_100_customers: "$___"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Order bump directly complements the front-end (peanut butter + jelly test)
  - [ ] OTO #1 is a natural upgrade, not a random product
  - [ ] OTO #2 is the "go all-in" option for committed buyers
  - [ ] Downsell is a lighter version of OTO #1 (not completely different)
  - [ ] All offers have one-click purchase (no re-entering payment)
  - [ ] Decline links are present but use loss-framing language
  - [ ] AOV calculation is realistic with conservative conversion rates
  - [ ] Flow logic handles all yes/no paths correctly
  - [ ] Total flow can be implemented in chosen funnel platform
```

---

## Handoff
- -> **brunson-pages** for `design-oto-page` (BR_PAG_003) — design OTO page layouts
- -> **brunson-funnels** for `calculate-funnel-economics` (BR_FUN_004) — model full economics
- -> **brunson-copy** for `write-sales-letter` (BR_CPY_001) — write OTO copy

---
*Task: BR_OFR_004 | Agent: brunson-offers | Version: 1.0*
