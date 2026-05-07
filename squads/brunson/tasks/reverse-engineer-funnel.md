# Reverse Engineer a Live Funnel

## Metadata
```yaml
task_id: BR_SWP_003
agent: brunson-swipe
type: analysis
complexity: medium
estimated_time: 35min
source: "DotCom Secrets, Chapter 4 + Traffic Secrets, Chapter 5"
```

## Purpose

Systematically reverse engineer a live, active funnel to understand its complete architecture, conversion mechanics, and revenue model. Unlike a full competitor hack (BR_SWP_001), this task focuses on deconstructing the MECHANICS of a single funnel -- the technical flow, page types, offer stack, and conversion logic -- to create a reusable architectural blueprint.

> "Every successful funnel follows a pattern. When you learn to see the patterns, you can rebuild any funnel you find in the wild and adapt it to your business." -- Russell Brunson

## The Framework: Funnel Deconstruction Method

### The 3 Dimensions of Reverse Engineering

1. **STRUCTURE** -- The physical pages and their sequence
2. **PSYCHOLOGY** -- The emotional journey and belief shifts at each step
3. **ECONOMICS** -- The math behind the funnel (prices, take rates, revenue per visitor)

### The Reverse Engineering Mindset

Don't ask "What did they build?"
Ask "WHY did they build it this way?"

Every element exists for a reason:
- Why THIS headline and not another?
- Why THIS price and not $10 more/less?
- Why an upsell HERE and not after the next page?
- Why video instead of text?

## Input Required
```yaml
input:
  funnel_url: "Entry point URL of the funnel to reverse engineer"
  funnel_context:
    niche: ""
    apparent_target: "Who the funnel seems aimed at"
    discovered_via: "ad | search | referral | social | other"
    reason_for_study: "Why this specific funnel"
  your_goal: "What you want to learn from this deconstruction"
```

## Step-by-Step Process

### Step 1: Map the Complete Funnel Architecture
Enter the funnel and document every page transition:

**Create a flow diagram:**
```
[Traffic Source]
     ↓
[Page 1: ___________] → Conversion action: ___
     ↓ (converted)          ↓ (not converted)
[Page 2: ___________]  [Exit: retarget?]
     ↓
[Page 3: ___________] → Conversion action: ___
     ↓ (yes)                ↓ (no)
[Page 4a: __________]  [Page 4b: __________]
     ↓                      ↓
[Page 5: ___________]  [Page 5: ___________]
     ↓
[Final: _____________]
```

**For each page, record:**
- URL
- Page type (squeeze, bridge, VSL, sales, OTO, downsell, thank you)
- Primary action required from visitor
- What happens on YES (convert)
- What happens on NO (decline)
- Estimated time on page

### Step 2: Analyze Each Page's Conversion Mechanics
For every page in the funnel:

**Above the Fold (first screen):**
- Headline: [exact text]
- Sub-headline: [exact text]
- Visual: [image/video/illustration]
- CTA: [button text and placement]
- Trust elements: [logos, badges, testimonials visible]

**Full Page Analysis:**
- Copy structure: [headline → story → bullets → CTA → testimonials → FAQ → CTA]
- Word count: [approximate]
- Number of CTAs: [count and positions]
- Social proof: [type and quantity]
- Urgency/scarcity: [timers, limited qty, deadline]
- Risk reversal: [guarantee type and positioning]
- Objection handling: [FAQ, addressed in copy, testimonials]

### Step 3: Deconstruct the Offer Stack
Map the complete value proposition:

**Core Offer:**
```
Product/Service: [What they're selling]
Price: $[Amount]
Delivery: [How it's delivered]
Promise: [Main result promised]
```

**Bonuses:**
```
Bonus 1: [Name] - Value $[Stated value] - [Why it's compelling]
Bonus 2: [Name] - Value $[Stated value] - [Why it's compelling]
Bonus 3: [Name] - Value $[Stated value] - [Why it's compelling]
Total Stated Value: $[Sum]
```

**Guarantee:**
```
Type: [30-day money back | conditional | unconditional | double]
Language: [Key phrases used in guarantee]
Psychology: [What fear it addresses]
```

**Price Anchoring:**
```
Value built to: $[High anchor]
Discounted to: $[Offered price]
Savings frame: [How they frame the discount]
```

### Step 4: Map the Ascension Path
Document every upsell, downsell, and order bump:

```
Step 1: Main Offer - $[X]
  → Order Bump: [What] - $[X]
  → OTO 1 (Yes): [What] - $[X]
  → OTO 1 (No) → Downsell 1: [What] - $[X]
  → OTO 2 (Yes): [What] - $[X]
  → OTO 2 (No) → Downsell 2: [What] - $[X]

Minimum Cart: $[Lowest possible]
Maximum Cart: $[Everything accepted]
Expected ACV: $[Estimated average]
```

### Step 5: Analyze the Psychological Journey
Map the emotional state at each funnel step:

```
Step  │ Page Type  │ Visitor Emotion  │ Belief Being Built  │ Action Trigger
──────┼────────────┼──────────────────┼─────────────────────┼──────────────
1     │ Squeeze    │ Curiosity        │ "This is interesting"│ Promise of value
2     │ Bridge     │ Trust building   │ "I like this person" │ Story/credibility
3     │ Sales      │ Desire + Proof   │ "This could work"   │ Offer stack
4     │ Checkout   │ Commitment       │ "I'm doing this"    │ Risk reversal
5     │ OTO 1      │ Momentum         │ "I need this too"   │ Complementary value
6     │ Thank You  │ Excitement       │ "I made a good call"│ Consumption trigger
```

### Step 6: Estimate the Economics
Based on observed data, estimate the funnel's unit economics:

**Revenue Model:**
```
Assuming 1,000 visitors:
  Opt-in rate (est.): [X]% → [Y] leads
  Sales conversion (est.): [X]% → [Y] buyers
  Order bump rate (est.): [X]% → +$[Y] per buyer avg
  OTO 1 rate (est.): [X]% → +$[Y] per buyer avg
  OTO 2 rate (est.): [X]% → +$[Y] per buyer avg

  Revenue per 1,000 visitors: $[X]
  EPC estimate: $[X.XX]
  ACV estimate: $[X]
```

### Step 7: Extract the Blueprint
Create a reusable funnel blueprint:

**Architecture Blueprint:**
```
Template: [Funnel Type Name]
Pages: [Count]
Sequence: [Page 1 → Page 2 → ... → Final]
Key Elements: [What makes this funnel work]
Adaptable To: [Types of businesses/offers this pattern works for]
```

**Implementation Notes:**
- What technology/tools are needed
- What content must be created
- What's the minimum viable version
- What can be simplified without losing effectiveness

## Output Template
```yaml
funnel_reverse_engineering:
  date: "YYYY-MM-DD"
  funnel_url: ""
  niche: ""
  funnel_type: ""

  architecture:
    total_pages: 0
    flow_diagram: |
      [ASCII flow diagram]
    pages:
      - position: 1
        type: ""
        url: ""
        headline: ""
        action_required: ""
        yes_path: ""
        no_path: ""

  offer_stack:
    core_offer: { name: "", price: "", promise: "" }
    bonuses: []
    guarantee: { type: "", language: "" }
    price_anchor: { stated_value: "", actual_price: "" }

  ascension_path:
    order_bump: { offer: "", price: "" }
    oto_1: { offer: "", price: "" }
    downsell_1: { offer: "", price: "" }
    oto_2: { offer: "", price: "" }
    minimum_cart: ""
    maximum_cart: ""
    estimated_acv: ""

  psychological_journey:
    - step: 1
      emotion: ""
      belief: ""
      trigger: ""

  economics_estimate:
    per_1000_visitors:
      leads: 0
      buyers: 0
      revenue: ""
    epc: ""
    acv: ""

  blueprint:
    template_name: ""
    pages_needed: []
    key_elements: []
    adaptable_to: []
    minimum_viable_version: ""
    estimated_build_time: ""

  top_insights:
    - insight: ""
      application: ""
```

## Quality Gate
- [ ] Complete funnel map with every page documented
- [ ] Each page analyzed for copy structure and conversion mechanics
- [ ] Offer stack fully deconstructed (core + bonuses + guarantee)
- [ ] Ascension path mapped with all upsells/downsells
- [ ] Psychological journey traced through all funnel steps
- [ ] Economics estimated with clear assumptions
- [ ] Reusable blueprint created with implementation notes
- [ ] Focus is on WHY elements exist, not just WHAT they are
- [ ] Top insights include specific applications for your business

## Handoff
Blueprint feeds into page design tasks: `design-squeeze-page.md` (BR_PGS_001), `design-sales-page.md` (BR_PGS_002), `design-oto-page.md` (BR_PGS_003). Architecture informs `create-funnel-roadmap.md` (BR_CHF_002). Offer stack analysis connects to `calculate-funnel-economics.md` (BR_ADV_004).

---
*Task: BR_SWP_003 | Agent: brunson-swipe | Version: 1.0*
