# plan-traffic-strategy

## Metadata
```yaml
task_id: BR_TRF_002
agent: brunson-traffic
type: creation
complexity: high
estimated_time: 60-90min
source: "Traffic Secrets — Chapter 1: The Traffic Framework"
```

## Purpose
Plan a complete traffic strategy combining organic (earned) and paid (bought) traffic sources, with clear daily, weekly, and monthly execution rhythms. Build a predictable system for filling your funnels with qualified traffic.

> "Traffic is people. They're not numbers on a dashboard. They're real humans gathered in specific places online. Your job is to find them and bring them to your funnels." — Russell Brunson

---

## The Framework: The Traffic Triad

Brunson identifies three types of traffic, and a complete strategy uses all three:

### The Three Types of Traffic
```
┌─────────────────────────────────────────────────────────┐
│                   TRAFFIC TRIAD                          │
├──────────────────┬──────────────────┬────────────────────┤
│  TRAFFIC YOU     │  TRAFFIC YOU     │  TRAFFIC YOU       │
│  EARN            │  BUY             │  CONTROL           │
│                  │                  │                     │
│  • SEO           │  • Facebook Ads  │  • Email List      │
│  • Social Posts  │  • Google Ads    │  • SMS List        │
│  • Podcast       │  • YouTube Ads   │  • Messenger       │
│  • Guest Posts   │  • Sponsorships  │  • Push Notifs     │
│  • PR            │  • Affiliate     │  • Retargeting     │
│                  │                  │                     │
│  SLOW but FREE   │  FAST but COSTS  │  YOURS FOREVER     │
└──────────────────┴──────────────────┴────────────────────┘
```

### The Master Strategy
1. **BUY traffic** to get immediate results
2. **EARN traffic** to reduce dependence on paid
3. **Convert all traffic to traffic you CONTROL** (email list)

---

## Input Required
```yaml
input_fields:
  business_name: ""
  funnel_urls: []
  target_audience: ""
  monthly_traffic_budget: ""
  current_traffic_sources: []
  current_email_list_size: 0
  content_creation_capacity: "" # Hours/week for content
  primary_platform: ""
  secondary_platforms: []
  dream_100_list: ""        # From BR_TRF_001
  geographic_targets: []
  revenue_goal: ""
```

---

## Step-by-Step Process

### Step 1: Audit Current Traffic
Understand where you stand before planning.

```yaml
traffic_audit:
  current_sources:
    organic_search:
      monthly_visitors: 0
      top_keywords: []
      trend: ""             # Growing/Stable/Declining
    social_media:
      platform_1:
        name: ""
        followers: 0
        engagement_rate: ""
        monthly_clicks: 0
      platform_2:
        name: ""
        followers: 0
        engagement_rate: ""
        monthly_clicks: 0
    paid_ads:
      platform: ""
      monthly_spend: ""
      cost_per_click: ""
      conversion_rate: ""
    email:
      list_size: 0
      open_rate: ""
      click_rate: ""
      monthly_clicks: 0
    referral:
      sources: []
      monthly_visitors: 0
  total_monthly_visitors: 0
  cost_per_visitor: "$0"
  visitors_to_leads_rate: "0%"
```

### Step 2: Choose Your Primary Platform
Pick ONE platform to master first. Brunson's principle: "Master one before adding another."

```yaml
platform_selection:
  criteria:
    where_is_audience: ""
    platform_strengths: ""
    your_content_strength: "" # Video, writing, audio, visual
    competition_level: ""
    growth_potential: ""
  selected_primary: ""
  reason: ""
  commitment: ""            # Daily action on this platform
  secondary_platform: ""
  tertiary_platform: ""
```

### Step 3: Design the Earned Traffic Plan
Create content that attracts your dream customers organically.

```yaml
earned_traffic_plan:
  content_strategy:
    primary_content_type: "" # Video, blog, podcast, social
    publishing_frequency: "" # Daily, 3x/week, weekly
    content_pillars:
      - pillar: ""
        subtopics: []
      - pillar: ""
        subtopics: []
      - pillar: ""
        subtopics: []
  distribution_rhythm:
    daily:
      - action: ""
        platform: ""
        time_required: ""
    weekly:
      - action: ""
        platform: ""
        time_required: ""
    monthly:
      - action: ""
        platform: ""
        time_required: ""
  guest_appearances:
    target: ""              # X podcast appearances per month
    dream_100_outreach: ""  # X outreach emails per week
  seo_strategy:
    target_keywords: []
    content_plan: ""
    backlink_strategy: ""
```

### Step 4: Design the Paid Traffic Plan
Create a paid advertising strategy to fill funnels immediately.

```yaml
paid_traffic_plan:
  budget_allocation:
    total_monthly: ""
    testing_budget: ""      # For new ads/audiences
    scaling_budget: ""      # For proven winners
    retargeting_budget: ""  # For warm audiences
  platform_mix:
    platform_1:
      name: ""
      percentage_of_budget: ""
      campaign_types: []
      target_audiences: []
      target_cpc: ""
      target_cpa: ""
    platform_2:
      name: ""
      percentage_of_budget: ""
      campaign_types: []
      target_audiences: []
  testing_protocol:
    new_ads_per_week: 0
    test_budget_per_ad: ""
    success_criteria: ""    # CPC, CTR, CPA threshold
    scaling_criteria: ""    # When to increase spend
    kill_criteria: ""       # When to stop an ad
```

### Step 5: Design the List-Building System
Convert ALL traffic into traffic you control.

```yaml
list_building:
  lead_magnets:
    - name: ""
      type: ""
      target_audience: ""
      opt_in_page_url: ""
      expected_conversion: ""
  conversion_points:
    - location: ""          # Blog, social, YouTube, etc.
      mechanism: ""         # Content upgrade, link in bio, etc.
      cta: ""
  retargeting_lists:
    - audience: ""
      source: ""            # Website visitors, video viewers, etc.
      ad_type: ""
      message: ""
  list_growth_target:
    monthly: 0
    quarterly: 0
    annual: 0
```

### Step 6: Create the Daily Traffic Routine
Define the exact daily actions that drive traffic.

```yaml
daily_routine:
  morning_block:            # 30-60 min
    - task: ""
      duration: ""
      platform: ""
  content_block:            # 60-120 min
    - task: ""
      duration: ""
  engagement_block:         # 30-60 min
    - task: ""
      duration: ""
      platform: ""
  ad_management:            # 15-30 min
    - task: ""
      duration: ""
  weekly_review:
    - task: ""
      day: ""
      duration: ""
```

### Step 7: Set KPIs and Tracking
Define success metrics for the traffic strategy.

```yaml
traffic_kpis:
  daily:
    - metric: ""
      target: ""
  weekly:
    - metric: ""
      target: ""
  monthly:
    - metric: ""
      target: ""
  quarterly:
    - metric: ""
      target: ""
  tracking_tools:
    - tool: ""
      purpose: ""
```

---

## Output Template
```yaml
output:
  traffic_strategy:
    primary_platform: ""
    monthly_budget: ""
    earned_traffic_plan: ""
    paid_traffic_plan: ""
    list_building_target: ""
    daily_routine_summary: ""
    kpis:
      monthly_visitors_target: 0
      monthly_leads_target: 0
      cost_per_lead_target: ""
      list_growth_target: 0
    90_day_milestones:
      month_1: ""
      month_2: ""
      month_3: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] All three traffic types covered (earned, bought, controlled)
  - [ ] Primary platform selected with clear commitment
  - [ ] Daily routine is realistic and specific
  - [ ] Paid strategy has testing and scaling protocols
  - [ ] List building is integrated into every traffic source
  - [ ] KPIs are measurable and tracked
  - [ ] Budget allocation is strategic (not random)
  - [ ] 90-day milestones are achievable
```

---

## Handoff
- → **brunson-traffic** for `design-work-in-campaign` (BR_TRF_003) — execute organic plan
- → **brunson-traffic** for `design-buy-in-campaign` (BR_TRF_004) — execute paid plan
- → **brunson-hooks** for `create-hook-library` (BR_HKS_001) — create hooks for content
- → **brunson-email** for `design-follow-up-funnel` (BR_EML_003) — nurture traffic you control

---
*Task: BR_TRF_002 | Agent: brunson-traffic | Version: 1.0*
