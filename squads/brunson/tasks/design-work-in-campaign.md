# design-work-in-campaign

## Metadata
```yaml
task_id: BR_TRF_003
agent: brunson-traffic
type: creation
complexity: medium
estimated_time: 45-60min
source: "Traffic Secrets — Chapter 7-9: Working Your Way In"
```

## Purpose
Design a complete "Work Your Way In" organic campaign to earn attention from your Dream 100 without spending money on ads. Build relationships, provide value, and earn your way into other people's audiences.

> "Working your way in is slower but more powerful. When someone introduces you to their audience, their trust transfers to you instantly." — Russell Brunson

---

## The Framework: Work Your Way In

### The 3 Phases of Working In
1. **DIG YOUR WELL** — Build relationships before you need them
2. **PROVIDE VALUE** — Give before you ask
3. **COLLABORATE** — Create win-win opportunities

### Working In vs. Buying In

| Working In | Buying In |
|------------|-----------|
| Free (time investment) | Costs money |
| Slower results | Faster results |
| Higher trust transfer | Lower trust transfer |
| Long-lasting relationships | Transactional |
| Compounds over time | Stops when you stop paying |

---

## Input Required
```yaml
input_fields:
  dream_100_list: ""        # From BR_TRF_001
  your_expertise: ""
  content_assets: []        # What can you offer?
  available_time: ""        # Hours/week for outreach
  current_platform: ""
  audience_size: 0
  unique_value_proposition: ""
  collaboration_ideas: []
  past_relationships: []    # People you already know
```

---

## Step-by-Step Process

### Step 1: Select Your Top 10 Targets
From the Dream 100, pick the 10 most strategic to start with.

```yaml
top_10_targets:
  target_1:
    name: ""
    platform: ""
    audience_size: 0
    overlap_with_your_audience: ""
    relationship_status: ""   # Cold, Warm, Connected
    value_you_can_provide: ""
    collaboration_angle: ""
    priority_score: 0         # 1-10
  # Repeat for all 10
```

**Selection Criteria:**
- High audience overlap with your dream customer
- Accessible (not impossible to reach)
- Clear collaboration angle
- Mutual benefit potential

### Step 2: Design the Relationship-Building Sequence
Brunson's "Dig Your Well Before You're Thirsty" approach.

```yaml
relationship_sequence:
  week_1_2:
    actions:
      - follow_all_platforms: true
      - consume_their_content: true
      - engage_meaningfully: true     # Comments, shares, reactions
      - take_notes: "What do they care about? What do they promote?"
    daily_time: "15 min per target"
  week_3_4:
    actions:
      - create_content_about_them: "" # Review their book, reference their work
      - share_their_content: true
      - tag_them_when_relevant: true
      - attend_their_events: true
    daily_time: "15 min per target"
  week_5_6:
    actions:
      - direct_message_with_value: "" # Share something useful, no ask
      - offer_testimonial: true
      - introduce_them_to_someone: true
      - send_gift_or_resource: ""
    daily_time: "20 min per target"
  week_7_8:
    actions:
      - make_collaboration_ask: ""    # Specific, low-effort for them
      - propose_mutual_benefit: ""
      - be_specific_and_easy: true
    daily_time: "20 min per target"
```

### Step 3: Create Value Assets to Offer
Build things you can GIVE to your Dream 100 targets.

```yaml
value_assets:
  content_assets:
    - type: ""              # Blog post, video, graphic, research
      topic: ""
      value_to_target: ""
      effort_to_create: ""
  service_assets:
    - type: ""              # Consultation, audit, introduction
      value_to_target: ""
      time_investment: ""
  promotional_assets:
    - type: ""              # Testimonial, review, referral
      value_to_target: ""
      effort: ""
  collaboration_assets:
    - type: ""              # Interview, co-created content, summit
      value_to_both: ""
      format: ""
```

### Step 4: Design Outreach Templates
Create message templates for each phase.

```yaml
outreach_templates:
  initial_engagement:
    platform: ""
    message: ""
    goal: "Get on their radar"
  value_message:
    platform: ""
    message: ""
    goal: "Provide unexpected value"
  collaboration_ask:
    platform: ""
    message: ""
    goal: "Propose win-win collaboration"
  follow_up:
    platform: ""
    message: ""
    goal: "Keep relationship alive"
```

**Brunson's Outreach Rule:** "Lead with value. Never lead with an ask. Make it about THEM, not you."

### Step 5: Plan Guest Appearances
Design your strategy for appearing on others' platforms.

```yaml
guest_strategy:
  podcast_appearances:
    target: ""              # X appearances per month
    pitch_template: ""
    topics_you_can_speak_on: []
    unique_angles: []
    one_sheet_url: ""       # Your speaker/guest one-sheet
  guest_posts:
    target: ""
    publications: []
    topics: []
  live_collaborations:
    type: ""                # IG Live, YouTube collab, webinar swap
    targets: []
    format: ""
  summit_speaking:
    available: true/false
    topics: []
    past_experience: []
```

### Step 6: Set Up Tracking
Track relationship progress and results.

```yaml
relationship_tracking:
  crm_or_spreadsheet: ""
  fields_to_track:
    - name: ""
    - relationship_stage: "" # Cold/Warm/Connected/Collaborating
    - last_interaction: ""
    - next_action: ""
    - value_provided: ""
    - collaborations_done: []
    - traffic_generated: 0
    - leads_generated: 0
  review_cadence: "weekly"
```

### Step 7: Create the 90-Day Campaign Calendar

```yaml
campaign_calendar:
  month_1:
    focus: "Build relationships with Top 10"
    weekly_actions:
      - "Engage with 10 Dream 100 daily"
      - "Create 1 value asset per week"
      - "Send 3 value DMs per week"
    milestone: "All 10 know who you are"
  month_2:
    focus: "Deepen relationships, first collaborations"
    weekly_actions:
      - "Continue engagement"
      - "Pitch 5 podcast appearances"
      - "Propose 2 collaborations"
    milestone: "3+ collaborations scheduled"
  month_3:
    focus: "Execute collaborations, expand to next 10"
    weekly_actions:
      - "Execute collaborations"
      - "Start relationship with next 10 targets"
      - "Leverage results for more collaborations"
    milestone: "5+ collaborations completed"
```

---

## Output Template
```yaml
output:
  work_in_campaign:
    top_10_targets: []
    relationship_timeline: "8 weeks"
    value_assets_created: []
    collaborations_planned: []
    guest_appearances_target: ""
    90_day_calendar_summary: ""
    expected_results:
      new_relationships: 0
      collaborations: 0
      traffic_generated: 0
      leads_generated: 0
```

---

## Quality Gate
```yaml
quality:
  - [ ] Top 10 targets are strategic and accessible
  - [ ] Relationship sequence is gradual (not rushing to ask)
  - [ ] Value assets are genuinely useful (not thinly-veiled pitches)
  - [ ] Outreach templates lead with value
  - [ ] Guest appearance strategy is specific
  - [ ] Tracking system is set up
  - [ ] 90-day calendar is realistic with available time
  - [ ] Every interaction provides value before asking
```

---

## Handoff
- → **brunson-traffic** for `design-buy-in-campaign` (BR_TRF_004) — complement with paid
- → **brunson-hooks** for `create-hook-library` (BR_HKS_001) — hooks for guest appearances
- → **brunson-copy** for `build-attractive-character` (BR_CPY_003) — strengthen your persona

---
*Task: BR_TRF_003 | Agent: brunson-traffic | Version: 1.0*
