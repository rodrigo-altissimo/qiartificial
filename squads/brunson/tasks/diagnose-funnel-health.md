# diagnose-funnel-health

## Metadata
```yaml
task_id: BR_FUN_004
agent: brunson-funnels
type: diagnostic
complexity: medium
estimated_time: 45-60min
source: "Traffic Secrets — Chapter 4: Funnel Auditing"
```

## Purpose
Diagnose an existing funnel's performance problems by analyzing each stage's metrics against benchmarks. Identify the exact "leak" in the funnel and prescribe targeted fixes.

> "Your funnel doesn't have a traffic problem. It has a conversion problem at a specific step. Find that step." — Russell Brunson

---

## The Framework: Funnel Health Diagnostic

Every funnel has stages, and every stage has a conversion rate. The job of diagnosis is to find the ONE stage with the biggest drop-off — the "leak" — and fix it before touching anything else.

### The Funnel Health Equation
```
Revenue = Traffic × Opt-in Rate × Sales Conversion × Average Cart Value × Ascension Rate
```

If revenue is low, ONE of those multipliers is broken. Fixing the weakest multiplier gives the biggest ROI.

### Benchmark Ranges

| Stage | Poor | Average | Good | Excellent |
|-------|------|---------|------|-----------|
| Opt-in Rate | <15% | 15-30% | 30-50% | >50% |
| Sales Page Conv. | <1% | 1-3% | 3-5% | >5% |
| Webinar Show-up | <15% | 15-30% | 30-45% | >45% |
| Webinar Close | <2% | 2-5% | 5-10% | >10% |
| OTO Take Rate | <5% | 5-15% | 15-30% | >30% |
| Email Open Rate | <15% | 15-25% | 25-40% | >40% |
| Email Click Rate | <1% | 1-3% | 3-5% | >5% |
| Cart Abandon Rate | >80% | 60-80% | 40-60% | <40% |

---

## Input Required
```yaml
input_fields:
  funnel_name: ""
  funnel_type: ""
  funnel_url: ""
  monthly_traffic: 0
  traffic_source: ""
  current_metrics:
    opt_in_rate: ""
    sales_conversion: ""
    average_cart_value: ""
    upsell_take_rate: ""
    earnings_per_click: ""
    cost_per_click: ""
    cost_per_acquisition: ""
    refund_rate: ""
    email_open_rate: ""
    email_click_rate: ""
  revenue_goal: ""
  current_monthly_revenue: ""
  time_funnel_has_been_live: ""
```

---

## Step-by-Step Process

### Step 1: Gather Current Metrics
Collect data for every stage of the funnel.

```yaml
metric_collection:
  traffic_metrics:
    daily_visitors: 0
    cost_per_click: "$0"
    traffic_source_breakdown: {}
  conversion_metrics:
    opt_in_rate: "0%"
    sales_page_conversion: "0%"
    checkout_completion: "0%"
    upsell_take_rates: []
  revenue_metrics:
    average_cart_value: "$0"
    earnings_per_click: "$0"
    earnings_per_lead: "$0"
    customer_lifetime_value: "$0"
  engagement_metrics:
    email_open_rate: "0%"
    email_click_rate: "0%"
    video_watch_rate: "0%"
    page_scroll_depth: "0%"
```

### Step 2: Compare Against Benchmarks
Rate each metric as Poor/Average/Good/Excellent.

```yaml
benchmark_comparison:
  metric_name:
    current_value: ""
    benchmark_range: ""
    rating: ""              # Poor/Average/Good/Excellent
    gap_to_good: ""         # How far from "good"?
    priority: ""            # High/Medium/Low
```

### Step 3: Identify the Primary Leak
Find the single biggest conversion drop-off.

```yaml
leak_analysis:
  primary_leak:
    stage: ""               # Which funnel stage?
    current_rate: ""
    benchmark_rate: ""
    revenue_impact: ""      # How much revenue is this costing?
    diagnosis: ""           # Why is this stage underperforming?
  secondary_leak:
    stage: ""
    current_rate: ""
    benchmark_rate: ""
    revenue_impact: ""
    diagnosis: ""
```

**Brunson's Rule:** "Fix ONE thing at a time. The biggest leak first."

### Step 4: Diagnose Root Causes
For the primary leak, identify potential root causes.

```yaml
root_cause_analysis:
  traffic_quality_issues:
    - wrong_audience: false
    - cold_traffic_to_hot_offer: false
    - ad_message_mismatch: false
  page_issues:
    - slow_load_time: false
    - confusing_headline: false
    - weak_call_to_action: false
    - too_many_distractions: false
    - mobile_not_optimized: false
  offer_issues:
    - price_too_high: false
    - value_not_communicated: false
    - no_urgency: false
    - weak_guarantee: false
  copy_issues:
    - weak_hook: false
    - no_story: false
    - features_not_benefits: false
    - no_social_proof: false
  tech_issues:
    - broken_links: false
    - payment_processor_errors: false
    - tracking_not_working: false
    - email_deliverability: false
```

### Step 5: Prescribe the Fix
Create a specific action plan to fix the primary leak.

```yaml
prescription:
  fix_1:
    action: ""
    expected_impact: ""
    effort_level: ""        # Low/Medium/High
    timeline: ""
  fix_2:
    action: ""
    expected_impact: ""
    effort_level: ""
    timeline: ""
  fix_3:
    action: ""
    expected_impact: ""
    effort_level: ""
    timeline: ""
```

### Step 6: Project the Impact
Model what fixing the leak would do to revenue.

```yaml
impact_projection:
  current_monthly_revenue: "$0"
  if_primary_leak_fixed:
    new_conversion_rate: ""
    projected_revenue: "$0"
    revenue_increase: "$0"
    percentage_increase: "0%"
  if_both_leaks_fixed:
    projected_revenue: "$0"
    revenue_increase: "$0"
```

---

## Output Template
```yaml
output:
  funnel_diagnosis:
    funnel_name: ""
    overall_health: ""      # Critical/Poor/Average/Good/Excellent
    primary_leak:
      stage: ""
      current: ""
      target: ""
      revenue_impact: ""
    root_cause: ""
    prescription:
      - action: ""
        priority: ""
        timeline: ""
    projected_impact: ""
    next_review_date: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] All funnel stages have metrics collected
  - [ ] Benchmarks are appropriate for funnel type
  - [ ] Primary leak is clearly identified with data
  - [ ] Root cause analysis is evidence-based, not guessing
  - [ ] Prescription is specific and actionable
  - [ ] Impact projection uses conservative estimates
  - [ ] Only ONE primary fix recommended (not 10 things)
```

---

## Handoff
- → **brunson-copy** if leak is in copy/messaging (BR_CPY_001/002)
- → **brunson-hooks** if leak is in traffic/ad hooks (BR_HKS_001/002)
- → **brunson-offers** if leak is in offer structure (BR_OFR_001)
- → **brunson-traffic** if leak is in traffic quality (BR_TRF_002)
- → **brunson-email** if leak is in follow-up (BR_EML_001/003)

---
*Task: BR_FUN_004 | Agent: brunson-funnels | Version: 1.0*
