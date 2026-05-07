# Diagnose Business Model

## Metadata
```yaml
task_id: BR_ADV_002
agent: brunson-advisor
type: diagnostic
complexity: high
estimated_time: 40min
source: "DotCom Secrets, Chapter 1 - The Secret Formula"
```

## Purpose

Apply Russell Brunson's Secret Formula to diagnose a business model and reveal the four critical elements that determine whether a business will succeed or fail online. This diagnostic strips away complexity and forces clarity on WHO you serve, WHERE they congregate, WHAT bait attracts them, and WHAT result you deliver.

> "Every successful business I've been a part of, or that I've consulted with, follows the same simple pattern. I call it The Secret Formula." -- Russell Brunson

## The Framework: The Secret Formula

Brunson's Secret Formula has four questions that must be answered with crystal clarity:

### Question 1: WHO is your dream customer?
Not demographics. Not "everyone." A specific PERSON with a specific PROBLEM who is desperately searching for a solution. You need to know them better than they know themselves.

### Question 2: WHERE are they congregating?
Your dream customers are already gathered somewhere online. Facebook groups, YouTube channels, podcasts, forums, email lists, influencer audiences. You need to identify the exact "watering holes" where they already exist.

### Question 3: WHAT bait will you use to attract them?
The bait is the irresistible offer that pulls them out of their current environment and into YOUR world. This is your lead magnet, your hook, your "dream come true" headline.

### Question 4: WHAT result do you want to give them?
Not your product. Not your service. The RESULT. The transformation. The before-and-after. This is the Value Ladder destination -- where you ultimately want to take them.

### The Value Ladder Connection

The Secret Formula connects directly to the Value Ladder:
```
FREE (Bait)  →  LOW ($)  →  MEDIUM ($$)  →  HIGH ($$$)  →  PREMIUM ($$$$)
Lead Magnet  →  Tripwire →  Core Offer  →  Profit Max  →  Continuity/High-Ticket
```

Each rung provides MORE value at a HIGHER price point, and the Secret Formula determines the entire ladder's architecture.

## Input Required
```yaml
input:
  business_name: ""
  current_offer: "Brief description of what you currently sell"
  target_market: "Who you think your customer is"
  price_points: []
  current_channels: "Where you currently market"
  biggest_challenge: "What's not working right now"
  monthly_revenue: "Current monthly revenue range"
  desired_revenue: "Revenue goal"
```

## Step-by-Step Process

### Step 1: Dream Customer Deep Dive
Interview/analyze to create a vivid customer avatar:

- **Name and story**: Give them a name, a backstory
- **Core desire**: What do they want MORE than anything?
- **Core fear**: What keeps them up at 3am?
- **Failed attempts**: What have they already tried that didn't work?
- **Identity**: How do they see themselves? How do they WANT to see themselves?
- **Language**: What exact words do they use to describe their problem?
- **Sophistication level**: Are they unaware, problem-aware, solution-aware, product-aware, or most-aware?

### Step 2: Congregation Discovery
Map every place the dream customer already gathers:

- **Social platforms**: Which specific groups, pages, hashtags?
- **Content consumption**: Which podcasts, YouTube channels, blogs?
- **Influencers**: Who do they already follow and trust?
- **Communities**: Forums, Slack groups, Discord servers, memberships?
- **Events**: Conferences, meetups, webinars they attend?
- **Email lists**: Whose newsletters are they already on?
- **Search behavior**: What are they Googling right now?

Rank each congregation by: Size, Accessibility, Cost to Reach, Quality of Audience.

### Step 3: Bait Design
Design the perfect lead magnet / hook that would make the dream customer stop scrolling:

- **Hook formula**: "How to [DESIRE] without [FEAR] in [TIMEFRAME]"
- **Curiosity gap**: What would make them NEED to know more?
- **Quick win**: What small result can you deliver immediately?
- **Format**: PDF, video, quiz, challenge, webinar, free trial?
- **Perceived value**: Would they pay $50+ for this if you charged?

### Step 4: Result Mapping
Define the ultimate transformation:

- **Before state**: Specific pain, frustration, limitation
- **After state**: Specific outcome, emotion, capability
- **Vehicle**: What's the unique mechanism/method that creates this result?
- **Proof**: What evidence demonstrates this result is achievable?
- **Timeline**: Realistic timeframe for the transformation

### Step 5: Value Ladder Architecture
Map the complete Value Ladder:

| Rung | Offer | Price | Value Delivered | Purpose |
|------|-------|-------|-----------------|---------|
| Bait | Lead Magnet | Free | Quick win | Attract & qualify |
| Frontend | Tripwire | $7-47 | Partial solution | Convert to buyer |
| Middle | Core Offer | $97-497 | Core transformation | Main revenue |
| Backend | High-Ticket | $997-5000 | Premium result | Profit maximizer |
| Peak | Inner Circle | $5K-25K+ | Done-with/for-you | Lifetime value |

### Step 6: Gap Analysis
Compare current business model against the Secret Formula ideal:

- What's MISSING from the Value Ladder?
- Where is the BIGGEST gap between current and ideal?
- Which rung would have the most IMMEDIATE impact if added?
- Is the business model sustainable or dependent on one offer?

## Output Template
```yaml
secret_formula_diagnosis:
  date: "YYYY-MM-DD"
  business: ""

  question_1_who:
    dream_customer_name: ""
    core_desire: ""
    core_fear: ""
    failed_attempts: []
    identity_current: ""
    identity_desired: ""
    sophistication_level: ""
    customer_language:
      pain_phrases: []
      desire_phrases: []

  question_2_where:
    top_congregations:
      - platform: ""
        specific_location: ""
        audience_size: ""
        accessibility: "easy | medium | hard"
        cost_to_reach: "free | low | medium | high"
        quality: "1-10"
    recommended_primary: ""
    recommended_secondary: ""

  question_3_bait:
    hook_headline: ""
    lead_magnet_type: ""
    lead_magnet_title: ""
    quick_win_delivered: ""
    perceived_value: ""
    curiosity_mechanism: ""

  question_4_result:
    before_state: ""
    after_state: ""
    unique_vehicle: ""
    proof_elements: []
    timeline: ""

  value_ladder:
    current_rungs: []
    recommended_ladder:
      - rung: "bait"
        offer: ""
        price: ""
        purpose: ""
      - rung: "frontend"
        offer: ""
        price: ""
        purpose: ""
      - rung: "middle"
        offer: ""
        price: ""
        purpose: ""
      - rung: "backend"
        offer: ""
        price: ""
        purpose: ""
      - rung: "peak"
        offer: ""
        price: ""
        purpose: ""

  gap_analysis:
    missing_rungs: []
    biggest_gap: ""
    immediate_action: ""
    model_sustainability: "fragile | developing | solid | robust"

  diagnosis_summary:
    business_health: "Critical | Weak | Developing | Strong"
    primary_issue: ""
    top_3_actions:
      - action: ""
        impact: "high | medium | low"
        effort: "high | medium | low"
```

## Quality Gate
- [ ] All 4 Secret Formula questions answered with specificity (no vague answers)
- [ ] Dream customer described with emotional depth, not just demographics
- [ ] At least 5 congregation points identified with ranking
- [ ] Bait/hook designed with specific headline and format
- [ ] Result mapped as clear before/after transformation
- [ ] Complete Value Ladder designed with 4-5 rungs
- [ ] Gap analysis identifies specific missing pieces
- [ ] All recommendations are actionable, not theoretical

## Handoff
Diagnosis feeds into `plan-funnel-hacking.md` (BR_ADV_003) for competitive research, and into `run-secret-formula.md` (BR_CHF_001) for the full chief-level strategic review. Value Ladder architecture feeds into `analyze-funnel-archetype.md` (BR_SWP_002) for funnel type selection.

---
*Task: BR_ADV_002 | Agent: brunson-advisor | Version: 1.0*
