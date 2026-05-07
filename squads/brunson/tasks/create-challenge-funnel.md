# create-challenge-funnel

## Metadata
```yaml
task_id: BR_LCH_002
agent: brunson-launch
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets Ignite — Challenge Funnels + Expert Secrets — Building Belief Through Action"
```

## Purpose
Create a challenge funnel sequence that takes participants through a 5-30 day structured challenge, building commitment and belief through daily action before presenting the core offer. Challenge funnels have the highest engagement and conversion rates of any launch format.

> "A challenge funnel doesn't just teach people — it gets them to DO. When someone takes action and gets a small result, they're sold on the bigger result." — Russell Brunson

---

## The Framework: Challenge Funnel Architecture

A challenge funnel combines community engagement, daily action steps, and progressive commitment to create buying momentum. Participants who complete challenge tasks convert at 3-5x the rate of passive viewers.

### Challenge Funnel Flow

```
REGISTRATION ($0-$97)
│
├── Day 0: Welcome + Onboarding
│
├── Day 1-5: Phase 1 — Foundation
│   Quick wins, basic framework
│
├── Day 6-10: Phase 2 — Implementation
│   Deeper work, real results
│
├── Day 11-14: Phase 3 — Acceleration
│   Advanced strategies, bigger results
│
├── Day 14-15: THE OFFER
│   Presentation + cart open
│   (Perfect Webinar or live training)
│
├── Day 15-19: Cart Open
│   Follow-up, testimonials, urgency
│
└── Day 20: Cart Close
    Final deadline
```

### Why Challenges Convert So Well

```
MECHANISM                      CONVERSION IMPACT
────────────────────────────   ──────────────────
1. Micro-Commitment            Small steps → big commitment
2. Quick Wins                  "If I got this result for free, imagine paid..."
3. Community Pressure          Social accountability
4. Daily Engagement            Top of mind for 14+ days
5. Identity Shift              "I'm the type of person who does this"
6. Reciprocity                 "They gave me so much value for free..."
```

---

## Input Required
```yaml
input_fields:
  challenge_name: ""
  challenge_duration: ""        # 5, 7, 14, 21, or 30 days
  challenge_price: ""           # Free, $27, $47, $97
  target_avatar: ""
  quick_win_result: ""          # What result by end of challenge?
  core_offer: ""                # What you'll sell at the end
  core_offer_price: ""
  delivery_platform: ""         # Facebook group, Skool, email, dedicated app
  live_or_recorded: ""
  community_element: true/false
```

---

## Step-by-Step Process

### Step 1: Design the Challenge Registration Funnel
The entry point — how they sign up and what they pay.

```yaml
registration:
  landing_page:
    headline: ""                # "[Duration]-Day [Challenge Name] Challenge"
    promise: ""                 # "By Day [X], you'll have [quick win]"
    urgency: ""                 # "Starts [date] — limited spots"
    price: ""                   # Free = bigger list, Paid = more committed
    social_proof: ""            # "X people have completed this challenge"
  registration_process:
    step_1: "Enter name + email"
    step_2: "Join community (Facebook group / Skool)"
    step_3: "Watch welcome video"
    step_4: "Complete pre-challenge task"
  welcome_sequence:
    email_1: "Welcome + community link + Day 0 prep"
    email_2: "What to expect + introduce yourself in group"
    email_3: "Challenge starts tomorrow — are you ready?"
```

### Step 2: Design the Daily Challenge Content
Each day has a specific teaching + action step combo.

```yaml
daily_content:
  day_1:
    theme: ""
    teaching: ""                # What you teach (10-20 min)
    action_step: ""             # What they DO (specific, completable)
    deliverable: ""             # What they produce/share
    engagement: ""              # Post result in group
  day_2:
    theme: ""
    teaching: ""
    action_step: ""
    deliverable: ""
    engagement: ""
  day_3:
    theme: ""
    teaching: ""
    action_step: ""
    deliverable: ""
    engagement: ""
  # Continue for all days...

  content_rules:
    - Each day builds on the previous day
    - Action steps must be completable in 30-60 minutes
    - Every 3-5 days, celebrate a milestone
    - Quick wins should happen by Day 3
    - Later days increase in depth and investment
```

### Step 3: Design the Community Engagement System
The community is where commitment is built and maintained.

```yaml
community_design:
  platform: ""
  daily_engagement:
    morning_post: ""            # Motivational + today's task
    midday_check_in: ""         # "How's it going?"
    evening_celebration: ""     # "Share your wins!"
  accountability:
    buddy_system: true/false
    public_commitment: true/false
    progress_tracking: true/false
  gamification:
    daily_check_ins: true
    completion_badges: true
    leaderboard: true/false
    prizes: true/false
  live_elements:
    daily_live_qa: true/false
    timing: ""
    duration: ""
```

### Step 4: Design the Transition to Offer
The critical moment where the challenge transitions to the pitch.

```yaml
offer_transition:
  timing: ""                    # Last 1-2 days of challenge
  format: ""                    # Live webinar, challenge day, special training
  bridge:
    recap_results: ""           # "Look what you've accomplished..."
    gap_identification: ""      # "But there's still more..."
    limitation_of_challenge: "" # "The challenge gave you X, but for Y, you need..."
    offer_as_next_step: ""      # "That's why I created [Core Offer]"
  offer_presentation:
    structure: "Perfect Webinar or Stack Slide"
    stack: []
    price: ""
    bonuses: []
    guarantee: ""
    urgency: ""
  enrollment_mechanism:
    cta: ""
    sales_page: ""
    cart_duration: "3-5 days"
```

### Step 5: Design the Post-Challenge Follow-Up
Close non-buyers and onboard buyers.

```yaml
post_challenge:
  buyers:
    welcome: ""
    onboarding: ""
    community_transition: ""
  non_buyers:
    day_1_replay: ""            # Replay of offer presentation
    day_2_testimonials: ""      # Challenge participants who bought + results
    day_3_objections: ""        # Address remaining objections
    day_4_urgency: ""           # Bonuses expire
    day_5_close: ""             # Final deadline
  challenge_alumni:
    ongoing_value: ""           # Continue nurturing
    next_challenge: ""          # Invitation to future challenges
    referral: ""                # Refer friends to next challenge
```

### Step 6: Define Challenge Success Metrics
Track what matters at every phase.

```yaml
challenge_metrics:
  registration:
    total_registrants: ""
    cost_per_registrant: ""
    paid_vs_free: ""
  participation:
    day_1_participation: ""     # Baseline
    midpoint_participation: ""  # % still active
    completion_rate: ""         # % who completed all days
  engagement:
    daily_post_rate: ""
    community_interactions: ""
    live_attendance: ""
  conversion:
    offer_viewers: ""
    conversion_rate: ""
    revenue: ""
    aov: ""
  post_challenge:
    refund_rate: ""
    satisfaction: ""
    referral_rate: ""
```

---

## Output Template
```yaml
output:
  challenge_funnel:
    name: ""
    duration: ""
    price: ""
    core_offer: ""
    core_offer_price: ""
    daily_content:
      total_days: ""
      phases: []
    community:
      platform: ""
      engagement_plan: ""
    offer_transition:
      format: ""
      timing: ""
    follow_up: "5 post-challenge emails"
    projected_metrics:
      registrants: ""
      completion_rate: ""
      conversion_rate: ""
      projected_revenue: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Challenge has clear daily action steps (not just watching content)
  - [ ] Quick win happens by Day 3 (builds belief)
  - [ ] Community engagement system drives accountability
  - [ ] Daily content builds progressively (Day 1 is not as deep as Day 10)
  - [ ] Transition to offer feels natural, not abrupt
  - [ ] Offer is presented as the logical NEXT STEP after the challenge
  - [ ] Post-challenge follow-up handles both buyers and non-buyers
  - [ ] Metrics dashboard tracks registration through conversion
```

---

## Handoff
- -> **brunson-launch** for `design-product-launch` (BR_LCH_001) — if product launch is better format
- -> **brunson-movement** for `build-community-plan` (BR_MOV_001) — design the community
- -> **brunson-webinar** for `create-perfect-webinar` (BR_WEB_001) — create the offer presentation

---
*Task: BR_LCH_002 | Agent: brunson-launch | Version: 1.0*
