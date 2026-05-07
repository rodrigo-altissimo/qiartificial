# write-sales-page

## Metadata
```yaml
task_id: BR_CPY_002
agent: brunson-copy
type: creation
complexity: high
estimated_time: 90-120min
source: "DotCom Secrets — Chapter 8-9: Scripts & Sales Pages"
```

## Purpose
Write a complete sales page following Russell Brunson's long-form sales page architecture. Every section has a specific psychological purpose, and the page flows from attention through conviction to action.

> "A sales page is not a wall of text. It's a conversation. Every section answers the ONE question the reader has at that exact moment." — Russell Brunson

---

## The Framework: Sales Page Architecture

### The 12-Section Sales Page Blueprint
```
1.  PRE-HEADLINE          → Qualify the reader
2.  HEADLINE               → Make the big promise
3.  SUB-HEADLINE          → Expand and intrigue
4.  OPENING STORY         → Build connection
5.  PROBLEM AMPLIFICATION → Twist the knife
6.  THE SOLUTION          → Introduce the mechanism
7.  SOCIAL PROOF          → Build trust
8.  THE OFFER (STACK)     → Present everything they get
9.  PRICE REVEAL          → Anchor and reveal
10. GUARANTEE             → Remove risk
11. URGENCY/SCARCITY      → Drive action now
12. CTA + FAQ             → Close and handle objections
```

### Reading Flow Psychology
```
Pre-headline → "Am I in the right place?"
Headline → "What's in it for me?"
Story → "Do I trust this person?"
Problem → "Yes, that's exactly my problem!"
Solution → "Could this really work?"
Proof → "It works for others like me!"
Offer → "What do I get?"
Price → "Can I afford this?"
Guarantee → "What if it doesn't work?"
Urgency → "Why should I act now?"
CTA → "What do I do next?"
```

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  offer_price: ""
  target_audience: ""
  primary_pain_point: ""
  dream_outcome: ""
  unique_mechanism: ""
  origin_story: ""
  big_domino: ""
  false_beliefs: ""
  offer_components: []
  bonuses: []
  guarantee_type: ""
  testimonials: []
  urgency_mechanism: ""
  competitor_comparison: ""
```

---

## Step-by-Step Process

### Step 1: Write the Above-the-Fold Section
Everything visible before scrolling. This determines if they keep reading.

```yaml
above_the_fold:
  pre_headline: ""          # "Attention [Target Audience]:"
  headline: ""              # The big promise in one sentence
  sub_headline: ""          # Expand, add intrigue, handle #1 objection
  hero_visual: ""           # Product image, video thumbnail, or results image
  mini_cta: ""              # Optional: "Watch the free training" or "Scroll to learn more"
```

**Headline Formulas:**
- "How to [Dream Outcome] Without [Pain Point]"
- "The [Mechanism] That [Big Promise] in [Timeframe]"
- "[Number] [Audience] Are Using [Method] to [Result]"
- "Finally: [Dream Outcome] — Even If [Biggest Objection]"

### Step 2: Write the Opening Story
Build connection and set up the problem.

```yaml
opening_story:
  hook_line: ""             # "Let me ask you something..."
  relatable_pain: ""        # Mirror their current situation
  your_backstory: ""        # Brief version of your struggle
  failed_attempts: ""       # "I tried X, Y, Z — nothing worked"
  the_turning_point: ""     # "Until one day..."
  discovery: ""             # "I discovered [mechanism]"
  result_tease: ""          # "And within [timeframe], everything changed"
  bridge_to_reader: ""      # "And that's exactly what I want to share with you..."
```

### Step 3: Write the Problem Amplification
Make them feel the pain of NOT solving this problem.

```yaml
problem_amplification:
  the_real_problem: ""      # The problem behind the problem
  why_it_matters: ""        # Long-term consequences
  what_its_costing: ""      # Financial, emotional, time costs
  common_mistakes:
    mistake_1:
      what: ""
      why_it_fails: ""
    mistake_2:
      what: ""
      why_it_fails: ""
    mistake_3:
      what: ""
      why_it_fails: ""
  the_truth: ""             # "Here's what nobody tells you..."
  bridge_to_solution: ""    # "But what if there was a better way?"
```

### Step 4: Write the Solution Section
Introduce your unique mechanism and approach.

```yaml
solution_section:
  introducing: ""           # "Introducing [Offer Name]..."
  what_it_is: ""            # One-paragraph explanation
  how_its_different: ""     # From everything they've tried
  the_mechanism: ""         # Named, specific mechanism
  why_it_works: ""          # Logical explanation
  who_its_for:
    ideal_customer_1: ""
    ideal_customer_2: ""
    ideal_customer_3: ""
  who_its_not_for:
    wrong_fit_1: ""
    wrong_fit_2: ""
```

### Step 5: Write the Social Proof Section
Build undeniable credibility.

```yaml
social_proof:
  headline: ""              # "Don't Take Our Word For It..."
  testimonial_1:
    name: ""
    result: ""
    quote: ""
    before_after: ""
  testimonial_2:
    name: ""
    result: ""
    quote: ""
  testimonial_3:
    name: ""
    result: ""
    quote: ""
  data_points:
    - stat: ""              # "10,000+ students enrolled"
    - stat: ""              # "$50M+ generated by our students"
  media_mentions: []
  case_study_brief: ""      # One detailed success story
```

### Step 6: Write the Offer Stack Section
Present everything they get with assigned values.

```yaml
offer_stack:
  section_headline: ""      # "Here's Everything You Get Today..."
  core_offer:
    name: ""
    description: ""
    value: ""
    what_it_includes: []
  component_2:
    name: ""
    description: ""
    value: ""
  component_3:
    name: ""
    description: ""
    value: ""
  bonus_1:
    name: ""
    description: ""
    value: ""
    urgency: ""
  bonus_2:
    name: ""
    description: ""
    value: ""
  bonus_3:
    name: ""
    description: ""
    value: ""
  total_value: ""
```

### Step 7: Write the Price, Guarantee, and Close
The final conversion sequence.

```yaml
price_guarantee_close:
  price_section:
    anchor_comparison: ""   # "A private consultant would charge $X..."
    alternative_cost: ""    # "Most programs in this space cost $X..."
    crossed_out_price: ""   # "Not $2,997..."
    actual_price: ""
    payment_plan: ""
    daily_cost: ""          # "Less than your daily coffee"
  guarantee:
    type: ""
    duration: ""
    headline: ""
    description: ""
    risk_reversal: ""       # "If you don't get [result], you don't pay"
  urgency:
    mechanism: ""
    deadline: ""
    consequence: ""         # What happens if they miss it
    why_now: ""             # Legitimate reason for urgency
  cta:
    button_text: ""
    url: ""
    below_button: ""        # "Join 10,000+ members..."
  faq:
    - question: ""
      answer: ""
    - question: ""
      answer: ""
    - question: ""
      answer: ""
    - question: ""
      answer: ""
    - question: ""
      answer: ""
  final_cta:
    closing_statement: ""
    button_text: ""
    ps_line: ""             # The P.S. that recaps the key offer
```

---

## Output Template
```yaml
output:
  sales_page:
    offer: ""
    price: ""
    total_sections: 12
    estimated_word_count: 0
    estimated_read_time: ""
    key_elements:
      headlines: []
      testimonials_used: 0
      value_stack_total: ""
      guarantee_type: ""
      urgency_mechanism: ""
    cta_count: 0            # Multiple CTAs throughout
```

---

## Quality Gate
```yaml
quality:
  - [ ] Headline makes a clear, specific promise
  - [ ] Opening story is relatable and builds trust
  - [ ] Problem amplification creates emotional urgency
  - [ ] Solution section introduces a named mechanism
  - [ ] At least 3 testimonials with specific results
  - [ ] Offer stack values total 10x+ the price
  - [ ] Guarantee removes all perceived risk
  - [ ] At least 3 CTAs placed throughout the page
  - [ ] FAQ addresses top 5 objections
  - [ ] P.S. line recaps the strongest selling point
  - [ ] Page reads conversationally (not like a textbook)
```

---

## Handoff
- → **brunson-funnels** for funnel integration (BR_FUN_003)
- → **brunson-hooks** for `create-headline-set` (BR_CPY_004) — test headline variations
- → **brunson-offers** for `create-value-stack` (BR_OFR_001) — refine the stack
- → Design team for visual layout

---
*Task: BR_CPY_002 | Agent: brunson-copy | Version: 1.0*
