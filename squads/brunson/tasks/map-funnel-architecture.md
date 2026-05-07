# map-funnel-architecture

## Metadata
```yaml
task_id: BR_FUN_003
agent: brunson-funnels
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets — Chapter 10: Funnel Building"
```

## Purpose
Map the complete funnel page flow from first click to final conversion and beyond. Every page, every link, every email, every conditional path — documented in a comprehensive funnel blueprint.

> "Every page in your funnel has ONE job. When a page tries to do two things, it does neither well." — Russell Brunson

---

## The Framework: Funnel Architecture Blueprint

A funnel architecture is not just a sequence of pages. It is a complete decision tree that handles every possible visitor behavior — buyers, non-buyers, abandoners, and returners.

### Architecture Layers
1. **Traffic Layer** — Where visitors come from
2. **Pre-Frame Layer** — What they see before the funnel
3. **Qualification Layer** — How they enter (opt-in, application)
4. **Presentation Layer** — The sales mechanism (VSL, webinar, page)
5. **Conversion Layer** — The offer and checkout
6. **Ascension Layer** — OTOs, upsells, cross-sells
7. **Follow-Up Layer** — Email sequences for all paths

---

## Input Required
```yaml
input_fields:
  funnel_type: ""           # From BR_FUN_002
  offer_name: ""
  price_point: ""
  value_ladder_tier: ""     # Which tier does this funnel serve?
  traffic_sources: []
  target_conversion_rate: ""
  upsell_offers: []
  downsell_offers: []
  email_platform: ""
  page_builder: ""
```

---

## Step-by-Step Process

### Step 1: Map the Core Funnel Flow
Draw the main path from entry to conversion.

```yaml
core_flow:
  page_1:
    name: ""
    type: ""                # Opt-in, Sales, Video, Webinar, etc.
    url_slug: ""
    primary_action: ""      # What should visitor DO on this page?
    success_destination: ""  # Where do they go if they take action?
    fail_destination: ""     # Where do they go if they don't?
  page_2:
    name: ""
    type: ""
    url_slug: ""
    primary_action: ""
    success_destination: ""
    fail_destination: ""
  # Continue for all pages...
```

### Step 2: Map the Upsell/Downsell Sequence
After the main conversion, map the OTO (One-Time Offer) sequence.

```yaml
oto_sequence:
  oto_1:
    name: ""
    price: ""
    type: ""                # Upsell, Order Bump, One-Click
    if_yes: ""              # Next page
    if_no: ""               # Downsell or skip
  downsell_1:
    name: ""
    price: ""
    type: "downsell"
    if_yes: ""
    if_no: ""
  oto_2:
    name: ""
    price: ""
    type: ""
    if_yes: ""
    if_no: ""
  final_destination: ""     # Thank you / member area
```

**Brunson's OTO Rule:** "The best upsell is more of the same thing, or the natural next step."

### Step 3: Design the Pre-Frame Bridge
What happens BEFORE they hit the funnel? The pre-frame sets expectations.

```yaml
pre_frame_bridges:
  from_paid_ads:
    ad_message: ""
    landing_congruence: ""  # Does the page match the ad?
    bridge_page_needed: false
  from_email:
    email_context: ""
    warm_traffic: true
    pre_frame_message: ""
  from_organic:
    content_context: ""
    bridge_content: ""
  from_affiliates:
    affiliate_bridge_page: ""
    custom_messaging: ""
```

### Step 4: Map All Email Sequences
Every path through the funnel triggers specific emails.

```yaml
email_sequences:
  opted_in_not_bought:
    sequence_name: "Soap Opera Sequence"
    emails: 5
    duration: "5 days"
    goal: "Convert to front-end buyer"
  bought_front_end:
    sequence_name: "Ascension Sequence"
    emails: 7
    duration: "14 days"
    goal: "Ascend to core offer"
  bought_core_offer:
    sequence_name: "Onboarding + Backend"
    emails: 10
    duration: "30 days"
    goal: "Deliver value, ascend to backend"
  abandoned_cart:
    sequence_name: "Cart Recovery"
    emails: 3
    duration: "3 days"
    goal: "Recover abandoned purchase"
  webinar_no_show:
    sequence_name: "Replay Sequence"
    emails: 4
    duration: "4 days"
    goal: "Watch replay, take action"
```

### Step 5: Define Page Requirements
For each page in the funnel, specify exactly what's needed.

```yaml
page_specifications:
  page_name:
    headline: ""
    subheadline: ""
    primary_cta: ""
    elements_needed:
      - hero_section: true/false
      - video: true/false
      - testimonials: true/false
      - bullet_points: true/false
      - countdown_timer: true/false
      - order_form: true/false
      - guarantee_badge: true/false
    mobile_considerations: ""
    load_time_target: "<3 seconds"
    tracking_pixels: []
```

### Step 6: Map the Conditional Logic
Define what happens based on visitor behavior.

```yaml
conditional_paths:
  if_opted_in_and_bought:
    immediate: "Show OTO 1"
    email: "Buyer sequence"
    tag: "buyer"
  if_opted_in_not_bought:
    immediate: "Show exit pop"
    email: "Soap Opera Sequence"
    tag: "lead"
    retarget: true
  if_abandoned_cart:
    immediate: "Exit intent popup"
    email: "Cart abandonment"
    tag: "cart_abandon"
    retarget: true
  if_watched_webinar:
    immediate: "Show offer page"
    email: "Post-webinar close"
    tag: "webinar_attendee"
  if_missed_webinar:
    immediate: "Send replay link"
    email: "Replay urgency"
    tag: "webinar_no_show"
```

### Step 7: Create the Visual Funnel Map
Document the complete flow as a visual diagram.

```
[Traffic Source] → [Pre-Frame Bridge] → [Opt-in Page]
                                             │
                                    ┌────────┴────────┐
                                    ▼                  ▼
                              [Thank You +        [Exit Pop]
                               Sales Page]             │
                                    │            [Retarget Pixel]
                               ┌────┴────┐
                               ▼         ▼
                          [Order Form] [Leave]
                               │         │
                          ┌────┴──┐   [Email Seq]
                          ▼       ▼
                       [OTO 1] [Downsell]
                          │       │
                          ▼       ▼
                       [OTO 2] [Thank You]
                          │
                          ▼
                     [Thank You +
                      Member Area]
```

### Step 8: Set Tracking and Analytics
Define what metrics to track at each stage.

```yaml
tracking_plan:
  top_of_funnel:
    - metric: "Cost per click"
    - metric: "Click-through rate"
    - metric: "Landing page views"
  middle_of_funnel:
    - metric: "Opt-in rate"
    - metric: "Sales page views"
    - metric: "Video watch rate"
  bottom_of_funnel:
    - metric: "Conversion rate"
    - metric: "Average cart value"
    - metric: "Earnings per click"
  post_funnel:
    - metric: "Upsell take rate"
    - metric: "Refund rate"
    - metric: "Customer lifetime value"
```

---

## Output Template
```yaml
output:
  funnel_architecture:
    name: ""
    type: ""
    total_pages: 0
    core_flow: []
    oto_sequence: []
    email_sequences: []
    conditional_paths: []
    tracking_metrics: []
    visual_map: ""
    estimated_build_time: ""
    required_tools: []
```

---

## Quality Gate
```yaml
quality:
  - [ ] Every page has a single clear purpose
  - [ ] All conditional paths are mapped (buy, don't buy, abandon)
  - [ ] Email sequences exist for every path
  - [ ] Pre-frame bridges match traffic sources
  - [ ] OTO sequence follows logical ascension
  - [ ] Tracking plan covers all funnel stages
  - [ ] Visual map is clear and complete
  - [ ] Mobile experience is considered
```

---

## Handoff
- → **brunson-copy** for page copy creation (BR_CPY_001/002)
- → **brunson-email** for email sequence creation (BR_EML_001/002)
- → **brunson-hooks** for ad hook creation (BR_HKS_002)
- → **brunson-offers** for OTO design (BR_OFR_002)

---
*Task: BR_FUN_003 | Agent: brunson-funnels | Version: 1.0*
