# SOP: Funnel Audit

## Purpose

Conduct a systematic audit of an existing sales funnel to identify conversion bottlenecks, broken elements, and optimization opportunities. This SOP diagnoses where the funnel is losing money and prescribes specific fixes ordered by impact.

---

## Prerequisites

- Access to funnel analytics (Google Analytics, funnel platform stats, email platform)
- Access to ad platform data (if running paid traffic)
- Ability to go through the funnel as a test customer
- Minimum 500 visitors through the funnel (need statistical significance)
- Access to email sequence performance data (open rates, click rates)

---

## Step-by-Step Procedure

### Step 1: Gather Baseline Metrics (1 hour)

Collect data for each funnel stage:

| Stage | Metric | Benchmark |
|-------|--------|-----------|
| Ad/Traffic Source | CTR | 1-3% (Facebook), varies by platform |
| Squeeze/Opt-in Page | Opt-in Rate | 20-40% |
| Sales Page | View-to-Sale Conversion | 1-5% (cold), 5-15% (warm) |
| Order Form | Checkout Completion | 50-70% |
| Upsell Page 1 | Take Rate | 15-30% |
| Upsell Page 2 | Take Rate | 10-20% |
| Email Open Rate | SOS Average | 30-50% |
| Email Click Rate | SOS Average | 3-10% |

### Step 2: Walk the Funnel as a Customer (1 hour)

1. Click the actual ad or enter through the traffic source
2. Go through every page, every step, on both desktop AND mobile
3. Complete the opt-in process
4. Check that the lead magnet is delivered correctly
5. Read every email in the sequence (subscribe with a test email)
6. Go through the sales page and order process
7. Test the upsell pages
8. Document every friction point, broken link, slow page, or confusing element

### Step 3: Identify the Biggest Leak (30 min)

Calculate the drop-off at each stage:

```
Traffic Source     -->  1,000 visitors
Opt-in Page        -->  300 opt-ins (30%)     [OK]
Sales Page Views   -->  250 views (83%)       [OK]
Sales Page Buyers  -->  5 buyers (2%)         [LOW -- BIGGEST LEAK]
Order Completion   -->  4 completed (80%)     [OK]
Upsell Take        -->  1 upsell (25%)        [OK]
```

The stage with the largest drop-off relative to benchmark is your priority fix.

### Step 4: Diagnose Root Causes (1 hour)

For the biggest leak, investigate:

**If opt-in rate is low (<20%):**
- Weak headline/hook
- Lead magnet not compelling enough
- Too many form fields
- Page load speed issues
- Mobile rendering problems

**If sales page conversion is low (<1%):**
- Headline does not match ad promise (message mismatch)
- No Epiphany Bridge story (all logic, no emotion)
- Weak or missing social proof
- Stack is not compelling (insufficient value gap)
- No urgency or guarantee
- Page is too long or too short for the offer

**If email engagement is low (opens <20%):**
- Subject lines are generic
- No open loops between emails
- Sending frequency too low or too high
- SOS not following proper story structure

**If checkout abandonment is high (>50%):**
- Unexpected costs at checkout
- No trust badges
- Payment options too limited
- Form asks for unnecessary information

### Step 5: Prescribe Fixes (1 hour)

Create a prioritized fix list:

1. **Quick Wins (Fix this week):** Broken links, mobile issues, slow pages
2. **High Impact (Fix this month):** Headline rewrites, stack improvements, urgency additions
3. **Strategic (Fix this quarter):** New ad creative, email sequence rewrite, full page redesign

For each fix, define:
- What exactly to change
- Expected impact on conversion
- Resources needed
- Timeline to implement

### Step 6: A/B Test Plan (30 min)

1. Identify the #1 variable to test first (usually the headline)
2. Create a hypothesis: "Changing [X] from [A] to [B] will increase [metric] by [Y]%"
3. Define sample size needed for statistical significance
4. Set test duration (minimum 7 days or 500 visitors per variation)
5. Plan next 3 tests in sequence (only test one variable at a time)

---

## Quality Checks

- [ ] All baseline metrics collected and documented
- [ ] Funnel walked end-to-end on desktop AND mobile
- [ ] Biggest leak identified with data evidence
- [ ] Root causes diagnosed (not just symptoms)
- [ ] Fix list prioritized by impact and effort
- [ ] A/B test plan created for top priority fix
- [ ] All broken links and technical issues documented
- [ ] Email sequence performance reviewed
- [ ] Comparison to benchmarks documented

---

## Handoff

Deliver:
1. **Funnel Audit Report** -- Complete metrics, leak analysis, and diagnosis
2. **Prioritized Fix List** -- Quick wins, high impact, and strategic fixes
3. **A/B Test Plan** -- First 3 tests with hypotheses and timelines
4. **Benchmark Comparison** -- Current metrics vs. industry benchmarks
5. **Revenue Impact Estimate** -- Projected revenue increase if top fixes are implemented

---

*Estimated Time: 4-6 hours*
*Review Cycle: Monthly for active funnels, quarterly for evergreen funnels*
