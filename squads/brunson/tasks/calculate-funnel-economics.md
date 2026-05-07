# Calculate Funnel Economics

## Metadata
```yaml
task_id: BR_ADV_004
agent: brunson-advisor
type: analysis
complexity: high
estimated_time: 35min
source: "DotCom Secrets, Chapter 7 + Traffic Secrets, Chapter 2"
```

## Purpose

Calculate the complete unit economics of a funnel including EPC (Earnings Per Click), CPA (Cost Per Acquisition), ACV (Average Cart Value), and LTV (Lifetime Value). These numbers are the DNA of a profitable funnel -- without them, you are guessing. With them, you can scale with confidence because you know EXACTLY how much you can afford to spend to acquire a customer.

> "He who can spend the most to acquire a customer wins. If you don't know your numbers, you can't spend anything with confidence." -- Russell Brunson

## The Framework: Funnel Economics Model

### The Core Equation

```
PROFIT = (ACV x Conversion Rate x Traffic) - (CPC x Traffic) - Fixed Costs
```

Simplified: **If EPC > CPC, the funnel is profitable.**

### The 7 Critical Numbers

| # | Metric | Formula | Why It Matters |
|---|--------|---------|----------------|
| 1 | CPC | Ad Spend / Clicks | Cost to get someone to your page |
| 2 | CPL | Ad Spend / Leads | Cost to get a lead |
| 3 | CPA | Ad Spend / Customers | Cost to acquire a buyer |
| 4 | AOV | Revenue / Orders | Average front-end order |
| 5 | ACV | Total Rev (incl. upsells) / Orders | Average total cart value |
| 6 | EPC | Total Revenue / Total Clicks | What each click is worth |
| 7 | LTV | Total Customer Revenue / Customers | Lifetime customer value |

### The Profit Zones

```
Zone 1: IMMEDIATE PROFIT    →  ACV > CPA (profitable on first sale)
Zone 2: BACKEND PROFIT      →  LTV > CPA but ACV < CPA (profitable over time)
Zone 3: LOSS LEADER         →  ACV < CPA, banking on LTV (risky but scalable)
Zone 4: UNDERWATER          →  LTV < CPA (losing money, needs fixing)
```

## Input Required
```yaml
input:
  funnel_data:
    time_period: "30 days"
    total_ad_spend: 0
    total_clicks: 0
    total_opt_ins: 0
    total_sales: 0
    total_revenue_frontend: 0
    total_revenue_upsells: 0
    total_revenue_order_bumps: 0
    total_revenue_downsells: 0

  product_prices:
    frontend_offer: 0
    order_bump: 0
    upsell_1: 0
    upsell_2: 0
    downsell: 0

  upsell_data:
    order_bump_take_rate: "0%"
    upsell_1_take_rate: "0%"
    upsell_2_take_rate: "0%"
    downsell_take_rate: "0%"

  backend_data:
    has_continuity: false
    continuity_price: 0
    avg_months_retained: 0
    has_high_ticket: false
    high_ticket_price: 0
    high_ticket_conversion: "0%"

  operational_costs:
    software_monthly: 0
    team_monthly: 0
    fulfillment_per_order: 0
    payment_processing_rate: "2.9%"
```

## Step-by-Step Process

### Step 1: Calculate Front-End Metrics
```
CPC = Total Ad Spend / Total Clicks
CPL = Total Ad Spend / Total Opt-ins
CPA = Total Ad Spend / Total Sales
Opt-in Rate = Opt-ins / Clicks x 100
Sales Conversion = Sales / Opt-ins x 100
```

### Step 2: Calculate Cart Value Metrics
```
AOV = Frontend Revenue / Total Sales
ACV = (Frontend + Upsells + Bumps + Downsells) / Total Sales
Revenue Per Upsell = Upsell Revenue / Total Sales
Order Bump Contribution = Bump Revenue / Total Sales
```

### Step 3: Calculate Earnings Per Click
```
Total Funnel Revenue = Frontend + Upsells + Bumps + Downsells
EPC = Total Funnel Revenue / Total Clicks
Profit Per Click = EPC - CPC
```

**This is the most important number.** If EPC > CPC, you can scale.

### Step 4: Calculate Break-Even Point
```
Break-Even CPA = ACV - (Fulfillment Cost + Processing Fees)
Max Allowable CPC = Break-Even CPA x Conversion Rate
Break-Even ROAS = 1 / Net Margin %
```

### Step 5: Calculate Lifetime Value
```
Frontend LTV = ACV (one-time)
Continuity LTV = Monthly Price x Avg Months Retained
Backend LTV = High-Ticket Price x High-Ticket Conversion Rate
Total LTV = Frontend LTV + Continuity LTV + Backend LTV

LTV:CPA Ratio = Total LTV / CPA
```

**Brunson's benchmark:** LTV:CPA should be 3:1 or higher for healthy scaling.

### Step 6: Run Scenario Analysis
Model three scenarios:

**Conservative (reduce current metrics by 20%):**
- What happens if ad costs increase?
- What if conversion drops?

**Current (actual numbers):**
- Is the funnel profitable today?
- Where is the constraint?

**Optimistic (improve key metric by 30%):**
- What if you fix the biggest leak?
- What's the revenue potential?

### Step 7: Determine Profit Zone and Strategy
Based on calculations:
- Zone 1: Scale aggressively on front-end
- Zone 2: Scale cautiously, optimize backend
- Zone 3: Improve front-end ACV or reduce CPA
- Zone 4: Stop spending, fix funnel first

### Step 8: Create the Economics Dashboard
Compile all numbers into a single-page dashboard for ongoing tracking.

## Output Template
```yaml
funnel_economics:
  analysis_date: "YYYY-MM-DD"
  period_analyzed: ""
  funnel_name: ""

  front_end_metrics:
    cpc: "$0.00"
    cpl: "$0.00"
    cpa: "$0.00"
    opt_in_rate: "0%"
    sales_conversion: "0%"

  cart_value_metrics:
    aov: "$0.00"
    acv: "$0.00"
    order_bump_contribution: "$0.00"
    upsell_contribution: "$0.00"

  profitability_metrics:
    epc: "$0.00"
    cpc: "$0.00"
    profit_per_click: "$0.00"
    is_profitable: true
    roas: "0.0x"
    break_even_cpa: "$0.00"
    max_allowable_cpc: "$0.00"

  lifetime_value:
    frontend_ltv: "$0.00"
    continuity_ltv: "$0.00"
    backend_ltv: "$0.00"
    total_ltv: "$0.00"
    ltv_to_cpa_ratio: "0:1"

  profit_zone: "Zone 1 | Zone 2 | Zone 3 | Zone 4"
  profit_zone_strategy: ""

  scenario_analysis:
    conservative:
      monthly_revenue: "$0"
      monthly_profit: "$0"
      roas: "0.0x"
    current:
      monthly_revenue: "$0"
      monthly_profit: "$0"
      roas: "0.0x"
    optimistic:
      monthly_revenue: "$0"
      monthly_profit: "$0"
      roas: "0.0x"

  recommendations:
    primary_lever: ""
    secondary_lever: ""
    scaling_readiness: "not ready | cautious | ready | aggressive"
    next_actions: []

  dashboard_summary: |
    ┌─────────────────────────────────────────┐
    │  FUNNEL ECONOMICS DASHBOARD             │
    ├─────────────────────────────────────────┤
    │  EPC: $X.XX  |  CPC: $X.XX             │
    │  Profit/Click: $X.XX                    │
    │  ACV: $XXX  |  CPA: $XXX               │
    │  LTV: $X,XXX  |  LTV:CPA = X:1         │
    │  ROAS: X.Xx  |  Zone: X                 │
    │  Status: [PROFITABLE/UNPROFITABLE]      │
    └─────────────────────────────────────────┘
```

## Quality Gate
- [ ] All 7 critical numbers calculated accurately
- [ ] EPC vs CPC comparison clearly stated
- [ ] Break-even point calculated
- [ ] LTV includes ALL revenue streams (not just frontend)
- [ ] LTV:CPA ratio calculated and compared to 3:1 benchmark
- [ ] Profit zone correctly identified (1-4)
- [ ] Scenario analysis covers conservative, current, and optimistic cases
- [ ] Recommendations tied directly to the numbers
- [ ] Dashboard summary provides at-a-glance view

## Handoff
Economics feed into `design-scaling-strategy.md` (BR_ADV_005) for scaling decisions. LTV data informs `audit-funnel-performance.md` (BR_ADV_001) retention analysis. Break-even data is critical input for `create-funnel-roadmap.md` (BR_CHF_002).

---
*Task: BR_ADV_004 | Agent: brunson-advisor | Version: 1.0*
