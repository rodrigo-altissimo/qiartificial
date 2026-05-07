# analyze-funnel-swipe

## Metadata
```yaml
task_id: BR_SWP_001
agent: brunson-swipe
type: analysis
complexity: medium
estimated_time: 45-60min
source: "DotCom Secrets — Chapter 2: Funnel Hacking + 74 Funnel Swipefile"
```

## Purpose
Analyze a funnel from the swipe file to extract reusable patterns, copy frameworks, design elements, and conversion strategies. Funnel hacking is Brunson's #1 strategy for rapid funnel creation — studying what works and adapting it to your market.

> "You don't need to be creative. You need to be a good funnel hacker. Study what's working, understand WHY it works, and model it." — Russell Brunson

---

## The Framework: Funnel Swipe Analysis

Swipe file analysis goes beyond screenshotting pages. It's a systematic deconstruction of every element that contributes to conversion.

### The 7 Analysis Layers

```
LAYER                    WHAT TO ANALYZE                   OUTPUT
────────────────────     ──────────────────────────────    ──────────────────
1. Traffic Source        Where do they get visitors?        Traffic strategy
2. Hook                  What grabs attention first?        Hook templates
3. Story                 What narrative do they tell?       Story structure
4. Offer                 What are they selling?             Offer architecture
5. Page Design           How is the page structured?        Layout templates
6. Copy Framework        What copy patterns do they use?    Copy swipe
7. Follow-Up             What happens after the first page? Sequence templates
```

---

## Input Required
```yaml
input_fields:
  funnel_url: ""
  funnel_owner: ""
  niche: ""
  funnel_type: ""               # squeeze, tripwire, webinar, application, etc.
  screenshot_available: true/false
  competitor_or_model: ""       # Are you competing or modeling?
  your_niche: ""                # What market will you adapt this for?
```

---

## Step-by-Step Process

### Step 1: Map the Complete Funnel Flow
Click through every page and document the full journey.

```yaml
funnel_map:
  entry_page:
    url: ""
    type: ""
    screenshot: ""
  page_2:
    url: ""
    type: ""
    relationship_to_page_1: ""
  page_3:
    url: ""
    type: ""
    relationship_to_page_2: ""
  upsells_downsells: []
  total_pages: ""
  funnel_type: ""
```

### Step 2: Analyze the Traffic Sources
How are they driving traffic to this funnel?

```yaml
traffic_analysis:
  paid_ads:
    platforms: []               # Facebook, Google, YouTube
    ad_format: ""               # Video, image, carousel
    ad_hook: ""                 # What's the first line/image?
    targeting_guess: ""         # Who are they targeting?
  organic:
    platforms: []
    content_type: ""            # Posts, videos, podcasts
    frequency: ""
  affiliates:
    program: true/false
    commission_guess: ""
  dream_100:
    visible_partnerships: []
  primary_traffic: ""           # The dominant source
```

### Step 3: Deconstruct the Hook
Analyze how they capture attention in the first 3 seconds.

```yaml
hook_analysis:
  headline: ""
  hook_type: ""                 # curiosity, pain, result, controversy
  power_words: []               # Specific words that drive impact
  specificity_elements: []      # Numbers, timeframes, results
  curiosity_gap: ""             # What question does it open?
  adaptability_score: "1-10"    # How easily can this be adapted?
  your_adaptation: ""           # How you'd use this hook
```

### Step 4: Deconstruct the Story
Analyze the narrative structure used throughout the funnel.

```yaml
story_analysis:
  story_type: ""                # Epiphany bridge, case study, origin, etc.
  protagonist: ""               # Who is the character?
  conflict: ""                  # What struggle is presented?
  resolution: ""                # How is it resolved?
  bridge_to_offer: ""           # How does the story connect to the pitch?
  emotional_arc: ""             # Curiosity -> empathy -> hope -> desire
  adaptability: ""              # How to model this for your market
```

### Step 5: Deconstruct the Offer
Analyze every component of their offer structure.

```yaml
offer_analysis:
  core_offer:
    name: ""
    price: ""
    delivery_format: ""
  value_stack:
    components: []
    total_perceived_value: ""
  bonuses: []
  guarantee:
    type: ""
    duration: ""
  urgency_mechanism: ""
  order_bump:
    product: ""
    price: ""
  upsells: []
  payment_options: []
  your_adaptation: ""           # How to model this offer for your market
```

### Step 6: Deconstruct the Page Design
Analyze the visual and structural elements.

```yaml
design_analysis:
  layout: ""                    # Long-form, VSL, minimal, etc.
  color_scheme: ""
  above_the_fold: ""            # What's visible without scrolling
  cta_placement: []             # Where are buy buttons?
  cta_count: ""                 # How many CTA buttons?
  trust_elements: []            # Testimonials, logos, badges
  media: ""                     # Video, images, mockups
  mobile_optimization: ""
  unique_design_elements: []
```

### Step 7: Compile Actionable Takeaways
Translate analysis into your own funnel action items.

```yaml
actionable_takeaways:
  must_model:
    - element: ""
      reason: ""
      adaptation: ""
  should_test:
    - element: ""
      hypothesis: ""
  avoid:
    - element: ""
      reason: ""
  priority_implementation:
    - item: ""
      impact: "high/medium/low"
      effort: "high/medium/low"
```

---

## Output Template
```yaml
output:
  funnel_analysis:
    funnel_url: ""
    funnel_type: ""
    niche: ""
    pages_analyzed: ""
    layers_analyzed:
      traffic: ""
      hook: ""
      story: ""
      offer: ""
      design: ""
      copy: ""
      follow_up: ""
    key_findings:
      - finding: ""
        adaptability: ""
    actionable_takeaways: []
    recommended_adaptations: []
```

---

## Quality Gate
```yaml
quality:
  - [ ] Complete funnel flow is mapped (all pages documented)
  - [ ] All 7 analysis layers are covered
  - [ ] Hook is deconstructed with specific power words identified
  - [ ] Offer stack is fully itemized with prices
  - [ ] Design elements are documented for replication
  - [ ] Actionable takeaways include specific adaptations for your market
  - [ ] Analysis goes beyond surface to understand WHY things work
  - [ ] No copyright infringement — model the strategy, not the copy
```

---

## Handoff
- -> **brunson-swipe** for `reverse-engineer-funnel` (BR_SWP_002) — deeper competitive analysis
- -> **brunson-funnels** for `select-funnel-type` (BR_FUN_003) — choose funnel type based on findings
- -> **brunson-copy** for `write-sales-letter` (BR_CPY_001) — apply copy patterns discovered

---
*Task: BR_SWP_001 | Agent: brunson-swipe | Version: 1.0*
