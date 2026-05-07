# design-follow-up-funnel

## Metadata
```yaml
task_id: BR_EML_003
agent: brunson-email
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets — Chapter 6: The Follow-Up Funnel"
```

## Purpose
Design the complete follow-up funnel architecture — the system of automated email sequences, segmentation rules, and ascension paths that nurture leads from first opt-in through every stage of the Value Ladder.

> "The money is in the follow-up. Most people won't buy on the first touch. Your follow-up funnel is the difference between a hobby and a business." — Russell Brunson

---

## The Framework: Follow-Up Funnel Architecture

### The Follow-Up Funnel Layers
```
LAYER 1: IMMEDIATE FOLLOW-UP (0-5 days)
  → Soap Opera Sequence
  → Deliver value, build relationship, make first offer

LAYER 2: DAILY ENGAGEMENT (Day 6+)
  → Seinfeld Emails
  → Maintain relationship, ascend to next offer

LAYER 3: EVENT-TRIGGERED (Any time)
  → Webinar registration, cart abandon, purchase, etc.
  → Contextual sequences based on behavior

LAYER 4: ASCENSION SEQUENCES (Based on purchase)
  → Post-purchase: Deliver value, upsell next tier
  → Pre-qualified: Invite to application, call, event
```

### The Flow
```
[New Lead] → [SOS (5 days)] → [Seinfeld (ongoing)]
                                       │
                          ┌─────────────┼─────────────┐
                          ▼             ▼             ▼
                    [Webinar Reg]  [Purchases]    [Goes Cold]
                          │             │             │
                    [Webinar Seq]  [Buyer Seq]   [Re-engage]
                          │             │             │
                    [Post-Webinar] [Ascension]   [Win-back]
```

---

## Input Required
```yaml
input_fields:
  business_name: ""
  value_ladder: ""          # From BR_FUN_001
  funnel_types: []          # From BR_FUN_002
  email_platform: ""
  current_list_size: 0
  current_segments: []
  offers: []                # All offers with prices
  lead_magnets: []
  content_frequency: ""
  automation_capability: "" # Basic, intermediate, advanced
```

---

## Step-by-Step Process

### Step 1: Map All Entry Points
Identify every way someone enters your email list.

```yaml
entry_points:
  lead_magnets:
    - name: ""
      funnel: ""
      tag: ""
      initial_sequence: "SOS"
  webinar_registration:
    - name: ""
      tag: ""
      initial_sequence: "Pre-webinar"
  purchases:
    - product: ""
      tag: ""
      initial_sequence: "Buyer onboarding"
  other:
    - source: ""
      tag: ""
      initial_sequence: ""
```

### Step 2: Design Segment Architecture
Define how subscribers are categorized.

```yaml
segments:
  by_status:
    - name: "New Subscriber"
      criteria: "Opted in within last 7 days"
      tag: "new_subscriber"
    - name: "Engaged Lead"
      criteria: "Opens >50% of emails, clicks regularly"
      tag: "engaged"
    - name: "Buyer"
      criteria: "Made any purchase"
      tag: "buyer"
    - name: "Multi-Buyer"
      criteria: "2+ purchases"
      tag: "multi_buyer"
    - name: "High-Ticket"
      criteria: "Purchased $1,000+ product"
      tag: "high_ticket"
    - name: "Cold"
      criteria: "No opens in 30+ days"
      tag: "cold"
  by_interest:
    - name: ""
      criteria: ""
      tag: ""
  by_value_ladder_position:
    - name: "Tier 1 — Free Only"
      criteria: "Has lead magnet, no purchase"
      tag: "tier_1"
    - name: "Tier 2 — Front-End Buyer"
      criteria: "Purchased $7-97 product"
      tag: "tier_2"
    - name: "Tier 3 — Core Buyer"
      criteria: "Purchased $500-5000 product"
      tag: "tier_3"
    - name: "Tier 4 — Backend Client"
      criteria: "Purchased $5000+ or in coaching"
      tag: "tier_4"
```

### Step 3: Design the Sequence Map
Map every automated email sequence and how they connect.

```yaml
sequence_map:
  onboarding_sequences:
    soap_opera_sequence:
      trigger: "New subscriber opt-in"
      emails: 5
      duration: "5 days"
      goal: "Build relationship, sell front-end"
      transitions_to: "Seinfeld emails"
      reference: "BR_EML_001"
    buyer_welcome:
      trigger: "First purchase"
      emails: 5
      duration: "7 days"
      goal: "Deliver value, prevent refund, prep for upsell"
      transitions_to: "Ascension sequence"

  engagement_sequences:
    seinfeld_daily:
      trigger: "Completed SOS + no purchase"
      emails: "Ongoing (daily or 3x/week)"
      goal: "Maintain engagement, sell through story"
      reference: "BR_EML_002"

  event_sequences:
    webinar_pre:
      trigger: "Webinar registration"
      emails: 4
      duration: "Until webinar"
      goal: "Maximize show-up rate"
    webinar_post_attendee:
      trigger: "Attended webinar, didn't buy"
      emails: 6
      duration: "72 hours"
      goal: "Close the sale"
    webinar_post_no_show:
      trigger: "Registered, didn't attend"
      emails: 4
      duration: "72 hours"
      goal: "Watch replay, buy"
    cart_abandonment:
      trigger: "Started checkout, didn't complete"
      emails: 3
      duration: "48 hours"
      goal: "Recover abandoned sale"

  ascension_sequences:
    front_end_to_core:
      trigger: "Purchased front-end + 7 days"
      emails: 7
      duration: "14 days"
      goal: "Ascend to core offer"
    core_to_backend:
      trigger: "Completed core program + 14 days"
      emails: 5
      duration: "21 days"
      goal: "Apply for high-ticket"

  re_engagement_sequences:
    cold_subscriber:
      trigger: "No opens in 30 days"
      emails: 3
      duration: "7 days"
      goal: "Re-engage or clean list"
    win_back:
      trigger: "Former buyer, no purchase in 90 days"
      emails: 4
      duration: "14 days"
      goal: "Win back with new offer"
```

### Step 4: Define Automation Rules
Set the logic that governs sequence transitions.

```yaml
automation_rules:
  rule_1:
    name: "Remove from SOS on purchase"
    trigger: "Purchase tag added"
    action: "Remove from SOS, add to Buyer Welcome"
  rule_2:
    name: "Stop selling after purchase"
    trigger: "Product purchased"
    action: "Remove from sales sequences for that product"
  rule_3:
    name: "Ascension trigger"
    trigger: "Completed onboarding + 7 days"
    action: "Start ascension sequence"
  rule_4:
    name: "Cold subscriber cleanup"
    trigger: "No open in 60 days"
    action: "Move to re-engagement, then remove if no response"
  rule_5:
    name: "High-engagement alert"
    trigger: "Clicked 3+ emails in 7 days"
    action: "Tag as hot lead, priority follow-up"
  rule_6:
    name: "Webinar priority"
    trigger: "Registers for webinar"
    action: "Pause Seinfeld, start webinar sequence"
```

### Step 5: Create the Email Content Calendar
Plan content themes for ongoing emails.

```yaml
content_calendar:
  weekly_rhythm:
    monday: "Motivation/mindset"
    tuesday: "Teaching/framework"
    wednesday: "Story/personal"
    thursday: "Case study/proof"
    friday: "Offer/promotion"
    weekend: "Optional — lifestyle/personal"
  monthly_promotions:
    week_1: "Value content (no hard sell)"
    week_2: "Soft promotion + value"
    week_3: "Launch/promotion week"
    week_4: "Close + value recovery"
```

### Step 6: Define Key Metrics per Sequence
Track performance at the sequence level.

```yaml
sequence_metrics:
  soap_opera_sequence:
    target_open_rate: "35-50%"
    target_click_rate: "5-10%"
    target_conversion: "3-8%"
  seinfeld_daily:
    target_open_rate: "25-35%"
    target_click_rate: "2-5%"
    target_unsubscribe: "<0.3%"
  webinar_sequences:
    target_show_up_rate: "40-55%"
    target_post_webinar_close: "5-15%"
  ascension_sequences:
    target_ascension_rate: "10-20%"
  re_engagement:
    target_reactivation: "10-20%"
    target_clean_list: "Remove 80% non-responders"
```

---

## Output Template
```yaml
output:
  follow_up_funnel:
    total_sequences: 0
    total_emails: 0
    segments: 0
    automation_rules: 0
    entry_points: 0
    sequence_map: ""
    content_calendar: ""
    metrics_dashboard: ""
    estimated_setup_time: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] All entry points have assigned sequences
  - [ ] Segments cover full customer journey (new → buyer → repeat)
  - [ ] No subscriber is ever "orphaned" (stuck without next sequence)
  - [ ] Automation rules prevent conflicting sequences
  - [ ] Buyers are removed from sales sequences for purchased products
  - [ ] Re-engagement exists for cold subscribers
  - [ ] Content calendar provides variety (not all selling)
  - [ ] Metrics targets are set for every sequence
  - [ ] Value Ladder ascension is automated
```

---

## Handoff
- → **brunson-email** for `create-soap-opera-sequence` (BR_EML_001) — build the SOS
- → **brunson-email** for `create-seinfeld-emails` (BR_EML_002) — build daily emails
- → **brunson-funnels** for funnel integration (BR_FUN_003)
- → **brunson-webinar** for `plan-webinar-funnel` (BR_WEB_004) — webinar email integration

---
*Task: BR_EML_003 | Agent: brunson-email | Version: 1.0*
