# craft-curiosity-hooks

## Metadata
```yaml
task_id: BR_HKS_002
agent: brunson-hooks
type: creation
complexity: medium
estimated_time: 30-45min
source: "Traffic Secrets — Chapter 4: Hook, Story, Offer + Expert Secrets — Creating Curiosity"
```

## Purpose
Craft curiosity-driven hooks that stop the scroll, open mental loops, and compel the audience to consume your content. Curiosity hooks are the entry point to every piece of content, ad, email, and presentation in the Brunson ecosystem.

> "Curiosity is the most powerful force in marketing. If you can make someone curious, they HAVE to find out. They can't help themselves." — Russell Brunson

---

## The Framework: Curiosity Hook Architecture

Curiosity works because of the "information gap" — when people sense they're missing a piece of knowledge they WANT to have, they experience psychological tension that can only be relieved by getting the answer.

### The 6 Curiosity Hook Types

```
TYPE                    MECHANISM                         TEMPLATE
─────────────────────   ─────────────────────────────     ──────────────────────
1. Open Question        Asks something they MUST answer   "What if [surprising claim]?"
2. Incomplete Story     Starts a narrative mid-action      "I was about to quit when..."
3. Counter-Intuitive    Contradicts their belief           "Why [common advice] is wrong"
4. Specificity          Unusually specific = must be real  "The 14-minute ritual that..."
5. Social Gap           Others know something they don't  "[Group] discovered that..."
6. Prediction           Challenges them to guess           "I bet you don't know..."
```

---

## Input Required
```yaml
input_fields:
  topic: ""
  target_avatar: ""
  common_beliefs: []            # What they currently believe
  surprising_truths: []         # Counter-intuitive facts
  specific_results: []          # Precise numbers/outcomes
  stories: []                   # Interesting anecdotes
  content_context: ""           # ad, email, social post, video, webinar
```

---

## Step-by-Step Process

### Step 1: Map the Audience's Information Gaps
Identify what your audience thinks they know vs. what's actually true.

```yaml
information_gaps:
  gap_1:
    they_believe: ""            # Common assumption
    the_truth: ""               # Counter-intuitive reality
    curiosity_angle: ""         # How to frame the gap
  gap_2:
    they_believe: ""
    the_truth: ""
    curiosity_angle: ""
  gap_3:
    they_believe: ""
    the_truth: ""
    curiosity_angle: ""
```

### Step 2: Generate Hooks Using All 6 Types
Create 3-5 hook variations for each curiosity type.

```yaml
open_question_hooks:
  - ""
  - ""
  - ""

incomplete_story_hooks:
  - ""
  - ""
  - ""

counter_intuitive_hooks:
  - ""
  - ""
  - ""

specificity_hooks:
  - ""
  - ""
  - ""

social_gap_hooks:
  - ""
  - ""
  - ""

prediction_hooks:
  - ""
  - ""
  - ""
```

### Step 3: Adapt Hooks to Content Context
Different platforms and formats require different hook lengths and styles.

```yaml
context_adaptations:
  social_media_post:
    max_length: "1 sentence (under 15 words)"
    style: "Bold, conversational"
    examples: []
  video_opening:
    max_length: "Spoken in under 5 seconds"
    style: "Direct, punchy"
    examples: []
  email_subject_line:
    max_length: "3-8 words"
    style: "Personal, intriguing"
    examples: []
  ad_headline:
    max_length: "5-12 words"
    style: "Attention-grabbing, relevant"
    examples: []
  webinar_opening:
    max_length: "1-2 sentences"
    style: "Dramatic, promise-driven"
    examples: []
```

### Step 4: Test Hook Strength
Rate each hook on the "Can't Not Click" scale.

```yaml
hook_scoring:
  criteria:
    curiosity_gap: "1-10"       # How strong is the unanswered question?
    relevance: "1-10"           # How relevant to the avatar's life?
    believability: "1-10"       # Is it too outrageous to be credible?
    specificity: "1-10"         # Does it feel real and precise?
  scoring_rule: "Only use hooks scoring 7+ out of 10 average"
```

### Step 5: Create Hook-to-Content Bridges
Each hook needs a natural bridge to the actual content or offer.

```yaml
hook_bridges:
  hook_1:
    hook: ""
    bridge: ""                  # How to transition from hook to content
    content: ""                 # What the content delivers
  hook_2:
    hook: ""
    bridge: ""
    content: ""
  hook_3:
    hook: ""
    bridge: ""
    content: ""
  rule: "The content must DELIVER on what the hook promises — no bait and switch"
```

---

## Output Template
```yaml
output:
  curiosity_hooks:
    topic: ""
    avatar: ""
    total_hooks: ""
    by_type:
      open_question: []
      incomplete_story: []
      counter_intuitive: []
      specificity: []
      social_gap: []
      prediction: []
    top_hooks:
      - hook: ""
        type: ""
        score: "/10"
        best_context: ""
      - hook: ""
        type: ""
        score: "/10"
        best_context: ""
      - hook: ""
        type: ""
        score: "/10"
        best_context: ""
    context_ready:
      social: []
      email: []
      video: []
      ad: []
```

---

## Quality Gate
```yaml
quality:
  - [ ] At least 18 hooks generated (3+ per type)
  - [ ] Each hook creates a genuine information gap
  - [ ] Hooks are specific, not vague
  - [ ] No clickbait — content delivers on the hook's promise
  - [ ] Context adaptations match platform requirements
  - [ ] Top hooks score 7+ on the strength scale
  - [ ] Hook-to-content bridges are natural, not forced
  - [ ] Hooks use the avatar's language and reference their world
```

---

## Handoff
- -> **brunson-hooks** for `create-hook-library` (BR_HKS_001) — add to master hook library
- -> **brunson-hooks** for `write-hook-story-offer` (BR_HKS_004) — build complete HSO sequences
- -> **brunson-copy** for `craft-headline-formulas` (BR_CPY_003) — use hooks in headlines

---
*Task: BR_HKS_002 | Agent: brunson-hooks | Version: 1.0*
