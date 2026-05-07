# design-squeeze-page

## Metadata
```yaml
task_id: BR_PAG_001
agent: brunson-pages
type: creation
complexity: medium
estimated_time: 30-45min
source: "DotCom Secrets — Chapter 5: Funnel #1 The Two-Step Funnel (Squeeze Page)"
```

## Purpose
Design a high-converting squeeze page (opt-in page) that captures email addresses at 30-50%+ conversion rates. The squeeze page is the gateway to every funnel — it's where strangers become leads by trading their email for irresistible free value.

> "The squeeze page has ONE job: get the email. Every element that doesn't serve that goal must be removed." — Russell Brunson

---

## The Framework: Squeeze Page Architecture

A squeeze page is intentionally minimal. Unlike a sales page, it has NO navigation, NO links out, and NO distractions. The visitor has exactly two choices: opt in or leave.

### The 5 Core Elements

```
┌──────────────────────────────────────────────┐
│                                              │
│  1. CURIOSITY-DRIVEN HEADLINE               │
│     "Free [Asset]: How to [Result]           │
│      in [Timeframe] Without [Pain]"          │
│                                              │
│  2. SUPPORTING SUB-HEADLINE                  │
│     Expands the promise with specificity     │
│                                              │
│  3. HERO IMAGE / MOCKUP                      │
│     Visual of the lead magnet                │
│     (book cover, PDF, video thumbnail)       │
│                                              │
│  4. BULLET POINTS (3-5)                      │
│     What they'll discover inside             │
│     (curiosity-driven, not features)         │
│                                              │
│  5. OPT-IN FORM + CTA BUTTON                │
│     Email field + bold action button         │
│     "Get Instant Access"                     │
│                                              │
│  [Optional: 1-line social proof]             │
│  "Join 10,000+ who already downloaded"       │
│                                              │
└──────────────────────────────────────────────┘
```

### What NOT to Include
- Navigation menu
- External links
- Long paragraphs of text
- Multiple offers
- Social media links
- Footer with links

---

## Input Required
```yaml
input_fields:
  lead_magnet_name: ""
  lead_magnet_type: ""          # PDF, video, checklist, quiz, mini-course
  target_avatar: ""
  dream_outcome: ""
  quick_win: ""                 # What immediate value do they get?
  traffic_source: ""            # Where are visitors coming from?
  brand_colors: ""              # Primary and accent colors
  existing_social_proof: ""     # Number of subscribers, downloads, etc.
```

---

## Step-by-Step Process

### Step 1: Craft the Headline
The headline must create an irresistible curiosity gap while promising a specific outcome.

```yaml
headline:
  formula: "Free [Asset Type]: How to [Specific Result] in [Timeframe] Without [Biggest Pain]"
  variations:
    - ""
    - ""
    - ""
  rules:
    - Must mention "Free" (lower barrier)
    - Must be specific (numbers, timeframes)
    - Must address avatar's #1 desire
    - Must remove #1 objection with "without" clause
  test: "Would your ideal customer feel IRRESPONSIBLE not clicking?"
```

### Step 2: Write the Sub-Headline
Expand the headline with additional specificity or a credibility hook.

```yaml
sub_headline:
  content: ""
  rules:
    - 1-2 sentences max
    - Add specificity the headline couldn't include
    - Can include a mini credibility statement
    - Should create urgency or scarcity if possible
  example: "The exact [framework] used by [credibility point] to [result] — yours free for a limited time."
```

### Step 3: Design the Hero Image / Lead Magnet Mockup
The visual representation of what they're getting. People need to SEE the value.

```yaml
hero_image:
  type: ""                      # 3D book cover, PDF mockup, video thumbnail, device mockup
  elements:
    title_on_cover: ""          # Same as or abbreviated from lead magnet name
    author_or_brand: ""
    visual_style: ""            # Clean, bold, professional
    background: ""              # Solid color, gradient, lifestyle image
  placement: "Right side or center of page"
  size: "Prominent but not overwhelming"
```

### Step 4: Write 3-5 Curiosity Bullets
Each bullet must create a desire to discover what's inside. Use curiosity, not description.

```yaml
bullets:
  bullet_1: ""                  # "The 3-step formula that [result] (page 7)"
  bullet_2: ""                  # "Why [common approach] is killing your [goal] (and what to do instead)"
  bullet_3: ""                  # "The #1 mistake [avatars] make with [topic] — and the simple fix"
  bullet_4: ""                  # "How [case study] achieved [result] in just [timeframe]"
  bullet_5: ""                  # "The 'secret' [mechanism] that [avatars] are using to [result]"
  rules:
    - Each bullet opens a curiosity loop
    - Use specificity (page numbers, step counts)
    - Mix formats (how-to, mistake, secret, case study)
    - Never reveal the full answer in the bullet
```

### Step 5: Design the Opt-In Form + CTA Button
The form must be simple (email only for highest conversion) with a compelling CTA.

```yaml
opt_in_form:
  fields:
    - email (required)
    - first_name (optional — consider if worth the friction)
  cta_button:
    text: ""                    # "Get Instant Access" / "Send Me The Free [Asset]"
    color: ""                   # Contrasting, high-visibility color
    size: "Large, prominent"
  placement: "Below bullets, above the fold if possible"
  privacy_line: "We respect your privacy. Unsubscribe anytime."

  cta_text_rules:
    - Use first person: "Get MY Free Copy" > "Get Your Free Copy"
    - Be specific: "Download the PDF" > "Submit"
    - Create excitement: "Yes! Send Me The Secrets" > "Subscribe"
```

### Step 6: Add Optional Trust Elements
Minimal trust signals that don't distract from the CTA.

```yaml
trust_elements:
  social_proof_line: ""         # "Join 10,000+ entrepreneurs" or "As seen on [logos]"
  urgency_element: ""           # "Limited time offer" or countdown timer
  micro_commitment: ""          # "Takes 2 minutes to read"
  placement: "Below CTA, subtle"
  rules:
    - Maximum ONE trust element
    - Must not distract from opt-in form
    - Must be genuine (not fabricated)
```

### Step 7: Define Page Layout and Technical Specs
The page structure and responsive design requirements.

```yaml
page_specs:
  layout: "Single column, centered"
  width: "600-800px max content width"
  above_the_fold:
    - Headline
    - Sub-headline
    - Hero image
    - CTA button (visible without scrolling)
  below_the_fold:
    - Bullets (if needed)
    - Trust element
  mobile_responsive: true
  load_time_target: "<3 seconds"
  no_navigation: true
  no_footer_links: true
  exit_popup: "Optional — restate offer"
```

---

## Output Template
```yaml
output:
  squeeze_page:
    lead_magnet: ""
    target_avatar: ""
    headline: ""
    sub_headline: ""
    hero_image_description: ""
    bullets:
      - ""
      - ""
      - ""
    cta_button_text: ""
    cta_button_color: ""
    trust_element: ""
    target_conversion: "30-50%"
    mobile_optimized: true
    estimated_page_elements: 5-7
    recommended_tool: "ClickFunnels / Leadpages / custom"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Headline creates curiosity and promises specific result
  - [ ] Sub-headline adds value without repeating headline
  - [ ] Hero image is professional and represents the lead magnet
  - [ ] 3-5 bullets each open a curiosity loop
  - [ ] CTA button is prominent with action-oriented text
  - [ ] No navigation, external links, or distractions
  - [ ] Page works above-the-fold on mobile
  - [ ] Load time target under 3 seconds
  - [ ] Social proof is genuine and subtle
```

---

## Handoff
- -> **brunson-email** for `write-soap-opera-sequence` (BR_EML_001) — build the post-opt-in sequence
- -> **brunson-copy** for `craft-headline-formulas` (BR_CPY_003) — test headline variations
- -> **brunson-traffic** for `plan-traffic-strategy` (BR_TRF_002) — drive traffic to this page

---
*Task: BR_PAG_001 | Agent: brunson-pages | Version: 1.0*
