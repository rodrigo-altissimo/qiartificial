# design-ad-hooks

## Metadata
```yaml
task_id: BR_HKS_002
agent: brunson-hooks
type: creation
complexity: medium
estimated_time: 45-60min
source: "Traffic Secrets — Chapter 6: Ad Creative Strategy"
```

## Purpose
Design a complete ad hook set for a specific campaign, including visual hooks, text hooks, and video hooks across multiple angles. Each hook set is designed for A/B testing to find the winner that scales.

> "The hook is not the ad. The hook is the reason they stop scrolling. Get the hook right and everything else follows. Get it wrong and you're invisible." — Russell Brunson

---

## The Framework: Ad Hook Set Architecture

### The 3 Components of Every Ad
```
1. THE HOOK      → First 1-3 seconds (stops the scroll)
2. THE STORY     → Next 15-60 seconds (builds engagement)
3. THE OFFER     → Final CTA (drives action)
```

### Hook Testing Matrix
For every campaign, create hooks across multiple ANGLES and FORMATS:

```
              IMAGE    VIDEO    CAROUSEL    TEXT-ONLY
CURIOSITY     ✓        ✓         ✓           ✓
PROOF         ✓        ✓         ✓           ✓
CONTRARIAN    ✓        ✓         ✓           ✓
FEAR          ✓        ✓         ✓           ✓
STORY         -        ✓         -           ✓
```

### Brunson's Ad Hook Rule
"Create 5-10 hooks per campaign. Test them with minimal budget. Scale the winners. Kill the losers. Repeat weekly."

---

## Input Required
```yaml
input_fields:
  campaign_name: ""
  campaign_goal: ""         # Leads, Sales, Webinar Registration, Traffic
  offer_name: ""
  offer_price: ""
  target_audience: ""
  platform: ""              # Facebook, YouTube, TikTok, etc.
  ad_budget: ""
  hook_library: ""          # From BR_HKS_001
  landing_page_url: ""
  key_proof_points: []
  emotional_triggers: []
  visual_assets_available: [] # Photos, videos, screenshots
```

---

## Step-by-Step Process

### Step 1: Define the Campaign Angles
Choose 3-5 angles to test. Each angle targets a different motivation.

```yaml
campaign_angles:
  angle_1:
    name: ""
    type: ""                # Pain, Desire, Curiosity, Fear, Social Proof
    target_emotion: ""
    one_line: ""            # Core message in one sentence
  angle_2:
    name: ""
    type: ""
    target_emotion: ""
    one_line: ""
  angle_3:
    name: ""
    type: ""
    target_emotion: ""
    one_line: ""
  angle_4:
    name: ""
    type: ""
    target_emotion: ""
    one_line: ""
  angle_5:
    name: ""
    type: ""
    target_emotion: ""
    one_line: ""
```

**Angle Selection Rule:** Always test at least one pain angle, one desire angle, and one proof angle. These three cover the majority of buying motivations.

### Step 2: Create Image Ad Hooks (5 variations)
Design static image ad concepts.

```yaml
image_ad_hooks:
  ad_1:
    angle: ""
    headline: ""            # Overlay text on image (keep under 7 words)
    primary_text: ""        # Above the image
    description: ""         # Below the image
    image_concept: ""       # What the image shows
    cta_button: ""          # Learn More, Sign Up, Get Access, etc.
  ad_2:
    angle: ""
    headline: ""
    primary_text: ""
    description: ""
    image_concept: ""
    cta_button: ""
  ad_3:
    angle: ""
    headline: ""
    primary_text: ""
    description: ""
    image_concept: ""
    cta_button: ""
  ad_4:
    angle: ""
    headline: ""
    primary_text: ""
    description: ""
    image_concept: ""
    cta_button: ""
  ad_5:
    angle: ""
    headline: ""
    primary_text: ""
    description: ""
    image_concept: ""
    cta_button: ""
```

**Image Hook Rules:**
- Text overlay: 5-7 words max
- High contrast (readable on mobile)
- Face in the image (increases CTR 25-50%)
- No stock photos (use real photos)
- Bold, clear typography

### Step 3: Create Video Ad Hooks (5 variations)
Design video ad openings (first 3-5 seconds).

```yaml
video_ad_hooks:
  ad_1:
    angle: ""
    hook_type: ""           # Talking head, B-roll, text, screen record
    first_3_seconds:
      visual: ""            # What they SEE
      audio: ""             # What they HEAR
      text_overlay: ""      # What they READ
    script_opening: ""      # First 2-3 sentences spoken
    primary_text: ""        # Caption/text above video
    thumbnail: ""           # If not autoplay
    estimated_length: ""    # Total video length
  ad_2:
    angle: ""
    hook_type: ""
    first_3_seconds:
      visual: ""
      audio: ""
      text_overlay: ""
    script_opening: ""
    primary_text: ""
    estimated_length: ""
  ad_3:
    angle: ""
    hook_type: ""
    first_3_seconds:
      visual: ""
      audio: ""
      text_overlay: ""
    script_opening: ""
    primary_text: ""
    estimated_length: ""
  ad_4:
    angle: ""
    hook_type: ""
    first_3_seconds:
      visual: ""
      audio: ""
      text_overlay: ""
    script_opening: ""
    primary_text: ""
    estimated_length: ""
  ad_5:
    angle: ""
    hook_type: ""
    first_3_seconds:
      visual: ""
      audio: ""
      text_overlay: ""
    script_opening: ""
    primary_text: ""
    estimated_length: ""
```

**Video Hook Rules:**
- First frame must be visually arresting
- Start talking immediately (no logos or intros)
- Text overlay appears in first second
- Movement in first 2 seconds
- Subtitles always (85% watch without sound)

### Step 4: Create Text-Only Ad Hooks (5 variations)
Pure copy ads (Facebook long-form, LinkedIn, etc.).

```yaml
text_ad_hooks:
  ad_1:
    angle: ""
    opening_line: ""        # The scroll-stopping first line
    body_preview: ""        # Next 2-3 lines visible before "See More"
    full_body: ""           # Complete ad copy (300-600 words)
    cta: ""
    link_description: ""
  ad_2:
    angle: ""
    opening_line: ""
    body_preview: ""
    full_body: ""
    cta: ""
  ad_3:
    angle: ""
    opening_line: ""
    body_preview: ""
    full_body: ""
    cta: ""
  ad_4:
    angle: ""
    opening_line: ""
    body_preview: ""
    full_body: ""
    cta: ""
  ad_5:
    angle: ""
    opening_line: ""
    body_preview: ""
    full_body: ""
    cta: ""
```

**Text Hook Rules:**
- First line is EVERYTHING (this is the hook)
- Use line breaks for readability
- Include emoji sparingly (1-2 max)
- Story format outperforms list format
- End with clear CTA + link

### Step 5: Create Retargeting Ad Hooks (3 variations)
Hooks specifically for warm audiences who already know you.

```yaml
retargeting_hooks:
  ad_1:
    audience: ""            # Website visitors, video viewers, etc.
    message: ""             # Direct, assumes familiarity
    hook: ""
    urgency: ""
    cta: ""
  ad_2:
    audience: ""
    message: ""
    hook: ""
    urgency: ""
    cta: ""
  ad_3:
    audience: ""
    message: ""
    hook: ""
    urgency: ""
    cta: ""
```

### Step 6: Create the Testing Plan
Systematic approach to finding the winner.

```yaml
testing_plan:
  phase_1_testing:
    duration: "3-5 days"
    budget_per_ad: "$5-10/day"
    total_test_budget: ""
    ads_to_test: 0
    audiences_to_test: 0
    success_criteria:
      ctr_threshold: ""
      cpc_threshold: ""
      conversion_threshold: ""
    decision_process: ""
  phase_2_optimization:
    duration: "5-7 days"
    action: "Scale winners, kill losers"
    budget_increase: ""
    new_variations: ""
  phase_3_scaling:
    duration: "Ongoing"
    action: "Increase budget, expand audiences"
    refresh_cadence: ""     # When to create new hooks
```

### Step 7: Document the Hook Swipe File
Organize winning hooks for future reference.

```yaml
swipe_file:
  winning_hooks: []         # Updated as tests complete
  losing_hooks: []          # Learn from failures
  industry_hooks: []        # Competitor hooks that work
  performance_data:
    best_angle: ""
    best_format: ""
    best_platform: ""
    best_audience: ""
```

---

## Output Template
```yaml
output:
  ad_hook_set:
    campaign: ""
    platform: ""
    total_ads_created:
      image: 5
      video: 5
      text: 5
      retargeting: 3
      total: 18
    angles_covered: []
    testing_plan: ""
    estimated_test_budget: ""
    estimated_test_duration: ""
    launch_date: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] At least 3 different angles represented
  - [ ] All 3 formats covered (image, video, text)
  - [ ] Retargeting hooks are distinct from cold hooks
  - [ ] Video hooks specify first 3 seconds explicitly
  - [ ] Image hooks have clear visual concepts (not vague)
  - [ ] Text hooks have compelling first line visible before "See More"
  - [ ] Testing plan has specific budget, timeline, and success criteria
  - [ ] No hook is generic (all specific to this campaign/audience)
  - [ ] Total of 15-20 ad variations for testing
```

---

## Handoff
- → **brunson-traffic** for `design-buy-in-campaign` (BR_TRF_004) — launch the ads
- → **brunson-copy** for `create-vsl-script` (BR_CPY_001) — if video ads need scripts
- → **brunson-funnels** for `diagnose-funnel-health` (BR_FUN_004) — if ads work but funnel doesn't
- → Design team for creative production

---
*Task: BR_HKS_002 | Agent: brunson-hooks | Version: 1.0*
