# design-pattern-interrupts

## Metadata
```yaml
task_id: BR_HKS_003
agent: brunson-hooks
type: creation
complexity: medium
estimated_time: 30-45min
source: "Traffic Secrets — Chapter 5: Pattern Interrupts + Expert Secrets — Breaking False Beliefs"
```

## Purpose
Design pattern interrupt sequences that break through audience autopilot mode and force conscious attention. In a world of infinite scroll, pattern interrupts are the only way to earn those critical first 3 seconds of attention.

> "Your audience is scrolling on autopilot. A pattern interrupt is the mental slap that wakes them up and makes them pay attention to YOU." — Russell Brunson

---

## The Framework: Pattern Interrupt Architecture

A pattern interrupt works by violating expectations. The human brain runs on pattern recognition — when something breaks the expected pattern, the brain must pay conscious attention to process the anomaly.

### The 5 Pattern Interrupt Categories

```
CATEGORY              MECHANISM                          EXAMPLE
─────────────────     ──────────────────────────────     ──────────────────────
1. Visual             Unexpected imagery or format        Upside-down text, bold colors
2. Verbal             Surprising opening statement        "Stop. Don't read this email."
3. Emotional          Triggers unexpected emotion         Humor in a serious niche
4. Logical            Counter-intuitive claim             "The best funnels have NO copy"
5. Structural         Breaks the content format           Video in a text feed, audio in email
```

### When to Use Pattern Interrupts
- **Ads** — First 3 seconds of video, first line of copy
- **Emails** — Subject line + first sentence
- **Social Posts** — First line (the "above the fold" of social)
- **Webinars** — First 30 seconds
- **Sales Pages** — Pre-headline + headline
- **Videos** — First 5 seconds

---

## Input Required
```yaml
input_fields:
  niche: ""
  target_avatar: ""
  platform: ""                  # Facebook, Instagram, YouTube, email, webinar
  content_type: ""              # ad, post, email, video, presentation
  expected_patterns: []         # What does the audience normally see in this context?
  avatar_emotional_state: ""    # When they encounter your content, how are they feeling?
  brand_voice: ""               # What tone can you use? (edgy, professional, playful)
```

---

## Step-by-Step Process

### Step 1: Map the Expected Patterns
Understand what the audience normally sees in the context where your content appears.

```yaml
expected_patterns:
  platform_norms:
    visual: ""                  # What do feeds normally look like?
    language: ""                # What tone do most posts/ads use?
    format: ""                  # What content format is standard?
    pacing: ""                  # How fast does content move?
  audience_expectations:
    about_your_niche: ""        # What do they expect from [niche] content?
    about_ads: ""               # What do they expect from ads?
    about_emails: ""            # What do they expect from email?
  pattern_to_break: ""          # Which specific pattern will you violate?
```

### Step 2: Design Visual Pattern Interrupts
Create visual elements that stand out from the environment.

```yaml
visual_interrupts:
  color_interrupt:
    description: ""             # Unexpected color scheme
    application: ""
  format_interrupt:
    description: ""             # Different content format than expected
    application: ""
  text_interrupt:
    description: ""             # Unusual text styling
    application: ""
  image_interrupt:
    description: ""             # Unexpected imagery
    application: ""
  examples:
    - ""
    - ""
    - ""
```

### Step 3: Design Verbal Pattern Interrupts
Craft opening statements that break linguistic expectations.

```yaml
verbal_interrupts:
  contradiction:
    pattern: "State the opposite of what they expect"
    examples:
      - "Don't buy my product."
      - "I hope you ignore this email."
      - "This is the worst advice I've ever given."
  direct_address:
    pattern: "Call out the reader's current action"
    examples:
      - "You almost scrolled past this."
      - "Before you delete this email..."
      - "I know you're about to skip this, but..."
  confession:
    pattern: "Admit something unexpected"
    examples:
      - "I was completely wrong about [topic]."
      - "I lost $50,000 following my own advice."
      - "My biggest secret? I almost gave up."
  question_interrupt:
    pattern: "Ask a question they can't ignore"
    examples:
      - "What if your entire funnel strategy is backwards?"
      - "Can I be brutally honest with you?"
      - "When was the last time [unexpected question]?"
```

### Step 4: Design Emotional Pattern Interrupts
Trigger an unexpected emotion for the context.

```yaml
emotional_interrupts:
  humor_in_serious_context:
    when: "Niche is typically serious"
    examples: []
  vulnerability_in_authority_context:
    when: "You're positioned as expert"
    examples: []
  urgency_in_casual_context:
    when: "Audience is relaxed/browsing"
    examples: []
  calm_in_hype_context:
    when: "Niche is full of hype"
    examples: []
```

### Step 5: Build Pattern Interrupt Sequences
Combine multiple interrupts into a sequence for maximum impact.

```yaml
interrupt_sequences:
  sequence_1:
    context: ""                 # Where this sequence is used
    interrupt_1: ""             # First 1-3 seconds
    bridge: ""                  # Transition to content
    content_hook: ""            # First piece of actual content
    full_example: ""
  sequence_2:
    context: ""
    interrupt_1: ""
    bridge: ""
    content_hook: ""
    full_example: ""
  sequence_3:
    context: ""
    interrupt_1: ""
    bridge: ""
    content_hook: ""
    full_example: ""
```

### Step 6: Create Platform-Specific Interrupt Templates
Adapt interrupts for each platform's unique environment.

```yaml
platform_templates:
  facebook_ad:
    visual: ""
    first_line: ""
    video_first_3sec: ""
  instagram_reel:
    visual: ""
    text_overlay: ""
    audio_hook: ""
  youtube_video:
    first_5sec: ""
    thumbnail: ""
  email:
    subject_line: ""
    first_sentence: ""
  webinar:
    first_30sec: ""
    first_slide: ""
```

---

## Output Template
```yaml
output:
  pattern_interrupts:
    niche: ""
    avatar: ""
    total_interrupts: ""
    by_type:
      visual: []
      verbal: []
      emotional: []
      logical: []
      structural: []
    sequences:
      - context: ""
        interrupt: ""
        bridge: ""
    platform_templates:
      facebook: ""
      instagram: ""
      youtube: ""
      email: ""
      webinar: ""
    top_3_recommended:
      - interrupt: ""
        context: ""
        expected_impact: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Expected patterns are mapped for the specific platform/context
  - [ ] At least 3 interrupts per category (visual, verbal, emotional, logical, structural)
  - [ ] Each interrupt has a bridge to actual content (not just shock value)
  - [ ] Interrupts are on-brand and won't alienate the target audience
  - [ ] Platform-specific templates are adapted to each platform's norms
  - [ ] Sequences show interrupt -> bridge -> content flow
  - [ ] None of the interrupts are offensive or clickbaity
  - [ ] Interrupts feel fresh, not recycled from common templates
```

---

## Handoff
- -> **brunson-hooks** for `create-hook-library` (BR_HKS_001) — add to master hook library
- -> **brunson-hooks** for `craft-curiosity-hooks` (BR_HKS_002) — pair with curiosity hooks
- -> **brunson-traffic** for `design-buy-in-campaign` (BR_TRF_004) — use in paid ad creatives

---
*Task: BR_HKS_003 | Agent: brunson-hooks | Version: 1.0*
