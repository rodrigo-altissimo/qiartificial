# create-funnel-benchmark

## Metadata
```yaml
task_id: BR_SWP_004
agent: brunson-swipe
type: analysis
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapter 2: Funnel Hacking + DotCom Secrets Ignite — Funnel Metrics"
```

## Purpose
Create a performance benchmark for a funnel by defining the key metrics, industry standards, and target KPIs at every stage. Benchmarks turn guesswork into data-driven optimization by establishing what "good" looks like for each funnel type.

> "If you don't know your numbers, you don't have a business — you have a hobby. Benchmarks tell you if your funnel is winning or losing." — Russell Brunson

---

## The Framework: Funnel Benchmark Architecture

Every funnel archetype has established performance benchmarks. Knowing these lets you instantly diagnose whether a funnel is performing above or below standard.

### Universal Funnel Metrics

```
METRIC                          FORMULA                          TYPICAL RANGE
──────────────────────────     ────────────────────────────      ─────────────
Opt-In Rate                    Leads / Page Visitors              20-50%
Show Rate (webinars)           Attendees / Registrants            15-40%
Front-End Conversion           Buyers / Visitors                  1-5%
Order Bump Rate                Bumps / Purchases                  25-45%
Upsell Conversion              Upsell Buyers / FE Buyers         10-30%
Average Order Value (AOV)      Total Revenue / Orders             Varies by funnel
Cost Per Lead (CPL)            Ad Spend / Leads                   $2-$15
Cost Per Acquisition (CPA)     Ad Spend / Customers               $20-$200
Earnings Per Click (EPC)       Revenue / Total Clicks             $0.50-$5.00
Return on Ad Spend (ROAS)      Revenue / Ad Spend                 2x-5x
Customer Lifetime Value (LTV)  Total Revenue per Customer         3x-10x of AOV
```

---

## Input Required
```yaml
input_fields:
  funnel_type: ""               # squeeze, tripwire, webinar, application, etc.
  niche: ""
  price_points: []              # All prices in the funnel
  traffic_source: ""            # Paid, organic, affiliate
  current_metrics: {}           # Any existing data
  competitor_data: {}           # Known competitor metrics
  monthly_traffic: ""           # Current or projected
  monthly_ad_spend: ""          # If using paid traffic
```

---

## Step-by-Step Process

### Step 1: Define the Benchmark Metrics for Your Funnel Type
Select the metrics that matter most for your specific funnel archetype.

```yaml
funnel_metrics:
  archetype: ""
  primary_metrics:
    metric_1:
      name: ""
      formula: ""
      industry_low: ""
      industry_average: ""
      industry_high: ""
      your_target: ""
    metric_2:
      name: ""
      formula: ""
      industry_low: ""
      industry_average: ""
      industry_high: ""
      your_target: ""
    metric_3:
      name: ""
      formula: ""
      industry_low: ""
      industry_average: ""
      industry_high: ""
      your_target: ""
  secondary_metrics:
    - name: ""
      target: ""
    - name: ""
      target: ""
```

### Step 2: Set Archetype-Specific Benchmarks
Apply benchmarks specific to your funnel archetype.

```yaml
archetype_benchmarks:
  lead_squeeze:
    opt_in_rate: "30-50%"
    cpl: "$1-$5"
    email_open_rate: "25-40%"
    email_click_rate: "3-8%"
  book_cart:
    landing_page_conversion: "15-30%"
    book_purchase_rate: "5-15%"
    bump_rate: "25-40%"
    oto_conversion: "10-25%"
    aov: "$30-$80"
  tripwire_slo:
    landing_page_conversion: "10-25%"
    purchase_rate: "3-8%"
    bump_rate: "30-45%"
    oto_conversion: "10-20%"
    break_even_cpa: "$___"
  webinar:
    registration_rate: "25-45%"
    show_rate: "20-35%"
    close_rate_live: "5-15%"
    close_rate_replay: "2-5%"
    revenue_per_attendee: "$50-$200"
  application:
    application_rate: "10-20%"
    show_rate: "60-80%"
    close_rate: "20-40%"
    cpa: "$200-$1,000"
  challenge:
    registration_rate: "20-40%"
    participation_rate: "30-50%"
    completion_rate: "15-30%"
    purchase_rate: "5-15%"
```

### Step 3: Calculate Break-Even Metrics
Determine the exact numbers needed to break even on ad spend.

```yaml
break_even_analysis:
  ad_spend_per_day: "$___"
  cpl: "$___"
  leads_per_day: ""
  conversion_rate: "____%"
  customers_per_day: ""
  aov: "$___"
  daily_revenue: "$___"
  break_even: true/false
  days_to_profit: ""
  required_conversion_for_break_even: "____%"
```

### Step 4: Create the Performance Dashboard Template
Define what to track daily, weekly, and monthly.

```yaml
dashboard:
  daily_metrics:
    - "Ad spend"
    - "Visitors"
    - "Leads"
    - "Sales"
    - "Revenue"
    - "ROAS"
  weekly_metrics:
    - "CPL trend"
    - "Conversion rate trend"
    - "AOV trend"
    - "Best performing ad/traffic source"
  monthly_metrics:
    - "Total revenue"
    - "Total customers"
    - "LTV progress"
    - "Funnel health score"
    - "Month-over-month growth"
```

### Step 5: Define the Optimization Triggers
When metrics hit certain thresholds, specific actions should be taken.

```yaml
optimization_triggers:
  red_flags:
    - metric: "Opt-in rate < 20%"
      action: "Test new headlines, simplify page"
    - metric: "Show rate < 15%"
      action: "Add indoctrination emails, SMS reminders"
    - metric: "Close rate < 3%"
      action: "Review offer, presentation, and objection handling"
    - metric: "ROAS < 1.5x"
      action: "Review traffic targeting, test new audiences"
    - metric: "Refund rate > 10%"
      action: "Review product quality and expectations"
  green_signals:
    - metric: "ROAS > 3x"
      action: "Scale ad spend by 20%"
    - metric: "Opt-in rate > 40%"
      action: "This page works — drive more traffic"
    - metric: "Close rate > 10%"
      action: "Webinar is strong — add more traffic sources"
```

### Step 6: Build the Benchmark Comparison Table
Create a side-by-side comparison of your funnel vs. benchmarks.

```yaml
benchmark_comparison:
  metric_1:
    name: ""
    benchmark: ""
    your_current: ""
    status: "above/at/below"
    gap: ""
    priority: "high/medium/low"
  metric_2:
    name: ""
    benchmark: ""
    your_current: ""
    status: ""
    gap: ""
    priority: ""
```

---

## Output Template
```yaml
output:
  funnel_benchmark:
    funnel_type: ""
    niche: ""
    metrics:
      - metric: ""
        benchmark: ""
        your_target: ""
        current: ""
        status: ""
    break_even:
      required_conversion: ""
      required_aov: ""
      current_status: ""
    optimization_priorities:
      - metric: ""
        action: ""
        expected_impact: ""
    dashboard_setup: true
    review_frequency: "weekly"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Benchmarks are specific to the funnel archetype (not generic)
  - [ ] All primary metrics have industry low/average/high ranges
  - [ ] Break-even analysis uses real or realistic numbers
  - [ ] Dashboard covers daily, weekly, and monthly tracking
  - [ ] Optimization triggers define specific actions for each threshold
  - [ ] Benchmark comparison identifies gaps and priorities
  - [ ] Metrics are achievable but stretch beyond current performance
  - [ ] Review cadence is defined for ongoing optimization
```

---

## Handoff
- -> **brunson-advisor** for `audit-funnel-performance` (BR_ADV_001) — audit against benchmarks
- -> **brunson-advisor** for `diagnose-funnel-health` (BR_ADV_002) — diagnose underperformance
- -> **brunson-funnels** for `calculate-funnel-economics` (BR_FUN_004) — detailed economic modeling

---
*Task: BR_SWP_004 | Agent: brunson-swipe | Version: 1.0*
