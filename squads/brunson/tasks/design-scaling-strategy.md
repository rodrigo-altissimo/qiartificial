# Design Scaling Strategy

## Metadata
```yaml
task_id: BR_ADV_005
agent: brunson-advisor
type: execution
complexity: high
estimated_time: 40min
source: "Traffic Secrets, Chapter 1-3 + DotCom Secrets, Chapter 7"
```

## Purpose

Design a comprehensive scaling strategy based on Brunson's principle that "the business that can spend the most to acquire a customer wins." This task builds a multi-phase scaling plan that increases ad spend and traffic systematically while maintaining or improving profitability. Scaling is NOT just "spending more" -- it is engineering a system where every dollar spent returns more than a dollar.

> "Whoever can spend the most to acquire a customer wins. This isn't about being the cheapest -- it's about building a funnel so good that you can AFFORD to outspend everyone." -- Russell Brunson

## The Framework: The Scaling Architecture

### Brunson's 3 Scaling Levers

1. **Increase ACV** -- Add upsells, bumps, and backend offers so each customer is worth more
2. **Decrease CPA** -- Optimize ads, pages, and conversion to reduce acquisition cost
3. **Expand Traffic** -- Tap new traffic sources, audiences, and platforms

### The Scaling Phases

```
Phase 1: PROOF       ($0-1K/mo ad spend)   → Prove the funnel works
Phase 2: OPTIMIZE    ($1K-5K/mo)           → Maximize EPC, minimize CPA
Phase 3: SCALE       ($5K-25K/mo)          → Increase volume on winning channels
Phase 4: MULTIPLY    ($25K-100K/mo)        → Add new channels and funnels
Phase 5: DOMINATE    ($100K+/mo)           → Own the market, outspend everyone
```

### Traffic Temperature Strategy

| Temperature | Definition | Strategy | Cost | Volume |
|-------------|-----------|----------|------|--------|
| HOT | Already knows you | Retargeting, email, social | Lowest | Limited |
| WARM | Knows someone like you | Influencer audiences, lookalikes | Medium | Medium |
| COLD | Doesn't know you exist | Interest targeting, broad ads | Highest | Unlimited |

**Scaling sequence:** Master HOT first, then WARM, then COLD.

## Input Required
```yaml
input:
  current_economics:
    epc: "$0.00"
    cpc: "$0.00"
    cpa: "$0.00"
    acv: "$0.00"
    ltv: "$0.00"
    current_monthly_spend: 0
    current_monthly_revenue: 0

  current_traffic_sources:
    - source: ""
      spend: 0
      results: 0

  scaling_goal:
    target_monthly_revenue: 0
    target_timeline: "3 months | 6 months | 12 months"
    risk_tolerance: "conservative | moderate | aggressive"

  assets_available:
    email_list_size: 0
    social_following: 0
    content_library: "none | small | medium | large"
    team_capacity: "solo | small team | full team"
    additional_budget: 0
```

## Step-by-Step Process

### Step 1: Assess Scaling Readiness
Before scaling, verify:

**Green Light Criteria (ALL must be true):**
- [ ] EPC > CPC (funnel is profitable per click)
- [ ] Funnel tested with at least 1,000 visitors
- [ ] Conversion rates stable for 2+ weeks
- [ ] Fulfillment can handle 2-3x current volume
- [ ] Customer support system in place

**Yellow Light (Scale cautiously):**
- EPC approximately equals CPC
- Funnel tested with 500-1,000 visitors
- Conversion rates fluctuating slightly

**Red Light (DO NOT scale yet):**
- EPC < CPC
- Fewer than 500 visitors tested
- Major conversion rate instability

### Step 2: Map the ACV Expansion Opportunities
Identify every way to increase what each customer is worth:

**Immediate ACV boosters:**
- Add order bump ($17-47, should get 20-40% take rate)
- Add OTO/upsell 1 ($97-297, target 10-25% take rate)
- Add OTO/upsell 2 ($197-497, target 5-15% take rate)
- Add downsell for declined upsells (50% of upsell price)

**Backend ACV boosters:**
- Continuity program ($27-97/mo, target 70%+ retention at 30 days)
- High-ticket offer ($997-5,000, target 2-5% of buyers)
- Done-for-you service ($5,000-25,000, target 1-2%)

**Calculate projected ACV after additions:**
```
New ACV = Frontend + (Bump Price x Bump Rate) + (OTO1 x OTO1 Rate) + (OTO2 x OTO2 Rate) + (Downsell x DS Rate)
```

### Step 3: Design CPA Reduction Plan
Systematic optimization to reduce acquisition cost:

**Ad-Level Optimization:**
- Test 5-10 hook variations (headlines and thumbnails)
- Test 3-5 audience segments
- Kill underperformers at 2x target CPA
- Scale winners by 20% every 3 days

**Page-Level Optimization:**
- A/B test headlines (biggest impact)
- Test long-form vs short-form copy
- Test video vs text sales pages
- Optimize page load speed (<3 seconds)

**Funnel-Level Optimization:**
- Test different lead magnets
- Test bridge page vs direct to sales page
- Test webinar vs VSL (Video Sales Letter)
- Optimize email follow-up sequence

### Step 4: Build the Traffic Expansion Plan

**Phase 1 -- HOT Traffic (Week 1-2):**
- Retarget all website visitors (last 180 days)
- Email existing list with new offer
- Post to existing social audience
- Target: Validate offer with lowest-cost traffic first

**Phase 2 -- WARM Traffic (Week 3-6):**
- Lookalike audiences from buyers (1% LAL)
- Influencer collaborations in your niche
- Guest appearances on podcasts/YouTube channels
- Joint ventures with complementary businesses
- Target: Expand reach while maintaining profitability

**Phase 3 -- COLD Traffic (Week 7+):**
- Interest-based targeting on Facebook/Instagram
- Search intent campaigns on Google/YouTube
- Content marketing (SEO, YouTube, blog)
- Broad targeting with strong creative
- Target: Unlimited scale at acceptable CPA

### Step 5: Create the Scaling Timeline

Map specific actions to specific weeks with budgets:

```
Month 1: OPTIMIZE
  Week 1-2: Optimize existing ads and pages (maintain current spend)
  Week 3-4: Add order bump and OTO (increase ACV)
  Budget: Current + 20%

Month 2: EXPAND
  Week 1-2: Launch retargeting campaigns (HOT)
  Week 3-4: Launch lookalike campaigns (WARM)
  Budget: Month 1 + 50%

Month 3: SCALE
  Week 1-2: Scale winning campaigns by 20% every 3 days
  Week 3-4: Add cold traffic campaigns
  Budget: Month 2 + 100%
```

### Step 6: Define Guardrails and Kill Switches
Protect against scaling failures:

**Daily monitoring:**
- CPA must stay within 130% of target
- EPC must stay above 80% of baseline
- ROAS must stay above break-even

**Kill switches:**
- If CPA exceeds 150% of target for 3 consecutive days: pause and review
- If ROAS drops below 1.0 for 5 days: reduce spend to profitable level
- If refund rate exceeds 10%: investigate product/expectation mismatch

## Output Template
```yaml
scaling_strategy:
  date: "YYYY-MM-DD"
  current_state:
    monthly_revenue: "$0"
    monthly_spend: "$0"
    roas: "0.0x"
    epc: "$0.00"
    cpc: "$0.00"

  scaling_readiness: "green | yellow | red"
  readiness_gaps: []

  acv_expansion:
    current_acv: "$0.00"
    projected_acv: "$0.00"
    new_offers:
      - offer: ""
        price: "$0"
        projected_take_rate: "0%"
        acv_increase: "$0.00"

  cpa_reduction:
    current_cpa: "$0.00"
    target_cpa: "$0.00"
    optimization_priorities:
      - area: ""
        test: ""
        expected_impact: ""

  traffic_expansion:
    phase_1_hot:
      channels: []
      budget: "$0"
      timeline: ""
    phase_2_warm:
      channels: []
      budget: "$0"
      timeline: ""
    phase_3_cold:
      channels: []
      budget: "$0"
      timeline: ""

  timeline:
    month_1:
      focus: ""
      budget: "$0"
      target_revenue: "$0"
      actions: []
    month_2:
      focus: ""
      budget: "$0"
      target_revenue: "$0"
      actions: []
    month_3:
      focus: ""
      budget: "$0"
      target_revenue: "$0"
      actions: []

  guardrails:
    max_cpa: "$0.00"
    min_epc: "$0.00"
    min_roas: "0.0x"
    kill_switches: []

  projected_results:
    month_1_revenue: "$0"
    month_3_revenue: "$0"
    month_6_revenue: "$0"
    month_12_revenue: "$0"
```

## Quality Gate
- [ ] Scaling readiness assessed with clear green/yellow/red determination
- [ ] ACV expansion plan includes at least 2 new revenue additions
- [ ] CPA reduction plan includes specific A/B tests
- [ ] Traffic expansion follows HOT > WARM > COLD sequence
- [ ] Timeline is specific with weekly actions and monthly budgets
- [ ] Guardrails include daily monitoring thresholds
- [ ] Kill switches defined with specific trigger conditions
- [ ] Revenue projections based on calculated economics (not guesses)

## Handoff
Scaling strategy depends on data from `calculate-funnel-economics.md` (BR_ADV_004). Implementation details feed into `create-funnel-roadmap.md` (BR_CHF_002). Traffic expansion plans connect to `plan-funnel-hacking.md` (BR_ADV_003) for competitive intelligence.

---
*Task: BR_ADV_005 | Agent: brunson-advisor | Version: 1.0*
