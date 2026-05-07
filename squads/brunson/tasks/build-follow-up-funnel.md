# build-follow-up-funnel

## Metadata
```yaml
task_id: BR_EML_003
agent: brunson-email
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets — Chapter 4: Follow-Up Funnels + Traffic Secrets — Follow-Up Funnels"
```

## Purpose
Build a complete automated follow-up funnel that converts leads into customers through multi-channel sequences triggered by specific actions. The follow-up funnel is where 80% of revenue is generated — most people don't buy on the first touch.

> "The fortune is in the follow-up. Most of your sales will come from people who said 'not yet' the first time." — Russell Brunson

---

## The Framework: Follow-Up Funnel Architecture

A follow-up funnel is not just an email sequence. It's a multi-channel, behavior-triggered automation system that delivers the right message at the right time based on what the prospect DID or DIDN'T do.

### Follow-Up Funnel Layers

```
LAYER 1: SOAP OPERA SEQUENCE (Days 1-5)
  New lead → 5-email story sequence → First offer

LAYER 2: SEINFELD EMAILS (Day 6+)
  Daily broadcast → Relationship building → Recurring offers

LAYER 3: BEHAVIOR-TRIGGERED SEQUENCES
  Opened email but didn't click → Re-engagement
  Clicked but didn't buy → Cart abandonment
  Bought → Ascension sequence (upsell to next tier)
  Didn't open 5 emails → Re-engagement or removal

LAYER 4: MULTI-CHANNEL FOLLOW-UP
  Email + SMS + Retargeting Ads + Direct Mail (for high-value)
```

---

## Input Required
```yaml
input_fields:
  value_ladder: ""              # Complete value ladder reference
  front_end_offer: ""
  core_offer: ""
  high_ticket_offer: ""
  soap_opera_sequence: ""       # Reference to existing sequence
  seinfeld_emails: ""           # Reference to existing templates
  automation_tool: ""           # ActiveCampaign, Infusionsoft, ClickFunnels
  sms_enabled: true/false
  retargeting_enabled: true/false
```

---

## Step-by-Step Process

### Step 1: Map All Follow-Up Triggers
Identify every action (or inaction) that should trigger a follow-up.

```yaml
trigger_map:
  opt_in:
    trigger: "Subscribes to list"
    sequence: "Soap Opera Sequence (5 emails)"
    timing: "Immediately"
  soap_opera_complete:
    trigger: "Completed Soap Opera Sequence without buying"
    sequence: "Seinfeld Emails (daily broadcast)"
    timing: "Day 6"
  clicked_not_bought:
    trigger: "Clicked offer link but didn't purchase"
    sequence: "Cart abandonment sequence (3 emails)"
    timing: "1 hour after click"
  purchased_front_end:
    trigger: "Bought front-end offer"
    sequence: "Ascension sequence to core offer"
    timing: "3-7 days after purchase"
  purchased_core:
    trigger: "Bought core offer"
    sequence: "High-ticket application invitation"
    timing: "After course completion or 30 days"
  inactive:
    trigger: "No email opens in 30 days"
    sequence: "Re-engagement sequence (3 emails)"
    timing: "Day 31"
  re_engaged:
    trigger: "Opened re-engagement email"
    sequence: "Return to Seinfeld Emails"
    timing: "Immediately"
  still_inactive:
    trigger: "No response to re-engagement"
    sequence: "Remove from active list"
    timing: "After re-engagement sequence"
```

### Step 2: Build the Cart Abandonment Sequence
The highest-ROI sequence after the Soap Opera Sequence.

```yaml
cart_abandonment:
  email_1_1hr:
    subject: "Did something go wrong?"
    content: "Helpful — assume tech issue, provide link"
    tone: "Concerned, not salesy"
  email_2_24hr:
    subject: "Still thinking about it?"
    content: "Address top objection + testimonial"
    tone: "Helpful + proof"
  email_3_48hr:
    subject: "Last chance — [bonus] expires tonight"
    content: "Urgency + limited-time bonus"
    tone: "Urgent but genuine"
```

### Step 3: Build the Ascension Sequence
Move buyers UP the value ladder automatically.

```yaml
ascension_sequence:
  front_end_to_core:
    delay: "3-7 days after purchase"
    emails:
      email_1:
        subject: "How's [front-end product] working for you?"
        content: "Check-in + quick win + hint at more"
      email_2:
        subject: "The next step to [bigger result]"
        content: "Introduce core offer as natural next step"
      email_3:
        subject: "[Case study] went from [front-end result] to [core result]"
        content: "Proof of what's possible + CTA"
      email_4:
        subject: "Invitation to [core offer name]"
        content: "Full offer presentation + urgency"

  core_to_high_ticket:
    delay: "After course completion or 30 days"
    emails:
      email_1:
        subject: "Congratulations on completing [core offer]"
        content: "Celebrate + introduce next level"
      email_2:
        subject: "Want to go deeper? Here's what [graduates] are doing..."
        content: "Case studies of high-ticket clients"
      email_3:
        subject: "Application open for [high-ticket offer]"
        content: "Exclusive invitation + application link"
```

### Step 4: Build the Re-Engagement Sequence
Win back inactive subscribers before removing them.

```yaml
re_engagement:
  email_1:
    subject: "Are you still there?"
    content: "Simple check-in, ask if they want to stay"
  email_2:
    subject: "I'm cleaning my list — should I remove you?"
    content: "Loss aversion — they might miss out"
  email_3:
    subject: "Final notice — you'll be removed tomorrow"
    content: "Last chance to stay subscribed"
  action_if_no_response: "Move to inactive list / remove"
```

### Step 5: Add Multi-Channel Touchpoints
Layer additional channels on top of email for higher conversion.

```yaml
multi_channel:
  sms:
    triggers:
      - "Cart abandonment (1hr after)"
      - "Webinar reminder (1hr before)"
      - "Flash sale announcement"
    frequency: "Max 2-3 SMS per week"
  retargeting_ads:
    triggers:
      - "Visited sales page but didn't buy"
      - "Watched webinar but didn't purchase"
      - "Clicked email link but didn't convert"
    platforms: ["Facebook", "Instagram", "YouTube"]
    duration: "7-14 days"
  direct_mail:
    triggers:
      - "High-ticket prospect that didn't close"
      - "Customer win-back after 90 days inactive"
    frequency: "Only for high-value segments"
```

### Step 6: Create the Automation Flowchart
Map the complete system visually for implementation.

```yaml
automation_flow:
  entry_point: "Opt-in"
  path_1: "Opt-in → Soap Opera → [No Purchase] → Seinfeld → [No Purchase] → Re-engagement"
  path_2: "Opt-in → Soap Opera → [Purchase] → Ascension → Core Offer"
  path_3: "Sales Page Visit → [No Purchase] → Cart Abandonment → [No Purchase] → Seinfeld"
  path_4: "Core Offer Purchase → [Complete] → High-Ticket Invitation"
  path_5: "Inactive 30 days → Re-engagement → [No Response] → Remove"
```

---

## Output Template
```yaml
output:
  follow_up_funnel:
    total_sequences: ""
    total_emails: ""
    sequences:
      soap_opera: "5 emails (days 1-5)"
      seinfeld: "daily broadcast (day 6+)"
      cart_abandonment: "3 emails"
      ascension_fe_to_core: "4 emails"
      ascension_core_to_ht: "3 emails"
      re_engagement: "3 emails"
    multi_channel:
      sms: true/false
      retargeting: true/false
      direct_mail: true/false
    automation_tool: ""
    trigger_count: ""
    estimated_revenue_lift: "40-80% over email-only"
```

---

## Quality Gate
```yaml
quality:
  - [ ] All behavior triggers are mapped with specific sequences
  - [ ] Cart abandonment sequence has 3 emails with escalating urgency
  - [ ] Ascension sequences align with the value ladder tiers
  - [ ] Re-engagement sequence gives 3 chances before removal
  - [ ] Multi-channel touchpoints don't overwhelm (frequency caps)
  - [ ] Automation flowchart covers all possible paths
  - [ ] Timing between emails is appropriate (not too fast, not too slow)
  - [ ] Each sequence has clear entry and exit conditions
```

---

## Handoff
- -> **brunson-email** for `write-soap-opera-sequence` (BR_EML_001) — create the entry sequence
- -> **brunson-email** for `write-seinfeld-emails` (BR_EML_002) — create the daily system
- -> **brunson-email** for `design-email-segmentation` (BR_EML_004) — segment for targeting

---
*Task: BR_EML_003 | Agent: brunson-email | Version: 1.0*
