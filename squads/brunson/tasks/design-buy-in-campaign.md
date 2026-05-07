# design-buy-in-campaign

## Metadata
```yaml
task_id: BR_TRF_004
agent: brunson-traffic
type: creation
complexity: high
estimated_time: 60-90min
source: "Traffic Secrets — Chapter 10-14: Buying Your Way In"
```

## Purpose
Design a complete "Buy Your Way In" paid advertising campaign to rapidly fill funnels with qualified traffic. Build a paid traffic system with testing protocols, scaling rules, and optimization rhythms.

> "Buying your way in is the fastest way to scale. Once you have a funnel that converts, you can turn on paid traffic and grow as fast as you want." — Russell Brunson

---

## The Framework: Buying Your Way In

### The Paid Traffic Hierarchy
```
Level 1: PLATFORM ADS (Facebook, YouTube, Google)
  → You pay the platform to show your ads to their users

Level 2: SPONSORSHIPS (Newsletters, Podcasts)
  → You pay content creators to promote you to their audience

Level 3: AFFILIATES (JV Partners)
  → You pay other people a commission to send traffic

Level 4: INTEGRATIONS (Product Placement)
  → You pay to be embedded in other products/services
```

### The Testing Framework
```
$3-5/day per ad × 5-10 ads = $15-50/day testing budget
Run 3-5 days → Analyze → Kill losers → Scale winners
```

---

## Input Required
```yaml
input_fields:
  funnel_url: ""
  offer_name: ""
  offer_price: ""
  target_audience: ""
  monthly_ad_budget: ""
  current_cost_per_lead: ""
  current_cost_per_acquisition: ""
  breakeven_cpa: ""         # Max you can spend to acquire a customer
  customer_ltv: ""
  ad_platforms_experienced: []
  creative_assets_available: []
  dream_100_list: ""        # From BR_TRF_001
  funnel_conversion_rate: ""
```

---

## Step-by-Step Process

### Step 1: Calculate Your Economics
Know your numbers before spending a dollar.

```yaml
ad_economics:
  revenue_per_customer: ""
  cost_of_goods: ""
  gross_profit_per_customer: ""
  target_cpa: ""            # Max cost per acquisition
  target_cpl: ""            # Max cost per lead
  lead_to_customer_rate: ""
  breakeven_epc: ""         # Earnings per click needed
  target_roas: ""           # Return on ad spend (2x, 3x, etc.)
  daily_budget_range:
    minimum: ""
    testing: ""
    scaling: ""
```

**Brunson's Rule:** "Know your numbers. If you know your EPC (Earnings Per Click), you know exactly how much you can pay per click and still be profitable."

### Step 2: Choose Your Primary Ad Platform
Select based on where your audience lives and your creative strengths.

```yaml
platform_selection:
  facebook_instagram:
    audience_present: true/false
    ad_formats: ["Image", "Video", "Carousel", "Reels"]
    strengths: ""
    weaknesses: ""
    recommended_budget: ""
    score: 0                # 1-10
  youtube:
    audience_present: true/false
    ad_formats: ["In-stream", "Discovery", "Shorts"]
    strengths: ""
    weaknesses: ""
    recommended_budget: ""
    score: 0
  google_search:
    audience_present: true/false
    ad_formats: ["Search", "Display", "Performance Max"]
    strengths: ""
    weaknesses: ""
    recommended_budget: ""
    score: 0
  tiktok:
    audience_present: true/false
    ad_formats: ["In-feed", "Spark Ads"]
    strengths: ""
    weaknesses: ""
    recommended_budget: ""
    score: 0
  selected_primary: ""
  selected_secondary: ""
```

### Step 3: Design the Audience Targeting
Build audience targeting layers.

```yaml
audience_targeting:
  cold_audiences:
    interest_targeting:
      - interest: ""
        audience_size: ""
    lookalike_audiences:
      - source: ""          # Email list, purchasers, video viewers
        percentage: ""      # 1%, 2%, 5%
    broad_targeting:
      - demographic: ""
        reason: ""
  warm_audiences:
    website_visitors:
      - timeframe: ""       # Last 7, 30, 90, 180 days
        page_specific: ""
    engagement_audiences:
      - type: ""            # Video viewers, page engagers, etc.
        timeframe: ""
    email_list:
      - segment: ""
        purpose: ""
  hot_audiences:
    cart_abandoners:
      - timeframe: ""
    past_buyers:
      - segment: ""
        upsell_to: ""
```

### Step 4: Create the Ad Campaign Structure
Organize campaigns for testing and scaling.

```yaml
campaign_structure:
  testing_campaign:
    name: "Testing - [Offer] - [Date]"
    objective: ""           # Conversions, Traffic, Leads
    daily_budget: ""
    ad_sets:
      - name: "Audience 1 - [Description]"
        audience: ""
        budget: ""
        ads:
          - name: "Ad A - [Hook type]"
            format: ""
            hook: ""
            creative: ""
          - name: "Ad B - [Hook type]"
            format: ""
            hook: ""
            creative: ""
  scaling_campaign:
    name: "Scale - [Offer] - Winners"
    objective: ""
    daily_budget: ""
    method: ""              # Horizontal (new audiences) or Vertical (increase budget)
  retargeting_campaign:
    name: "Retarget - [Offer] - Warm"
    objective: ""
    daily_budget: ""
    audiences: []
    messaging: ""           # Different from cold traffic ads
```

### Step 5: Design the Creative Testing Protocol
Systematically test ad creatives to find winners.

```yaml
creative_testing:
  testing_variables:
    hooks:
      - hook_1: ""
      - hook_2: ""
      - hook_3: ""
      - hook_4: ""
      - hook_5: ""
    formats:
      - "Static image"
      - "Video (15 sec)"
      - "Video (30 sec)"
      - "Carousel"
      - "UGC-style"
    copy_angles:
      - angle_1: ""
      - angle_2: ""
      - angle_3: ""
  testing_rules:
    minimum_spend_before_decision: ""
    minimum_data_before_decision: ""
    winner_criteria:
      ctr_above: ""
      cpc_below: ""
      cpa_below: ""
    loser_criteria:
      ctr_below: ""
      cpc_above: ""
      no_conversions_after: ""
  weekly_cadence:
    new_ads_to_test: 0
    winners_to_scale: 0
    losers_to_kill: 0
```

### Step 6: Plan Sponsorships and Affiliates
Complement platform ads with direct buys.

```yaml
sponsorships:
  newsletter_sponsorships:
    - newsletter: ""
      audience_size: 0
      cost: ""
      expected_clicks: 0
      expected_cpc: ""
  podcast_sponsorships:
    - podcast: ""
      audience_size: 0
      cost: ""
      read_type: ""         # Host-read, pre-recorded
  affiliate_partnerships:
    - partner: ""
      audience_size: 0
      commission_structure: ""
      expected_volume: 0
```

### Step 7: Create the Scaling Playbook
Define rules for when and how to scale.

```yaml
scaling_playbook:
  scaling_triggers:
    - metric: ""
      threshold: ""
      action: ""
  scaling_methods:
    vertical_scaling:
      description: "Increase budget on winning ads"
      rule: "Increase 20% every 3 days if CPA is stable"
      max_increase: "2x per week"
    horizontal_scaling:
      description: "Duplicate to new audiences"
      rule: "Test winning ads on new audience segments"
      audiences_to_test: []
  budget_rules:
    daily_maximum: ""
    weekly_review: true
    kill_switch: ""         # When to pause everything
  optimization_cadence:
    daily: ["Check spend and CPA", "Pause overspenders"]
    weekly: ["Review all campaigns", "Launch new tests", "Scale winners"]
    monthly: ["Full audit", "Refresh creatives", "Update audiences"]
```

---

## Output Template
```yaml
output:
  buy_in_campaign:
    primary_platform: ""
    monthly_budget: ""
    campaign_structure:
      testing: ""
      scaling: ""
      retargeting: ""
    target_metrics:
      cpl: ""
      cpa: ""
      roas: ""
    creative_testing_plan: ""
    sponsorships_planned: []
    scaling_rules: ""
    launch_date: ""
    first_review_date: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Ad economics calculated with real numbers
  - [ ] Platform selection is justified
  - [ ] Audience targeting covers cold, warm, and hot
  - [ ] Campaign structure separates testing from scaling
  - [ ] Creative testing protocol is systematic
  - [ ] Scaling rules have specific triggers and limits
  - [ ] Budget has kill-switch for poor performance
  - [ ] Retargeting is included for all funnel stages
```

---

## Handoff
- → **brunson-hooks** for `design-ad-hooks` (BR_HKS_002) — create ad hook variations
- → **brunson-copy** for `create-vsl-script` (BR_CPY_001) — if using video ads
- → **brunson-funnels** for `diagnose-funnel-health` (BR_FUN_004) — if conversion is low
- → **brunson-email** for `design-follow-up-funnel` (BR_EML_003) — nurture paid leads

---
*Task: BR_TRF_004 | Agent: brunson-traffic | Version: 1.0*
