# select-funnel-type

## Metadata
```yaml
task_id: BR_FUN_002
agent: brunson-funnels
type: diagnostic
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapter 7: Funnels & Scripts"
```

## Purpose
Select the optimal funnel type for a specific business goal, product, and audience. Different offers require different funnel architectures — choosing wrong means wasted traffic and lost revenue.

> "There's no such thing as a bad product, only a bad funnel. Match the right funnel to the right offer and watch what happens." — Russell Brunson

---

## The Framework: Funnel Type Selection Matrix

Russell Brunson identifies 7 core funnel types. Each is optimized for a specific price point, product type, and customer awareness level.

### The 7 Core Funnel Types

| # | Funnel Type | Price Range | Best For | Complexity |
|---|------------|-------------|----------|------------|
| 1 | Lead Squeeze Funnel | FREE | Email list building | Low |
| 2 | Book/Cart Funnel | $7-$37 | Physical/digital books | Medium |
| 3 | Tripwire/SLO Funnel | $1-$47 | Low-ticket digital | Medium |
| 4 | Webinar Funnel | $297-$2,997 | Courses/coaching | High |
| 5 | Product Launch Funnel | $97-$2,997 | New product launches | High |
| 6 | High-Ticket Funnel | $3,000-$100K | Services/masterminds | Medium |
| 7 | Summit/Challenge Funnel | FREE-$97 | Audience building | High |

---

## Input Required
```yaml
input_fields:
  business_name: ""
  offer_name: ""
  offer_type: ""            # Digital, Physical, Service, Coaching, SaaS
  price_point: ""
  target_audience: ""
  audience_awareness: ""    # Unaware, Problem-Aware, Solution-Aware, Product-Aware, Most-Aware
  primary_goal: ""          # Leads, Front-End Sales, Core Offer Sales, Backend Sales
  traffic_source: ""        # Paid Ads, Organic, Affiliates, Email
  existing_assets: ""       # Email list size, content, testimonials
  tech_comfort: ""          # Beginner, Intermediate, Advanced
```

---

## Step-by-Step Process

### Step 1: Determine the Customer Awareness Level
Where is your prospect on Eugene Schwartz's awareness spectrum?

```yaml
awareness_diagnostic:
  unaware: false            # Don't know they have a problem
  problem_aware: false      # Know the problem, not the solution
  solution_aware: false     # Know solutions exist, not your product
  product_aware: false      # Know your product, not convinced
  most_aware: false         # Know you, ready to buy with right offer
```

**Mapping:**
- Unaware → Lead Squeeze or Summit (educate first)
- Problem-Aware → Book Funnel or Challenge (teach the solution)
- Solution-Aware → Webinar or Product Launch (prove your mechanism)
- Product-Aware → Tripwire or High-Ticket (make the offer)
- Most-Aware → Direct Sales Page (just close)

### Step 2: Match Price Point to Funnel Type

```yaml
price_funnel_match:
  free_to_7:
    recommended: "Lead Squeeze or Book Funnel"
    purpose: "Customer acquisition at break-even"
  7_to_97:
    recommended: "Tripwire/SLO Funnel"
    purpose: "Self-liquidating front-end offer"
  97_to_997:
    recommended: "Webinar Funnel or Product Launch"
    purpose: "Core offer conversion"
  997_to_5000:
    recommended: "Webinar Funnel with Application"
    purpose: "Premium offer with qualification"
  5000_plus:
    recommended: "High-Ticket Funnel (Application + Call)"
    purpose: "Backend offer with personal sales"
```

### Step 3: Evaluate Each Candidate Funnel
Score each potential funnel type against your situation.

```yaml
funnel_evaluation:
  funnel_name: ""
  scores:
    price_fit: 0            # 1-10: Does price point match?
    audience_fit: 0         # 1-10: Does awareness level match?
    complexity_fit: 0       # 1-10: Can you build and maintain this?
    traffic_fit: 0          # 1-10: Does your traffic source work here?
    asset_fit: 0            # 1-10: Do you have what's needed?
    total_score: 0          # Sum of all scores
```

### Step 4: Map the Selected Funnel Pages
Once selected, map every page in the funnel.

**Lead Squeeze Funnel:**
```
Opt-in Page → Thank You Page → Email Sequence
```

**Book/Cart Funnel:**
```
Sales Page → Order Form → OTO 1 → OTO 2 → Thank You → Email Sequence
```

**Tripwire/SLO Funnel:**
```
Squeeze Page → Tripwire Page → OTO 1 → OTO 2 → Downsell → Thank You
```

**Webinar Funnel:**
```
Registration → Confirmation → Webinar → Offer Page → Application → Email Sequence
```

**Product Launch Funnel:**
```
Squeeze → PLC Video 1 → PLC Video 2 → PLC Video 3 → Open Cart → Email Sequence
```

**High-Ticket Funnel:**
```
Ad → VSL/Video → Application → Call Booking → Phone Close
```

**Summit/Challenge Funnel:**
```
Registration → Daily Content (5-7 days) → Offer → Email Sequence
```

### Step 5: Define the Funnel Metrics
Set target metrics for the selected funnel.

```yaml
funnel_metrics:
  traffic_target: 0         # Visitors per day to top of funnel
  opt_in_rate: "0%"         # Lead capture rate
  front_end_conversion: "0%" # First purchase rate
  average_cart_value: "$0"  # Average transaction value
  earnings_per_click: "$0"  # Revenue per click
  cost_per_acquisition: "$0" # Cost to acquire customer
  break_even_point: ""      # When does the funnel become profitable?
```

### Step 6: Identify Required Assets
List everything needed to build the selected funnel.

```yaml
required_assets:
  pages: []                 # Landing pages needed
  copy: []                  # Sales copy needed
  emails: []                # Email sequences needed
  videos: []                # Video content needed
  graphics: []              # Design assets needed
  tech: []                  # Tools/platforms needed
  traffic: []               # Traffic sources to activate
```

---

## Output Template
```yaml
output:
  selected_funnel:
    type: ""
    reason: ""
    pages_needed: []
    estimated_build_time: ""
    priority_metrics:
      primary: ""
      secondary: ""
    required_assets_summary: ""
    estimated_cost_to_build: ""
    projected_roi_timeline: ""
  rejected_alternatives:
    - type: ""
      reason_rejected: ""
    - type: ""
      reason_rejected: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Funnel type matches price point
  - [ ] Funnel type matches audience awareness level
  - [ ] All required pages are mapped
  - [ ] Target metrics are realistic
  - [ ] Required assets are identified
  - [ ] Build complexity matches team capability
  - [ ] Traffic source is compatible with funnel type
```

---

## Handoff
- → **brunson-funnels** for `map-funnel-architecture` (BR_FUN_003) — detail the full page flow
- → **brunson-webinar** for `create-perfect-webinar` (BR_WEB_001) — if webinar funnel selected
- → **brunson-copy** for `create-vsl-script` (BR_CPY_001) — if high-ticket funnel selected

---
*Task: BR_FUN_002 | Agent: brunson-funnels | Version: 1.0*
