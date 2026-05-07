# craft-headline-formulas

## Metadata
```yaml
task_id: BR_CPY_003
agent: brunson-copy
type: creation
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapter 8: Funnel Scripts + Traffic Secrets — Hook, Story, Offer"
```

## Purpose
Craft compelling headlines using Brunson's proven formulas for every funnel element — opt-in pages, sales pages, VSLs, emails, and ads. Headlines are the most important copy element because they determine whether anyone reads the rest.

> "The headline is responsible for 80% of the effectiveness of any sales page. Get it wrong and nothing else matters." — Russell Brunson

---

## The Framework: Headline Architecture

Brunson uses 7 core headline formulas that can be adapted for any funnel context. Each formula triggers a different psychological mechanism.

### The 7 Core Formulas

```
FORMULA                         TRIGGER              EXAMPLE
────────────────────────────    ─────────────────    ──────────────────────────
1. How To ___                   Curiosity + Value    "How to Build a 7-Figure Funnel in 30 Days"
2. Secret of ___                Insider Knowledge    "The Secret of Webinars That Convert at 15%+"
3. Warning ___                  Fear + Urgency       "Warning: Your Funnel Is Leaking $10K/Month"
4. New Discovery ___            Novelty              "New Discovery: The 3-Page Funnel That..."
5. They Laughed When ___        Underdog Story       "They Laughed When I Said I'd Make $1M Online..."
6. Who Else Wants ___           Social Proof         "Who Else Wants to Double Their Revenue?"
7. [Number] Ways to ___        Listicle + Value     "7 Ways to Triple Your Opt-In Rate Overnight"
```

### Headline Power Multipliers
- **Specificity** — "7-figure" beats "successful", "30 days" beats "quickly"
- **Curiosity gap** — Hint at the answer without revealing it
- **Avatar callout** — Mention WHO this is for
- **"Without" clause** — Remove their biggest objection
- **"Even if" clause** — Handle the "but I'm different" excuse

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  target_avatar: ""
  dream_outcome: ""
  biggest_pain_point: ""
  new_opportunity: ""
  specific_result: ""           # Number or measurable outcome
  timeframe: ""                 # How fast can they see results?
  biggest_objection: ""         # "I don't have time / money / tech skills"
  context: ""                   # squeeze page, sales page, VSL, email, ad
  competitor_claims: ""         # What others promise (to differentiate)
```

---

## Step-by-Step Process

### Step 1: Define the Headline Variables
Extract the core building blocks that power every headline formula.

```yaml
headline_variables:
  avatar: ""                    # Specific person: "coaches", "SaaS founders"
  result: ""                    # Specific outcome: "$10K/month", "1000 leads"
  timeframe: ""                 # "30 days", "this weekend", "by Friday"
  mechanism: ""                 # "3-page funnel", "Perfect Webinar", "Dream 100"
  without: ""                   # "without paid ads", "without a huge list"
  even_if: ""                   # "even if you're starting from scratch"
  enemy: ""                     # "old-school marketing", "guessing"
  proof_point: ""               # "used by 100,000+ entrepreneurs"
```

### Step 2: Generate Headlines Using All 7 Formulas
Apply each formula to your specific variables. Aim for 3-5 variations per formula.

```yaml
formula_1_how_to:
  template: "How to [Result] in [Timeframe] Using [Mechanism]"
  variations:
    - ""
    - ""
    - ""

formula_2_secret:
  template: "The Secret [Avatar]s Use to [Result] in [Timeframe]"
  variations:
    - ""
    - ""
    - ""

formula_3_warning:
  template: "Warning: [Pain Point] Is Costing You [Specific Loss]"
  variations:
    - ""
    - ""
    - ""

formula_4_discovery:
  template: "New: The [Mechanism] That Lets [Avatar] [Result]"
  variations:
    - ""
    - ""
    - ""

formula_5_underdog:
  template: "They Laughed When I [Action] — But Then I [Result]"
  variations:
    - ""
    - ""
    - ""

formula_6_social_proof:
  template: "Who Else Wants to [Desirable Result]?"
  variations:
    - ""
    - ""
    - ""

formula_7_listicle:
  template: "[Number] Ways to [Result] Without [Objection]"
  variations:
    - ""
    - ""
    - ""
```

### Step 3: Apply Context-Specific Adaptations
Headlines work differently on different funnel elements.

```yaml
context_adaptations:
  squeeze_page:
    focus: "Curiosity + Free Value"
    length: "Short (8-15 words)"
    tone: "Exciting, discovery"
    best_formulas: [1, 2, 4]
  sales_page:
    focus: "Big Promise + Proof"
    length: "Medium (10-20 words)"
    tone: "Bold, confident"
    best_formulas: [1, 5, 6]
  vsl:
    focus: "Pattern Interrupt + Curiosity"
    length: "Short (spoken in <10 seconds)"
    tone: "Conversational, surprising"
    best_formulas: [3, 4, 5]
  email_subject:
    focus: "Open Loop + Personal"
    length: "Very short (3-8 words)"
    tone: "Casual, intriguing"
    best_formulas: [2, 3, 5]
  ad:
    focus: "Thumb-Stop + Relevance"
    length: "Very short (5-12 words)"
    tone: "Direct, bold"
    best_formulas: [1, 3, 7]
```

### Step 4: Score and Rank Headlines
Rate each headline on 5 criteria to identify the top performers.

```yaml
scoring_criteria:
  specificity: "1-10"          # Numbers, timeframes, measurable claims
  curiosity: "1-10"            # Creates desire to learn more
  believability: "1-10"        # Not so outrageous they dismiss it
  relevance: "1-10"            # Speaks directly to avatar's situation
  differentiation: "1-10"      # Different from competitor claims
  total: "/50"
```

### Step 5: Create A/B Test Pairs
Select top headlines and pair them for split testing.

```yaml
ab_test_plan:
  test_1:
    version_a: ""
    version_b: ""
    hypothesis: ""
  test_2:
    version_a: ""
    version_b: ""
    hypothesis: ""
  test_3:
    version_a: ""
    version_b: ""
    hypothesis: ""
```

---

## Output Template
```yaml
output:
  headline_library:
    offer: ""
    avatar: ""
    context: ""
    top_headlines:
      - headline: ""
        formula: ""
        score: "/50"
      - headline: ""
        formula: ""
        score: "/50"
      - headline: ""
        formula: ""
        score: "/50"
    all_variations: []
    ab_test_pairs:
      - pair_1: ["", ""]
      - pair_2: ["", ""]
    recommended_primary: ""
    recommended_context: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] At least 20 headline variations generated across all 7 formulas
  - [ ] Headlines are specific (contain numbers, timeframes, or measurable claims)
  - [ ] Each headline speaks to the avatar's language and desires
  - [ ] Headlines create curiosity without being clickbait
  - [ ] Context adaptations match the funnel element requirements
  - [ ] Top 3 headlines scored objectively on all 5 criteria
  - [ ] A/B test pairs use different formulas for true testing
  - [ ] No empty hype words ("amazing", "incredible", "life-changing")
```

---

## Handoff
- -> **brunson-copy** for `write-sales-letter` (BR_CPY_001) — use winning headline in sales letter
- -> **brunson-copy** for `create-vsl-script` (BR_CPY_002) — use adapted headline for VSL opening
- -> **brunson-hooks** for `create-hook-library` (BR_HKS_001) — expand into full hook library

---
*Task: BR_CPY_003 | Agent: brunson-copy | Version: 1.0*
