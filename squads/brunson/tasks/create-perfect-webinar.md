# create-perfect-webinar

## Metadata
```yaml
task_id: BR_WEB_001
agent: brunson-webinar
type: creation
complexity: high
estimated_time: 90-120min
source: "Expert Secrets — Chapter 11-15: The Perfect Webinar"
```

## Purpose
Create a complete Perfect Webinar script following Russell Brunson's proven framework. The Perfect Webinar is a 60-90 minute presentation designed to sell $297-$2,997 offers with a specific psychological architecture that moves the audience from curiosity to conviction.

> "The Perfect Webinar is the most powerful selling tool in history. I've used it to generate over $100 million. And the structure never changes — only the content." — Russell Brunson

---

## The Framework: Perfect Webinar Structure

### The 4 Sections (60-90 Minutes)
```
Section 1: THE INTRO (5-10 min)
  → Build rapport, set expectations, make The Big Promise

Section 2: THE CONTENT (30-40 min)
  → Teach 3 Secrets, each with an Epiphany Bridge
  → Break Vehicle, Internal, and External false beliefs

Section 3: THE STACK (10-15 min)
  → Present the offer using Stack Slide methodology
  → Build irresistible value perception

Section 4: THE CLOSE (10-15 min)
  → Handle objections, create urgency, call to action
  → Trial close, guarantee, final push
```

### The Perfect Webinar Formula
```
Big Promise + 3 Secrets (Epiphany Bridges) + Stack + Close = Sales
```

---

## Input Required
```yaml
input_fields:
  offer_name: ""
  offer_price: ""
  target_audience: ""
  big_domino: ""            # From BR_EXP_003
  false_beliefs: ""         # From BR_EXP_004
  new_opportunity: ""       # From BR_EXP_002
  your_origin_story: ""
  three_secrets_topics: []
  offer_components: []
  bonuses: []
  guarantee_type: ""
  urgency_mechanism: ""
  testimonials: []
```

---

## Step-by-Step Process

### Step 1: Write the Intro Section
Set the stage for the entire presentation.

```yaml
intro_script:
  welcome:
    opening_line: ""        # "Hey everyone, welcome! I'm so excited..."
    credibility_statement: "" # Brief proof of authority
    big_promise: ""         # "By the end of this training, you'll know exactly how to..."
  rules:
    rule_1: "Take notes — this is dense content"
    rule_2: "Stay until the end — the best is last"
    rule_3: "Keep an open mind"
  hook_story:
    brief_origin: ""        # 2-minute version of your story
    epiphany_moment: ""     # "Then I discovered..."
    result_preview: ""      # "And that's what I'm going to share with you today"
  framework_introduction:
    framework_name: ""      # Name your teaching framework
    overview: ""            # "I'm going to share 3 secrets with you..."
    secret_1_tease: ""
    secret_2_tease: ""
    secret_3_tease: ""
```

### Step 2: Write Secret #1 (Vehicle — "The New Opportunity")
Break the VEHICLE false belief. Teach why your approach is the right vehicle.

```yaml
secret_1:
  title: ""                 # "Secret #1: [Catchy Name]"
  false_belief_targeted: "" # The vehicle false belief
  teaching_content:
    concept: ""             # The main idea/principle
    framework: ""           # A mini-framework within the secret
    example: ""             # Concrete example
  epiphany_bridge:
    backstory: ""           # Start the story
    journey: ""             # The search/struggle
    epiphany_moment: ""     # The breakthrough
    new_belief: ""          # What they should now believe
    result: ""              # What happened after
  transition_to_secret_2: "" # "Now that you understand [Secret 1], you might be wondering..."
```

**Brunson's Rule:** "Secret 1 must destroy their current belief about WHAT vehicle to use. Replace it with your new opportunity."

### Step 3: Write Secret #2 (Internal — "You Can Do This")
Break the INTERNAL false belief. Show them they have what it takes.

```yaml
secret_2:
  title: ""                 # "Secret #2: [Catchy Name]"
  false_belief_targeted: "" # The internal false belief
  teaching_content:
    concept: ""
    framework: ""
    example: ""
  epiphany_bridge:
    backstory: ""           # Ideally a student/client story
    journey: ""
    epiphany_moment: ""
    new_belief: ""
    result: ""
  social_proof:
    testimonial_1: ""       # Someone like them who succeeded
    testimonial_2: ""
  transition_to_secret_3: ""
```

### Step 4: Write Secret #3 (External — "Nothing Can Stop You")
Break the EXTERNAL false belief. Remove perceived obstacles.

```yaml
secret_3:
  title: ""                 # "Secret #3: [Catchy Name]"
  false_belief_targeted: "" # The external false belief
  teaching_content:
    concept: ""
    framework: ""
    example: ""
  epiphany_bridge:
    backstory: ""
    journey: ""
    epiphany_moment: ""
    new_belief: ""
    result: ""
  vision_of_future:
    what_life_looks_like: "" # Paint the picture of success
    contrast_with_status_quo: "" # vs. staying where they are
  transition_to_offer: ""   # "So now let me show you how to get all of this..."
```

### Step 5: Write the Stack Slide
Present the offer using the Stack methodology.

```yaml
stack_slide:
  offer_name: ""
  components:
    component_1:
      name: ""
      description: ""
      value: ""             # Dollar value
    component_2:
      name: ""
      description: ""
      value: ""
    component_3:
      name: ""
      description: ""
      value: ""
  bonuses:
    bonus_1:
      name: ""
      description: ""
      value: ""
      urgency: ""           # "Only for those who join today"
    bonus_2:
      name: ""
      description: ""
      value: ""
    bonus_3:
      name: ""
      description: ""
      value: ""
  total_value: ""
  actual_price: ""
  savings: ""
  price_anchor: ""          # "If you hired me privately it would cost..."
  guarantee:
    type: ""                # 30-day, results-based, unconditional
    description: ""
```

**Brunson's Stack Rule:** "Never present the price before the stack. Build value until the price feels like a steal."

### Step 6: Write the Close
The closing sequence that drives action.

```yaml
close_script:
  trial_close:
    question: ""            # "If I could show you everything for just $X, would that be worth it?"
    emotional_trigger: ""
  urgency:
    scarcity: ""            # Limited spots, limited time, bonuses expire
    reason_why: ""          # Why the urgency is legitimate
  objection_handling:
    objection_1:
      objection: ""
      response: ""
    objection_2:
      objection: ""
      response: ""
    objection_3:
      objection: ""
      response: ""
  two_choices_close:
    choice_1: ""            # "You can keep doing what you're doing..."
    choice_2: ""            # "Or you can take this new path..."
  final_cta:
    action: ""              # "Click the button below..."
    url: ""
    deadline: ""
  post_close:
    last_testimonial: ""
    final_words: ""
```

### Step 7: Write the Transitions and Timing
Map the timing for the entire presentation.

```yaml
timing_map:
  intro: "0:00 - 10:00"
  secret_1: "10:00 - 25:00"
  secret_2: "25:00 - 40:00"
  secret_3: "40:00 - 55:00"
  stack: "55:00 - 65:00"
  close: "65:00 - 75:00"
  qa_close: "75:00 - 90:00"
  total_duration: "75-90 minutes"
```

---

## Output Template
```yaml
output:
  perfect_webinar:
    title: ""
    duration: ""
    offer: ""
    price: ""
    sections:
      intro: ""
      secret_1: ""
      secret_2: ""
      secret_3: ""
      stack: ""
      close: ""
    total_word_count: 0
    slides_needed: 0
    testimonials_needed: 0
    estimated_conversion: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] All 4 sections are complete (Intro, Content, Stack, Close)
  - [ ] 3 Secrets each target a different belief type (Vehicle/Internal/External)
  - [ ] Each Secret has a full Epiphany Bridge story
  - [ ] Stack Slide has at least 3 components + 2 bonuses
  - [ ] Total value is at least 10x the price
  - [ ] Close includes urgency, objection handling, and clear CTA
  - [ ] Transitions between sections are smooth
  - [ ] Script can be delivered in 60-90 minutes
```

---

## Handoff
- → **brunson-webinar** for `design-stack-slide` (BR_WEB_002) — refine the stack
- → **brunson-webinar** for `plan-webinar-funnel` (BR_WEB_004) — build the funnel around it
- → **brunson-copy** for polish and optimization
- → **brunson-email** for follow-up sequences

---
*Task: BR_WEB_001 | Agent: brunson-webinar | Version: 1.0*
