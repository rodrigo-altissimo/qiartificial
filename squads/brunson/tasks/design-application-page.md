# design-application-page

## Metadata
```yaml
task_id: BR_PAG_004
agent: brunson-pages
type: creation
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapter 7: Funnel #5 The Application Funnel + Expert Secrets — High-Ticket Closing"
```

## Purpose
Design an application funnel page for high-ticket offers ($2,000+). The application page pre-qualifies prospects, positions your offer as exclusive, and creates commitment before the sales conversation. It reverses the power dynamic — instead of you selling, they're applying to work with you.

> "When they have to APPLY to give you money, the entire sales dynamic shifts. You're no longer chasing — they're qualifying." — Russell Brunson

---

## The Framework: Application Funnel Architecture

The application funnel is designed for offers too expensive to sell on a standard sales page. The prospect must prove they're a good fit before being allowed to buy.

### Application Funnel Flow

```
Traffic
  │
  ▼
┌─────────────────────┐
│  Landing Page        │  "Results in advance" content
│  (Long-form or VSL)  │  Positions you as the authority
│  CTA: "Apply Now"    │  Filters for serious prospects
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│  Application Form    │  10-15 qualifying questions
│  (Multi-step form)   │  Demonstrates commitment
│                      │  Collects key info for sales call
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│  Confirmation Page   │  "We'll review your application"
│  + Calendar Booking  │  Schedule the strategy call
│                      │  Set expectations for the call
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│  Strategy Call       │  Consultative close
│  (Phone/Zoom)       │  Present offer to qualified applicants
└─────────────────────┘
```

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  offer_price: ""               # $2,000+
  target_avatar: ""
  dream_outcome: ""
  delivery_format: ""           # Coaching, mastermind, done-for-you
  capacity: ""                  # Limited spots
  qualification_criteria: []    # Who is a good fit?
  disqualification_criteria: [] # Who is NOT a good fit?
  case_studies: []
  calendar_tool: ""             # Calendly, OnceHub, ClickFunnels
```

---

## Step-by-Step Process

### Step 1: Design the Landing Page (Pre-Application)
Long-form content or VSL that delivers value upfront and positions the application as exclusive.

```yaml
landing_page:
  headline: ""                  # "How [Avatar] Can [Result] — Apply for a Strategy Session"
  content_format: ""            # Long-form case study, VSL, or hybrid
  key_sections:
    value_content:
      type: ""                  # Free training, case study walkthrough, framework teaching
      length: ""                # 15-30 min video or 2000-3000 word article
      purpose: "Deliver results in advance — prove your method works"
    credibility:
      results: ""
      case_studies: []
      media_logos: []
    the_opportunity:
      what_it_is: ""            # Brief description of the program
      who_its_for: ""           # Ideal candidate description
      who_its_not_for: ""       # Explicitly filter out wrong fits
      capacity: ""              # "We only accept X clients per month"
    cta:
      text: "Apply For Your Strategy Session"
      style: "Button — not an order form"
      framing: "Application, not purchase"
```

### Step 2: Design the Application Form
The application form is a 10-15 question qualification survey that also builds commitment through progressive disclosure.

```yaml
application_form:
  structure: "Multi-step (3-4 steps, not one long form)"
  step_1_basics:
    - "Full Name"
    - "Email"
    - "Phone Number"
    - "Website/Business URL"
    progress_bar: "Step 1 of 4"
  step_2_business:
    - "What's your current monthly revenue?"
    - "What product/service do you sell?"
    - "How long have you been in business?"
    - "What's your current biggest challenge?"
    progress_bar: "Step 2 of 4"
  step_3_goals:
    - "What's your revenue goal for the next 12 months?"
    - "What have you tried before that didn't work?"
    - "Why do you think [your method] could work for you?"
    - "On a scale of 1-10, how committed are you to achieving this goal?"
    progress_bar: "Step 3 of 4"
  step_4_qualification:
    - "Are you ready to invest $[range] if we determine it's a good fit?"
    - "When are you available for a strategy call this week?"
    - "Is there anything else we should know?"
    progress_bar: "Step 4 of 4 — Almost done!"

  design_rules:
    - Progress bar on every step (builds commitment)
    - One question per screen on mobile
    - Conversational tone in questions
    - No "Submit" button — use "Continue" or "Next Step"
    - Final button: "Submit My Application"
```

### Step 3: Design the Confirmation / Thank You Page
Confirm their application and book the call.

```yaml
confirmation_page:
  headline: "Your Application Has Been Received"
  sub_headline: "Here's what happens next..."
  next_steps:
    step_1: "Our team will review your application within 24 hours"
    step_2: "If you qualify, we'll invite you to a Strategy Session"
    step_3: "On the call, we'll create a custom plan for your business"
  calendar_booking:
    enabled: true
    tool: ""                    # Calendly embed or similar
    headline: "Skip the wait — book your Strategy Session now"
    available_slots: ""
  expectation_setting:
    call_duration: "30-45 minutes"
    what_to_prepare: ""
    what_to_expect: ""
  video_message:
    enabled: true/false
    content: "Personal video from you welcoming them"
    purpose: "Build rapport before the call"
```

### Step 4: Define the Qualification Scoring System
Score applications to prioritize callbacks and identify best-fit prospects.

```yaml
scoring:
  high_priority:
    revenue_threshold: ""
    commitment_level: "8-10"
    investment_ready: "Yes"
    action: "Call within 24 hours"
  medium_priority:
    revenue_threshold: ""
    commitment_level: "6-7"
    investment_ready: "Maybe"
    action: "Call within 48 hours"
  low_priority:
    revenue_threshold: ""
    commitment_level: "1-5"
    investment_ready: "No"
    action: "Nurture email sequence"
  disqualified:
    criteria: []
    action: "Polite rejection email + free resource"
```

### Step 5: Design the Pre-Call Nurture Sequence
Emails between application and strategy call that increase show rate and close rate.

```yaml
pre_call_sequence:
  email_1_immediately:
    subject: "Application received — here's what's next"
    content: "Confirm application, set expectations"
  email_2_day_before:
    subject: "Your strategy session is tomorrow"
    content: "Case study + what to prepare"
  email_3_morning_of:
    subject: "Ready for your session today?"
    content: "Reminder + Zoom link + preparation checklist"
  sms_reminder:
    timing: "1 hour before call"
    content: "Quick reminder of your strategy session in 1 hour"
```

---

## Output Template
```yaml
output:
  application_page:
    offer: ""
    price: ""
    target_avatar: ""
    pages:
      landing:
        headline: ""
        content_format: ""
        cta_text: ""
      application:
        total_questions: ""
        steps: ""
        qualification_criteria: []
      confirmation:
        calendar_booking: true/false
        video_message: true/false
    scoring:
      high_priority_criteria: ""
      disqualification_criteria: ""
    pre_call_sequence: "3 emails + 1 SMS"
    target_metrics:
      application_rate: "10-20%"
      show_rate: "60-80%"
      close_rate: "20-40%"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Landing page delivers value before asking for application
  - [ ] Application form uses multi-step progressive disclosure
  - [ ] Questions qualify AND disqualify (both directions)
  - [ ] Investment readiness question is included
  - [ ] Calendar booking is on the confirmation page
  - [ ] Scoring system prioritizes high-value prospects
  - [ ] Pre-call sequence increases show rate
  - [ ] Capacity/exclusivity is communicated clearly
  - [ ] Mobile-optimized form with one question per screen
```

---

## Handoff
- -> **brunson-copy** for `write-sales-letter` (BR_CPY_001) — write the landing page copy
- -> **brunson-email** for `build-follow-up-funnel` (BR_EML_003) — post-application nurture
- -> **brunson-funnels** for `calculate-funnel-economics` (BR_FUN_004) — model high-ticket economics

---
*Task: BR_PAG_004 | Agent: brunson-pages | Version: 1.0*
