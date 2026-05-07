# write-attractive-character-copy

## Metadata
```yaml
task_id: BR_CPY_004
agent: brunson-copy
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets — Chapter 3: The Attractive Character"
```

## Purpose
Write copy that builds the Attractive Character — the persona your audience bonds with, trusts, and follows. The Attractive Character is not about being likeable to everyone; it's about being magnetically compelling to YOUR tribe through deliberate storytelling and identity elements.

> "People don't buy because of logic. They buy because they've connected with an Attractive Character who makes them feel understood." — Russell Brunson

---

## The Framework: Attractive Character Architecture

The Attractive Character is built on 4 core elements and expressed through 4 storyline types and 2 identity roles.

### The 4 Elements

```
ELEMENT                 WHAT IT DOES                      EXAMPLE
─────────────────────   ─────────────────────────────     ──────────────────────
1. Backstory            Creates relatability               "I was a broke wrestler..."
2. Parables             Teaches through stories            "My potato gun story..."
3. Character Flaws      Makes you human and real           "I was terrible at tech..."
4. Polarity             Attracts tribe, repels others      "I believe X, not Y..."
```

### The 4 Storyline Types

```
1. Loss & Redemption    — You lost everything, then found the way back
2. Us vs. Them          — Your tribe against the establishment
3. Before & After       — Dramatic transformation
4. Amazing Discovery    — You found something nobody else knows
```

### The 2 Identity Roles

```
1. The Leader           — "Follow me, I'll show you the way"
2. The Reporter         — "I found someone who knows, let me share"
```

---

## Input Required
```yaml
input_fields:
  person_name: ""
  business_name: ""
  niche: ""
  target_avatar: ""
  backstory_raw: ""
  key_struggles: []
  transformation: ""
  core_beliefs: []
  parables: []
  flaws: []
  polarity_topics: []
  identity_role: ""
  voice_tone: ""
```

---

## Step-by-Step Process

### Step 1: Craft the Backstory
The backstory is your origin story told in a way that mirrors your avatar's current situation.

```yaml
backstory:
  relatable_starting_point: ""
  specific_struggle: ""
  rock_bottom_moment: ""
  turning_point: ""
  transformation: ""
  emotional_tone: ""
  word_count: "300-500 words"
  rules:
    - Start where the avatar IS, not where you ARE
    - Be specific about the struggle
    - The turning point must be a genuine epiphany
    - End with hope, not superiority
```

### Step 2: Develop 3-5 Core Parables
Parables are teaching stories you tell repeatedly. They become your signature illustrations.

```yaml
parables:
  parable_1:
    name: ""
    story_summary: ""
    lesson: ""
    use_context: ""
    full_version: ""
  parable_2:
    name: ""
    story_summary: ""
    lesson: ""
    use_context: ""
    full_version: ""
  parable_3:
    name: ""
    story_summary: ""
    lesson: ""
    use_context: ""
    full_version: ""
  rules:
    - Each parable must teach ONE clear lesson
    - Use vivid sensory details
    - The listener must see themselves in the story
    - End with a punchline or aha moment
```

### Step 3: Identify and Articulate Character Flaws
Flaws make you human and relatable. Perfection repels; imperfection attracts.

```yaml
character_flaws:
  flaw_1:
    flaw: ""
    how_shared: ""
    why_connects: ""
    copy_example: ""
  flaw_2:
    flaw: ""
    how_shared: ""
    why_connects: ""
    copy_example: ""
  rules:
    - Flaws must be REAL (not humble-brags)
    - Should make avatar think "they're like me"
    - Never undermine your expertise domain
```

### Step 4: Define Polarity Positions
Polarity is what creates raving fans AND haters. You need both.

```yaml
polarity:
  position_1:
    topic: ""
    strong_stance: ""
    opposing_view: ""
    evidence: ""
    copy_example: ""
  position_2:
    topic: ""
    strong_stance: ""
    opposing_view: ""
    evidence: ""
    copy_example: ""
  position_3:
    topic: ""
    strong_stance: ""
    opposing_view: ""
    evidence: ""
    copy_example: ""
  rules:
    - Polarity must be genuine
    - State positions with confidence, not aggression
    - Every position should ATTRACT your ideal avatar
```

### Step 5: Write the 4 Storyline Variations
Create a go-to story for each of the 4 storyline types.

```yaml
storylines:
  loss_and_redemption:
    setup: ""
    loss: ""
    lowest_point: ""
    redemption: ""
    lesson: ""
    copy_version: ""
  us_vs_them:
    your_tribe: ""
    the_enemy: ""
    why_it_matters: ""
    rallying_cry: ""
    copy_version: ""
  before_and_after:
    before: ""
    transformation: ""
    after: ""
    invitation: ""
    copy_version: ""
  amazing_discovery:
    context: ""
    discovery: ""
    why_it_matters: ""
    proof: ""
    copy_version: ""
```

### Step 6: Compile the Attractive Character Profile
Assemble all elements into a usable reference for all future copy.

```yaml
attractive_character_profile:
  name: ""
  role: ""
  tagline: ""
  voice: ""
  backstory_summary: ""
  signature_parables: []
  admitted_flaws: []
  polarity_positions: []
  go_to_storylines: []
  catch_phrases: []
  content_pillars: []
```

---

## Output Template
```yaml
output:
  attractive_character:
    name: ""
    role: ""
    backstory: ""
    parables:
      - name: ""
        story: ""
        lesson: ""
    flaws:
      - flaw: ""
        copy_example: ""
    polarity:
      - stance: ""
        copy_example: ""
    storylines:
      loss_and_redemption: ""
      us_vs_them: ""
      before_and_after: ""
      amazing_discovery: ""
    voice_guidelines:
      tone: ""
      vocabulary: ""
      catch_phrases: []
    usage_guide: "Use as foundation for ALL copy — emails, pages, ads, webinars"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Backstory starts where the avatar IS, not where the character IS NOW
  - [ ] At least 3 parables with clear lessons and vivid details
  - [ ] Flaws are genuine and create relatability
  - [ ] Polarity positions are strong enough to attract AND repel
  - [ ] All 4 storyline types have complete narratives
  - [ ] Voice is consistent across all written elements
  - [ ] Character feels like a REAL person, not a marketing persona
  - [ ] Profile is usable as a reference for any future copy task
```

---

## Handoff
- -> **brunson-email** for `write-soap-opera-sequence` (BR_EML_001) — use AC stories in emails
- -> **brunson-copy** for `write-sales-letter` (BR_CPY_001) — weave AC into sales letter
- -> **brunson-stories** for `craft-origin-story` (BR_STR_001) — deepen the backstory

---
*Task: BR_CPY_004 | Agent: brunson-copy | Version: 1.0*
