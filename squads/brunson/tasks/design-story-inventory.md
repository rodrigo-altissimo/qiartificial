# design-story-inventory

## Metadata
```yaml
task_id: BR_STR_004
agent: brunson-stories
type: creation
complexity: high
estimated_time: 60-90min
source: "Expert Secrets — Chapter 10: Epiphany Bridge + Traffic Secrets — Content Storytelling"
```

## Purpose
Design a complete story inventory — a master library of stories organized by purpose, emotion, and deployment context. Every piece of Brunson-style marketing runs on stories. The story inventory ensures you never run out of material and always have the right story for every situation.

> "The person who can tell the most stories wins. But it's not random — you need a SYSTEM for organizing and deploying your stories." — Russell Brunson

---

## The Framework: Story Inventory Architecture

A story inventory is a categorized library of stories ready to deploy across all marketing channels. Each story is tagged by type, emotion, belief it breaks, and where it's best used.

### Story Categories

```
CATEGORY                    PURPOSE                          # NEEDED
────────────────────────    ──────────────────────────────   ────────
1. Origin Stories           How you discovered the vehicle    2-3
2. Epiphany Bridge Stories  Breakthrough moments              5-10
3. Vehicle Stories          Why this approach works            3-5
4. Internal Belief Stories  "You CAN do this"                 3-5
5. External Belief Stories  "Nothing will stop you"            3-5
6. Customer Stories         Others who got results             5-10
7. Parables                 Teaching stories (recurring)       3-5
8. Polarity Stories         "This is what we stand for"        2-3
9. Before/After Stories     Transformation proof               5-10
10. Failure/Lesson Stories  Vulnerability + teaching           3-5
```

### Story Tagging System

```
Each story is tagged with:
- Type (from categories above)
- Primary Emotion (curiosity, hope, fear, desire, belonging)
- False Belief Broken (vehicle, internal, or external)
- Best Channel (email, webinar, social, sales page, ad)
- Length (micro: <100w, short: 100-300w, medium: 300-600w, full: 600+w)
```

---

## Input Required
```yaml
input_fields:
  attractive_character: ""
  niche: ""
  origin_story: ""
  business_journey: ""          # Timeline of key events
  customer_stories: []          # Case studies and testimonials
  life_stories: []              # Personal anecdotes
  parables: []                  # Teaching stories
  false_beliefs: []             # From false belief mapping
  content_channels: []          # Where stories will be used
```

---

## Step-by-Step Process

### Step 1: Mine for Story Raw Material
Extract every potential story from your history.

```yaml
story_mining:
  personal_milestones:
    - ""                        # Key life events
    - ""
    - ""
  business_milestones:
    - ""                        # Key business events
    - ""
    - ""
  failures_and_mistakes:
    - ""                        # Things that went wrong
    - ""
    - ""
  unexpected_discoveries:
    - ""                        # Surprises and aha moments
    - ""
    - ""
  customer_transformations:
    - ""                        # Client success stories
    - ""
    - ""
  everyday_observations:
    - ""                        # Daily life moments with lessons
    - ""
    - ""
```

### Step 2: Classify Stories by Category
Organize raw stories into the 10 category buckets.

```yaml
story_classification:
  origin_stories:
    - title: ""
      summary: ""
      key_moment: ""
  epiphany_bridge:
    - title: ""
      summary: ""
      belief_broken: ""
  vehicle_stories:
    - title: ""
      summary: ""
      proof_point: ""
  internal_belief_stories:
    - title: ""
      summary: ""
      self_doubt_addressed: ""
  external_belief_stories:
    - title: ""
      summary: ""
      obstacle_overcome: ""
  customer_stories:
    - title: ""
      summary: ""
      result: ""
  parables:
    - title: ""
      summary: ""
      lesson: ""
  polarity_stories:
    - title: ""
      summary: ""
      stance: ""
  before_after_stories:
    - title: ""
      summary: ""
      transformation: ""
  failure_stories:
    - title: ""
      summary: ""
      lesson: ""
```

### Step 3: Tag Each Story for Deployment
Add metadata tags to enable quick story selection.

```yaml
story_tags:
  story_1:
    title: ""
    category: ""
    primary_emotion: ""         # curiosity, hope, fear, desire, belonging
    false_belief_broken: ""     # vehicle, internal, external, none
    best_channels: []           # email, webinar, social, sales page, ad
    length: ""                  # micro, short, medium, full
    audience_stage: ""          # cold, warm, hot
    reusability: ""             # one-time, recurring, signature
```

### Step 4: Create Story Templates for Each Category
Write template structures for quick story creation.

```yaml
story_templates:
  epiphany_bridge:
    backstory: "[Where I/they were]"
    wall: "[The moment of frustration]"
    epiphany: "[The breakthrough]"
    framework: "[What I discovered]"
    result: "[What happened after]"
    lesson: "[What this means for you]"

  customer_story:
    who: "[Name, background, relatable detail]"
    before: "[Their situation before]"
    action: "[What they did]"
    result: "[Measurable outcome]"
    quote: "[In their own words]"

  parable:
    situation: "[Everyday scenario]"
    observation: "[What I noticed]"
    connection: "[How this relates to our topic]"
    lesson: "[The takeaway]"

  failure_story:
    context: "[What I was trying to do]"
    mistake: "[What went wrong]"
    consequence: "[What it cost me]"
    recovery: "[How I fixed it]"
    lesson: "[What I learned]"
```

### Step 5: Create the Story Deployment Calendar
Plan which stories to use when across all channels.

```yaml
deployment_calendar:
  weekly_plan:
    monday: "Motivation story (epiphany bridge or before/after)"
    tuesday: "Teaching story (parable or vehicle)"
    wednesday: "Customer story (social proof)"
    thursday: "Personal story (vulnerability or lesson)"
    friday: "Polarity story or call to action"
  channel_allocation:
    email: "1 story per day (Seinfeld emails)"
    social: "1-2 stories per day"
    webinar: "3 stories per presentation (Three Secrets)"
    sales_page: "2-3 stories (origin + proof)"
    ads: "Micro-stories (hook format)"
```

### Step 6: Build the Story Quick-Reference Index
Create a searchable index for fast story selection.

```yaml
quick_reference:
  by_emotion:
    curiosity: []               # Story titles
    hope: []
    fear: []
    desire: []
    belonging: []
  by_belief_broken:
    vehicle: []
    internal: []
    external: []
  by_channel:
    email: []
    webinar: []
    social: []
    sales_page: []
    ad: []
  by_audience_stage:
    cold: []
    warm: []
    hot: []
```

---

## Output Template
```yaml
output:
  story_inventory:
    total_stories: ""
    by_category:
      origin: ""
      epiphany_bridge: ""
      vehicle: ""
      internal_belief: ""
      external_belief: ""
      customer: ""
      parable: ""
      polarity: ""
      before_after: ""
      failure: ""
    tagged: true
    templates_created: true
    deployment_calendar: true
    quick_reference_index: true
    recommended_next_stories: [] # Gaps to fill
```

---

## Quality Gate
```yaml
quality:
  - [ ] At least 30 stories cataloged across all 10 categories
  - [ ] Every story has category, emotion, and channel tags
  - [ ] Story templates enable quick creation of new stories
  - [ ] Deployment calendar covers all weekly content needs
  - [ ] Quick-reference index enables fast story selection
  - [ ] Mix of personal, customer, and teaching stories
  - [ ] Stories cover all 3 false belief categories
  - [ ] Gaps identified for future story development
```

---

## Handoff
- -> **brunson-stories** for `craft-origin-story` (BR_STR_001) — develop key stories in depth
- -> **brunson-hooks** for `write-hook-story-offer` (BR_HKS_004) — use stories in HSO sequences
- -> **brunson-email** for `write-seinfeld-emails` (BR_EML_002) — deploy stories in daily emails

---
*Task: BR_STR_004 | Agent: brunson-stories | Version: 1.0*
