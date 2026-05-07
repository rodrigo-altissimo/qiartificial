# design-webinar-funnel

## Metadata
```yaml
task_id: BR_WEB_004
agent: brunson-webinar
type: creation
complexity: high
estimated_time: 45-60min
source: "DotCom Secrets — Chapter 7: Funnel #4 The Perfect Webinar Funnel"
```

## Purpose
Design a complete webinar funnel from registration page through post-webinar follow-up sequence. The webinar funnel is Brunson's #1 recommended funnel for selling offers between $297-$2,997 and is the engine behind most ClickFunnels success stories.

> "The Perfect Webinar funnel is the most powerful selling tool in the history of the internet. It's not even close." — Russell Brunson

---

## The Framework: Webinar Funnel Architecture

The webinar funnel has 7 core pages/stages, each with a specific conversion job.

### Funnel Flow

```
Traffic Source
     │
     ▼
┌──────────────────────────┐
│  1. REGISTRATION PAGE    │  Goal: Collect email + register
│     Curiosity-driven     │  Conversion: 30-50%
│     headline + countdown │
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  2. THANK YOU PAGE       │  Goal: Confirm + increase show rate
│     Self-liquidating     │  Include: Calendar reminder, share buttons
│     offer (optional)     │  Optional: Tripwire offer $7-$47
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  3. INDOCTRINATION       │  Goal: Build anticipation
│     Email sequence       │  3-5 emails before webinar
│     (pre-webinar)        │  Increase show rate to 25-40%
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  4. WEBINAR BROADCAST    │  Goal: Teach + Close
│     Perfect Webinar      │  90 minutes: 60 teach + 30 close
│     presentation         │  Live or Automated (evergreen)
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  5. ORDER PAGE           │  Goal: Capture sale
│     Sales page with      │  Stack slide recap + urgency
│     urgency/scarcity     │  Payment options
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  6. ORDER FORM BUMP      │  Goal: Increase AOV
│     + UPSELL SEQUENCE    │  Bump: +$37-$97
│                          │  Upsell 1: $197-$497
│                          │  Upsell 2: $97-$297
└──────────┬───────────────┘
           ▼
┌──────────────────────────┐
│  7. FOLLOW-UP SEQUENCE   │  Goal: Close non-buyers
│     Replay + urgency     │  3-7 day email sequence
│     emails               │  Replay expires in 48-72hrs
└──────────────────────────┘
```

---

## Input Required
```yaml
input_fields:
  webinar_title: ""
  offer_name: ""
  offer_price: ""
  target_avatar: ""
  dream_outcome: ""
  webinar_type: ""             # live, automated, hybrid
  three_secrets: []            # from craft-three-secrets task
  stack_slide: ""              # from build-stack-slide task
  traffic_source: ""           # paid, organic, Dream 100
  urgency_mechanism: ""        # deadline, limited seats, bonus expiry
```

---

## Step-by-Step Process

### Step 1: Design the Registration Page
The registration page must convert cold traffic into registrants using curiosity and urgency.

```yaml
registration_page:
  headline:
    hook: ""                   # Pattern interrupt
    promise: ""                # What they'll learn
    specificity: ""            # Specific result or timeframe
    example: "How to [Specific Result] in [Timeframe] Without [Pain Point]"
  sub_headline: ""             # Expand on the promise
  bullet_points:               # 3-5 curiosity bullets
    - ""
    - ""
    - ""
  webinar_date_time: ""        # Specific or "Choose Your Time"
  countdown_timer: true
  host_photo: true
  host_credentials: ""         # Brief authority statement
  cta_button_text: ""          # "Reserve My Seat" / "Save My Spot"
  target_conversion: "30-50%"
```

### Step 2: Design the Thank You / Confirmation Page
Convert registrants into committed attendees and optionally recoup ad spend.

```yaml
thank_you_page:
  confirmation_message: ""
  share_mechanism:
    social_share_buttons: true
    refer_a_friend: true/false
    incentive: ""              # "Bring a friend, get bonus X"
  show_rate_boosters:
    add_to_calendar: true
    sms_reminder_optin: true
    watch_intro_video: true    # 2-3 min "what to expect" video
  self_liquidating_offer:
    enabled: true/false
    product: ""                # Related low-ticket offer
    price: ""                  # $7-$47
    headline: ""               # "While you wait..."
    purpose: "Recoup ad spend"
```

### Step 3: Build the Indoctrination Email Sequence
Pre-webinar emails that increase show rate from the average 15% to 25-40%.

```yaml
indoctrination_sequence:
  email_1_immediately:
    subject: ""                # Confirmation + excitement
    content_focus: "Confirm registration, set expectations"
    include: "Calendar link, preparation instructions"
  email_2_day_before:
    subject: ""                # Anticipation builder
    content_focus: "Share a quick win or story related to webinar topic"
    include: "Reminder of date/time"
  email_3_morning_of:
    subject: ""                # "Today's the day"
    content_focus: "Final reminder with urgency"
    include: "Direct link to webinar room"
  email_4_15min_before:
    subject: ""                # "We're starting in 15 minutes"
    content_focus: "Last call, direct link"
    include: "What to have ready"
  email_5_its_live:
    subject: ""                # "We're LIVE — join now"
    content_focus: "We started, you're missing it"
    include: "Direct link, FOMO"
```

### Step 4: Map the Webinar Broadcast Structure
The Perfect Webinar framework applied to the live/automated broadcast.

```yaml
webinar_broadcast:
  total_duration: "90 minutes"
  structure:
    intro_5min:
      hook: ""                 # Big promise + pattern interrupt
      credibility: ""          # Quick authority establishment
      rules: ""                # "Stay to the end for bonus"
    content_45min:
      secret_1: ""             # Vehicle belief (15 min)
      secret_2: ""             # Internal belief (15 min)
      secret_3: ""             # External belief (15 min)
    transition_5min:
      bridge: ""               # "Now let me show you how to get all of this..."
      permission: ""           # "Is it OK if I share how we can work together?"
    close_30min:
      stack_slide: ""          # Build the stack
      price_reveal: ""         # Anchor high, reveal actual
      urgency: ""              # Deadline, bonuses expire, limited
      qa: ""                   # Handle objections
    bonus_5min:
      stayed_to_end_bonus: ""  # Reward for staying
  technology:
    platform: ""               # Zoom, WebinarJam, ClickFunnels
    chat_enabled: true
    replay_available: true
```

### Step 5: Design the Order Page
The page where attendees complete their purchase during or after the webinar.

```yaml
order_page:
  headline: ""                 # Stack slide headline recap
  stack_recap:
    items: []                  # Full value stack with dollar values
    total_value: ""
    actual_price: ""
  urgency_elements:
    countdown_timer: true
    limited_quantity: true/false
    bonus_expiry: true
    price_increase: true/false
  payment_options:
    full_pay: ""               # Single payment
    payment_plan: ""           # Split payments (slightly higher total)
  guarantee:
    type: ""                   # 30-day money back, etc.
    language: ""               # Specific guarantee copy
  order_bump:
    product: ""
    price: ""                  # $37-$97
    description: ""            # One compelling sentence
    conversion_target: "30-40%"
```

### Step 6: Design the Post-Webinar Follow-Up Sequence
The sequence that closes 50-80% of total webinar revenue after the live broadcast.

```yaml
follow_up_sequence:
  replay_email_1_immediately:
    subject: ""                # "Replay available (expires in 48hrs)"
    content: "For those who missed / want to rewatch"
    cta: "Watch Replay + Special Offer"
  replay_email_2_next_day:
    subject: ""                # Testimonial/case study focus
    content: "Share success story + replay reminder"
    cta: "See what [Name] achieved"
  urgency_email_3_day_2:
    subject: ""                # Deadline approaching
    content: "Bonuses expire in 24 hours"
    cta: "Last chance for bonuses"
  final_email_4_deadline:
    subject: ""                # "Closing tonight"
    content: "Final call, everything going away"
    cta: "Enroll before midnight"
  non_buyer_email_5:
    subject: ""                # Value-add, no hard sell
    content: "Free resource related to webinar topic"
    purpose: "Maintain relationship for future offers"
```

### Step 7: Set Up Funnel Economics and KPIs
Define the metrics that determine funnel health.

```yaml
funnel_economics:
  registration_rate: "30-50%"
  show_rate: "25-40%"
  close_rate_live: "5-15%"
  close_rate_replay: "2-5%"
  average_order_value: ""
  cost_per_registrant: ""
  cost_per_attendee: ""
  cost_per_sale: ""
  revenue_per_attendee: ""
  break_even_point: ""
  target_roas: "3x-5x"
```

---

## Output Template
```yaml
output:
  webinar_funnel:
    name: ""
    type: "live | automated | hybrid"
    offer: ""
    price: ""
    pages:
      registration:
        headline: ""
        target_conversion: ""
      thank_you:
        self_liquidating_offer: ""
      webinar:
        duration: ""
        three_secrets: []
      order:
        price: ""
        payment_options: ""
        order_bump: ""
      upsells: []
    email_sequences:
      indoctrination: "5 emails"
      follow_up: "5 emails"
    economics:
      target_registration_rate: ""
      target_show_rate: ""
      target_close_rate: ""
      target_roas: ""
    estimated_revenue_per_1000_registrants: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] All 7 funnel stages are designed with specific copy angles
  - [ ] Registration page has curiosity-driven headline, not generic
  - [ ] Thank you page includes show-rate boosters (calendar, video)
  - [ ] Indoctrination sequence has 5 emails with escalating urgency
  - [ ] Webinar structure follows Perfect Webinar framework exactly
  - [ ] Order page includes stack recap, urgency, guarantee, and order bump
  - [ ] Follow-up sequence covers replay, urgency, and deadline
  - [ ] Funnel economics are realistic and based on industry benchmarks
```

---

## Handoff
- -> **brunson-webinar** for `create-perfect-webinar` (BR_WEB_001) — build the presentation content
- -> **brunson-pages** for `design-squeeze-page` (BR_PAG_001) — design the registration page
- -> **brunson-email** for `write-soap-opera-sequence` (BR_EML_001) — build the indoctrination emails
- -> **brunson-traffic** for `plan-traffic-strategy` (BR_TRF_002) — drive traffic to registration

---
*Task: BR_WEB_004 | Agent: brunson-webinar | Version: 1.0*
