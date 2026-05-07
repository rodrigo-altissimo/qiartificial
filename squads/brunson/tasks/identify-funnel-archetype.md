# identify-funnel-archetype

## Metadata
```yaml
task_id: BR_SWP_003
agent: brunson-swipe
type: analysis
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapters 5-8: The 7 Funnel Types + 74 Funnel Swipefile"
```

## Purpose
Identify which funnel archetype pattern a given funnel follows and map it to Brunson's core funnel taxonomy. Understanding archetypes lets you instantly recognize what type of funnel you're looking at, predict its economics, and know which elements to model.

> "There are only a handful of funnel archetypes. Once you can identify them on sight, you can hack any funnel in any market." — Russell Brunson

---

## The Framework: Funnel Archetype Taxonomy

Brunson identifies 9 core funnel archetypes. Every funnel in existence is a variation or combination of these patterns.

### The 9 Core Archetypes

```
ARCHETYPE               PRICE POINT       PRIMARY GOAL           PAGES
─────────────────────   ───────────────   ──────────────────     ─────
1. Lead Squeeze         Free              Capture emails          2
2. Survey Funnel        Free              Segment + capture       3-4
3. Summit Funnel        Free/$47          Build authority + list  4-6
4. Book/Cart Funnel     $7-$27            Acquire customers       3-5
5. Tripwire/SLO         $27-$97           Self-liquidate ads      3-4
6. Webinar Funnel       $297-$2,997       Sell core offer         5-7
7. Product Launch       $297-$2,997       Time-based selling      6-10
8. Application Funnel   $2,000-$25,000    Qualify high-ticket     4-5
9. Challenge Funnel     $27-$97 entry     Build commitment        5-8
```

### Archetype Identification Signals

```
IF you see...                          THEN it's probably...
────────────────────────────────────   ─────────────────────────
Simple opt-in page + thank you         Lead Squeeze
Quiz or multi-step form + results      Survey Funnel
Multiple expert videos + all-access    Summit Funnel
Free + shipping book page              Book/Cart Funnel
Low-price offer + immediate upsell     Tripwire/SLO
Registration page + live presentation  Webinar Funnel
Multi-day video series + cart open     Product Launch
Long-form content + application form   Application Funnel
Multi-day challenge + offer at end     Challenge Funnel
```

---

## Input Required
```yaml
input_fields:
  funnel_url: ""
  funnel_screenshots: []
  entry_page_type: ""
  price_point: ""
  number_of_pages: ""
  contains_video: true/false
  contains_application: true/false
  contains_webinar: true/false
  niche: ""
```

---

## Step-by-Step Process

### Step 1: Document the Observable Elements
List what you can see on the funnel pages without assumptions.

```yaml
observable_elements:
  entry_page:
    type: ""                    # Opt-in, sales, registration, application
    headline: ""
    cta: ""
    price_shown: ""
    video: true/false
    form_fields: ""
  subsequent_pages: []
  total_steps: ""
  price_points_visible: []
  urgency_elements: []
  email_required: true/false
  application_required: true/false
```

### Step 2: Match Against Archetype Signals
Compare observable elements against each archetype's identifying signals.

```yaml
archetype_matching:
  lead_squeeze:
    match_score: "/10"
    matching_signals: []
    missing_signals: []
  survey_funnel:
    match_score: "/10"
    matching_signals: []
    missing_signals: []
  summit_funnel:
    match_score: "/10"
    matching_signals: []
    missing_signals: []
  book_cart:
    match_score: "/10"
    matching_signals: []
    missing_signals: []
  tripwire_slo:
    match_score: "/10"
    matching_signals: []
    missing_signals: []
  webinar:
    match_score: "/10"
    matching_signals: []
    missing_signals: []
  product_launch:
    match_score: "/10"
    matching_signals: []
    missing_signals: []
  application:
    match_score: "/10"
    matching_signals: []
    missing_signals: []
  challenge:
    match_score: "/10"
    matching_signals: []
    missing_signals: []
```

### Step 3: Identify the Primary Archetype
Select the highest-matching archetype and note any hybrid elements.

```yaml
archetype_identification:
  primary_archetype: ""
  confidence: ""                # high, medium, low
  hybrid_elements: []           # Elements from other archetypes
  variations_from_standard: []  # How it differs from the textbook version
```

### Step 4: Map Expected Economics
Based on the archetype, predict the funnel's economic model.

```yaml
expected_economics:
  archetype: ""
  typical_metrics:
    front_end_price: ""
    conversion_rate: ""
    aov: ""
    ltv: ""
    cac_target: ""
  revenue_model: ""             # One-time, recurring, ascending
  break_even_point: ""
  scale_potential: ""
```

### Step 5: Identify Key Elements to Model
List the specific elements worth modeling for your own funnel.

```yaml
elements_to_model:
  hooks: []                     # Headlines, opening lines
  story_structure: ""           # How they tell stories
  offer_architecture: ""        # How the offer is built
  page_layout: ""               # Design patterns
  follow_up: ""                 # Email/sequence patterns
  unique_innovations: []        # Things they do differently from the standard archetype
```

### Step 6: Generate Adaptation Recommendations
How to apply this archetype to your specific market.

```yaml
adaptation_recommendations:
  recommended_archetype: ""     # Same or different for your market?
  modifications_needed: []      # What to change for your niche
  elements_to_keep: []          # What works as-is
  elements_to_test: []          # What might work if tested
  implementation_order: []      # What to build first
```

---

## Output Template
```yaml
output:
  archetype_analysis:
    funnel_url: ""
    primary_archetype: ""
    confidence: ""
    hybrid_elements: []
    expected_economics:
      price: ""
      conversion: ""
      aov: ""
    key_elements:
      hooks: []
      story: ""
      offer: ""
      design: ""
    adaptation_for_your_market:
      recommended_archetype: ""
      modifications: []
      implementation_priority: []
```

---

## Quality Gate
```yaml
quality:
  - [ ] All observable elements documented before matching
  - [ ] Match scoring is objective (not assumption-based)
  - [ ] Primary archetype identified with confidence level
  - [ ] Hybrid elements are noted (most funnels aren't pure archetypes)
  - [ ] Expected economics are realistic for the archetype
  - [ ] Key elements are specific enough to model
  - [ ] Adaptation recommendations are actionable for your specific market
  - [ ] Analysis distinguishes between the archetype and the execution quality
```

---

## Handoff
- -> **brunson-swipe** for `analyze-funnel-swipe` (BR_SWP_001) — deep-dive on specific elements
- -> **brunson-funnels** for `select-funnel-type` (BR_FUN_003) — choose your funnel type
- -> **brunson-swipe** for `create-funnel-benchmark` (BR_SWP_004) — benchmark against standards

---
*Task: BR_SWP_003 | Agent: brunson-swipe | Version: 1.0*
