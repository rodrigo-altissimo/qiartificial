# Audit Funnel Performance

## Metadata
```yaml
task_id: BR_ADV_001
agent: brunson-advisor
type: diagnostic
complexity: high
estimated_time: 45min
source: "DotCom Secrets, Chapter 1 + Traffic Secrets, Chapter 1"
```

## Purpose

Perform a comprehensive funnel performance audit that identifies every leak, bottleneck, and missed opportunity across the entire customer journey. This diagnostic reveals the exact numbers behind each step of the funnel so the business owner knows precisely where to focus optimization efforts for maximum ROI.

> "The biggest companies in the world are not the ones who have the best products... they're the ones who can spend the most money to acquire a customer." -- Russell Brunson

## The Framework: Funnel Performance Audit Model

Russell Brunson's approach to funnel auditing is based on the principle that **every funnel is a series of micro-conversions**, and each micro-conversion has a measurable rate. By mapping every step and its conversion rate, you can identify the single biggest constraint -- the "one thing" that, if improved, would have the greatest impact on overall revenue.

### The 5 Layers of Funnel Performance

1. **Traffic Layer** -- Where visitors come from, quality of traffic, cost per click
2. **Capture Layer** -- Opt-in rates, lead magnet effectiveness, hook quality
3. **Conversion Layer** -- Sales page conversions, checkout completion, payment processing
4. **Ascension Layer** -- Upsell take rates, order bumps, downsell conversions
5. **Retention Layer** -- Refund rates, continuity stick rates, lifetime value

### Key Metrics Per Layer

| Layer | Primary Metric | Benchmark |
|-------|---------------|-----------|
| Traffic | Cost Per Click (CPC) | $1-5 cold, $0.10-1 warm |
| Capture | Opt-in Rate | 20-50% |
| Conversion | Sales Conversion | 1-5% cold, 5-15% warm |
| Ascension | Upsell Take Rate | 10-30% |
| Retention | 30-Day Stick Rate | 70-90% |

## Input Required
```yaml
input:
  funnel_url: "URL of the main funnel entry point"
  funnel_type: "lead | tripwire | webinar | high-ticket | continuity"
  traffic_sources:
    - source: "Facebook Ads | Google Ads | YouTube | Organic | Email"
      monthly_spend: 0
      monthly_clicks: 0
  conversion_data:
    opt_in_visitors: 0
    opt_ins: 0
    sales_page_visitors: 0
    sales: 0
    upsell_shown: 0
    upsell_taken: 0
    order_bump_shown: 0
    order_bump_taken: 0
  revenue_data:
    front_end_price: 0
    upsell_price: 0
    order_bump_price: 0
    monthly_revenue: 0
    refund_count: 0
  time_period: "30 days | 60 days | 90 days"
```

## Step-by-Step Process

### Step 1: Map the Current Funnel Architecture
Document every page in the funnel sequence, including:
- Traffic source entry points
- Pre-frame pages (blog posts, ads, videos)
- Opt-in / squeeze page
- Thank you / bridge page
- Sales page
- Order form / checkout
- OTO 1 (One-Time Offer / Upsell)
- OTO 2 (if applicable)
- Downsell page(s)
- Thank you / delivery page
- Follow-up sequence triggers

Create a visual funnel map showing the flow between each page.

### Step 2: Calculate Layer-by-Layer Metrics
For each layer, calculate:

**Traffic Layer:**
- Total visitors per source
- Cost Per Click (CPC) = Spend / Clicks
- Click-Through Rate (CTR) on ads
- Traffic temperature distribution (cold/warm/hot %)

**Capture Layer:**
- Opt-in Rate = Opt-ins / Visitors x 100
- Cost Per Lead (CPL) = Total Spend / Opt-ins
- Lead Quality Score (based on downstream conversions)

**Conversion Layer:**
- Sales Conversion Rate = Sales / Sales Page Visitors x 100
- Earnings Per Click (EPC) = Total Revenue / Total Clicks
- Cart Abandonment Rate
- Average Order Value (AOV)

**Ascension Layer:**
- Upsell Take Rate per OTO
- Order Bump Take Rate
- Average Cart Value (ACV) = Total Revenue / Number of Orders
- Revenue per upsell page view

**Retention Layer:**
- Refund Rate = Refunds / Sales x 100
- 30/60/90 day retention (for continuity)
- Customer Lifetime Value (LTV)

### Step 3: Identify the Constraint
Using Brunson's principle: "Find the biggest leak and fix it first."

Rank each metric against benchmarks:
- GREEN: At or above benchmark
- YELLOW: Within 50% of benchmark
- RED: Below 50% of benchmark

The RED metric with the highest revenue impact is the primary constraint.

### Step 4: Calculate Revenue Impact
For each RED metric, calculate:
```
Revenue Impact = (Benchmark Rate - Current Rate) x Volume x Price
```

This gives the dollar value of improving each metric to benchmark level.

### Step 5: Generate Optimization Recommendations
For the top 3 constraints, provide:
- Specific tactical recommendations
- Expected improvement range
- Implementation priority (quick win vs. long-term)
- Resources needed

### Step 6: Create the Audit Report
Compile all findings into the output template below.

## Output Template
```yaml
funnel_audit:
  audit_date: "YYYY-MM-DD"
  funnel_name: ""
  funnel_type: ""
  analysis_period: ""

  executive_summary:
    overall_health: "Critical | Needs Work | Healthy | Optimized"
    revenue_current: 0
    revenue_potential: 0
    primary_constraint: ""
    top_3_recommendations:
      - recommendation: ""
        estimated_impact: ""
        priority: "immediate | short-term | long-term"

  traffic_layer:
    total_visitors: 0
    cost_per_click: 0
    traffic_quality_score: "1-10"
    status: "RED | YELLOW | GREEN"
    findings: []

  capture_layer:
    opt_in_rate: "0%"
    cost_per_lead: 0
    status: "RED | YELLOW | GREEN"
    findings: []

  conversion_layer:
    sales_conversion_rate: "0%"
    earnings_per_click: 0
    average_order_value: 0
    status: "RED | YELLOW | GREEN"
    findings: []

  ascension_layer:
    upsell_take_rates: []
    order_bump_rate: "0%"
    average_cart_value: 0
    status: "RED | YELLOW | GREEN"
    findings: []

  retention_layer:
    refund_rate: "0%"
    stick_rate_30day: "0%"
    customer_ltv: 0
    status: "RED | YELLOW | GREEN"
    findings: []

  optimization_roadmap:
    quick_wins: []
    short_term_projects: []
    long_term_initiatives: []

  funnel_map: |
    [Visual ASCII representation of funnel with conversion rates at each step]
```

## Quality Gate
- [ ] All 5 layers audited with specific metrics
- [ ] Each metric compared against realistic benchmarks
- [ ] Primary constraint identified with revenue impact calculated
- [ ] At least 3 actionable optimization recommendations provided
- [ ] Revenue potential estimated based on benchmark improvements
- [ ] Funnel map accurately reflects the actual funnel architecture
- [ ] No generic advice -- all recommendations specific to the data provided
- [ ] Audit report follows output template completely

## Handoff
Pass audit results to `brunson-advisor` for strategy development, or to `brunson-chief` for funnel roadmap creation via `create-funnel-roadmap.md`. The constraint analysis feeds directly into `design-scaling-strategy.md` (BR_ADV_005).

---
*Task: BR_ADV_001 | Agent: brunson-advisor | Version: 1.0*
