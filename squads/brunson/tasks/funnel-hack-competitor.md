# Funnel Hack a Competitor

## Metadata
```yaml
task_id: BR_SWP_001
agent: brunson-swipe
type: analysis
complexity: high
estimated_time: 40min
source: "DotCom Secrets, Chapter 4 - Funnel Hacking"
```

## Purpose

Perform a deep-dive funnel hack on a single competitor, documenting every element of their funnel from ad to fulfillment. This creates a comprehensive dossier that reveals the strategy, psychology, and mechanics behind a proven funnel so you can extract transferable principles for your own business.

> "Don't reinvent the wheel. Find someone who already has the results you want, buy everything they sell, go through their entire funnel, and reverse-engineer the strategy behind it." -- Russell Brunson

## The Framework: The Complete Funnel Hack Protocol

### What Funnel Hacking IS vs IS NOT

| Funnel Hacking IS | Funnel Hacking IS NOT |
|-------------------|----------------------|
| Understanding strategy | Copying pages/text |
| Extracting principles | Stealing designs |
| Studying psychology | Plagiarizing content |
| Modeling structure | Duplicating funnels |
| Learning from proof | Cutting corners |

### The 4 Layers to Hack

```
Layer 1: TRAFFIC   → How they get attention (ads, content, partnerships)
Layer 2: PAGES     → What their funnel looks like (design, copy, flow)
Layer 3: SEQUENCE  → What happens after (emails, retargeting, follow-up)
Layer 4: STRATEGY  → Why it all works together (the thinking behind it)
```

## Input Required
```yaml
input:
  competitor:
    name: ""
    url: ""
    niche: ""
    estimated_revenue: "if known"
    how_long_running: ""
    why_selected: "Why hack this specific competitor"

  your_context:
    your_niche: ""
    your_offer: ""
    your_target: ""
    what_you_want_to_learn: ""

  hack_depth:
    level: "surface | standard | deep"
    budget_to_spend: "$0-500 to purchase their products"
    tracking_period: "7 days | 14 days | 30 days"
```

## Step-by-Step Process

### Step 1: Ad Research (Layer 1 - Traffic)
Document every visible ad:

**Facebook/Meta:**
- Go to Facebook Ad Library (facebook.com/ads/library)
- Search competitor name
- Screenshot and document:
  - Ad creative (image/video thumbnail)
  - Headline
  - Primary text (first 3 lines visible)
  - CTA button text
  - Ad format (single image, carousel, video)
  - How long the ad has been running (longer = more proven)

**Google/YouTube:**
- Search relevant keywords
- Note any Google Ads appearing
- Check YouTube for their ads (use incognito)
- Document: headline, description, landing page URL

**Other Channels:**
- Check their social profiles for promotional content
- Look for podcast appearances (they pitch at the end)
- Check affiliate/JV promotions (who promotes them?)

**Document at least 3-5 ads with full details.**

### Step 2: Funnel Walk-Through (Layer 2 - Pages)
Enter the funnel as a prospect:

**Use a dedicated email address for tracking.**

**For EACH page in sequence, document:**

```
Page: [Page Name / URL]
Type: [Squeeze / Bridge / Sales / Checkout / OTO / Thank You]
Position: [Step X of Y in funnel]

DESIGN:
- Layout type (long-form / short-form / video page)
- Color scheme
- Hero section design
- Use of images/video
- Mobile optimization

COPY:
- Headline (exact text)
- Sub-headline (exact text)
- Key bullet points or promises
- Social proof elements (testimonials, logos, numbers)
- CTA text and placement
- Urgency/scarcity elements
- Guarantee language

PSYCHOLOGY:
- Primary emotion targeted
- Curiosity hooks used
- Objection handling visible
- Risk reversal approach
- Social proof strategy

TECHNICAL:
- Page builder (ClickFunnels, WordPress, Shopify, etc.)
- Loading speed
- Pop-ups or exit intent
- Chat widgets
- Pixel/tracking observed
```

### Step 3: Purchase and Document (Layer 2 continued)
If within budget, complete a purchase:

**Document the checkout process:**
- Order form design (1-step or 2-step)
- Order bump offer (what, price, copy)
- OTO #1 (offer, price, page design, copy approach)
- OTO #2 if exists
- Downsell offer if OTO declined
- Thank you / delivery page
- Immediate email received

### Step 4: Follow-Up Tracking (Layer 3 - Sequence)
Track everything that happens after opt-in/purchase:

**Email Sequence Log:**
```
Day | Subject Line | From Name | Type | CTA | Notable Elements
 0  | ...         | ...       | Welcome | ... | ...
 1  | ...         | ...       | Value   | ... | ...
 2  | ...         | ...       | Story   | ... | ...
```

Track for at least 14 days. Note:
- Send frequency (daily, every 2 days, etc.)
- Email length patterns
- Story vs pitch ratio
- Segmentation triggers (different emails based on actions)

**Retargeting:**
- Note retargeting ads that appear after visiting the funnel
- Document any different messaging for retargeted vs cold
- Track how long retargeting persists

**Other Follow-Up:**
- SMS messages (if phone number was given)
- Direct mail (if physical address was given)
- Social media DMs
- Phone calls from sales team

### Step 5: Strategy Analysis (Layer 4 - Strategy)
Now synthesize all data into strategic insights:

**Hook Analysis:**
- What hooks do they use to stop the scroll?
- What curiosity mechanisms are employed?
- What pattern interrupts appear?

**Story Analysis:**
- What stories do they tell? (Origin, vehicle, belief-breaking?)
- How do they build rapport and trust?
- What emotional journey do they create?

**Offer Analysis:**
- What's the core offer structure? (Main + bonuses + guarantee)
- What's the perceived value vs price ratio?
- How do they stack value?
- What urgency/scarcity do they use?

**Value Ladder Analysis:**
```
Bait: [What's the free offer?] → Price: $0
Frontend: [What's the initial sale?] → Price: $XX
Upsell 1: [What's offered?] → Price: $XXX
Upsell 2: [What's offered?] → Price: $XXX
Backend: [High-ticket visible?] → Price: $X,XXX
Continuity: [Subscription?] → Price: $XX/mo
```

**Economics Estimation:**
Based on visible data, estimate:
- Approximate CPA (based on ad spend and traffic estimates)
- Approximate ACV (based on visible price points and take rates)
- Approximate LTV (based on continuity and backend offers)

### Step 6: Extract Transferable Principles
What can you apply to YOUR business:

For each principle extracted:
```
PRINCIPLE: [What you observed]
WHY IT WORKS: [The psychology/strategy behind it]
HOW TO ADAPT: [How to apply this to your funnel without copying]
PRIORITY: [High / Medium / Low based on expected impact]
```

## Output Template
```yaml
funnel_hack_dossier:
  date: "YYYY-MM-DD"
  competitor: ""
  url: ""
  niche: ""
  hack_depth: ""
  tracking_period: ""

  layer_1_traffic:
    primary_platform: ""
    ad_count_found: 0
    longest_running_ad:
      description: ""
      running_since: ""
    top_hooks: []
    traffic_temperature_strategy: ""
    ads_documented:
      - platform: ""
        type: ""
        headline: ""
        hook: ""
        cta: ""
        estimated_duration: ""

  layer_2_pages:
    funnel_type: ""
    total_pages: 0
    pages:
      - name: ""
        url: ""
        type: ""
        headline: ""
        key_elements: []
        psychology: ""
        notable: ""

  layer_3_sequence:
    email_count_14_days: 0
    send_frequency: ""
    story_to_pitch_ratio: ""
    emails:
      - day: 0
        subject: ""
        type: ""
        cta: ""
    retargeting_observed: ""
    other_followup: []

  layer_4_strategy:
    hook_strategy: ""
    story_strategy: ""
    offer_structure:
      core: ""
      bonuses: []
      guarantee: ""
      urgency: ""
    value_ladder:
      bait: { offer: "", price: "" }
      frontend: { offer: "", price: "" }
      upsells: []
      backend: { offer: "", price: "" }
      continuity: { offer: "", price: "" }
    economics_estimate:
      estimated_cpa: ""
      estimated_acv: ""
      estimated_ltv: ""

  transferable_principles:
    - principle: ""
      why_it_works: ""
      how_to_adapt: ""
      priority: ""

  top_5_takeaways:
    - ""

  recommended_actions:
    - action: ""
      priority: ""
      estimated_impact: ""
```

## Quality Gate
- [ ] All 4 layers documented (traffic, pages, sequence, strategy)
- [ ] At least 3 ads documented with full details
- [ ] Every funnel page documented with headline, copy elements, and psychology
- [ ] Email sequence tracked for minimum 7 days (ideally 14)
- [ ] Value ladder mapped with visible price points
- [ ] At least 5 transferable principles extracted
- [ ] Principles include HOW TO ADAPT (not just what was observed)
- [ ] No copied text or designs (principles only)
- [ ] Economics estimated based on available data
- [ ] Top 5 takeaways summarize the most important findings

## Handoff
Dossier feeds into `create-swipe-file.md` (BR_SWP_004) for the organized swipe file. Strategy insights inform `analyze-funnel-archetype.md` (BR_SWP_002) for archetype recommendations. Principles connect to `create-funnel-roadmap.md` (BR_CHF_002) for implementation planning.

---
*Task: BR_SWP_001 | Agent: brunson-swipe | Version: 1.0*
