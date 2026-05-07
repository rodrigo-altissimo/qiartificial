# plan-invisible-funnel

## Metadata
```yaml
task_id: BR_LCH_004
agent: brunson-launch
type: creation
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapter 7: Funnel #8 The Invisible Funnel + DotCom Secrets Ignite"
```

## Purpose
Plan an Invisible Funnel strategy that eliminates buyer risk by letting prospects experience the product BEFORE they pay. The Invisible Funnel flips the traditional sales model — instead of "pay then experience," it's "experience then pay." This approach is devastatingly effective for courses, coaching, and digital products.

> "The Invisible Funnel removes all risk. They consume the product, get the result, and THEN decide if it was worth the price. When you deliver real value, almost everyone pays." — Russell Brunson

---

## The Framework: Invisible Funnel Architecture

The Invisible Funnel is based on a simple principle: if your product truly delivers value, let people experience it first. Those who get results will gladly pay; those who don't will opt out — and you've still built goodwill.

### How It Works

```
STEP 1: REGISTER
│  "Sign up for this [training/workshop/course] — pay nothing today"
│  They register with credit card on file
│  Card is NOT charged
│
STEP 2: CONSUME
│  They go through the entire training/experience
│  They implement and get results
│  Duration: 1 hour to 7 days
│
STEP 3: DECIDE
│  "Was it worth $[price]?"
│  Option A: Keep it → Card is charged $[price]
│  Option B: Cancel → No charge, keep what they learned
│
STEP 4: ASCEND
│  Those who kept it become buyers
│  Ascend to next offer in value ladder
```

### Why It Works

```
PSYCHOLOGY                         IMPACT
────────────────────────────────   ──────────────────────────
Zero perceived risk                90%+ registration rate
Reciprocity (they got value)       70-90% keep rate
Commitment (they invested time)    Higher perceived value
No buyer's remorse                 <2% refund rate
Trust signal (extreme confidence)  Massive brand credibility
```

---

## Input Required
```yaml
input_fields:
  product_name: ""
  product_type: ""              # webinar, course, workshop, coaching session
  regular_price: ""
  target_avatar: ""
  dream_outcome: ""
  consumption_time: ""          # How long to experience the full product
  result_measurability: ""      # How easy is it to measure the result?
  fulfillment_cost: ""          # What does it cost you to deliver?
  credit_card_processor: ""     # Stripe, PayPal, etc.
```

---

## Step-by-Step Process

### Step 1: Define the "Invisible" Product
Choose which product or experience to offer through the invisible funnel.

```yaml
invisible_product:
  name: ""
  type: ""
  regular_price: ""
  invisible_price: ""           # Same or slightly higher (premium for risk-free)
  consumption_format: ""        # Live event, recorded course, 1-on-1 session
  consumption_duration: ""      # 1 hour, 3 days, 7 days
  result_they_get: ""           # What measurable result by end of consumption?
  result_measurability: "high/medium/low"

  best_candidates:
    - "Live workshops/masterclasses (1-3 hours)"
    - "Mini-courses (3-7 days)"
    - "Strategy sessions (1 hour)"
    - "Software trials (7-14 days)"
  poor_candidates:
    - "12-month coaching (too long before results)"
    - "Physical products (shipping costs)"
    - "Low-price items (not worth the friction)"
```

### Step 2: Design the Registration Page
Registration must capture credit card info WITHOUT charging it.

```yaml
registration_page:
  headline: ""                  # "[Product Name] — Experience It Free, Then Decide"
  sub_headline: ""              # "Your card won't be charged. Try it first, pay only if you love it."
  value_proposition:
    what_they_get: ""
    what_it_costs: "Nothing today"
    when_charged: "Only if you decide to keep it"
  trust_elements:
    no_charge_guarantee: "Your card will NOT be charged today"
    cancel_anytime: "Cancel before [deadline] and pay nothing"
    keep_what_you_learned: "Even if you cancel, the knowledge is yours"
  registration_form:
    fields: ["Name", "Email", "Credit Card (not charged today)"]
    cta: "Get Instant Access — $0 Today"
    disclaimer: "Your card will only be charged $[price] on [date] if you choose to keep access"
  conversion_target: "50-80%"   # Much higher than standard because zero risk
```

### Step 3: Design the Consumption Experience
Optimize the product experience for maximum value delivery in minimum time.

```yaml
consumption_experience:
  delivery_method: ""           # Immediate access, scheduled, dripped
  structure:
    segment_1:
      content: ""
      duration: ""
      quick_win: ""             # Must get a result in first segment
    segment_2:
      content: ""
      duration: ""
      deeper_result: ""
    segment_3:
      content: ""
      duration: ""
      full_result: ""           # The complete value delivered
  engagement_touchpoints:
    during: ""                  # Check-ins, support, community
    after: ""                   # Follow-up to ensure they consumed
  result_documentation:
    how_to_measure: ""          # How they prove to themselves it worked
    before_after: ""            # Encourage documenting their result
```

### Step 4: Design the Decision Point
The moment where they decide to keep (be charged) or cancel.

```yaml
decision_point:
  timing: ""                    # X days after registration
  mechanism: ""                 # Email reminder + auto-charge
  reminder_sequence:
    reminder_1:
      timing: "3 days before charge"
      content: "Reminder: your access continues in 3 days at $[price]"
      focus: "Recap the value they received"
    reminder_2:
      timing: "1 day before charge"
      content: "Tomorrow your investment of $[price] will be processed"
      focus: "Testimonials + what else they'll get by staying"
    reminder_3:
      timing: "Day of charge"
      content: "Your access is now permanent! Here's what's next..."
      focus: "Welcome to the family + upsell to next level"
  cancellation_process:
    how: ""                     # One-click cancel link in email
    friction_level: "Low"       # Make it easy to cancel (builds trust)
    exit_survey: true/false
    save_offer: ""              # Optional: discount to stay
  keep_rate_target: "70-90%"
```

### Step 5: Design the Ascension Path
Those who keep the product are now proven buyers with high trust.

```yaml
ascension:
  immediate_upsell:
    offer: ""                   # Next level on the value ladder
    timing: "Same day as charge"
    mechanism: "Thank you email with offer"
  delayed_upsell:
    offer: ""
    timing: "7-14 days after charge"
    mechanism: "Ascension email sequence"
  referral_request:
    timing: "After positive result"
    mechanism: ""
    incentive: ""               # "Refer a friend, get [bonus]"
```

### Step 6: Model the Invisible Funnel Economics
Calculate the financial impact vs. traditional selling.

```yaml
economics:
  traditional_model:
    visitors: 1000
    conversion_rate: "3%"
    customers: 30
    revenue: "$___"

  invisible_model:
    visitors: 1000
    registration_rate: "60%"    # Much higher (zero risk)
    registrants: 600
    consumption_rate: "80%"     # Most will consume
    consumers: 480
    keep_rate: "80%"
    paying_customers: 384
    revenue: "$___"

  comparison:
    traditional_customers: 30
    invisible_customers: 384
    revenue_multiplier: "___x"
    note: "Even with lower keep rate, volume makes up for it"
```

---

## Output Template
```yaml
output:
  invisible_funnel:
    product: ""
    price: ""
    consumption_duration: ""
    funnel_stages:
      registration:
        conversion_target: "50-80%"
        card_charged: "No"
      consumption:
        duration: ""
        quick_win: ""
      decision:
        charge_date: ""
        keep_rate_target: "70-90%"
      ascension:
        next_offer: ""
    economics:
      projected_registrants: ""
      projected_keepers: ""
      projected_revenue: ""
      vs_traditional: "___x"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Product delivers measurable value within the consumption period
  - [ ] Registration page clearly states card won't be charged today
  - [ ] Consumption experience has a quick win in the first segment
  - [ ] Reminder sequence is transparent and not manipulative
  - [ ] Cancellation process is genuinely easy (builds long-term trust)
  - [ ] Keep rate projection is conservative (70-80%, not 95%)
  - [ ] Ascension path is defined for those who keep
  - [ ] Economics model shows clear advantage over traditional selling
```

---

## Handoff
- -> **brunson-launch** for `design-product-launch` (BR_LCH_001) — if traditional launch is better
- -> **brunson-offers** for `create-guarantee-strategy` (BR_OFR_003) — the invisible funnel IS the guarantee
- -> **brunson-email** for `build-follow-up-funnel` (BR_EML_003) — build the reminder + ascension sequences

---
*Task: BR_LCH_004 | Agent: brunson-launch | Version: 1.0*
