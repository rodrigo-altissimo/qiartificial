# Plan Funnel Hacking Research

## Metadata
```yaml
task_id: BR_ADV_003
agent: brunson-advisor
type: analysis
complexity: medium
estimated_time: 35min
source: "DotCom Secrets, Chapter 4 - Funnel Hacking"
```

## Purpose

Design a systematic funnel hacking research project to study, document, and extract winning strategies from competitors and adjacent-market leaders. Funnel hacking is NOT copying -- it is understanding the PRINCIPLES behind why successful funnels work so you can apply those principles to your own unique offer.

> "Funnel hacking is not about copying someone else's funnel. It's about understanding the strategy behind what they're doing and applying those strategies to your own business." -- Russell Brunson

## The Framework: Funnel Hacking Method

### The 5-Step Funnel Hacking Process

1. **IDENTIFY** -- Find 5-10 successful funnels in your market (or adjacent markets)
2. **SUBSCRIBE** -- Enter every funnel as a customer. Buy their stuff.
3. **DOCUMENT** -- Screenshot every page, save every email, record every step
4. **ANALYZE** -- Break down the strategy: hooks, stories, offers at each step
5. **MODEL** -- Extract the principles and adapt them to your unique business

### Why This Works

Brunson's core insight: "You don't need to reinvent the wheel. Someone in your market (or an adjacent market) has already figured out the funnel that works. Your job is to understand WHY it works, then make your own version."

### What to Look For in Each Funnel

| Element | What to Document | Why It Matters |
|---------|-----------------|----------------|
| Hook | Headlines, ads, thumbnails | First point of contact |
| Story | Email sequences, video scripts | Creates belief |
| Offer | Pricing, bonuses, guarantees | Drives conversion |
| Flow | Page sequence, upsell path | Maximizes value |
| Follow-up | Email cadence, retargeting | Recovers lost sales |

## Input Required
```yaml
input:
  business_niche: "Your market/niche"
  current_offer: "What you sell"
  target_funnel_type: "lead | tripwire | webinar | high-ticket | challenge"
  known_competitors:
    - name: ""
      url: ""
  adjacent_markets: "Markets similar to yours that might have winning funnels"
  budget_for_purchases: "Amount willing to spend buying competitor products ($50-500)"
  research_timeline: "1 week | 2 weeks | 30 days"
```

## Step-by-Step Process

### Step 1: Build the Target List
Identify 5-10 funnels to hack:

**Finding Targets:**
- Search Facebook Ad Library for active ads in your niche
- Check ClickFunnels "Share Funnels" marketplace
- Search "[niche] + free training/webinar/challenge" on Google
- Look at who's advertising on YouTube in your space
- Check SimilarWeb for top traffic sites in your niche
- Ask in communities: "Who's doing well in [niche]?"

**Qualification Criteria:**
- Has been running ads for 3+ months (proven, not testing)
- Has visible social proof (testimonials, case studies)
- Offers at multiple price points (has a Value Ladder)
- In your market OR a parallel market with transferable strategies

### Step 2: Create Hacking Profiles
For each target funnel, create a profile:

```
Funnel Target: [Name]
URL: [Landing page URL]
Niche: [Their specific market]
Funnel Type: [lead/tripwire/webinar/high-ticket/challenge]
Price Points Visible: [$X, $Y, $Z]
Ad Platforms: [Facebook/Google/YouTube/etc.]
Estimated Monthly Traffic: [from SimilarWeb or estimates]
Notable Elements: [What stands out immediately]
```

### Step 3: Design the Research Protocol
Create a standardized process for hacking each funnel:

**Phase A: Ad Research (Day 1)**
- Screenshot all active ads (Facebook Ad Library, Google Ads Transparency)
- Note: Headlines, images/video thumbnails, copy angles, CTAs
- Document which ads have been running longest (proven winners)

**Phase B: Funnel Walk-Through (Day 2-3)**
- Opt in with a dedicated email address
- Screenshot EVERY page in sequence
- Note load times, design elements, copy structure
- Record any video content (or note length/topics)
- Go through checkout process (buy if within budget)
- Document upsell/downsell sequence

**Phase C: Follow-Up Tracking (Days 4-14+)**
- Save every email received (subject lines, send times, content)
- Note retargeting ads that appear after opt-in
- Track SMS messages if phone number was given
- Document any direct outreach (DMs, calls)

**Phase D: Analysis (After collection period)**
- Map the complete funnel architecture
- Identify the hook-story-offer at each step
- Calculate implied economics
- Extract transferable principles

### Step 4: Create the Research Schedule
Map out who researches what and when:

```
Week 1:
  Mon-Tue: Build target list, create hacking profiles
  Wed-Thu: Enter first 3 funnels, begin documentation
  Fri: Enter remaining funnels

Week 2:
  Mon-Fri: Continue collecting follow-up emails and retargeting data
  Daily: Screenshot new emails, note patterns

Week 3:
  Mon-Wed: Analyze all collected data
  Thu-Fri: Create funnel hack reports for each target
```

### Step 5: Define Deliverables
Specify what the research will produce:

1. **Funnel Hack Dossier** -- One per competitor (feeds into `funnel-hack-competitor.md` BR_SWP_001)
2. **Swipe File** -- Collection of best hooks, headlines, email subject lines (feeds into `create-swipe-file.md` BR_SWP_004)
3. **Strategy Synthesis** -- Top patterns and principles across all funnels
4. **Recommended Architecture** -- Your funnel design based on what's working

## Output Template
```yaml
funnel_hacking_plan:
  project_name: ""
  niche: ""
  research_period: ""
  budget: ""

  target_funnels:
    - name: ""
      url: ""
      funnel_type: ""
      why_selected: ""
      priority: "high | medium | low"

  research_protocol:
    phase_a_ads:
      duration: ""
      tools: []
      deliverables: []
    phase_b_walkthrough:
      duration: ""
      tools: []
      deliverables: []
    phase_c_followup:
      duration: ""
      tracking_method: ""
      deliverables: []
    phase_d_analysis:
      duration: ""
      framework: ""
      deliverables: []

  schedule:
    week_1: []
    week_2: []
    week_3: []

  tools_needed:
    - tool: "Facebook Ad Library"
      purpose: "Ad research"
      cost: "Free"
    - tool: "SimilarWeb"
      purpose: "Traffic analysis"
      cost: "Free tier"
    - tool: "Screenshots tool"
      purpose: "Page documentation"
      cost: "Free"
    - tool: "Dedicated email"
      purpose: "Funnel opt-ins"
      cost: "Free"

  deliverables:
    - name: "Funnel Hack Dossier"
      one_per: "competitor"
      format: "markdown"
    - name: "Swipe File"
      format: "organized by element type"
    - name: "Strategy Synthesis"
      format: "markdown report"
    - name: "Recommended Architecture"
      format: "funnel map + specs"

  success_criteria:
    - "Minimum 5 funnels fully documented"
    - "Complete email sequences captured (14+ days)"
    - "All funnel pages screenshotted and analyzed"
    - "Clear patterns identified across funnels"
    - "Actionable architecture recommendation produced"
```

## Quality Gate
- [ ] At least 5 target funnels identified with justification
- [ ] Research protocol covers all 4 phases (ads, walkthrough, follow-up, analysis)
- [ ] Timeline is realistic with specific daily/weekly tasks
- [ ] Budget allocated for purchasing competitor products
- [ ] Tools and resources listed with costs
- [ ] Clear deliverables defined with formats
- [ ] Success criteria are measurable
- [ ] Plan connects to downstream tasks (BR_SWP_001, BR_SWP_004)

## Handoff
The research plan activates `funnel-hack-competitor.md` (BR_SWP_001) for each target. Results feed into `create-swipe-file.md` (BR_SWP_004) and `analyze-funnel-archetype.md` (BR_SWP_002). Final architecture recommendation connects to `create-funnel-roadmap.md` (BR_CHF_002).

---
*Task: BR_ADV_003 | Agent: brunson-advisor | Version: 1.0*
