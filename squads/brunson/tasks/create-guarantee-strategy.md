# create-guarantee-strategy

## Metadata
```yaml
task_id: BR_OFR_003
agent: brunson-offers
type: creation
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapter 6: Risk Reversal + Expert Secrets — Closing with Guarantees"
```

## Purpose
Create a guarantee and risk reversal strategy that eliminates the buyer's perceived risk and shifts it entirely to you. The guarantee is often the final piece that converts hesitant prospects into buyers — it removes the last objection: "What if it doesn't work?"

> "The purpose of a guarantee isn't to give refunds. It's to remove the risk from the buyer's mind so they can say YES with confidence." — Russell Brunson

---

## The Framework: Guarantee Architecture

Guarantees come in different strengths. The stronger the guarantee, the more risk you absorb — and the higher your conversion rate. Counterintuitively, stronger guarantees often result in FEWER refund requests because they signal confidence.

### The Guarantee Spectrum

```
WEAKEST                                                      STRONGEST
────────────────────────────────────────────────────────────────────────
No Guarantee    →    Conditional    →    Unconditional    →    Better Than
                     Guarantee           Money-Back            Money-Back

"All sales       "If you complete     "30-day no            "If you don't get
 final"           all modules and      questions asked       [result], I'll refund
                  don't get [result],  money-back            you AND give you $500"
                  we'll refund you"    guarantee"
```

### Guarantee Types

```
TYPE                    DESCRIPTION                         BEST FOR
─────────────────────   ──────────────────────────────     ─────────────────
1. Unconditional        Full refund, no questions           Low-to-mid ticket
2. Conditional          Refund if they complete the work    Mid-to-high ticket
3. Performance          Refund based on results             High ticket
4. Double Your Money    Refund + extra payment              Ultra-confident
5. Keep Everything      Refund but keep the product         Digital products
6. Trial Period         Try before committing               Memberships
7. Results-Based        Pay only when you get results       Done-for-you
```

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  offer_price: ""
  delivery_format: ""           # digital, coaching, done-for-you, physical
  result_promise: ""            # What specific result do you guarantee?
  time_to_result: ""            # How long to see the promised result?
  refund_rate_current: ""       # Current refund rate (if known)
  buyer_objections: []          # Risk-related objections
  confidence_level: ""          # How confident are you in results?
  margin: ""                    # Gross margin (affects guarantee aggressiveness)
```

---

## Step-by-Step Process

### Step 1: Identify the Buyer's Perceived Risks
List every risk the buyer perceives when considering your offer.

```yaml
perceived_risks:
  financial: ""                 # "What if I waste my money?"
  time: ""                      # "What if I waste my time?"
  effort: ""                    # "What if it's too hard?"
  social: ""                    # "What if people judge me?"
  opportunity: ""               # "What if there's something better?"
  competence: ""                # "What if I can't do it?"
  primary_risk: ""              # The #1 risk that stops the most people
```

### Step 2: Select the Guarantee Type
Choose the guarantee type that matches your offer and confidence level.

```yaml
guarantee_selection:
  recommended_type: ""
  reasoning: ""
  strength_level: ""            # weak, moderate, strong, ultra-strong
  duration: ""                  # 30 days, 60 days, 90 days, lifetime
  conditions: []                # Any requirements for the guarantee
  exceptions: []                # Any situations where guarantee doesn't apply
```

### Step 3: Write the Guarantee Copy
Craft the exact language of your guarantee.

```yaml
guarantee_copy:
  headline: ""                  # "100% Money-Back Guarantee" or creative name
  guarantee_name: ""            # Give it a memorable name if possible
  body: ""                      # Full guarantee language (3-5 sentences)
  specific_promise: ""          # Exactly what you guarantee
  duration: ""                  # Timeframe
  process: ""                   # How to request a refund
  tone: ""                      # Confident, reassuring

  example: |
    "Try [Offer Name] for a full 30 days. Go through the entire program,
    implement the strategies, and if you don't see [specific result],
    simply email us at [email] and we'll refund every penny. No questions
    asked. No hoops to jump through. You have absolutely zero risk."
```

### Step 4: Design the Guarantee Visual
Create the visual representation of the guarantee.

```yaml
guarantee_visual:
  badge_type: ""                # Shield, seal, stamp, custom
  text_on_badge: ""             # "30-Day Money-Back Guarantee"
  colors: ""                    # Typically gold/green = trust
  placement:
    sales_page: "Near the buy button"
    webinar: "On the stack slide"
    checkout: "Above the order button"
  signature: true/false         # Personal signature for trust
```

### Step 5: Add Risk Reversal Amplifiers
Go beyond the basic guarantee with additional risk-reversal elements.

```yaml
risk_amplifiers:
  keep_everything:
    enabled: true/false
    text: "Even if you request a refund, you keep all the bonuses"
  satisfaction_check:
    enabled: true/false
    text: "We'll check in at Day 14 to make sure you're on track"
  performance_pledge:
    enabled: true/false
    text: "If you don't see [result] in [time], we'll work with you 1-on-1 until you do"
  money_back_plus:
    enabled: true/false
    text: "If it doesn't work, we'll refund you AND [additional compensation]"
```

### Step 6: Set Up the Refund Process
Define the actual operational process for handling refund requests.

```yaml
refund_process:
  how_to_request: ""            # Email, form, phone
  response_time: ""             # "Within 24-48 hours"
  processing_time: ""           # "5-10 business days"
  who_handles: ""               # Support team, automated, personal
  save_attempt: ""              # Optional: offer alternative before refund
  post_refund: ""               # What happens to their access?
  refund_tracking: ""           # How to monitor refund rate
  target_refund_rate: "<5%"
```

---

## Output Template
```yaml
output:
  guarantee_strategy:
    offer: ""
    guarantee_type: ""
    duration: ""
    headline: ""
    copy: ""
    conditions: []
    visual: ""
    risk_amplifiers: []
    refund_process: ""
    expected_impact:
      conversion_increase: "10-30%"
      refund_rate: "<5%"
    guarantee_cost_model:
      if_5_percent_refund: "$___/month"
      revenue_gained_from_higher_conversion: "$___/month"
      net_benefit: "$___/month"
```

---

## Quality Gate
```yaml
quality:
  - [ ] All perceived buyer risks are identified and addressed
  - [ ] Guarantee type matches the offer price point and format
  - [ ] Guarantee copy is specific, not vague
  - [ ] Duration is long enough for the buyer to see results
  - [ ] Visual badge is professional and placed near CTA
  - [ ] Refund process is clear and operational
  - [ ] Risk amplifiers add genuine confidence beyond basic guarantee
  - [ ] Guarantee language removes the SPECIFIC risk, not just general risk
```

---

## Handoff
- -> **brunson-offers** for `build-irresistible-offer` (BR_OFR_001) — integrate into offer stack
- -> **brunson-copy** for `write-sales-letter` (BR_CPY_001) — write guarantee into sales copy
- -> **brunson-pages** for `design-sales-page` (BR_PAG_002) — place guarantee visual

---
*Task: BR_OFR_003 | Agent: brunson-offers | Version: 1.0*
