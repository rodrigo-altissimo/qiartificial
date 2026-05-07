# design-sales-page

## Metadata
```yaml
task_id: BR_PAG_002
agent: brunson-pages
type: creation
complexity: high
estimated_time: 45-60min
source: "DotCom Secrets — Chapter 6: Funnel #2 The SLO Funnel + DotCom Secrets Ignite — Sales Page Layouts"
```

## Purpose
Design the complete layout and wireframe for a high-converting sales page. The sales page is where the copy meets the design — every visual element must support the persuasion sequence and guide the visitor toward the buy button.

> "The design of your sales page should be invisible. If someone notices the design, it's distracting from the message." — Russell Brunson

---

## The Framework: Sales Page Layout Architecture

A sales page follows the same persuasion structure as the sales letter but adds visual hierarchy, scroll patterns, and conversion-optimized design elements.

### Long-Form Sales Page Sections

```
SECTION                    DESIGN ELEMENTS                    PURPOSE
────────────────────────   ──────────────────────────────     ─────────────────────
1. Hero Section            Headline + sub + CTA + video/img   Hook + promise
2. Problem Section         Dark background + pain copy        Agitate
3. Solution Section        Light background + framework       Introduce vehicle
4. Credibility Bar         Logos + numbers + badges           Trust
5. Offer Section           Product mockups + value stack      Present what they get
6. Price Section           Strikethroughs + payment options   Anchor + reveal
7. Bonus Section           Bonus mockups + countdown          Urgency
8. Guarantee Section       Badge + guarantee copy             Remove risk
9. Testimonial Section     Grid or carousel of proof          Social proof
10. FAQ Section            Accordion style                    Handle objections
11. Final CTA Section      Recap + button + urgency           Close
12. Footer                 Legal + privacy (minimal)          Compliance
```

---

## Input Required
```yaml
input_fields:
  sales_letter_copy: ""        # from write-sales-letter task
  offer_name: ""
  offer_price: ""
  value_stack: []
  bonuses: []
  guarantee: ""
  testimonials: []
  product_mockups_available: true/false
  brand_colors: ""
  vsl_included: true/false
  target_device: ""            # desktop-first, mobile-first
```

---

## Step-by-Step Process

### Step 1: Design the Hero Section
The first screen the visitor sees. Must hook, promise, and present the primary CTA.

```yaml
hero_section:
  layout: ""                    # Full-width, centered, split (text + image)
  headline:
    font_size: "36-48px desktop / 24-32px mobile"
    weight: "Bold"
    color: ""
    max_width: "800px"
  sub_headline:
    font_size: "18-24px"
    color: ""
  primary_media:
    type: ""                    # VSL video, hero image, product mockup
    placement: ""               # Center, right side
    size: ""
  cta_button:
    text: ""
    color: ""
    size: "Large (min 200px wide)"
    placement: "Below video/image"
  background: ""                # Solid, gradient, or subtle pattern
  above_fold: true
```

### Step 2: Design the Problem / Agitation Section
Visually contrast this section to create emotional weight.

```yaml
problem_section:
  background: ""                # Darker shade to signal "pain"
  text_color: ""
  layout: "Narrow column (600-700px)"
  visual_elements:
    icons: ""                   # Warning icons, X marks
    imagery: ""                 # Frustrated person or abstract pain visual
  typography:
    style: "Conversational"
    emphasis: "Bold key pain phrases"
  separator: "Visual break before solution section"
```

### Step 3: Design the Solution / New Opportunity Section
Bright, clean design that signals "relief" and "possibility."

```yaml
solution_section:
  background: ""                # Light, clean — contrast with problem section
  layout: "Text left + framework diagram right (or stacked mobile)"
  framework_visual:
    type: ""                    # Diagram, infographic, step-by-step
    style: "Clean, simple, branded"
  callout_box:
    style: "Highlighted quote or key principle"
    content: ""
  transition_to_offer: ""       # Visual element bridging to the offer
```

### Step 4: Design the Offer + Value Stack Section
The most visually rich section. Each stack item gets its own visual treatment.

```yaml
offer_section:
  layout: "Product mockup left + value stack right"
  product_mockup:
    type: ""                    # 3D box, laptop screen, course dashboard
    style: "Professional, aspirational"
  value_stack_items:
    display: "Card or row format"
    each_item:
      icon: ""                  # Check mark or custom icon
      name: "Bold"
      description: "Regular"
      value: "Strikethrough previous price"
    total_value:
      display: "Large, highlighted"
      style: "Dramatic — large number"
  cta_button:
    text: ""
    placement: "Below total value"
    style: "Same as hero CTA"
```

### Step 5: Design the Price + Payment Section
Price reveal with anchoring, comparison, and payment options.

```yaml
price_section:
  anchor_display:
    show_original_value: true
    strikethrough_style: "Red line through"
  price_display:
    actual_price:
      font_size: "48-64px"
      color: ""
      style: "Bold, prominent"
    payment_plan:
      display: "Toggle or side-by-side cards"
      highlight: "Most popular option"
  savings_callout:
    text: ""
    style: "Badge or highlighted box"
  order_button:
    text: ""
    color: ""
    size: "Extra large"
    security_badges: "Below button — SSL, guarantee, secure checkout"
```

### Step 6: Design the Testimonials Section
Social proof displayed for maximum credibility and scannability.

```yaml
testimonials_section:
  layout: ""                    # Grid (3 columns), carousel, or stacked
  each_testimonial:
    photo: "Real person (not stock)"
    name: ""
    title_or_context: ""
    quote: "2-3 sentences max"
    result_highlight: "Bold the specific result"
  video_testimonials:
    enabled: true/false
    display: "Thumbnail grid with play buttons"
  count: "6-12 testimonials shown"
  social_proof_bar: "Above testimonials — 'Join X+ happy customers'"
```

### Step 7: Design the FAQ + Final CTA Section
Handle remaining objections and close with a final push.

```yaml
faq_section:
  layout: "Accordion (expand/collapse)"
  questions: "6-10 most common objections as questions"
  style: "Clean, easy to scan"
  placement: "Before final CTA"

final_cta_section:
  layout: "Full-width, clean background"
  recap: "1-2 sentence summary of the offer"
  urgency: ""                   # Countdown, limited spots, bonus expiry
  cta_button:
    text: ""
    color: ""
    size: "Extra large"
  guarantee_reminder: "Small text below button"
  ps_text: "Below everything — last hook"
```

---

## Output Template
```yaml
output:
  sales_page:
    offer: ""
    price: ""
    total_sections: 12
    sections:
      hero:
        headline: ""
        media_type: ""
        cta_text: ""
      problem: "background style + key elements"
      solution: "layout + framework visual"
      credibility: "logos + numbers"
      offer: "mockup + value stack"
      price: "anchor + reveal + payment options"
      bonuses: "mockups + countdown"
      guarantee: "badge + copy"
      testimonials: "layout + count"
      faq: "question count"
      final_cta: "recap + urgency + button"
    responsive: "mobile-optimized"
    estimated_scroll_length: ""
    recommended_tool: "ClickFunnels / WordPress + Elementor"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Hero section displays headline + CTA above the fold
  - [ ] Problem and solution sections have clear visual contrast
  - [ ] Value stack items each have visual treatment (mockup or icon)
  - [ ] Price section uses anchoring with strikethroughs
  - [ ] Testimonials use real photos and specific results
  - [ ] CTA button appears at least 3 times throughout the page
  - [ ] Page is mobile-responsive with readable text sizes
  - [ ] FAQ handles top 6-10 buying objections
  - [ ] No navigation or external links that leak traffic
```

---

## Handoff
- -> **brunson-copy** for `write-sales-letter` (BR_CPY_001) — provide copy for all sections
- -> **brunson-offers** for `build-irresistible-offer` (BR_OFR_001) — define the value stack
- -> **brunson-pages** for `design-oto-page` (BR_PAG_003) — design the post-purchase upsell

---
*Task: BR_PAG_002 | Agent: brunson-pages | Version: 1.0*
