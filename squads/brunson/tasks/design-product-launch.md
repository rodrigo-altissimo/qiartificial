# design-product-launch

## Metadata
```yaml
task_id: BR_LCH_001
agent: brunson-launch
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets — Chapter 7: Funnel #6 Product Launch Funnel + Expert Secrets — Launch Sequences"
```

## Purpose
Design a complete product launch funnel that builds anticipation over multiple days and drives massive revenue in a compressed window. The product launch funnel uses the "Sideways Sales Letter" approach — splitting the sales message across 3-4 pre-launch videos before opening the cart.

> "A product launch funnel is a sales letter broken into pieces and spread across time. Each piece builds desire until the cart opens and people rush to buy." — Russell Brunson

---

## The Framework: Product Launch Architecture

The product launch funnel replaces a single sales page with a multi-day sequence of valuable content that simultaneously educates and sells.

### The Launch Timeline

```
PRE-LAUNCH PHASE (7-14 days before cart opens)
│
├── Day -14: Seed Launch (optional) — Test with small audience
├── Day -7:  Pre-Launch Content 1 — "The Opportunity"
├── Day -5:  Pre-Launch Content 2 — "The Transformation"
├── Day -3:  Pre-Launch Content 3 — "The Experience"
├── Day -1:  Pre-Launch Content 4 — "The Blueprint" (optional)
│
LAUNCH PHASE (3-7 days cart is open)
│
├── Day 0:   Cart Opens — Full offer revealed
├── Day 1-2: Social proof + FAQ emails
├── Day 3-4: Objection handling emails
├── Day 5-6: Urgency + scarcity emails
├── Day 7:   Cart Closes — Final deadline
│
POST-LAUNCH PHASE
│
├── Day 8:   Closed cart confirmation
├── Day 9+:  Waitlist for next launch
└── Day 30:  Evergreen option (optional)
```

---

## Input Required
```yaml
input_fields:
  product_name: ""
  price: ""
  target_avatar: ""
  dream_outcome: ""
  launch_date: ""
  cart_open_duration: ""        # 3, 5, or 7 days
  list_size: ""                 # Current email list
  audience_warmth: ""           # cold, warm, hot
  previous_launches: ""         # First launch or repeat?
  budget: ""                    # For paid promotion
  jv_partners: []               # Joint venture partners
```

---

## Step-by-Step Process

### Step 1: Design Pre-Launch Content Sequence
Each piece of pre-launch content serves a specific purpose in the "Sideways Sales Letter."

```yaml
pre_launch_content:
  plc_1_opportunity:
    title: ""
    format: ""                  # Video (15-30 min), blog post, live stream
    purpose: "Show the opportunity — why NOW is the time"
    content:
      hook: ""                  # Why they should pay attention
      opportunity: ""           # The new opportunity you've discovered
      social_proof: ""          # Quick proof that it works
      cliffhanger: ""           # "In the next video, I'll show you..."
    delivery: "Email + social + landing page"
    engagement_action: ""       # Comment, share, or complete a task

  plc_2_transformation:
    title: ""
    format: ""
    purpose: "Show the transformation — what's possible for THEM"
    content:
      recap: ""                 # Brief recap of PLC1
      case_studies: []          # People who've achieved the transformation
      framework_preview: ""     # Teach a piece of the framework (enough to believe)
      internal_objection: ""    # Address "but I can't do this"
      cliffhanger: ""
    delivery: ""
    engagement_action: ""

  plc_3_experience:
    title: ""
    format: ""
    purpose: "Give them the experience — let them taste the result"
    content:
      recap: ""
      live_demonstration: ""    # Walk them through a piece
      external_objection: ""    # Address "but what about [obstacle]?"
      results_preview: ""       # What they'll achieve with the full program
      transition_to_offer: ""   # "I've decided to open enrollment..."
    delivery: ""
    engagement_action: ""
```

### Step 2: Design the Cart Open Sequence
The sequence of communications when the cart officially opens.

```yaml
cart_open:
  day_0_launch_email:
    subject: ""
    content: "The cart is OPEN — full offer reveal"
    includes: "Value stack, price, bonuses, guarantee"
    urgency: "Bonuses expire in X days"
  day_0_sales_page:
    headline: ""
    structure: "Full sales page with all offer elements"
    video: true/false
    stack_slide: true/false
  launch_bonuses:
    fast_action_bonus:
      name: ""
      expires: "First 48 hours"
      value: ""
    early_bird_bonus:
      name: ""
      expires: "First 100 buyers"
      value: ""
```

### Step 3: Design the Cart Open Email Sequence
Emails sent during the open cart window.

```yaml
cart_open_emails:
  day_1_social_proof:
    subject: ""
    content: "People are already joining — here's what they're saying"
    focus: "Testimonials, enrollment numbers, excitement"
  day_2_faq:
    subject: ""
    content: "Got questions? Here are the most common ones"
    focus: "FAQ that handles top objections"
  day_3_case_study:
    subject: ""
    content: "How [person] went from [before] to [after]"
    focus: "Deep-dive case study"
  day_4_objection_handling:
    subject: ""
    content: "The #1 reason people hesitate (and why it's wrong)"
    focus: "Address the biggest remaining objection"
  day_5_urgency:
    subject: ""
    content: "Bonuses expire tomorrow"
    focus: "Urgency — bonuses going away"
  day_6_last_day:
    subject: ""
    content: "Last day to enroll — doors close at midnight"
    focus: "Final push, recap offer, deadline"
  day_7_final_hours:
    subject: ""
    content: "4 hours left" / "1 hour left" / "Last chance"
    focus: "Urgency countdown, final CTA"
    send_multiple: true         # 2-3 emails on final day
```

### Step 4: Design the Scarcity and Urgency Mechanisms
Define the specific scarcity and urgency elements.

```yaml
scarcity_urgency:
  cart_close_deadline:
    date: ""
    time: ""
    finality: "Cart literally closes — cannot buy after"
  bonus_deadlines:
    bonus_1_expires: ""
    bonus_2_expires: ""
  price_increase:
    enabled: true/false
    current_price: ""
    future_price: ""
  limited_spots:
    enabled: true/false
    capacity: ""
    reason: ""                  # Why spots are limited
  social_proof_urgency:
    live_enrollment_counter: true/false
    milestone_announcements: true/false
```

### Step 5: Design the Post-Launch Sequence
What happens after the cart closes.

```yaml
post_launch:
  cart_closed_email:
    subject: "Enrollment is closed"
    content: "Thank you, here's what's next for those who joined"
    non_buyer_treatment: "Waitlist for next launch or evergreen"
  buyer_onboarding:
    welcome_email: ""
    first_steps: ""
    community_invitation: ""
  non_buyer_nurture:
    waitlist: true/false
    next_launch_date: ""
    continued_value: "Back to Seinfeld emails"
  evergreen_transition:
    enabled: true/false
    automation: ""              # Automated webinar or evergreen sequence
    timing: "30-60 days post-launch"
```

### Step 6: Create the Launch Metrics Dashboard
Define what to track throughout the launch.

```yaml
launch_metrics:
  pre_launch:
    email_list_growth: ""
    plc_view_rate: ""
    engagement_rate: ""
    anticipation_signals: ""
  launch:
    day_1_sales: ""
    daily_revenue: ""
    conversion_rate: ""
    cart_abandonment: ""
  close:
    final_day_sales_percentage: ""  # Typically 40-60% of total
    total_revenue: ""
    total_customers: ""
    refund_rate: ""
  post_launch:
    30_day_retention: ""
    upsell_conversion: ""
    referral_rate: ""
```

---

## Output Template
```yaml
output:
  product_launch:
    product: ""
    price: ""
    launch_date: ""
    cart_open_days: ""
    pre_launch_content:
      plc_1: ""
      plc_2: ""
      plc_3: ""
    cart_open_emails: "7-10 emails"
    scarcity_mechanisms: []
    launch_bonuses: []
    post_launch_plan: ""
    projected_metrics:
      list_size: ""
      estimated_conversion: ""
      projected_revenue: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Pre-launch content follows the Opportunity -> Transformation -> Experience arc
  - [ ] Each PLC has a specific engagement action
  - [ ] Cart open sequence has daily emails with different angles
  - [ ] Scarcity is real (cart actually closes, bonuses actually expire)
  - [ ] Final day has 2-3 emails with increasing urgency
  - [ ] Post-launch includes buyer onboarding AND non-buyer nurture
  - [ ] Launch metrics dashboard tracks pre, during, and post-launch
  - [ ] Timeline is realistic for the list size and niche
```

---

## Handoff
- -> **brunson-launch** for `create-challenge-funnel` (BR_LCH_002) — if challenge format is better
- -> **brunson-webinar** for `create-perfect-webinar` (BR_WEB_001) — PLC videos use webinar elements
- -> **brunson-email** for `build-follow-up-funnel` (BR_EML_003) — post-launch automation

---
*Task: BR_LCH_001 | Agent: brunson-launch | Version: 1.0*
