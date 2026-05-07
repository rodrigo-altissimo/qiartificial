# write-hook-story-offer

## Metadata
```yaml
task_id: BR_HKS_004
agent: brunson-hooks
type: creation
complexity: high
estimated_time: 45-60min
source: "Traffic Secrets — Chapter 3: Hook, Story, Offer Framework"
```

## Purpose
Write a complete Hook-Story-Offer (HSO) sequence — Brunson's universal content framework. Every piece of content that generates revenue follows this exact pattern: grab attention with a Hook, build connection with a Story, and convert with an Offer. HSO is the atomic unit of all Brunson marketing.

> "Hook, Story, Offer. That's it. Every ad, every email, every post, every webinar. Master this framework and you can sell anything to anyone." — Russell Brunson

---

## The Framework: Hook-Story-Offer Architecture

HSO is Brunson's unified content formula. It applies to a 15-second Instagram Reel and a 90-minute webinar — the only difference is scale.

### The 3 Components

```
┌──────────────────────┐
│  HOOK (3-10 seconds)  │  → Stop the scroll / grab attention
│  "Wait, what?"        │  → Create curiosity gap
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│  STORY (60-80% time)  │  → Build emotional connection
│  "I relate to this"   │  → Deliver value through narrative
│                       │  → Break false beliefs
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│  OFFER (10-20% time)  │  → Present the next step
│  "I need this"        │  → Make the ask
└──────────────────────┘
```

### Time Allocation by Format

```
FORMAT                 HOOK          STORY         OFFER
─────────────────     ─────────     ──────────    ──────────
Social Post           Line 1        Lines 2-8     Last 2 lines
Email                 Subject+L1    Body          CTA paragraph
Short Video (60s)     0-5 sec       5-50 sec      50-60 sec
Long Video (15min)    0-30 sec      30s-12min     12-15 min
Webinar (90min)       0-5 min       5-60 min      60-90 min
Sales Letter          Headline      Body          Close
Ad                    Image+Line1   Body copy     CTA
```

---

## Input Required
```yaml
input_fields:
  format: ""                    # social post, email, video, ad, webinar
  topic: ""
  target_avatar: ""
  offer_or_cta: ""              # What do you want them to do?
  story_source: ""              # Personal, case study, parable
  hook_type: ""                 # curiosity, controversy, pain, result
  total_length: ""              # word count or duration
```

---

## Step-by-Step Process

### Step 1: Craft the Hook
The hook must accomplish ONE thing: earn the next 5 seconds of attention.

```yaml
hook:
  type: ""                      # curiosity, pain, result, controversy, question
  primary_hook: ""              # The opening line/visual
  backup_hooks:
    - ""                        # Alternative hook 1
    - ""                        # Alternative hook 2
  test: "Would YOU stop scrolling if you saw this?"
  rules:
    - Must work in isolation (no context needed)
    - Must create an unanswered question
    - Must be relevant to the avatar (not just anyone)
    - Must be honest (delivers on the promise)
```

### Step 2: Build the Story
The story is the vehicle for your message. It builds trust, teaches, and breaks false beliefs.

```yaml
story:
  type: ""                      # epiphany_bridge, case_study, parable, personal
  structure:
    character: ""               # Who is the protagonist? (you, a client, a hypothetical)
    situation: ""               # Where were they? (relatable starting point)
    problem: ""                 # What challenge did they face?
    attempt: ""                 # What did they try that didn't work?
    discovery: ""               # What did they discover/learn?
    result: ""                  # What happened after the discovery?
    lesson: ""                  # What should the audience take away?
  emotional_arc:
    start: ""                   # Opening emotion (curiosity, recognition)
    middle: ""                  # Peak emotion (empathy, hope)
    end: ""                     # Closing emotion (desire, confidence)
  word_count: ""                # 60-80% of total length
  rules:
    - Show, don't tell
    - Use specific sensory details
    - The lesson must naturally lead to the offer
    - Never preach — let the story do the teaching
```

### Step 3: Present the Offer
The offer is the natural next step after the story. It should feel like a service, not a pitch.

```yaml
offer:
  transition: ""                # "So here's what I want you to do..."
  what_it_is: ""                # Clear description of the CTA/offer
  why_now: ""                   # Why should they act immediately?
  how_to_get_it: ""             # Specific instruction (click, comment, DM, buy)
  risk_removal: ""              # "It's free" / "Money-back guarantee" / "No commitment"
  cta_text: ""                  # The exact words of the call to action
  rules:
    - Must flow naturally from the story
    - Must feel like helping, not selling
    - Must be ONE clear action (not multiple)
    - Must include a reason to act NOW
```

### Step 4: Write the Complete HSO Sequence
Assemble all three components into the final piece.

```yaml
complete_hso:
  format: ""
  total_length: ""
  hook: ""
  story: ""
  offer: ""
  full_text: ""                 # The complete piece, ready to publish
```

### Step 5: Create Variations for Different Platforms
Adapt the same HSO for multiple content channels.

```yaml
platform_variations:
  social_post:
    hook: ""
    story: ""                   # Condensed version
    offer: ""
    total_length: ""
  email:
    subject: ""                 # Hook as subject line
    body: ""                    # Story as email body
    cta: ""                     # Offer as CTA
  short_video:
    hook_0_5s: ""
    story_5_50s: ""
    offer_50_60s: ""
  ad:
    hook_visual: ""
    hook_text: ""
    story_body: ""
    offer_cta: ""
```

### Step 6: Validate the HSO Flow
Ensure the three components work as a cohesive unit.

```yaml
validation:
  hook_to_story:
    smooth_transition: true/false
    curiosity_maintained: true/false
  story_to_offer:
    natural_bridge: true/false
    offer_feels_earned: true/false
  overall:
    single_clear_message: true/false
    avatar_sees_themselves: true/false
    cta_is_obvious: true/false
```

---

## Output Template
```yaml
output:
  hso_sequence:
    format: ""
    topic: ""
    avatar: ""
    hook:
      text: ""
      type: ""
    story:
      type: ""
      summary: ""
      word_count: ""
    offer:
      cta: ""
      action: ""
    full_piece: ""
    platform_variations:
      social: ""
      email: ""
      video: ""
      ad: ""
    estimated_performance:
      engagement: ""
      click_through: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Hook stops the scroll in under 5 seconds
  - [ ] Story creates genuine emotional connection
  - [ ] Story naturally leads to the offer (not forced)
  - [ ] Offer is ONE clear action
  - [ ] HSO works as a standalone piece (no additional context needed)
  - [ ] Platform variations are adapted, not just copy-pasted
  - [ ] Time/length allocation follows the 10/70/20 rule
  - [ ] The entire piece could be consumed by someone who's never heard of you
```

---

## Handoff
- -> **brunson-hooks** for `create-hook-library` (BR_HKS_001) — add hooks to master library
- -> **brunson-stories** for `craft-origin-story` (BR_STR_001) — develop deeper story versions
- -> **brunson-traffic** for `design-work-in-campaign` (BR_TRF_003) — use HSO in organic content

---
*Task: BR_HKS_004 | Agent: brunson-hooks | Version: 1.0*
