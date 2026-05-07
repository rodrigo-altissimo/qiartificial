# build-dream-100-list

## Metadata
```yaml
task_id: BR_TRF_001
agent: brunson-traffic
type: creation
complexity: medium
estimated_time: 60-90min
source: "Traffic Secrets — Chapter 2-3: The Dream 100"
```

## Purpose
Build a comprehensive Dream 100 list — the 100 people, platforms, podcasts, and communities that already have YOUR dream customers gathered. Instead of finding customers one by one, you tap into existing congregations.

> "Your dream customers already exist. They're gathered somewhere right now, following someone, reading something, belonging to a group. Your job is to find those congregations." — Russell Brunson

---

## The Framework: The Dream 100

### The Dream 100 Concept
Instead of trying to reach millions of random people, identify the 100 specific individuals, platforms, and communities that already have concentrated audiences of your ideal customers. Then systematically work your way in or buy your way in.

### Dream 100 Categories

| Category | Description | Example |
|----------|-------------|---------|
| People | Influencers, thought leaders, creators | Industry podcasters, YouTubers |
| Platforms | Websites, forums, apps where they gather | Specific subreddits, Facebook groups |
| Podcasts | Shows your audience listens to | Top 20 podcasts in niche |
| Publications | Media they read/watch | Industry blogs, newsletters |
| Events | Conferences, masterminds, meetups | Annual industry events |
| Communities | Groups they belong to | Facebook groups, Slack channels |

---

## Input Required
```yaml
input_fields:
  target_audience: ""
  niche_market: ""
  audience_demographics: ""
  audience_psychographics: ""
  current_network: []       # People you already know
  competitors: []
  budget_for_outreach: ""
  your_platform: ""         # Where you create content
  products_to_promote: []
  geographic_focus: ""      # Global, US, specific market
```

---

## Step-by-Step Process

### Step 1: Define Your Dream Customer
Be precise about WHO you are trying to reach.

```yaml
dream_customer_profile:
  demographics:
    age_range: ""
    gender: ""
    location: ""
    income_level: ""
    occupation: ""
  psychographics:
    interests: []
    values: []
    fears: []
    aspirations: []
    media_habits: []
  online_behavior:
    platforms_used: []
    content_consumed: []
    influencers_followed: []
    groups_joined: []
    podcasts_listened: []
    newsletters_subscribed: []
```

### Step 2: Research the Dream 100 People
Find individuals who have your dream customer's attention.

```yaml
dream_100_people:
  tier_1_whales:            # Major influencers (100K+ followers)
    - name: ""
      platform: ""
      audience_size: 0
      relevance_score: 0    # 1-10
      accessibility: ""     # Easy/Medium/Hard to reach
      collaboration_angle: "" # How could you work together?
    - name: ""
      platform: ""
      audience_size: 0
      relevance_score: 0
      accessibility: ""
      collaboration_angle: ""
  tier_2_dolphins:          # Mid-tier (10K-100K)
    - name: ""
      platform: ""
      audience_size: 0
      relevance_score: 0
      accessibility: ""
      collaboration_angle: ""
  tier_3_fish:              # Micro-influencers (1K-10K)
    - name: ""
      platform: ""
      audience_size: 0
      relevance_score: 0
      accessibility: ""
      collaboration_angle: ""
```

### Step 3: Research Dream 100 Platforms & Communities
Find where your dream customers congregate.

```yaml
dream_100_platforms:
  facebook_groups:
    - name: ""
      members: 0
      activity_level: ""    # High/Medium/Low
      rules_and_culture: ""
  subreddits:
    - name: ""
      members: 0
      relevance: ""
  linkedin_groups:
    - name: ""
      members: 0
  forums:
    - name: ""
      url: ""
      activity: ""
  slack_discord:
    - name: ""
      type: ""
      members: 0
  other_communities:
    - name: ""
      type: ""
      size: 0
```

### Step 4: Research Dream 100 Podcasts & Publications
Find media your dream customer consumes.

```yaml
dream_100_media:
  podcasts:
    - name: ""
      host: ""
      audience_size: ""
      guest_application: "" # URL or process
      relevance: 0          # 1-10
    - name: ""
      host: ""
      audience_size: ""
      guest_application: ""
      relevance: 0
  newsletters:
    - name: ""
      author: ""
      subscribers: ""
      sponsorship_available: true/false
      sponsorship_cost: ""
  youtube_channels:
    - name: ""
      subscribers: 0
      collab_potential: ""
  blogs_publications:
    - name: ""
      traffic: ""
      guest_post_accepted: true/false
```

### Step 5: Research Dream 100 Events
Find events where your dream customers gather in person.

```yaml
dream_100_events:
  conferences:
    - name: ""
      location: ""
      dates: ""
      attendees: 0
      speaking_opportunity: true/false
      sponsorship_cost: ""
  masterminds:
    - name: ""
      organizer: ""
      cost: ""
      size: 0
  meetups:
    - name: ""
      location: ""
      frequency: ""
      size: 0
```

### Step 6: Score and Prioritize
Rank your Dream 100 by opportunity score.

```yaml
dream_100_ranking:
  scoring_criteria:
    audience_size_weight: 30
    relevance_weight: 30
    accessibility_weight: 20
    collaboration_potential_weight: 20
  top_25:
    - rank: 1
      name: ""
      type: ""              # Person/Platform/Podcast/Event
      total_score: 0
      first_move: ""        # What's your first action?
    - rank: 2
      name: ""
      type: ""
      total_score: 0
      first_move: ""
```

### Step 7: Create the Outreach Plan
Define your strategy for engaging each tier.

```yaml
outreach_plan:
  work_your_way_in:         # Free strategies (content, value, relationships)
    daily_actions:
      - action: ""
        time_investment: ""
      - action: ""
        time_investment: ""
    weekly_actions:
      - action: ""
        time_investment: ""
    monthly_actions:
      - action: ""
        time_investment: ""
  buy_your_way_in:          # Paid strategies (ads, sponsorships, affiliates)
    immediate_buys:
      - opportunity: ""
        cost: ""
        expected_roi: ""
    quarterly_buys:
      - opportunity: ""
        cost: ""
        expected_roi: ""
```

---

## Output Template
```yaml
output:
  dream_100:
    total_entries: 0
    breakdown:
      people: 0
      platforms: 0
      podcasts: 0
      publications: 0
      events: 0
    top_10_priorities:
      - name: ""
        type: ""
        first_action: ""
    outreach_timeline: ""
    estimated_reach: 0
    budget_required: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] At least 100 entries across all categories
  - [ ] Each entry has relevance score and accessibility rating
  - [ ] All three tiers represented (whales, dolphins, fish)
  - [ ] Outreach plan has both free and paid strategies
  - [ ] Top 25 have specific first-move actions
  - [ ] Dream customer profile is specific (not generic)
  - [ ] Scoring criteria are applied consistently
  - [ ] Timeline for outreach is realistic
```

---

## Handoff
- → **brunson-traffic** for `design-work-in-campaign` (BR_TRF_003) — organic outreach
- → **brunson-traffic** for `design-buy-in-campaign` (BR_TRF_004) — paid outreach
- → **brunson-hooks** for `design-ad-hooks` (BR_HKS_002) — create hooks for ads
- → **brunson-email** for outreach email sequences

---
*Task: BR_TRF_001 | Agent: brunson-traffic | Version: 1.0*
