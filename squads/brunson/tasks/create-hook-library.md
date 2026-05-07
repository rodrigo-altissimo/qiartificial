# create-hook-library

## Metadata
```yaml
task_id: BR_HKS_001
agent: brunson-hooks
type: creation
complexity: high
estimated_time: 60-90min
source: "Traffic Secrets — Chapter 5: Hook, Story, Offer"
```

## Purpose
Create a comprehensive hook library of 50+ hooks across multiple categories, formats, and platforms. Hooks are the first 3 seconds of any piece of content — the moment someone decides to stop scrolling or keep scrolling. A deep hook library is the foundation of all traffic, content, and advertising.

> "The hook is everything. In a world of infinite content and zero attention spans, your hook is the gate between obscurity and audience. Master hooks and you master traffic." — Russell Brunson

---

## The Framework: Hook Architecture

### The Hook-Story-Offer Framework
```
HOOK  → Stop them from scrolling (3 seconds)
STORY → Keep them engaged (30-300 seconds)
OFFER → Get them to take action (the ask)
```

Without a hook, the story and offer never get seen. The hook is the single highest-leverage creative element.

### The 7 Hook Categories
```
1. CURIOSITY HOOKS    → "The thing about X that nobody talks about..."
2. CONTRARIAN HOOKS   → "Everything you've been told about X is wrong"
3. PROOF HOOKS        → "How I went from X to Y in Z days"
4. FEAR/WARNING HOOKS → "Stop doing X immediately. Here's why."
5. STORY HOOKS        → "Last Tuesday, something happened that..."
6. QUESTION HOOKS     → "Have you ever wondered why...?"
7. PATTERN INTERRUPT  → Something unexpected that stops the scroll
```

### Hook Formats by Platform
| Platform | Best Hook Format | Length |
|----------|-----------------|--------|
| Facebook/Instagram | Video first 3 sec + text | 1-2 sentences |
| YouTube | First 5 seconds + title | 5-10 seconds |
| Email | Subject line + first line | 5-10 words |
| TikTok/Reels | First frame + movement | 1-2 seconds |
| Sales Page | Headline + subheadline | 10-20 words |
| Podcast | First 30 seconds | 2-3 sentences |

---

## Input Required
```yaml
input_fields:
  target_audience: ""
  primary_pain_points: []
  dream_outcomes: []
  unique_mechanism: ""
  proof_points: []          # Results, numbers, timeframes
  contrarian_beliefs: []
  common_myths: []
  emotional_triggers: []
  platform_focus: []        # Which platforms?
  offer_name: ""
  niche: ""
```

---

## Step-by-Step Process

### Step 1: Generate Curiosity Hooks (10 hooks)
Create hooks that open a curiosity gap — the audience MUST know more.

```yaml
curiosity_hooks:
  hook_1: ""                # "The one thing about [topic] that changes everything..."
  hook_2: ""                # "I discovered something about [topic] that nobody's talking about"
  hook_3: ""                # "There's a secret [industry] insiders know that you don't"
  hook_4: ""                # "What [expert] taught me about [topic] in 5 minutes"
  hook_5: ""                # "The hidden reason why [common problem] keeps happening"
  hook_6: ""                # "I wasn't supposed to share this, but..."
  hook_7: ""                # "99% of [audience] don't know this about [topic]"
  hook_8: ""                # "The [thing] that [surprising result]"
  hook_9: ""                # "I just realized something about [topic] that blew my mind"
  hook_10: ""               # "Here's what happens when you [unexpected action]"
```

### Step 2: Generate Contrarian Hooks (8 hooks)
Challenge common beliefs to create instant engagement.

```yaml
contrarian_hooks:
  hook_1: ""                # "Everything you've been told about [topic] is wrong"
  hook_2: ""                # "[Common advice] is the worst thing you can do"
  hook_3: ""                # "I stopped [common practice] and [surprising result]"
  hook_4: ""                # "Unpopular opinion: [contrarian stance]"
  hook_5: ""                # "[Industry] experts won't tell you this because..."
  hook_6: ""                # "The [popular method] is dead. Here's what's replacing it"
  hook_7: ""                # "Why I disagree with every [expert] about [topic]"
  hook_8: ""                # "[Common belief] is a lie. Here's the truth."
```

### Step 3: Generate Proof/Results Hooks (8 hooks)
Lead with specific, verifiable results.

```yaml
proof_hooks:
  hook_1: ""                # "How I went from [bad state] to [good state] in [time]"
  hook_2: ""                # "[Specific number] in [timeframe]. Here's exactly how."
  hook_3: ""                # "My student [name] just [achieved result] in [time]"
  hook_4: ""                # "From $0 to $[amount] using nothing but [method]"
  hook_5: ""                # "I tested [X] vs [Y] for 30 days. The results shocked me."
  hook_6: ""                # "Here are my actual numbers: [specific data]"
  hook_7: ""                # "[Number] people have used this to [result]"
  hook_8: ""                # "We just hit [milestone]. Here's the one thing that made it happen."
```

### Step 4: Generate Fear/Warning Hooks (7 hooks)
Trigger loss aversion to create urgency.

```yaml
fear_warning_hooks:
  hook_1: ""                # "If you're still [doing X], you're losing [Y] every day"
  hook_2: ""                # "Warning: [common practice] is silently killing your [result]"
  hook_3: ""                # "Stop! Before you [common action], watch this"
  hook_4: ""                # "The biggest mistake [audience] make (and how to fix it)"
  hook_5: ""                # "[X] things that are sabotaging your [result] right now"
  hook_6: ""                # "I wish someone had told me this before I [mistake]"
  hook_7: ""                # "You're about to make a huge mistake with [topic]"
```

### Step 5: Generate Story Hooks (7 hooks)
Open with a story that pulls them in.

```yaml
story_hooks:
  hook_1: ""                # "Last [day], something happened that changed everything"
  hook_2: ""                # "I'll never forget the day [dramatic moment]"
  hook_3: ""                # "A [person] just emailed me something that made me cry"
  hook_4: ""                # "I almost didn't share this, but... [opens story]"
  hook_5: ""                # "Picture this: [scene-setting]"
  hook_6: ""                # "3 years ago, I was [bad situation]. Today, I'm [good situation]"
  hook_7: ""                # "My [friend/mentor/student] said one thing that changed my life"
```

### Step 6: Generate Question Hooks (5 hooks)
Ask questions that the audience needs answered.

```yaml
question_hooks:
  hook_1: ""                # "Have you ever wondered why [frustrating thing]?"
  hook_2: ""                # "What would you do if [dream scenario]?"
  hook_3: ""                # "Can I be honest with you about [topic]?"
  hook_4: ""                # "What if everything you knew about [topic] was wrong?"
  hook_5: ""                # "Why do some [people] [succeed] while others [fail]?"
```

### Step 7: Generate Pattern Interrupt Hooks (5 hooks)
Break expectations to force attention.

```yaml
pattern_interrupt_hooks:
  hook_1: ""                # "[Unexpected statement] — let me explain"
  hook_2: ""                # "Don't read this if you're happy with [current situation]"
  hook_3: ""                # "[Number/stat] — and it's about to get worse"
  hook_4: ""                # "I'm going to say something controversial..."
  hook_5: ""                # "[One word/phrase that shocks]"
```

### Step 8: Adapt Top Hooks for Each Platform
Take the best 10 hooks and adapt for each platform.

```yaml
platform_adaptations:
  top_hooks: []             # Your best 10 hooks
  adaptations:
    facebook_ad:
      hook_1:
        primary_text: ""
        video_opening: ""
        image_text: ""
    instagram_reel:
      hook_1:
        text_overlay: ""
        spoken_hook: ""
    youtube:
      hook_1:
        title: ""
        thumbnail_text: ""
        first_5_seconds: ""
    email:
      hook_1:
        subject_line: ""
        first_line: ""
    tiktok:
      hook_1:
        text_overlay: ""
        spoken_hook: ""
```

### Step 9: Create the Testing Framework
Plan how to test and identify winning hooks.

```yaml
testing_framework:
  test_method: ""           # A/B test, multivariate, sequential
  success_metrics:
    video: "3-second view rate > 40%"
    ad: "CTR > 2%"
    email: "Open rate > 30%"
    sales_page: "Scroll depth > 50%"
  testing_cadence: ""       # How many new hooks per week?
  winner_criteria: ""
  documentation: ""         # How to track winning hooks
```

---

## Output Template
```yaml
output:
  hook_library:
    total_hooks: 0
    categories:
      curiosity: 10
      contrarian: 8
      proof: 8
      fear: 7
      story: 7
      question: 5
      pattern_interrupt: 5
    platform_adapted: 0
    top_10_ranked: []
    testing_plan: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] At least 50 hooks generated across all categories
  - [ ] Each hook is specific to the niche (not generic)
  - [ ] Hooks include specific numbers, names, or timeframes where possible
  - [ ] Top 10 adapted for at least 3 platforms
  - [ ] Testing framework is defined
  - [ ] No hook is longer than 2 sentences
  - [ ] Hooks create genuine curiosity (not clickbait that disappoints)
  - [ ] Mix of emotional triggers (curiosity, fear, desire, proof)
  - [ ] All 7 categories are represented
```

---

## Handoff
- → **brunson-hooks** for `design-ad-hooks` (BR_HKS_002) — select hooks for campaigns
- → **brunson-copy** for `create-headline-set` (BR_CPY_004) — adapt hooks as headlines
- → **brunson-traffic** for `design-buy-in-campaign` (BR_TRF_004) — use hooks in ads
- → **brunson-email** for subject line optimization

---
*Task: BR_HKS_001 | Agent: brunson-hooks | Version: 1.0*
