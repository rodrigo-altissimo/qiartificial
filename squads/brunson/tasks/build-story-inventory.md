# Build Story Inventory

## Metadata
```yaml
task_id: BR_STR_005
agent: brunson-stories
type: creation
complexity: high
estimated_time: 45min
source: "Expert Secrets, Chapter 7-10 + DotCom Secrets, Chapter 10"
```

## Purpose

Build a complete story inventory for the business containing every story type needed across all funnels, presentations, emails, and content. A story inventory is the business's storytelling arsenal -- pre-crafted, tested, and ready to deploy. Every great marketer has 20-50 stories they tell repeatedly across different contexts. This task creates and organizes that complete collection.

> "Your stories are your most valuable marketing assets. A well-told story is worth more than any amount of ad spend because it works in every medium, on every platform, forever." -- Russell Brunson

## The Framework: The Complete Story Arsenal

### Brunson's Story Categories

| Category | Purpose | Used In |
|----------|---------|---------|
| Origin Story | How you discovered the new opportunity | Everywhere |
| Vehicle Story | Why the opportunity works | Webinars, sales pages |
| Internal Belief Story | Why THEY can do it | Webinars, sales pages |
| External Belief Story | Why circumstances won't stop them | Webinars, sales pages |
| Customer Stories | Social proof through transformation | Ads, emails, pages |
| Contrarian Stories | Why conventional wisdom is wrong | Content, talks |
| Credibility Stories | Why they should listen to you | Bio, introductions |
| Vulnerability Stories | Connection through shared struggle | Content, emails |

### The Story Matrix

Every story has multiple versions:
```
           60-sec  |  5-min  |  Written  |  Email  |  Video  |  Social
Origin     [  ]    |  [  ]   |  [  ]     | [  ]    | [  ]    | [  ]
Vehicle    [  ]    |  [  ]   |  [  ]     | [  ]    | [  ]    | [  ]
Internal   [  ]    |  [  ]   |  [  ]     | [  ]    | [  ]    | [  ]
External   [  ]    |  [  ]   |  [  ]     | [  ]    | [  ]    | [  ]
Customer 1 [  ]    |  [  ]   |  [  ]     | [  ]    | [  ]    | [  ]
Customer 2 [  ]    |  [  ]   |  [  ]     | [  ]    | [  ]    | [  ]
...
```

## Input Required
```yaml
input:
  existing_stories:
    origin_story: "Output from BR_STR_001 or summary"
    vehicle_story: "Output from BR_STR_002 or summary"
    internal_belief_story: "Output from BR_STR_003 or summary"
    external_belief_story: "Output from BR_STR_004 or summary"

  business_context:
    business_name: ""
    niche: ""
    years_in_business: 0
    number_of_customers: 0
    flagship_offer: ""

  story_raw_material:
    personal_milestones:
      - event: ""
        lesson: ""
        year: ""
    customer_transformations:
      - customer: ""
        before: ""
        after: ""
        timeline: ""
    failures_and_lessons:
      - failure: ""
        lesson: ""
        how_it_helped: ""
    contrarian_beliefs:
      - conventional: ""
        your_belief: ""
        proof: ""
    credibility_markers:
      - achievement: ""
        context: ""

  content_needs:
    has_webinar: true
    has_sales_page: true
    has_email_sequence: true
    has_social_presence: true
    has_podcast: false
    has_youtube: false
```

## Step-by-Step Process

### Step 1: Audit Existing Story Assets
Catalog every story that already exists:

**Check for:**
- Origin story (from BR_STR_001)
- Vehicle belief story (from BR_STR_002)
- Internal belief story (from BR_STR_003)
- External belief story (from BR_STR_004)
- Any existing customer testimonials
- Past content that told stories (blogs, emails, videos)
- About page / bio stories
- Case studies

**Rate each:** Complete / Partial / Missing / Needs Update

### Step 2: Identify Story Gaps
Cross-reference existing stories against the full inventory checklist:

**Mandatory Stories (Must Have):**
- [ ] Origin/Epiphany Bridge story
- [ ] Vehicle belief story
- [ ] Internal belief story
- [ ] External belief story
- [ ] At least 3 customer transformation stories
- [ ] Credibility/authority story
- [ ] "Why I do this" mission story

**High-Value Stories (Should Have):**
- [ ] "First customer" story
- [ ] "Biggest failure" story
- [ ] "Aha moment that changed my business" story
- [ ] "Day in the life" story (aspirational lifestyle)
- [ ] Contrarian belief stories (2-3)
- [ ] "How I almost quit" story
- [ ] "Behind the scenes" process story

**Bonus Stories (Nice to Have):**
- [ ] "My mentor" story
- [ ] "Before I knew what I know now" story
- [ ] "The client who surprised me" story
- [ ] "Why I turned down money" story
- [ ] Industry prophecy story ("Where this is going")

### Step 3: Craft Missing Core Stories
For each missing mandatory story, use the Epiphany Bridge format:

**Epiphany Bridge Template (abbreviated):**
1. Backstory (set the scene)
2. Desire (what you/they wanted)
3. Wall (what went wrong)
4. Epiphany (the breakthrough)
5. Plan (what was done)
6. Result (what was achieved)
7. Transformation (who you/they became)

Write each story at 500-1,000 words in the full version.

### Step 4: Collect and Structure Customer Stories
Customer stories are the most powerful selling tool:

**For each customer story, gather:**
```
Customer Name: (with permission)
Before State:
  - Situation:
  - Emotion:
  - Failed attempts:

Turning Point:
  - How they found you:
  - Why they decided to try:
  - Initial experience:

After State:
  - Results (specific numbers/outcomes):
  - Emotional change:
  - Identity shift:
  - Time to results:

Quote:
  - Their words, not yours (verbatim if possible)
```

### Step 5: Create Story Variations for Each Context

**For each core story, create:**

| Format | Length | Purpose | Key Adjustment |
|--------|--------|---------|----------------|
| Micro (social) | 50-150 words | Scroll-stopping hook | Start with the most dramatic moment |
| Short (email) | 300-500 words | Drive clicks/engagement | End with a cliffhanger or CTA |
| Medium (content) | 500-1,000 words | Build relationship | Include full emotional arc |
| Long (sales page) | 1,000-2,000 words | Drive conversion | Include all proof elements |
| Spoken (webinar) | 3-7 minutes | Create belief change | Optimize for verbal delivery |
| Video script | 2-5 minutes | Visual storytelling | Include visual/B-roll notes |

### Step 6: Organize Into the Story Vault
Create a structured repository:

```
STORY VAULT
├── Core Stories/
│   ├── origin-story.md
│   ├── vehicle-belief-story.md
│   ├── internal-belief-story.md
│   └── external-belief-story.md
├── Customer Stories/
│   ├── customer-1-[name].md
│   ├── customer-2-[name].md
│   └── customer-3-[name].md
├── Authority Stories/
│   ├── credibility-story.md
│   ├── mission-story.md
│   └── contrarian-stories.md
├── Connection Stories/
│   ├── failure-story.md
│   ├── vulnerability-story.md
│   └── behind-the-scenes.md
└── Variations/
    ├── social-versions/
    ├── email-versions/
    ├── sales-page-versions/
    └── webinar-scripts/
```

### Step 7: Create the Story Deployment Map
Map which stories go where:

| Funnel Element | Primary Story | Supporting Stories |
|----------------|---------------|-------------------|
| Ad copy | Micro customer story | Origin story hook |
| Squeeze page | Origin story (micro) | Credibility markers |
| Email sequence Day 1 | Origin story | -- |
| Email sequence Day 3 | Vehicle belief story | Customer story |
| Email sequence Day 5 | Internal belief story | Vulnerability story |
| Email sequence Day 7 | External belief story | "Almost quit" story |
| Webinar opening | Credibility story | Origin story |
| Webinar teaching | Contrarian stories | Customer stories |
| Webinar close | All 3 belief stories | Stack of customer proof |
| Sales page hero | Origin story (medium) | -- |
| Sales page middle | Belief stories | Customer stories |
| Sales page close | Mission story | Social proof compilation |
| Upsell page | Customer story | "First customer" story |
| Thank you page | "Day in the life" | -- |

### Step 8: Quality Check and Index
Create a master index with status and last update for each story.

## Output Template
```yaml
story_inventory:
  date: "YYYY-MM-DD"
  business: ""
  total_stories: 0
  stories_complete: 0
  stories_in_progress: 0
  stories_missing: 0

  core_stories:
    origin:
      status: "complete | in-progress | missing"
      word_count: 0
      variations: ["60sec", "5min", "written", "email"]
      last_updated: ""
      file: ""
    vehicle_belief:
      status: ""
      word_count: 0
      variations: []
      last_updated: ""
    internal_belief:
      status: ""
      word_count: 0
      variations: []
      last_updated: ""
    external_belief:
      status: ""
      word_count: 0
      variations: []
      last_updated: ""

  customer_stories:
    - name: ""
      status: ""
      before_state: ""
      after_state: ""
      key_quote: ""
      variations: []

  authority_stories:
    credibility:
      status: ""
      summary: ""
    mission:
      status: ""
      summary: ""
    contrarian:
      - topic: ""
        status: ""
        summary: ""

  connection_stories:
    failure:
      status: ""
      summary: ""
    vulnerability:
      status: ""
      summary: ""
    behind_the_scenes:
      status: ""
      summary: ""

  story_deployment_map:
    ads: { primary: "", supporting: [] }
    squeeze_page: { primary: "", supporting: [] }
    email_sequence: { stories_by_day: {} }
    webinar: { opening: "", teaching: [], close: [] }
    sales_page: { hero: "", middle: [], close: "" }

  gaps_and_priorities:
    missing_mandatory: []
    missing_high_value: []
    next_stories_to_create: []
    priority_order: []
```

## Quality Gate
- [ ] All 4 mandatory Epiphany Bridge stories accounted for (origin, vehicle, internal, external)
- [ ] At least 3 customer transformation stories collected
- [ ] Each core story has at least 3 format variations
- [ ] Story deployment map covers all major funnel elements
- [ ] Authority/credibility story exists
- [ ] Story vault structure is organized and indexed
- [ ] Gaps identified with priority order for creation
- [ ] Each story rated as complete/in-progress/missing
- [ ] Stories use real details and specifics (not generic templates)
- [ ] Customer stories include actual quotes (not fabricated)

## Handoff
Story inventory serves as the master asset for all downstream tasks. Stories are deployed into `design-sales-page.md` (BR_PGS_002), `create-launch-emails.md` (BR_LCH_003), `design-squeeze-page.md` (BR_PGS_001), and all other content-producing tasks. Feeds back into `create-funnel-roadmap.md` (BR_CHF_002) as a content readiness assessment.

---
*Task: BR_STR_005 | Agent: brunson-stories | Version: 1.0*
