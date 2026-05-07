# design-oto-sequence

## Metadata
```yaml
task_id: BR_OFR_002
agent: brunson-offers
type: creation
complexity: high
estimated_time: 45-60min
source: "DotCom Secrets — Chapter 9-10: OTOs & Downsells"
```

## Purpose
Design a complete OTO (One-Time Offer) and downsell sequence that maximizes Average Cart Value (ACV) immediately after the initial purchase. OTOs are the hidden profit center of every funnel — they can double or triple your revenue per customer without additional traffic.

> "The fortune is in the OTO sequence. Your front-end offer acquires the customer. Your OTOs create the profit. Most funnel builders skip this and leave 50-200% of revenue on the table." — Russell Brunson

---

## The Framework: OTO Sequence Architecture

### The OTO Flow
```
[Initial Purchase] → [Order Bump] → [OTO 1] → [OTO 2] → [Downsell] → [Thank You]
                                        │                     │
                                   [If NO] ──→ [Downsell 1] ──┘
                                                    │
                                               [If NO] ──→ [Continue]
```

### OTO Types
| Type | Description | Price Relationship |
|------|-------------|-------------------|
| Order Bump | Checkbox on order form | 30-60% of main offer |
| OTO 1 (Upsell) | Immediate next offer | 1-3x main offer |
| OTO 2 (Upsell) | Second upsell | Variable |
| Downsell | Lower-priced alternative | 30-50% of refused OTO |
| Cross-sell | Related but different | Variable |

### Brunson's OTO Rules
1. **More of the same** — The best OTO is more of what they just bought
2. **Speed** — Or something that gets them results faster
3. **Done-for-you** — Or the done-for-you version
4. **Community** — Or access to community/support
5. **One-click** — No re-entering payment info (one-click upsell)

---

## Input Required
```yaml
input_fields:
  front_end_offer: ""
  front_end_price: ""
  target_audience: ""
  value_ladder: ""          # From BR_FUN_001
  available_products: []
  delivery_capability: ""
  customer_ltv_target: ""
  current_acv: ""           # Average Cart Value
  target_acv: ""
  funnel_type: ""
  checkout_platform: ""
```

---

## Step-by-Step Process

### Step 1: Design the Order Bump
The checkbox offer on the checkout page. Low friction, high conversion.

```yaml
order_bump:
  name: ""
  description: ""           # 2-3 sentences visible on checkout
  what_they_get: ""
  why_now: ""               # Why add this to your order?
  price: ""                 # 30-60% of main offer
  relationship_to_main: ""  # How does this complement the main offer?
  conversion_target: "25-40%"
  delivery: ""              # Immediate access
  copy:
    headline: ""            # "ADD THIS TO YOUR ORDER"
    body: ""                # Brief description
    checkbox_text: ""       # "Yes! Add [Name] for just $X"
```

**Order Bump Best Practices:**
- Should be an impulse buy (no big decision)
- Must be obviously related to main purchase
- Physical: Shipping-related (priority, extras)
- Digital: Template, quick-start guide, extra module
- Name it as a THING, not a feature

### Step 2: Design OTO 1 (Primary Upsell)
The first offer after initial purchase. This is your biggest revenue opportunity.

```yaml
oto_1:
  name: ""
  type: ""                  # More-of-same, Speed, DFY, Community, Advanced
  what_they_get: ""
  why_it_matters: ""        # "Now that you have [main offer], you need [this] to..."
  price: ""
  price_vs_main: ""         # Ratio to main offer
  one_click: true           # No re-entering payment info
  page_elements:
    headline: ""            # "Wait! Your order is not complete..."
    video: true/false       # Short VSL explaining the OTO
    video_length: ""
    bullet_points: []       # Key benefits
    urgency: ""             # "This offer is ONLY available right now"
    price_anchor: ""        # "Normally $X, but right now..."
    guarantee: ""
    cta_yes: ""             # "YES! Add [OTO] to my order for $X"
    cta_no: ""              # "No thanks, I don't want [benefit]"
  conversion_target: "15-30%"
  downsell_if_declined: true
```

**OTO 1 Page Formula:**
```
"Wait! Your order is not complete..."
↓
Short explanation (30-60 second video or text)
↓
"Now that you have [Main Offer], this will help you [get results faster]"
↓
Stack the value
↓
"Add to your order for just $X (one-time)"
↓
"No thanks, I'll do it the slow way"
```

### Step 3: Design Downsell for OTO 1
If they decline OTO 1, offer a lower-priced alternative.

```yaml
downsell_1:
  name: ""
  relationship_to_oto1: "" # Stripped-down version, payment plan, partial
  what_they_get: ""
  what_they_dont_get: ""    # What's removed vs. full OTO
  price: ""                 # 30-50% of OTO 1
  page_elements:
    headline: ""            # "Wait — before you go..."
    message: ""             # "I understand $X might be too much right now..."
    alternative: ""         # "What if I could give you [partial] for just $X?"
    cta_yes: ""
    cta_no: ""
  conversion_target: "10-20%"
```

**Downsell Approaches:**
1. **Payment plan** — Same product, split into payments
2. **Lite version** — Stripped-down version at lower price
3. **Trial** — Access for limited time at reduced price
4. **Core only** — Main component without extras
5. **Different format** — eBook instead of video course

### Step 4: Design OTO 2 (Secondary Upsell)
A second upsell after OTO 1 (whether accepted or declined).

```yaml
oto_2:
  name: ""
  type: ""                  # Should be DIFFERENT from OTO 1
  what_they_get: ""
  why_it_matters: ""
  price: ""
  page_elements:
    headline: ""
    video: true/false
    video_length: ""
    bullet_points: []
    urgency: ""
    cta_yes: ""
    cta_no: ""
  conversion_target: "10-20%"
  downsell_if_declined: true/false
```

**OTO 2 Ideas:**
- If OTO 1 was "more content" → OTO 2 is "done-for-you"
- If OTO 1 was "speed" → OTO 2 is "community/support"
- If OTO 1 was "DFY" → OTO 2 is "advanced training"
- If OTO 1 was "tools" → OTO 2 is "coaching"

### Step 5: Design Optional Downsell for OTO 2

```yaml
downsell_2:
  included: true/false
  name: ""
  price: ""
  what_they_get: ""
  page_elements:
    headline: ""
    message: ""
    cta_yes: ""
    cta_no: ""
  conversion_target: "5-15%"
```

### Step 6: Calculate the Revenue Impact
Model the financial impact of the OTO sequence.

```yaml
revenue_modeling:
  scenarios:
    without_otos:
      front_end_price: "$0"
      front_end_conversion: "0%"
      acv: "$0"
      revenue_per_100_visitors: "$0"
    with_order_bump_only:
      front_end_price: "$0"
      order_bump_price: "$0"
      order_bump_take_rate: "30%"
      acv: "$0"
      revenue_per_100_visitors: "$0"
    with_full_oto_sequence:
      front_end_price: "$0"
      order_bump_revenue: "$0"
      oto_1_revenue: "$0"
      downsell_1_revenue: "$0"
      oto_2_revenue: "$0"
      downsell_2_revenue: "$0"
      total_acv: "$0"
      revenue_per_100_visitors: "$0"
  acv_increase: ""          # Percentage increase from OTOs
  revenue_multiplier: ""    # e.g., "2.3x baseline"
  break_even_impact: ""     # How this changes paid traffic economics
```

### Step 7: Map the Complete Sequence Flow
Document the exact path with all decision points.

```yaml
sequence_flow:
  step_1:
    page: "Order Form"
    action: "Purchase main offer"
    if_yes: "Show Order Bump"
    if_no: "Exit"
  step_2:
    page: "Order Form (Bump)"
    action: "Add order bump"
    if_yes: "Add to order"
    if_no: "Continue without"
    next: "OTO 1"
  step_3:
    page: "OTO 1"
    action: "Add upsell"
    if_yes: "Charge, go to OTO 2"
    if_no: "Go to Downsell 1"
  step_4a:
    page: "Downsell 1"
    action: "Add downsell"
    if_yes: "Charge, go to OTO 2"
    if_no: "Go to OTO 2"
  step_5:
    page: "OTO 2"
    action: "Add upsell"
    if_yes: "Charge, go to Thank You"
    if_no: "Go to Downsell 2 or Thank You"
  step_6:
    page: "Thank You"
    action: "Deliver access, confirm order"
```

### Step 8: Write the Page Copy Outlines
Outline the copy for each OTO page.

```yaml
copy_outlines:
  oto_1_page:
    headline: ""
    sub_headline: ""
    body_outline: ""
    value_stack: []
    price_presentation: ""
    guarantee: ""
    cta: ""
    decline_text: ""
  downsell_1_page:
    headline: ""
    empathy_opening: ""
    reduced_offer: ""
    cta: ""
    decline_text: ""
  oto_2_page:
    headline: ""
    body_outline: ""
    cta: ""
    decline_text: ""
```

---

## Output Template
```yaml
output:
  oto_sequence:
    total_offers: 0         # Order bump + OTOs + Downsells
    sequence:
      order_bump:
        name: ""
        price: ""
      oto_1:
        name: ""
        price: ""
      downsell_1:
        name: ""
        price: ""
      oto_2:
        name: ""
        price: ""
    projected_acv: ""
    acv_increase: ""
    revenue_multiplier: ""
    pages_needed: 0
    copy_needed: 0
```

---

## Quality Gate
```yaml
quality:
  - [ ] Order bump is low-friction impulse buy
  - [ ] OTO 1 follows "more of same / speed / DFY" rule
  - [ ] OTO 2 is different TYPE from OTO 1
  - [ ] Downsells are genuinely reduced (not just relabeled)
  - [ ] One-click upsell (no re-entering payment info)
  - [ ] Revenue model shows significant ACV increase
  - [ ] Complete flow is mapped with all decision points
  - [ ] "No thanks" text makes declining feel like a loss
  - [ ] Each OTO page can be consumed in under 2 minutes
  - [ ] Guarantee is included on OTO pages
```

---

## Handoff
- → **brunson-funnels** for `map-funnel-architecture` (BR_FUN_003) — integrate into funnel
- → **brunson-copy** for OTO page copy creation
- → **brunson-offers** for `create-value-stack` (BR_OFR_001) — if main offer needs work
- → Development team for checkout integration

---
*Task: BR_OFR_002 | Agent: brunson-offers | Version: 1.0*
