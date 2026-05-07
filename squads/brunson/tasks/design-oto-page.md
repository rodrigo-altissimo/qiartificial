# design-oto-page

## Metadata
```yaml
task_id: BR_PAG_003
agent: brunson-pages
type: creation
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapter 6: The SLO Funnel + DotCom Secrets Ignite — OTO Page Architecture"
```

## Purpose
Design a One Time Offer (OTO) page that converts 10-30% of buyers into upsell customers immediately after their initial purchase. The OTO page appears in the post-purchase flow and leverages the buyer's momentum to increase Average Order Value.

> "The money isn't in the front-end sale. It's in the upsells. Your OTO page is where you turn a $47 customer into a $297 customer." — Russell Brunson

---

## The Framework: OTO Page Architecture

The OTO page appears AFTER the buyer has already committed. They're in buying mode, credit card out, endorphins flowing. This page must capitalize on that momentum with a complementary offer.

### OTO Flow Position

```
Purchase (Front-End)
     │
     ▼
┌──────────────────┐
│  OTO PAGE #1     │  Conversion target: 20-30%
│  (Upsell)        │  Complements the original purchase
│  Higher price    │  "Now that you have X, you need Y"
└───────┬──────────┘
        │
   ┌────┴────┐
   │         │
  YES       NO
   │         │
   ▼         ▼
 OTO #2    Downsell
 (Higher)  (Lower price
            version)
```

### Core Design Principles
1. **Speed** — They just bought. Show the OTO within 3 seconds
2. **Relevance** — Must directly complement what they just purchased
3. **Simplicity** — One offer, one decision, one click
4. **No re-entry** — Credit card already on file = one-click purchase

---

## Input Required
```yaml
input_fields:
  front_end_product: ""         # What they just bought
  front_end_price: ""
  oto_product: ""               # What you're upselling
  oto_price: ""
  oto_position: ""              # OTO1, OTO2, or Downsell
  complementary_reason: ""      # Why this pairs with the front-end
  brand_colors: ""
  video_available: true/false
```

---

## Step-by-Step Process

### Step 1: Define the OTO Offer Logic
The OTO must pass the "peanut butter and jelly" test — it must naturally complement the front-end.

```yaml
oto_logic:
  front_end: ""
  oto_offer: ""
  complementary_bridge: ""      # "Now that you have [X], the fastest way to get results is [Y]"
  acceleration_promise: ""      # How OTO speeds up or amplifies the front-end result
  oto_types:
    - "Do it faster" — Speed up the result
    - "Do more of it" — Scale the result
    - "Done for you" — Remove the work
    - "Go deeper" — Advanced version
  selected_type: ""
```

### Step 2: Design the OTO Page Header
Immediately acknowledge their purchase and transition to the new offer.

```yaml
oto_header:
  confirmation_line: "Wait! Your order is being processed..."
  transition_headline: ""       # "Before you go, I have a special one-time offer..."
  urgency_subhead: ""           # "This page will only be shown ONCE"
  video_or_text: ""             # Quick 2-5 min video or text explanation
  style:
    background: ""
    text_color: ""
    urgency_color: "Red or orange for countdown"
```

### Step 3: Design the Offer Presentation
Present the OTO offer with clear value and relevance to what they just bought.

```yaml
offer_presentation:
  headline: ""                  # "Upgrade Your Results With [OTO Product]"
  explanation: ""               # 3-5 sentences on what this is and why they need it
  product_mockup:
    type: ""
    placement: "Center or right"
  value_points:
    - ""                        # Bullet: what's included
    - ""
    - ""
  comparison_to_front_end: ""   # "You just got X. This takes it to the next level by..."
```

### Step 4: Design the Price and CTA Section
One-click purchase button — no re-entering payment info.

```yaml
price_cta:
  original_price: ""            # Strikethrough price
  oto_price: ""                 # Special one-time price
  savings: ""                   # "You save $X"
  cta_button:
    text: "Yes! Add This To My Order"
    color: ""                   # Green or blue (positive action)
    size: "Extra large"
    one_click: true             # No new credit card entry needed
  decline_link:
    text: "No thanks, I don't want [benefit]. Take me to my purchase."
    style: "Small, grey text below CTA"
    placement: "Below the buy button"
  countdown:
    enabled: true
    duration: "15 minutes"
    message: "This offer expires when the timer hits zero"
```

### Step 5: Design the Guarantee Section
Mirror or extend the front-end guarantee.

```yaml
guarantee:
  type: ""                      # Same as front-end or extended
  text: ""
  badge: true
  placement: "Below CTA button"
```

### Step 6: Plan the Downsell (If They Decline)
If they say no to OTO1, offer a reduced version.

```yaml
downsell:
  enabled: true/false
  product: ""                   # Lighter version of OTO
  price: ""                     # Lower than OTO price
  headline: ""                  # "Wait — how about this instead?"
  cta_text: "Yes, I'll Take This Instead"
  decline_text: "No thanks, just give me my original purchase"
```

---

## Output Template
```yaml
output:
  oto_page:
    position: ""                # OTO1, OTO2, Downsell
    front_end_product: ""
    oto_product: ""
    oto_price: ""
    sections:
      header:
        confirmation: ""
        transition_headline: ""
      offer:
        headline: ""
        value_points: []
        mockup_type: ""
      price_cta:
        price: ""
        button_text: ""
        countdown: ""
      guarantee: ""
      decline_link: ""
    downsell:
      enabled: true/false
      product: ""
      price: ""
    target_conversion: "20-30%"
    projected_aov_increase: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] OTO directly complements the front-end purchase
  - [ ] Page loads within 3 seconds of purchase completion
  - [ ] Confirmation message acknowledges their purchase first
  - [ ] One-click purchase (no re-entering credit card)
  - [ ] Decline link is present but not prominent
  - [ ] Decline link uses "loss" language (what they're giving up)
  - [ ] Countdown timer creates genuine urgency
  - [ ] Guarantee matches or extends front-end guarantee
  - [ ] Downsell planned for those who decline
```

---

## Handoff
- -> **brunson-offers** for `design-order-bump-oto` (BR_OFR_004) — plan the full upsell flow
- -> **brunson-pages** for `design-sales-page` (BR_PAG_002) — if front-end page needs work
- -> **brunson-funnels** for `calculate-funnel-economics` (BR_FUN_004) — model AOV impact

---
*Task: BR_PAG_003 | Agent: brunson-pages | Version: 1.0*
