# design-email-segmentation

## Metadata
```yaml
task_id: BR_EML_004
agent: brunson-email
type: creation
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapter 4: List Segmentation + Traffic Secrets — Building Your List"
```

## Purpose
Design an email list segmentation strategy that ensures every subscriber receives the most relevant messages based on their behavior, interests, and position in the value ladder. Proper segmentation increases open rates, click rates, and revenue while reducing unsubscribes.

> "The money isn't in the list. It's in the relationship with the list. And relationships are built on relevance — sending the right message to the right person." — Russell Brunson

---

## The Framework: Segmentation Architecture

Segmentation means dividing your list into groups based on shared characteristics so you can send more targeted, relevant messages to each group.

### The 4 Segmentation Dimensions

```
DIMENSION              WHAT IT MEANS                      EXAMPLE SEGMENTS
─────────────────      ─────────────────────────────      ─────────────────────
1. Behavior            What they DID                      Opened, clicked, bought, abandoned
2. Interest            What they WANT                     Topic A vs B, product category
3. Value Ladder Tier   Where they ARE                     Lead, buyer, core, VIP
4. Engagement Level    How ACTIVE they are                Active, warm, cold, dead
```

---

## Input Required
```yaml
input_fields:
  value_ladder: ""              # Complete value ladder reference
  lead_magnets: []              # Different entry points
  products: []                  # All products/offers
  content_pillars: []           # Topic categories
  list_size: ""                 # Current subscriber count
  automation_tool: ""           # What ESP are you using?
  current_segments: []          # Any existing segmentation?
```

---

## Step-by-Step Process

### Step 1: Define Behavior-Based Segments
Segment by what subscribers have DONE in your funnel.

```yaml
behavior_segments:
  new_subscriber:
    criteria: "Opted in within last 7 days"
    treatment: "Soap Opera Sequence — no broadcast emails yet"
  engaged_non_buyer:
    criteria: "Opens emails regularly but hasn't purchased"
    treatment: "Increase offer frequency, test different angles"
  cart_abandoner:
    criteria: "Clicked sales page but didn't buy"
    treatment: "Cart abandonment sequence + retargeting"
  front_end_buyer:
    criteria: "Purchased front-end offer"
    treatment: "Ascension sequence to core offer"
  core_buyer:
    criteria: "Purchased core offer"
    treatment: "Ascension to high-ticket + VIP content"
  high_ticket_client:
    criteria: "Purchased high-ticket offer"
    treatment: "White-glove communication + referral requests"
  webinar_registered:
    criteria: "Registered for webinar"
    treatment: "Indoctrination sequence + show-rate boosters"
  webinar_attended_no_buy:
    criteria: "Attended webinar but didn't purchase"
    treatment: "Replay sequence + objection-handling emails"
```

### Step 2: Define Interest-Based Segments
Segment by what topics or products they've shown interest in.

```yaml
interest_segments:
  method: ""                    # How to identify interests
  options:
    link_click_tagging:
      description: "Tag based on which links they click"
      implementation: "Tag rules in ESP"
    survey_segmentation:
      description: "Ask them directly via survey email"
      implementation: "Multi-choice email or landing page quiz"
    opt_in_source:
      description: "Segment by which lead magnet they opted into"
      implementation: "Different lists or tags per lead magnet"
  segments:
    interest_a:
      topic: ""
      tag: ""
      content_focus: ""
    interest_b:
      topic: ""
      tag: ""
      content_focus: ""
    interest_c:
      topic: ""
      tag: ""
      content_focus: ""
```

### Step 3: Define Value Ladder Tier Segments
Segment by where they are on your value ladder.

```yaml
value_ladder_segments:
  lead:
    criteria: "Has email only, no purchase"
    messaging: "Education, value, trust-building"
    offer_focus: "Front-end offers ($7-$97)"
    email_frequency: "Daily Seinfeld"
  customer:
    criteria: "Purchased front-end"
    messaging: "Results, quick wins, ascension"
    offer_focus: "Core offers ($500-$2,000)"
    email_frequency: "3-5x per week"
  member:
    criteria: "Purchased core offer"
    messaging: "Advanced content, community, exclusivity"
    offer_focus: "High-ticket ($5,000+)"
    email_frequency: "2-3x per week + exclusive"
  vip:
    criteria: "High-ticket client"
    messaging: "Personal, exclusive, referral-focused"
    offer_focus: "Continuity, events, inner circle"
    email_frequency: "1-2x per week, personalized"
```

### Step 4: Define Engagement-Level Segments
Manage list health by tracking engagement.

```yaml
engagement_segments:
  hot:
    criteria: "Opened 3+ emails in last 7 days"
    treatment: "Send everything, they're engaged"
    percentage_target: "20-30% of list"
  warm:
    criteria: "Opened 1+ emails in last 14 days"
    treatment: "Regular sending, watch for cooling"
    percentage_target: "30-40% of list"
  cool:
    criteria: "Opened 1+ emails in last 30 days"
    treatment: "Reduce frequency, re-engagement content"
    percentage_target: "20-30% of list"
  cold:
    criteria: "No opens in 30+ days"
    treatment: "Re-engagement sequence (3 emails)"
    percentage_target: "<15% of list"
  dead:
    criteria: "No opens in 60+ days, failed re-engagement"
    treatment: "Remove from active list"
    action: "Archive or delete"
```

### Step 5: Create the Segmentation Tagging System
Define the tags and rules that power the segmentation.

```yaml
tagging_system:
  tag_categories:
    source: ["lead_magnet_a", "lead_magnet_b", "webinar", "referral"]
    behavior: ["opened_email", "clicked_link", "visited_sales_page", "cart_abandoned"]
    purchase: ["bought_fe", "bought_core", "bought_ht", "bought_bump"]
    interest: ["topic_a", "topic_b", "topic_c"]
    engagement: ["hot", "warm", "cool", "cold"]
  automation_rules:
    - trigger: "Opens email"
      action: "Update engagement to hot/warm"
    - trigger: "Clicks link tagged [topic]"
      action: "Add interest tag [topic]"
    - trigger: "Purchases [product]"
      action: "Move to [tier] segment, start ascension sequence"
    - trigger: "No opens 30 days"
      action: "Move to cold, start re-engagement"
```

### Step 6: Define Segment-Specific Messaging Rules
What each segment receives and what they DON'T receive.

```yaml
messaging_rules:
  leads:
    receive: ["Soap Opera", "Seinfeld", "Front-end offers"]
    exclude: ["High-ticket pitches", "Customer-only content"]
  customers:
    receive: ["Seinfeld", "Core offer ascension", "Quick win content"]
    exclude: ["Front-end offers they already bought"]
  members:
    receive: ["Advanced content", "High-ticket invitations", "Exclusive offers"]
    exclude: ["Basic front-end offers", "Beginner content"]
  vips:
    receive: ["Personal updates", "Event invitations", "Referral requests"]
    exclude: ["Mass promotions", "Basic offers"]
```

---

## Output Template
```yaml
output:
  segmentation_strategy:
    total_segments: ""
    dimensions:
      behavior: ""
      interest: ""
      value_ladder: ""
      engagement: ""
    tags:
      total_tags: ""
      categories: []
    automation_rules:
      total_rules: ""
    messaging_matrix:
      leads: ""
      customers: ""
      members: ""
      vips: ""
    expected_impact:
      open_rate_increase: "20-40%"
      click_rate_increase: "30-50%"
      unsubscribe_decrease: "30-50%"
      revenue_per_email_increase: "50-100%"
```

---

## Quality Gate
```yaml
quality:
  - [ ] All 4 segmentation dimensions are defined
  - [ ] Behavior segments cover the full funnel journey
  - [ ] Interest segments have clear identification methods
  - [ ] Value ladder tiers match the actual product lineup
  - [ ] Engagement segments include re-engagement and removal rules
  - [ ] Tagging system is implementable in the chosen ESP
  - [ ] Messaging rules prevent irrelevant sends to each segment
  - [ ] List hygiene plan removes or reactivates cold subscribers
```

---

## Handoff
- -> **brunson-email** for `build-follow-up-funnel` (BR_EML_003) — implement the automated sequences
- -> **brunson-traffic** for `plan-traffic-strategy` (BR_TRF_002) — align traffic sources with segments
- -> **brunson-funnels** for `calculate-funnel-economics` (BR_FUN_004) — model per-segment revenue

---
*Task: BR_EML_004 | Agent: brunson-email | Version: 1.0*
