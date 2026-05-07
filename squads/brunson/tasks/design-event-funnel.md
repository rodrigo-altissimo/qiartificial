# design-event-funnel

## Metadata
```yaml
task_id: BR_LCH_003
agent: brunson-launch
type: creation
complexity: high
estimated_time: 45-60min
source: "DotCom Secrets — Chapter 7: Event Funnels + Expert Secrets — Selling at Live Events"
```

## Purpose
Design a complete live or virtual event funnel that fills seats, delivers a transformative experience, and converts attendees into high-ticket buyers. Event funnels combine the community energy of live events with the conversion power of the Perfect Webinar format.

> "Live events are the most powerful conversion tool that exists. When someone flies across the country to see you, they're pre-sold. Your job is to not un-sell them." — Russell Brunson

---

## The Framework: Event Funnel Architecture

Event funnels have three distinct phases: Fill (get people to register), Deliver (create the event experience), and Convert (sell during or after the event).

### Event Funnel Flow

```
FILL PHASE (4-12 weeks before event)
│
├── Event Registration Page
├── Early Bird Pricing / Fast-Action Bonuses
├── Email Nurture (anticipation building)
├── Social Proof (attendee count, speaker reveals)
│
DELIVER PHASE (Event Day(s))
│
├── Day 1: Foundation + Quick Win + Community Building
├── Day 2: Deep Implementation + Breakout Sessions
├── Day 3: Acceleration + Special Guest + THE PITCH
│
CONVERT PHASE (During + After Event)
│
├── Live Stack Slide Presentation
├── Order Tables / Checkout Links
├── Post-Event Follow-Up Sequence
├── Replay / Recording Access
└── Waitlist for Next Event
```

### Event Types

```
TYPE                    DURATION      FORMAT         PRICE RANGE    BEST FOR
─────────────────────   ────────      ──────────     ───────────    ──────────
Virtual Workshop        2-4 hours     Zoom/online    Free-$97       Lead gen
Virtual Summit          1-3 days      Online         Free-$197      Authority
Live Workshop           1 day         In-person      $97-$497       Community
Live Event              2-3 days      In-person      $497-$2,997    High-ticket
Mastermind Retreat      2-4 days      In-person      $5,000+        Ultra VIP
```

---

## Input Required
```yaml
input_fields:
  event_name: ""
  event_type: ""                # virtual workshop, summit, live event, etc.
  duration: ""                  # hours or days
  format: ""                    # virtual, in-person, hybrid
  ticket_price: ""
  target_attendees: ""
  venue_or_platform: ""
  speakers: []                  # You + guest speakers
  core_offer: ""                # What you'll pitch at the event
  core_offer_price: ""
  target_avatar: ""
  budget: ""
```

---

## Step-by-Step Process

### Step 1: Design the Event Registration Funnel
The pages and sequence that fill the event.

```yaml
registration_funnel:
  landing_page:
    headline: ""                # "[Event Name]: [Promise] in [Duration]"
    event_details:
      date: ""
      location: ""
      duration: ""
    speakers_section:
      - name: ""
        credentials: ""
        topic: ""
    agenda_preview: []          # High-level schedule
    social_proof: ""            # Past event photos, testimonials
    pricing:
      early_bird: ""
      regular: ""
      vip: ""
    urgency: ""                 # "Only X seats" or "Early bird expires"
    cta: "Reserve Your Seat"

  registration_confirmation:
    confirmation_message: ""
    calendar_add: true
    share_mechanism: ""         # Refer a friend, social share
    pre_event_checklist: ""
    upsell: ""                  # VIP upgrade, pre-event workshop
```

### Step 2: Design the Pre-Event Nurture Sequence
Build anticipation and maximize show rate.

```yaml
pre_event_nurture:
  week_4_before:
    email: "Speaker announcement + what you'll learn"
    social: "Behind-the-scenes content creation"
  week_3_before:
    email: "Attendee spotlight + community introduction"
    social: "Countdown + engagement posts"
  week_2_before:
    email: "Detailed agenda reveal + preparation checklist"
    social: "Speaker interviews / previews"
  week_1_before:
    email: "Logistics (venue, schedule, what to bring)"
    social: "Excitement posts, attendee count reveal"
  day_before:
    email: "We start tomorrow! Final reminders"
    sms: "Reminder with link/directions"
  day_of:
    email: "It's happening NOW — join us"
    sms: "We're live, join here: [link]"
```

### Step 3: Design the Event Content Schedule
Plan the content arc across the event duration.

```yaml
event_schedule:
  day_1:
    session_1:
      title: ""
      speaker: ""
      duration: ""
      purpose: "Foundation — establish the framework"
      audience_action: ""       # Exercise, worksheet, group activity
    session_2:
      title: ""
      speaker: ""
      duration: ""
      purpose: "Quick Win — get them a result"
      audience_action: ""
    session_3:
      title: ""
      speaker: ""
      duration: ""
      purpose: "Community Building — networking, hot seats"
      audience_action: ""

  day_2:
    session_1:
      title: ""
      purpose: "Deep Implementation — hands-on work"
    session_2:
      title: ""
      purpose: "Breakout Sessions — small group work"
    session_3:
      title: ""
      purpose: "Guest Speaker — external authority + social proof"

  day_3:
    session_1:
      title: ""
      purpose: "Acceleration — advanced strategies"
    session_2:
      title: ""
      purpose: "Transformation Stories — attendee spotlights"
    session_3:
      title: ""
      purpose: "THE PITCH — Perfect Webinar / Stack Slide presentation"
```

### Step 4: Design the Live Pitch
The conversion moment — the presentation where you make the offer.

```yaml
live_pitch:
  timing: ""                    # Typically Day 2 afternoon or Day 3
  format: "Perfect Webinar Structure"
  duration: "60-90 minutes"
  structure:
    three_secrets: []           # Adapted for live format
    stack_slide: ""             # Value stack presentation
    price_reveal: ""
    bonuses:
      live_only_bonus: ""       # "Only available in this room"
      fast_action: ""           # "First 20 to sign up get..."
    guarantee: ""
    order_mechanism: ""         # Run to the back table / click the link
  urgency:
    live_discount: ""           # Event-only pricing
    bonus_expiry: ""            # "Available only during this event"
    limited_spots: ""           # "We can only take X more clients"
  support_materials:
    order_forms: ""             # Physical or digital
    payment_processing: ""      # Stripe, Square, custom
    team_at_tables: ""          # Staff to process orders
```

### Step 5: Design the Post-Event Follow-Up
Convert non-buyers and deepen buyer relationships.

```yaml
post_event:
  buyers:
    immediate: "Order confirmation + welcome email"
    day_1: "Onboarding + next steps"
    day_3: "Community invitation + first module access"
    day_7: "Check-in + quick win celebration"
  non_buyers:
    day_1: "Thank you for attending + event highlights"
    day_2: "Replay of key session (not the pitch)"
    day_3: "Extended offer (event pricing for 48 more hours)"
    day_5: "Last chance + testimonials from buyers"
    day_7: "Cart closes + waitlist for next event"
  all_attendees:
    testimonial_request: "Ask for video/written testimonial"
    social_sharing: "Share photos + tag the event"
    referral_request: "Invite friends to next event"
```

### Step 6: Define Event Success Metrics
Track everything from registration through post-event conversion.

```yaml
event_metrics:
  fill:
    registrations: ""
    cost_per_registration: ""
    show_rate: ""
  deliver:
    attendee_satisfaction: ""
    engagement_level: ""
    completion_rate: ""
  convert:
    pitch_attendance: ""        # % of attendees who stayed for the pitch
    live_conversion: ""         # % who bought during the event
    post_event_conversion: ""   # % who bought in follow-up
    total_revenue: ""
    revenue_per_attendee: ""
  post:
    refund_rate: ""
    testimonials_collected: ""
    referrals_generated: ""
```

---

## Output Template
```yaml
output:
  event_funnel:
    event_name: ""
    type: ""
    duration: ""
    ticket_price: ""
    core_offer: ""
    core_offer_price: ""
    phases:
      fill:
        registration_page: ""
        nurture_emails: ""
      deliver:
        content_schedule: ""
        total_sessions: ""
      convert:
        pitch_format: ""
        urgency_mechanisms: []
    follow_up: "7-email post-event sequence"
    projected_metrics:
      attendees: ""
      conversion_rate: ""
      projected_revenue: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Registration page has clear value proposition and social proof
  - [ ] Pre-event nurture builds genuine anticipation (not just reminders)
  - [ ] Event schedule has logical content arc (foundation -> implementation -> pitch)
  - [ ] Quick wins happen on Day 1 (build belief)
  - [ ] Live pitch follows Perfect Webinar structure
  - [ ] Live-only bonuses create genuine exclusivity
  - [ ] Post-event follow-up gives non-buyers 3-5 more days to convert
  - [ ] Metrics track all 3 phases (fill, deliver, convert)
```

---

## Handoff
- -> **brunson-webinar** for `create-perfect-webinar` (BR_WEB_001) — create the live pitch
- -> **brunson-traffic** for `build-dream-100-list` (BR_TRF_001) — fill the event through partnerships
- -> **brunson-movement** for `build-community-plan` (BR_MOV_001) — design the event community

---
*Task: BR_LCH_003 | Agent: brunson-launch | Version: 1.0*
