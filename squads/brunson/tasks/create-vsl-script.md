# create-vsl-script

## Metadata
```yaml
task_id: BR_CPY_001
agent: brunson-copy
type: creation
complexity: high
estimated_time: 90-120min
source: "DotCom Secrets — Chapter 8: VSL Funnels"
```

## Purpose
Create a complete Video Sales Letter (VSL) script that converts cold traffic into buyers. The VSL is a spoken sales page — same persuasion architecture, delivered through video for higher engagement and trust.

> "A VSL is just a sales letter that talks. But because people watch instead of read, you control the pace, the emotion, and the experience. That's power." — Russell Brunson

---

## The Framework: VSL Architecture

### VSL Duration by Price Point
| Price | Duration | Structure |
|-------|----------|-----------|
| $7-$27 | 5-12 min | Short-form, direct |
| $27-$97 | 12-25 min | Medium, story-driven |
| $97-$497 | 25-45 min | Long-form, full persuasion |
| $497-$2,997 | 45-90 min | Webinar-style VSL |

### The VSL Blueprint
```
HOOK (5%) → STORY (20%) → CONTENT (30%) → OFFER (25%) → CLOSE (15%) → FAQ (5%)
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
  proof_points: []
  offer_components: []
  bonuses: []
  guarantee: ""
  competitors: []
  objections: []
  desired_vsl_length: ""
```

---

## Step-by-Step Process

### Step 1: Write the Hook (First 30-60 Seconds)
The hook determines whether they watch or leave. This is the most important part.

```yaml
hook:
  pattern_interrupt:
    line: ""                # "Stop. What I'm about to show you will change everything."
    visual: ""              # What appears on screen?
  big_promise:
    line: ""                # "In the next X minutes, you'll discover how to..."
  curiosity_builder:
    line: ""                # "And it has nothing to do with [expected approach]..."
  credibility_flash:
    line: ""                # Brief proof: "I've used this to generate $X..."
  keep_watching_hook:
    line: ""                # "Stay until the end because I'll show you [bonus]..."
```

**Hook Types (pick one or combine):**
1. **The Bold Claim** — "What if I told you [big claim]?"
2. **The Shocking Stat** — "97% of [audience] fail because..."
3. **The Counter-Intuitive** — "Everything you've been told about [topic] is wrong"
4. **The Story Open** — "Last Tuesday, something happened that..."
5. **The Question** — "Have you ever wondered why [frustration]?"

### Step 2: Write the Story Section
Build connection, credibility, and set up the mechanism.

```yaml
story_section:
  the_struggle:
    relatable_situation: ""
    failed_attempts: []     # "I tried X, then Y, then Z..."
    emotional_low: ""       # "I was about to give up when..."
  the_discovery:
    how_you_found_it: ""
    the_aha_moment: ""
    why_its_different: ""
  the_first_result:
    what_happened: ""
    specific_numbers: ""
    timeframe: ""
  the_mission:
    why_youre_sharing: ""
    who_its_for: ""
    what_it_means: ""
```

### Step 3: Write the Content/Teaching Section
Deliver value and introduce the mechanism. This builds the case for the offer.

```yaml
content_section:
  problem_amplification:
    the_real_problem: ""    # The problem behind the problem
    why_common_solutions_fail: ""
    what_this_costs_them: ""
  the_mechanism:
    name: ""
    how_it_works: ""        # Simple explanation
    why_its_different: ""
    proof_it_works:
      - proof_point_1: ""
      - proof_point_2: ""
      - proof_point_3: ""
  mini_teaching:
    concept_1:
      name: ""
      explanation: ""
      micro_story: ""       # Brief supporting story
    concept_2:
      name: ""
      explanation: ""
      micro_story: ""
    concept_3:
      name: ""
      explanation: ""
      micro_story: ""
  transition_to_offer: ""   # "So at this point, you probably want to know how to get started..."
```

### Step 4: Write the Offer Section
Present the stack and build value.

```yaml
offer_section:
  introduction: ""          # "Let me tell you about [offer name]..."
  component_reveals:
    component_1:
      name: ""
      what_it_is: ""
      what_it_does: ""
      value: ""
      script: ""            # "The first thing you get is..."
    component_2:
      name: ""
      what_it_is: ""
      what_it_does: ""
      value: ""
      script: ""
    component_3:
      name: ""
      what_it_is: ""
      what_it_does: ""
      value: ""
      script: ""
  bonus_reveals:
    bonus_1:
      name: ""
      value: ""
      urgency: ""
      script: ""
    bonus_2:
      name: ""
      value: ""
      script: ""
  value_stack_total: ""
  price_reveal:
    anchor: ""              # "You might expect to pay $X..."
    actual_price: ""
    payment_plan: ""
    daily_cost: ""          # "That's less than $X per day"
```

### Step 5: Write the Close Section
Drive the decision and handle objections.

```yaml
close_section:
  guarantee:
    type: ""
    duration: ""
    script: ""              # "And here's my guarantee..."
  urgency:
    mechanism: ""
    script: ""
    deadline: ""
  two_paths_close:
    path_1: ""              # "You can keep doing what you're doing..."
    path_2: ""              # "Or you can take this new path..."
    consequence: ""         # "A year from now, which version of you do you want to be?"
  cta:
    primary: ""             # "Click the button below this video..."
    secondary: ""           # "Spots are limited..."
  final_proof:
    testimonial: ""         # One powerful testimonial
    result: ""
```

### Step 6: Write the FAQ/Objection Handling Section
Address remaining concerns.

```yaml
faq_section:
  faq_1:
    question: ""
    answer: ""
  faq_2:
    question: ""
    answer: ""
  faq_3:
    question: ""
    answer: ""
  faq_4:
    question: ""
    answer: ""
  faq_5:
    question: ""
    answer: ""
  final_cta: ""             # "Still here? That tells me you're serious..."
```

### Step 7: Add Production Notes
Technical directions for video production.

```yaml
production_notes:
  visual_style: ""          # Talking head, slides, screen share, B-roll
  slide_count: 0
  b_roll_needed: []
  text_overlays: []
  testimonial_clips: []
  music_cues: []
  timing_markers:
    hook: "0:00 - 1:00"
    story: "1:00 - 5:00"
    content: "5:00 - 15:00"
    offer: "15:00 - 22:00"
    close: "22:00 - 27:00"
    faq: "27:00 - 30:00"
  total_duration: ""
  estimated_word_count: 0   # ~150 words per minute
```

---

## Output Template
```yaml
output:
  vsl_script:
    title: ""
    duration: ""
    word_count: 0
    sections:
      hook: ""
      story: ""
      content: ""
      offer: ""
      close: ""
      faq: ""
    slides_needed: 0
    testimonials_needed: 0
    production_style: ""
    target_conversion: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Hook captures attention in first 15 seconds
  - [ ] Story builds emotional connection and credibility
  - [ ] Content teaches enough to create desire for more
  - [ ] Offer stack has 3+ components with assigned values
  - [ ] Price reveal is anchored against higher value
  - [ ] Guarantee removes risk completely
  - [ ] At least 5 objections addressed in FAQ
  - [ ] Script reads naturally when spoken aloud
  - [ ] Total duration matches price point
```

---

## Handoff
- → **brunson-funnels** for funnel integration (BR_FUN_003)
- → **brunson-hooks** for `design-ad-hooks` (BR_HKS_002) — create ad hooks from VSL
- → **brunson-email** for follow-up sequence after VSL
- → Production team for filming

---
*Task: BR_CPY_001 | Agent: brunson-copy | Version: 1.0*
