# plan-webinar-funnel

## Metadata
```yaml
task_id: BR_WEB_004
agent: brunson-webinar
type: creation
complexity: high
estimated_time: 60-90min
source: "Expert Secrets — Chapter 16: The Webinar Funnel"
```

## Purpose
Plan the complete webinar funnel from registration to close, including registration page, confirmation sequence, the webinar itself, and the post-webinar follow-up that continues selling for days after the live event.

> "The webinar doesn't end when you stop presenting. The real selling happens in the 72 hours AFTER the webinar, when urgency and follow-up do the heavy lifting." — Russell Brunson

---

## The Framework: The Complete Webinar Funnel

### Funnel Flow
```
[Traffic] → [Registration Page] → [Thank You / Confirmation]
                                          │
                                ┌─────────┴─────────┐
                                ▼                    ▼
                          [Pre-Webinar          [No-Show
                           Indoctrination]       Sequence]
                                │
                                ▼
                         [Live Webinar]
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
              [Bought]    [Didn't Buy]  [Left Early]
                    │           │           │
                    ▼           ▼           ▼
              [Buyer        [Close        [Replay
               Onboard]     Sequence]     Sequence]
                              │
                         ┌────┴────┐
                         ▼         ▼
                    [Bought]  [Downsell
                              Sequence]
```

---

## Input Required
```yaml
input_fields:
  webinar_title: ""
  offer_name: ""
  offer_price: ""
  webinar_date_time: ""
  target_audience: ""
  traffic_source: ""
  webinar_platform: ""      # Zoom, WebinarJam, EverWebinar, etc.
  email_platform: ""
  page_builder: ""
  registration_goal: 0
  show_up_target: ""
  conversion_target: ""
  replay_strategy: ""       # Live replay, automated, evergreen
```

---

## Step-by-Step Process

### Step 1: Design the Registration Page
The page that converts traffic into registrants.

```yaml
registration_page:
  headline: ""              # "Free Training: How to [Dream Outcome]"
  subheadline: ""           # "Without [Pain Point] — Even If [Objection]"
  what_theyll_learn:
    - secret_1: ""
    - secret_2: ""
    - secret_3: ""
  social_proof: ""          # "Join 5,000+ who have already registered"
  urgency: ""               # "Limited spots available"
  form_fields:
    - "Name"
    - "Email"
    - "Phone (optional)"
  cta_button_text: ""       # "Reserve My Seat Now"
  target_conversion: "30-50%"
  page_elements:
    video: true/false       # Short teaser video
    countdown: true/false
    testimonials: true/false
    host_bio: true/false
```

### Step 2: Design the Thank You / Confirmation Page
What they see immediately after registering.

```yaml
confirmation_page:
  headline: ""              # "You're In! Here's What to Do Next..."
  instructions:
    - step_1: ""            # "Add to calendar"
    - step_2: ""            # "Watch this short video"
    - step_3: ""            # "Join our Facebook group"
  engagement_video:
    included: true/false
    content: ""             # Brief intro, build anticipation
    duration: "2-5 minutes"
  calendar_add:
    included: true
    reminder_times: ["24h", "1h", "15min"]
  share_mechanism:
    included: true/false
    incentive: ""           # "Share and get a bonus"
  micro_commitment:
    included: true/false
    action: ""              # "Comment below what you want to learn"
```

### Step 3: Create the Pre-Webinar Indoctrination Sequence
Emails that increase show-up rate and pre-frame for the sale.

```yaml
pre_webinar_sequence:
  email_1:
    timing: "Immediately after registration"
    subject: ""
    content_theme: "Confirmation + excitement"
    key_elements:
      - logistics: "Date, time, link"
      - anticipation: "Here's a sneak peek..."
      - action: "Add to calendar"
  email_2:
    timing: "24 hours before"
    subject: ""
    content_theme: "Story + credibility"
    key_elements:
      - story: "Why I created this training..."
      - proof: "Results others have gotten..."
      - reminder: "Tomorrow at [time]..."
  email_3:
    timing: "3 hours before"
    subject: ""
    content_theme: "Urgency + preparation"
    key_elements:
      - urgency: "Starting soon..."
      - preparation: "Have a notebook ready..."
      - tease: "I'll be sharing something I've never revealed..."
  email_4:
    timing: "15 minutes before"
    subject: ""
    content_theme: "We're live!"
    key_elements:
      - link: "Click here to join NOW"
      - urgency: "Starting in 15 minutes"
  sms_reminders:
    enabled: true/false
    timing: ["24h", "1h", "15min"]
    messages: []
```

**Show-Up Optimization:**
- Average show-up rate: 25-35%
- With proper indoctrination: 40-55%
- Each email increases show-up by 5-10%

### Step 4: Plan the Live Webinar Experience
Structure the live event itself.

```yaml
live_webinar:
  pre_show:
    duration: "10-15 minutes"
    activities:
      - "Music playing"
      - "Chat engagement — ask questions"
      - "Early bird bonus announcement"
  main_presentation:
    structure: ""           # Reference BR_WEB_001
    duration: "60-75 minutes"
  offer_presentation:
    structure: ""           # Reference BR_WEB_002
    duration: "10-15 minutes"
  live_qa:
    duration: "15-20 minutes"
    purpose: "Handle objections in real-time"
    strategy: ""            # "Answer questions that help sell"
  technical_setup:
    platform: ""
    backup_plan: ""
    recording: true
    chat_moderation: ""
    offer_link_timing: ""   # When to drop the link
```

### Step 5: Design the Post-Webinar Close Sequence
The follow-up that generates 50-80% of total webinar revenue.

```yaml
post_webinar_sequence:
  for_attendees_who_didnt_buy:
    email_1:
      timing: "Immediately after webinar"
      subject: ""
      content: "Replay link + recap of offer"
    email_2:
      timing: "Next morning"
      subject: ""
      content: "Testimonial + deadline reminder"
    email_3:
      timing: "Next afternoon"
      subject: ""
      content: "FAQ / Objection handling"
    email_4:
      timing: "48 hours after"
      subject: ""
      content: "Case study + urgency"
    email_5:
      timing: "72 hours (deadline day)"
      subject: ""
      content: "Final call + bonus expiring"
    email_6:
      timing: "72 hours (deadline night)"
      subject: ""
      content: "Last chance — doors closing"

  for_no_shows:
    email_1:
      timing: "30 min after webinar started"
      subject: ""
      content: "You missed it! Here's the replay..."
    email_2:
      timing: "Next day"
      subject: ""
      content: "Highlights + replay link"
    email_3:
      timing: "48 hours"
      subject: ""
      content: "Replay coming down + offer"
    email_4:
      timing: "72 hours"
      subject: ""
      content: "Last chance for replay + offer"

  for_buyers:
    email_1:
      timing: "Immediately"
      subject: ""
      content: "Welcome + access instructions"
    email_2:
      timing: "Next day"
      subject: ""
      content: "Getting started guide"
    email_3:
      timing: "3 days"
      subject: ""
      content: "Quick win + community invitation"
```

### Step 6: Plan the Urgency and Deadline Structure
Create legitimate urgency that drives action.

```yaml
urgency_structure:
  deadline:
    type: ""                # Time-based, enrollment-based, bonus-based
    expires_at: ""          # "72 hours after webinar"
  scarcity:
    type: ""                # Limited spots, limited bonuses, price increase
    mechanism: ""
  bonus_urgency:
    fast_action_bonus:
      name: ""
      expires: ""           # "Only for those who join in the next 24 hours"
    webinar_only_bonus:
      name: ""
      expires: ""           # "Only available during this webinar"
  price_urgency:
    webinar_price: ""
    post_deadline_price: ""
    savings: ""
```

### Step 7: Set Webinar Metrics and Targets
Define success metrics for the entire funnel.

```yaml
webinar_metrics:
  registration:
    target_registrants: 0
    target_cost_per_registrant: ""
    registration_page_conversion: ""
  show_up:
    target_show_up_rate: "40%"
    target_attendees: 0
  engagement:
    average_watch_time: ""
    chat_participation: ""
    stayed_to_offer: ""
  conversion:
    live_close_rate: ""     # Target 5-15%
    replay_close_rate: ""   # Target 2-5%
    total_close_rate: ""
  revenue:
    target_per_webinar: ""
    earnings_per_registrant: ""
    earnings_per_attendee: ""
  optimization:
    biggest_lever: ""
    split_test_plan: ""
```

---

## Output Template
```yaml
output:
  webinar_funnel:
    webinar_title: ""
    offer: ""
    price: ""
    funnel_pages:
      - registration_page
      - confirmation_page
      - webinar_room
      - offer_page
      - thank_you_page
    email_sequences:
      pre_webinar: "4 emails + SMS"
      post_attendee: "6 emails"
      post_no_show: "4 emails"
      post_buyer: "3 emails"
    urgency_mechanism: ""
    deadline: ""
    target_metrics:
      registrants: 0
      show_up_rate: ""
      conversion_rate: ""
      revenue_per_webinar: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Registration page has clear headline and 3 bullet points
  - [ ] Confirmation page has calendar add and engagement element
  - [ ] Pre-webinar sequence has 4+ emails with escalating urgency
  - [ ] Post-webinar sequence covers attendees AND no-shows
  - [ ] Urgency mechanism is legitimate and clear
  - [ ] Deadline is specific (not vague)
  - [ ] Buyer onboarding sequence is included
  - [ ] All metrics have realistic targets
```

---

## Handoff
- → **brunson-webinar** for `create-perfect-webinar` (BR_WEB_001) — the presentation itself
- → **brunson-email** for `create-soap-opera-sequence` (BR_EML_001) — post-webinar emails
- → **brunson-copy** for registration page copy
- → **brunson-traffic** for `design-buy-in-campaign` (BR_TRF_004) — drive registrations

---
*Task: BR_WEB_004 | Agent: brunson-webinar | Version: 1.0*
