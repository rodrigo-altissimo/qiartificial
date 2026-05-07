# write-sales-letter

## Metadata
```yaml
task_id: BR_CPY_001
agent: brunson-copy
type: creation
complexity: high
estimated_time: 90-120min
source: "DotCom Secrets — Chapter 9: Funnel Scripts + DotCom Secrets Ignite"
```

## Purpose
Write a complete long-form sales letter using Brunson's proven structure. The sales letter is the written version of a one-to-many sales presentation, designed to take a reader from cold skepticism to confident buyer through a precise sequence of psychological triggers.

> "A sales letter is just a salesman in print. Every element has a job — if it doesn't earn its place, it gets cut." — Russell Brunson

---

## The Framework: Long-Form Sales Letter Architecture

Brunson's sales letter structure follows the same persuasion sequence as the Perfect Webinar, adapted for the written medium.

### The 17-Section Structure

```
SECTION                         PURPOSE                           LENGTH
───────────────────────────     ────────────────────────────      ──────
1. Pre-Head                     Pattern interrupt / call out      1-2 lines
2. Headline                     The Big Promise                   1-3 lines
3. Sub-Headline                 Expand + specificity              1-2 lines
4. Opening Story                Hook into narrative               200-400 words
5. Problem Amplification        Agitate the pain                  150-300 words
6. Villain Introduction         External enemy / false solution   100-200 words
7. New Opportunity              Your vehicle / framework          200-300 words
8. Credibility Builder          Why listen to you                 100-200 words
9. Proof / Results              Social proof + case studies       200-400 words
10. The Offer                   What they get                     200-300 words
11. Value Stack                 Item-by-item value build          300-500 words
12. Price Anchor + Reveal       Compare value to price            100-200 words
13. Bonuses                     Time-sensitive additions          150-300 words
14. Guarantee                   Risk reversal                     100-150 words
15. Urgency / Scarcity          Reason to act NOW                 100-200 words
16. Final CTA                   The close                         50-100 words
17. P.S. Section                Recap + last hook                 100-200 words
```

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  offer_price: ""
  target_avatar: ""
  dream_outcome: ""
  new_opportunity: ""
  origin_story: ""
  biggest_pain_point: ""
  villain: ""                   # false belief, old system, competitor category
  value_stack: []               # from build-irresistible-offer
  bonuses: []
  guarantee_type: ""
  urgency_mechanism: ""
  case_studies: []
  credibility_points: []
```

---

## Step-by-Step Process

### Step 1: Write the Pre-Head + Headline + Sub-Headline
The first 3 seconds determine if they read or bounce. Lead with specificity and curiosity.

```yaml
headline_block:
  pre_head: ""                  # "Attention [Avatar]:" or "WARNING:"
  headline: ""                  # The Big Promise — specific result + timeframe
  sub_headline: ""              # Expand with "without" or "even if"
  rules:
    - Must be specific (numbers, timeframes, outcomes)
    - Must create curiosity gap
    - Must speak to ONE avatar
    - Avoid hype words — use proof words
  examples:
    - "How a Broke College Dropout Built a $10M Business in 18 Months Using a Simple 3-Page Funnel"
    - "The 'Backwards' Webinar Script That Generated $3.2M in 90 Minutes"
```

### Step 2: Write the Opening Story
Pull the reader into a narrative. This is your Epiphany Bridge story or a case study that mirrors the reader's situation.

```yaml
opening_story:
  hook_line: ""                 # First line must grab attention
  character: ""                 # You or a relatable character
  situation: ""                 # Where were they? (relatable starting point)
  struggle: ""                  # What weren't they achieving?
  turning_point: ""             # The moment of discovery
  bridge_to_solution: ""        # How this connects to what you're offering
  word_count: "200-400 words"
```

### Step 3: Write the Problem Amplification
Make the reader feel the cost of NOT solving this problem. Agitate with specificity.

```yaml
problem_amplification:
  current_reality: ""           # "Right now, you're probably..."
  hidden_costs: ""              # What this problem really costs them
  failed_solutions: ""          # What they've tried that didn't work
  why_those_failed: ""          # The common thread of failure
  emotional_impact: ""          # How this makes them FEEL
  future_without_change: ""     # "If you keep doing what you're doing..."
```

### Step 4: Introduce the Villain + New Opportunity
Shift blame to the old system and introduce your new opportunity as the answer.

```yaml
villain_section:
  villain_name: ""              # The old way / false belief / broken system
  why_its_broken: ""            # Logical and emotional reasons
  who_benefits_from_it: ""      # Who profits from keeping them stuck?

new_opportunity_section:
  introduction: ""              # "What if there was a completely different way?"
  vehicle_name: ""              # Your framework / method name
  key_difference: ""            # What makes this fundamentally different
  simple_explanation: ""        # ELI5 version
  result_preview: ""            # What becomes possible
```

### Step 5: Build Credibility + Proof
Stack evidence that this works. Move from your results to others' results.

```yaml
credibility_section:
  your_credentials: ""          # Brief authority builder
  your_results: ""              # What you've achieved with this

proof_section:
  case_study_1:
    name: ""
    before: ""
    after: ""
    timeframe: ""
    quote: ""
  case_study_2:
    name: ""
    before: ""
    after: ""
    timeframe: ""
    quote: ""
  aggregate_proof: ""           # "Over 1,000 students have..."
```

### Step 6: Present the Offer + Value Stack
Reveal what they get, building value with each element before showing price.

```yaml
offer_presentation:
  transition: ""                # "So here's what I've put together for you..."
  offer_name: ""
  value_stack:
    item_1:
      name: ""
      description: ""
      value: "$___"
    item_2:
      name: ""
      description: ""
      value: "$___"
    item_3:
      name: ""
      description: ""
      value: "$___"
  total_value: "$___"

price_reveal:
  anchor_price: ""              # "If I charged $X, it would be fair..."
  comparison: ""                # "Most coaches charge $Y for just this piece..."
  actual_price: ""              # "But today, your investment is only..."
  savings_framing: ""           # "That's a savings of..."
  payment_options: ""           # Full pay + payment plan
```

### Step 7: Add Bonuses + Guarantee + Urgency + Close
Stack the final persuasion elements that overcome the last objections.

```yaml
bonuses:
  intro: "But wait — I'm also including these fast-action bonuses..."
  bonus_1:
    name: ""
    value: "$___"
    why_valuable: ""
    expires: ""
  bonus_2:
    name: ""
    value: "$___"
    why_valuable: ""
    expires: ""

guarantee:
  type: ""                      # 30-day, 60-day, results-based
  language: ""                  # Specific promise
  risk_reversal: ""             # "All the risk is on ME..."

urgency:
  mechanism: ""                 # Deadline, limited seats, price increase
  reason_why: ""                # Logical reason for the deadline
  what_happens_after: ""        # "After [date], the price goes to..."

closing_cta:
  button_text: ""
  final_push: ""                # Last emotional appeal

ps_section:
  ps_1: ""                      # Recap the big promise
  ps_2: ""                      # Restate urgency
  ps_3: ""                      # Final social proof
```

---

## Output Template
```yaml
output:
  sales_letter:
    offer: ""
    avatar: ""
    word_count: ""
    sections:
      pre_head: ""
      headline: ""
      sub_headline: ""
      opening_story: ""
      problem_amplification: ""
      villain: ""
      new_opportunity: ""
      credibility: ""
      proof: ""
      offer: ""
      value_stack: ""
      price_reveal: ""
      bonuses: ""
      guarantee: ""
      urgency: ""
      cta: ""
      ps: ""
    estimated_conversion: "1-3%"
    recommended_traffic: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Headline is specific with numbers, outcomes, and timeframes
  - [ ] Opening story creates emotional connection within first 200 words
  - [ ] Problem amplification uses avatar's exact language
  - [ ] New opportunity is clearly differentiated from old solutions
  - [ ] At least 2 specific case studies with before/after
  - [ ] Value stack builds value BEFORE price is revealed
  - [ ] Guarantee removes all perceived risk
  - [ ] Urgency has a logical reason (not just "buy now")
  - [ ] PS section could sell the offer on its own
  - [ ] Total word count is 2,500-5,000 words
```

---

## Handoff
- -> **brunson-pages** for `design-sales-page` (BR_PAG_002) — design the page layout
- -> **brunson-offers** for `build-irresistible-offer` (BR_OFR_001) — if value stack needs work
- -> **brunson-hooks** for `craft-headline-formulas` (BR_HKS_001) — test alternative headlines

---
*Task: BR_CPY_001 | Agent: brunson-copy | Version: 1.0*
