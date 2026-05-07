# Analyze and Recommend Funnel Archetype

## Metadata
```yaml
task_id: BR_SWP_002
agent: brunson-swipe
type: analysis
complexity: medium
estimated_time: 30min
source: "DotCom Secrets, Chapter 5-6 - The Seven Funnels"
```

## Purpose

Analyze the business model, audience, and offer to recommend the ideal funnel archetype from Brunson's proven funnel types. Choosing the wrong funnel type is one of the most expensive mistakes in online marketing -- you can have perfect copy and perfect traffic, but if the FUNNEL TYPE doesn't match your offer and audience, it will underperform. This task ensures you build the right funnel for your situation.

> "The biggest mistake I see people make is building the wrong type of funnel. A webinar funnel for a $7 product or a squeeze page for a $5,000 offer -- the mismatch kills the conversion." -- Russell Brunson

## The Framework: Brunson's Funnel Archetypes

### The 7 Core Funnel Types

| # | Funnel Type | Price Range | Ideal For | Complexity |
|---|-------------|-------------|-----------|------------|
| 1 | Lead Squeeze | Free (lead gen) | Building list, lead generation | Low |
| 2 | Tripwire / SLO | $1-47 | Converting leads to buyers | Low |
| 3 | Free + Shipping | $7-12 (book) | Physical products, authority building | Medium |
| 4 | Webinar | $297-2,000 | Courses, coaching, consulting | High |
| 5 | Product Launch | $97-2,000 | New product, event-driven sales | High |
| 6 | High-Ticket App | $3,000-25,000+ | Coaching, done-for-you, consulting | Medium |
| 7 | Continuity | $27-297/mo | Memberships, SaaS, recurring | Medium |

### The Funnel Selection Matrix

```
PRICE POINT     │  AUDIENCE TEMP  │  BEST FUNNEL
────────────────┼─────────────────┼──────────────────
$0 (lead gen)   │  Cold           │  Lead Squeeze
$1-47           │  Cold/Warm      │  Tripwire / SLO
$7-12 + ship    │  Cold           │  Free + Shipping
$97-497         │  Warm           │  Self-Liquidating Offer
$297-2,000      │  Cold/Warm      │  Webinar
$1,000-2,000    │  Warm/Hot       │  Product Launch
$3,000+         │  Warm/Hot       │  High-Ticket Application
$27-297/mo      │  Hot (existing) │  Continuity
```

## Input Required
```yaml
input:
  business:
    name: ""
    niche: ""
    business_model: "info product | physical product | service | SaaS | coaching"
    years_in_business: 0
    current_revenue: ""

  offer:
    primary_offer: ""
    price_point: 0
    value_proposition: ""
    delivery_method: "digital | physical | service | hybrid"
    fulfillment_complexity: "low | medium | high"

  audience:
    size: "none | small (<1K) | medium (1K-10K) | large (10K+)"
    awareness_level: "unaware | problem-aware | solution-aware | product-aware"
    traffic_temperature: "cold | warm | hot | mixed"
    buying_sophistication: "beginner | intermediate | experienced"

  current_funnel:
    has_funnel: false
    current_type: ""
    current_results: ""
    main_problem: ""

  goals:
    primary_goal: "lead gen | buyer conversion | revenue | authority | scale"
    monthly_revenue_target: 0
    timeline: ""
```

## Step-by-Step Process

### Step 1: Analyze the Offer-Audience Fit
Match the offer characteristics to the audience:

**Offer Complexity Assessment:**
- Simple (can be explained in <5 minutes) → Shorter funnels
- Moderate (needs 15-30 minutes to explain) → Medium funnels
- Complex (needs 45-90 minutes to explain) → Webinar/application funnels

**Purchase Decision Type:**
- Impulse ($1-47) → Direct response, quick pages
- Considered ($47-497) → More education needed, stories + proof
- Major ($497-2,000) → Significant education, webinar/event
- Investment ($2,000+) → Relationship required, application + call

**Trust Requirement:**
- Low trust needed (known brand, proven product) → Shorter funnels
- Medium trust needed (new to audience) → Story-heavy funnels
- High trust needed (high price, new category) → Multi-step funnels

### Step 2: Score Each Funnel Archetype
Rate each funnel type (1-10) against the business:

```
Funnel Type     │ Offer Fit │ Audience Fit │ Goal Fit │ Complexity Fit │ TOTAL
────────────────┼───────────┼──────────────┼──────────┼────────────────┼──────
Lead Squeeze    │    /10    │     /10      │   /10    │     /10        │  /40
Tripwire / SLO  │    /10    │     /10      │   /10    │     /10        │  /40
Free + Shipping │    /10    │     /10      │   /10    │     /10        │  /40
Webinar         │    /10    │     /10      │   /10    │     /10        │  /40
Product Launch  │    /10    │     /10      │   /10    │     /10        │  /40
High-Ticket App │    /10    │     /10      │   /10    │     /10        │  /40
Continuity      │    /10    │     /10      │   /10    │     /10        │  /40
```

### Step 3: Deep-Dive on Top 2-3 Archetypes
For the highest-scoring funnels, provide detailed analysis:

**For each recommended funnel:**
```
Funnel Type: [Name]
Score: [X/40]

Why This Fits:
- [Specific reason related to offer]
- [Specific reason related to audience]
- [Specific reason related to goals]

Page Sequence:
1. [Page 1] - Purpose
2. [Page 2] - Purpose
3. [Page 3] - Purpose
...

Key Metrics to Track:
- [Metric 1] - Benchmark: [X%]
- [Metric 2] - Benchmark: [X%]

Resources Needed:
- [Resource 1]
- [Resource 2]

Time to Build: [Estimated days/weeks]
Estimated Cost: [Software, ads, etc.]

Potential Challenges:
- [Challenge 1]
- [Challenge 2]

Success Stories (Similar Businesses):
- [Example 1]
- [Example 2]
```

### Step 4: Recommend Primary + Supporting Funnels
Most businesses need 2-3 funnels working together:

**The Funnel Stack:**
```
FUNNEL 1 (Lead Gen):    [Recommended type] → Builds the list
FUNNEL 2 (Conversion):  [Recommended type] → Converts leads to buyers
FUNNEL 3 (Ascension):   [Recommended type] → Maximizes customer value
```

### Step 5: Map the Implementation Sequence
Which funnel to build first, second, third:

```
Phase 1: Build [Funnel X] because [reason it should be first]
Phase 2: Build [Funnel Y] because [it needs data from Phase 1]
Phase 3: Build [Funnel Z] because [it maximizes existing customers]
```

## Output Template
```yaml
funnel_archetype_analysis:
  date: "YYYY-MM-DD"
  business: ""

  offer_audience_assessment:
    offer_complexity: "simple | moderate | complex"
    purchase_decision_type: "impulse | considered | major | investment"
    trust_requirement: "low | medium | high"
    audience_temperature: "cold | warm | hot | mixed"

  archetype_scoring:
    - funnel: "Lead Squeeze"
      offer_fit: 0
      audience_fit: 0
      goal_fit: 0
      complexity_fit: 0
      total: 0
    - funnel: "Tripwire / SLO"
      offer_fit: 0
      audience_fit: 0
      goal_fit: 0
      complexity_fit: 0
      total: 0
    - funnel: "Free + Shipping"
      offer_fit: 0
      audience_fit: 0
      goal_fit: 0
      complexity_fit: 0
      total: 0
    - funnel: "Webinar"
      offer_fit: 0
      audience_fit: 0
      goal_fit: 0
      complexity_fit: 0
      total: 0
    - funnel: "Product Launch"
      offer_fit: 0
      audience_fit: 0
      goal_fit: 0
      complexity_fit: 0
      total: 0
    - funnel: "High-Ticket Application"
      offer_fit: 0
      audience_fit: 0
      goal_fit: 0
      complexity_fit: 0
      total: 0
    - funnel: "Continuity"
      offer_fit: 0
      audience_fit: 0
      goal_fit: 0
      complexity_fit: 0
      total: 0

  primary_recommendation:
    funnel_type: ""
    score: 0
    why_this_fits: []
    page_sequence: []
    key_metrics: []
    resources_needed: []
    time_to_build: ""
    estimated_cost: ""

  secondary_recommendation:
    funnel_type: ""
    score: 0
    why_this_fits: []

  funnel_stack:
    lead_gen: ""
    conversion: ""
    ascension: ""

  implementation_sequence:
    phase_1: { funnel: "", reason: "", timeline: "" }
    phase_2: { funnel: "", reason: "", timeline: "" }
    phase_3: { funnel: "", reason: "", timeline: "" }

  anti_recommendations:
    - funnel: ""
      why_not: ""
```

## Quality Gate
- [ ] All 7 funnel archetypes scored with specific reasoning
- [ ] Offer-audience fit analysis is thorough (complexity, decision type, trust)
- [ ] Top 2-3 recommendations include page sequences and benchmarks
- [ ] Funnel stack shows how multiple funnels work together
- [ ] Implementation sequence is phased with clear reasoning
- [ ] Anti-recommendations included (which funnels to avoid and why)
- [ ] Recommendations match the business's current resources and capacity
- [ ] Each recommendation includes time and cost estimates

## Handoff
Archetype recommendation feeds into `reverse-engineer-funnel.md` (BR_SWP_003) to model from live examples of the chosen type. Implementation sequence connects to `create-funnel-roadmap.md` (BR_CHF_002). Page designs connect to all brunson-pages tasks (BR_PGS series).

---
*Task: BR_SWP_002 | Agent: brunson-swipe | Version: 1.0*
