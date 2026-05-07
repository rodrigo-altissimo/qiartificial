# create-headline-set

## Metadata
```yaml
task_id: BR_CPY_004
agent: brunson-copy
type: creation
complexity: medium
estimated_time: 45-60min
source: "DotCom Secrets — Copywriting Principles"
```

## Purpose
Create a comprehensive headline set of 20+ variations for testing across sales pages, ads, emails, and landing pages. Headlines determine whether your copy gets read or ignored — they are the single highest-leverage element.

> "You have 3 seconds to grab attention. Your headline IS your first impression. If the headline fails, nothing else matters because nobody reads the rest." — Russell Brunson

---

## The Framework: Headline Architecture

### Why 20+ Headlines
Testing is the only way to find a winner. The headline you think is best is rarely the one that converts highest. By creating 20+ variations across different angles, you dramatically increase your chance of finding a breakthrough winner.

### The Headline Formula Categories
```
CATEGORY 1: HOW-TO Headlines
  "How to [Dream Outcome] Without [Pain Point]"

CATEGORY 2: NUMBER Headlines
  "[Number] Ways to [Achieve Result] in [Timeframe]"

CATEGORY 3: QUESTION Headlines
  "Are You Making These [Number] [Niche] Mistakes?"

CATEGORY 4: COMMAND Headlines
  "Stop [Common Mistake] — Do This Instead"

CATEGORY 5: CURIOSITY Headlines
  "The Weird [Method] That [Produces Result]"

CATEGORY 6: PROOF Headlines
  "How [Person] [Achieved Result] in [Timeframe]"

CATEGORY 7: WARNING Headlines
  "Warning: [Common Practice] Is Destroying Your [Desired Outcome]"

CATEGORY 8: SECRET Headlines
  "The [Industry] Secret That [Insiders] Don't Want You to Know"
```

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  target_audience: ""
  primary_pain_point: ""
  dream_outcome: ""
  unique_mechanism: ""
  timeframe_for_results: ""
  biggest_objection: ""
  social_proof_numbers: ""  # Students, revenue, etc.
  competitor_approach: ""   # What others do differently
  emotional_triggers: []    # Fear, desire, curiosity, etc.
  context: ""               # Sales page, ad, email, landing page
```

---

## Step-by-Step Process

### Step 1: Define the Core Promise
Extract the single most compelling promise for headlines.

```yaml
core_promise:
  primary_benefit: ""       # What do they GET?
  primary_pain_avoided: ""  # What do they AVOID?
  unique_angle: ""          # What makes this DIFFERENT?
  specificity: ""           # Specific numbers, timeframes
  emotional_core: ""        # What do they FEEL?
```

### Step 2: Generate HOW-TO Headlines (4 variations)

```yaml
how_to_headlines:
  - "How to [Dream Outcome] Without [Pain Point]"
  - "How to [Dream Outcome] in [Timeframe] — Even If [Objection]"
  - "How [Audience] Are [Achieving Result] With [Method]"
  - "The Step-by-Step Method for [Dream Outcome]"
  filled:
    headline_1: ""
    headline_2: ""
    headline_3: ""
    headline_4: ""
```

### Step 3: Generate NUMBER Headlines (4 variations)

```yaml
number_headlines:
  - "[Number] Proven Ways to [Achieve Result]"
  - "The [Number]-Step System for [Dream Outcome]"
  - "[Number] [Audience] Mistakes That [Negative Outcome]"
  - "[Number] Secrets to [Dream Outcome] That [Experts] Won't Tell You"
  filled:
    headline_1: ""
    headline_2: ""
    headline_3: ""
    headline_4: ""
```

### Step 4: Generate CURIOSITY Headlines (4 variations)

```yaml
curiosity_headlines:
  - "The Strange [Method] That [Produces Result]"
  - "Why [Common Belief] Is Dead Wrong (And What to Do Instead)"
  - "What [Successful People] Know About [Topic] That You Don't"
  - "The [Adjective] [Mechanism] Behind Every [Successful Outcome]"
  filled:
    headline_1: ""
    headline_2: ""
    headline_3: ""
    headline_4: ""
```

### Step 5: Generate PROOF Headlines (3 variations)

```yaml
proof_headlines:
  - "How [Name/Number of People] [Achieved Result] in [Timeframe]"
  - "[Specific Result] in [Timeframe]: Here's How"
  - "From [Bad Situation] to [Good Situation] — The [Method] Story"
  filled:
    headline_1: ""
    headline_2: ""
    headline_3: ""
```

### Step 6: Generate URGENCY/FEAR Headlines (3 variations)

```yaml
urgency_fear_headlines:
  - "Warning: [Common Practice] Is Costing You [Loss]"
  - "If You're [Doing X], You're Leaving [Money/Results] on the Table"
  - "The [Window/Opportunity] Is Closing: Here's What to Do Now"
  filled:
    headline_1: ""
    headline_2: ""
    headline_3: ""
```

### Step 7: Generate DIRECT/COMMAND Headlines (3 variations)

```yaml
direct_headlines:
  - "Get [Dream Outcome] in [Timeframe]"
  - "Stop [Pain Activity]. Start [Pleasure Activity]."
  - "Finally: [Dream Outcome] Made Simple"
  filled:
    headline_1: ""
    headline_2: ""
    headline_3: ""
```

### Step 8: Rank and Select Top Headlines
Evaluate each headline against criteria.

```yaml
headline_ranking:
  scoring_criteria:
    specificity: 25         # Does it include specific details?
    curiosity: 25           # Does it make them NEED to read more?
    benefit: 25             # Is the benefit clear?
    believability: 25       # Does it feel true?
  top_5:
    - rank: 1
      headline: ""
      total_score: 0
      recommended_for: ""   # Sales page, ad, email
    - rank: 2
      headline: ""
      total_score: 0
      recommended_for: ""
    - rank: 3
      headline: ""
      total_score: 0
      recommended_for: ""
    - rank: 4
      headline: ""
      total_score: 0
      recommended_for: ""
    - rank: 5
      headline: ""
      total_score: 0
      recommended_for: ""
```

### Step 9: Create Sub-Headlines for Top 5
Each top headline gets a supporting sub-headline.

```yaml
sub_headlines:
  for_headline_1:
    headline: ""
    sub_headline: ""        # Expands the promise, addresses objection
  for_headline_2:
    headline: ""
    sub_headline: ""
  for_headline_3:
    headline: ""
    sub_headline: ""
  for_headline_4:
    headline: ""
    sub_headline: ""
  for_headline_5:
    headline: ""
    sub_headline: ""
```

---

## Output Template
```yaml
output:
  headline_set:
    offer: ""
    total_headlines: 0
    categories_covered: []
    top_5_headlines:
      - headline: ""
        sub_headline: ""
        recommended_for: ""
    testing_plan:
      platform: ""
      test_method: ""
      success_metric: ""
      test_duration: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] At least 20 headline variations generated
  - [ ] All 7 headline categories represented
  - [ ] Headlines are specific (include numbers, timeframes, details)
  - [ ] Each headline passes the "would I click this?" test
  - [ ] Headlines are appropriate length for context (ads vs. pages)
  - [ ] Top 5 rankings are justified with scoring
  - [ ] Sub-headlines complement (not repeat) the headlines
  - [ ] Testing plan is defined
  - [ ] No headline is generic enough to apply to any business
```

---

## Handoff
- → **brunson-copy** for `write-sales-page` (BR_CPY_002) — use winning headline
- → **brunson-hooks** for `design-ad-hooks` (BR_HKS_002) — adapt headlines for ads
- → **brunson-email** for subject line testing
- → A/B testing for validation

---
*Task: BR_CPY_004 | Agent: brunson-copy | Version: 1.0*
