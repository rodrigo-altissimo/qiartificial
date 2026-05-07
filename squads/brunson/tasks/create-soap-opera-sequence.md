# create-soap-opera-sequence

## Metadata
```yaml
task_id: BR_EML_001
agent: brunson-email
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets — Chapter 5: The Soap Opera Sequence"
```

## Purpose
Create a complete 5-email Soap Opera Sequence that turns new subscribers into engaged fans and buyers. The Soap Opera Sequence uses storytelling and cliffhangers to build relationship, trust, and desire across a multi-day arc — just like a TV soap opera keeps you watching.

> "The Soap Opera Sequence is the most powerful email sequence ever created. It turns cold subscribers into raving fans in just 5 days by doing the one thing most marketers never do — tell a great story." — Russell Brunson

---

## The Framework: Soap Opera Sequence Structure

### The 5-Email Arc
```
EMAIL 1: SET THE STAGE          (Day 0 — Immediately after opt-in)
  → Introduce yourself, build rapport, create anticipation

EMAIL 2: HIGH DRAMA / BACKSTORY  (Day 1)
  → Share your origin story, the struggle, the wall

EMAIL 3: EPIPHANY                (Day 2)
  → The breakthrough moment, the discovery

EMAIL 4: HIDDEN BENEFITS         (Day 3)
  → Unexpected advantages, deeper transformation

EMAIL 5: URGENCY & CTA           (Day 4)
  → Push for action, deadline, consequences of inaction
```

### Why It Works
```
Traditional Email:    Info → Info → Info → Sell → Sell
                      (Boring. Subscribers tune out.)

Soap Opera Sequence:  Hook → Tension → Discovery → Benefits → Close
                      (Addictive. They can't wait for the next email.)
```

---

## Input Required
```yaml
input_fields:
  brand_name: ""
  your_name: ""
  target_audience: ""
  lead_magnet_name: ""      # What did they opt in for?
  your_origin_story: ""
  the_struggle: ""
  the_epiphany: ""
  the_transformation: ""
  offer_name: ""
  offer_price: ""
  offer_url: ""
  attractive_character: ""  # From BR_CPY_003
  big_domino: ""            # From BR_EXP_003
  false_beliefs: []         # From BR_EXP_004
```

---

## Step-by-Step Process

### Step 1: Write Email 1 — Set the Stage
Immediately after opt-in. Goal: Build rapport, create anticipation, set expectations.

```yaml
email_1:
  timing: "Immediately after opt-in"
  subject_line: ""          # "Here's your [lead magnet] + a quick story..."
  alt_subject: ""
  structure:
    opening:
      greeting: ""
      deliver_promise: ""   # "Here's the [lead magnet] I promised: [link]"
      transition: ""        # "But before you dive in, I need to tell you something..."
    the_hook:
      tease: ""             # "What I'm about to share over the next few days changed everything for me..."
      curiosity: ""         # "And it has nothing to do with what you might think..."
    set_expectations:
      what_to_expect: ""    # "Over the next 5 days, I'm going to share..."
      why_it_matters: ""
    the_cliffhanger:
      tease_tomorrow: ""    # "Tomorrow I'll tell you about the day everything fell apart..."
    sign_off:
      name: ""
      ps: ""                # "P.S. — Watch for my email tomorrow. Subject line will be [hint]..."
  word_count_target: "200-350 words"
  cta: "Consume the lead magnet"
```

### Step 2: Write Email 2 — High Drama / Backstory
Day 1. Goal: Share your story, create emotional connection, build tension.

```yaml
email_2:
  timing: "Day 1 (next day)"
  subject_line: ""          # "The day I almost quit..."
  alt_subject: ""
  structure:
    opening:
      callback: ""          # "Yesterday I mentioned something changed everything..."
      scene_set: ""         # "Let me take you back to [date/year]..."
    the_backstory:
      situation: ""         # Where you were
      the_desire: ""        # What you wanted
      the_struggle: ""      # What was going wrong
      failed_attempts: []   # What you tried
    the_wall:
      lowest_point: ""      # The darkest moment
      emotional_state: ""   # How you felt
      what_almost_happened: "" # "I was about to give up when..."
    the_cliffhanger:
      tease: ""             # "And then something happened that changed everything..."
      dont_reveal: ""       # "But I'll tell you about that tomorrow."
    sign_off:
      name: ""
      ps: ""                # "P.S. — Tomorrow's email is the one you don't want to miss..."
  word_count_target: "300-500 words"
  cta: "None — pure story"
```

### Step 3: Write Email 3 — Epiphany
Day 2. Goal: Reveal the breakthrough and introduce the mechanism/solution.

```yaml
email_3:
  timing: "Day 2"
  subject_line: ""          # "The discovery that changed everything"
  alt_subject: ""
  structure:
    opening:
      callback: ""          # "Remember where I left off yesterday?"
      reconnect: ""         # Brief recap of the wall
    the_epiphany:
      what_happened: ""     # The specific moment of discovery
      what_you_realized: "" # The insight
      why_different: ""     # Why this was unlike anything before
    the_first_result:
      what_you_did: ""      # First action you took
      the_result: ""        # What happened
      the_feeling: ""       # How it felt
    the_mechanism:
      what_it_is: ""        # Introduction of your method/product
      why_it_works: ""      # Brief explanation
      soft_mention: ""      # Name-drop the offer naturally
    the_cliffhanger:
      tease: ""             # "But what happened next surprised even me..."
      hidden_benefit: ""    # "There were benefits I never expected..."
    sign_off:
      name: ""
      ps: ""
  word_count_target: "300-500 words"
  cta: "Soft — mention offer link in passing"
```

### Step 4: Write Email 4 — Hidden Benefits
Day 3. Goal: Show unexpected advantages, deepen desire, add proof.

```yaml
email_4:
  timing: "Day 3"
  subject_line: ""          # "I didn't expect THIS to happen..."
  alt_subject: ""
  structure:
    opening:
      callback: ""
      transition: ""        # "So I told you about the discovery..."
    hidden_benefits:
      benefit_1:
        what: ""            # An unexpected positive outcome
        story: ""           # Brief story illustrating it
      benefit_2:
        what: ""
        story: ""
      benefit_3:
        what: ""
        story: ""
    social_proof:
      others_results: ""    # "And I'm not the only one..."
      testimonial: ""       # Quick proof from someone else
    connect_to_offer:
      bridge: ""            # "That's exactly why I created [offer]..."
      what_it_does: ""
      link: ""
    the_cliffhanger:
      tease: ""             # "Tomorrow I need to be honest with you about something..."
    sign_off:
      name: ""
      ps: ""
  word_count_target: "300-450 words"
  cta: "Medium — direct link to offer"
```

### Step 5: Write Email 5 — Urgency & CTA
Day 4. Goal: Create urgency, handle final objections, drive action.

```yaml
email_5:
  timing: "Day 4"
  subject_line: ""          # "Last chance (I'm serious)"
  alt_subject: ""
  structure:
    opening:
      direct: ""            # "I've been sharing my story all week..."
      recap: ""             # Quick summary of the journey
    the_truth:
      honest_moment: ""     # "Here's what I know for sure..."
      what_not_acting_costs: "" # Cost of inaction
      two_paths: ""         # Their two options
    the_offer:
      full_pitch: ""        # Clear presentation of the offer
      key_benefits: []
      price: ""
      guarantee: ""
    urgency:
      deadline: ""          # Specific deadline
      what_expires: ""      # What they lose after deadline
      reason_for_urgency: "" # Why the deadline exists
    final_cta:
      primary: ""           # "Click here to join: [link]"
      emotional: ""         # Final emotional push
    sign_off:
      name: ""
      ps: ""                # "P.S. — [Strongest benefit + deadline reminder]"
      pps: ""               # "P.P.S. — Remember, [guarantee]..."
  word_count_target: "400-600 words"
  cta: "Strong — multiple links to offer"
```

### Step 6: Write Subject Lines (2 per email)
Create A/B test subject lines for each email.

```yaml
subject_lines:
  email_1:
    a: ""
    b: ""
  email_2:
    a: ""
    b: ""
  email_3:
    a: ""
    b: ""
  email_4:
    a: ""
    b: ""
  email_5:
    a: ""
    b: ""
```

### Step 7: Define Technical Setup
Configure the automation.

```yaml
technical_setup:
  trigger: "Opt-in to [lead magnet]"
  email_platform: ""
  timing:
    email_1: "Immediately"
    email_2: "+24 hours"
    email_3: "+48 hours"
    email_4: "+72 hours"
    email_5: "+96 hours"
  tags:
    on_opt_in: ["subscriber", "lead_magnet_name"]
    on_open: ["engaged"]
    on_click: ["interested"]
    on_purchase: ["buyer"]
  segmentation:
    if_purchased: "Remove from sequence, add to buyer onboarding"
    if_not_opened: "Add to re-engagement after 7 days"
```

---

## Output Template
```yaml
output:
  soap_opera_sequence:
    total_emails: 5
    total_word_count: 0
    sequence_duration: "5 days"
    offer_promoted: ""
    subject_lines: []
    technical_setup: ""
    expected_metrics:
      open_rate: "25-40%"
      click_rate: "3-7%"
      conversion_rate: "1-5%"
```

---

## Quality Gate
```yaml
quality:
  - [ ] All 5 emails follow the SOS structure exactly
  - [ ] Each email ends with a cliffhanger (except #5)
  - [ ] Story arc builds logically across all 5 emails
  - [ ] Lead magnet is delivered in Email 1
  - [ ] Offer is NOT mentioned until Email 3 at earliest
  - [ ] Email 5 has clear urgency and multiple CTAs
  - [ ] Each email has 2 subject line variations
  - [ ] Word counts are within target ranges
  - [ ] Emails read like a conversation (not marketing copy)
  - [ ] Technical setup is complete with tags and segmentation
```

---

## Handoff
- → **brunson-email** for `create-seinfeld-emails` (BR_EML_002) — daily emails after SOS
- → **brunson-email** for `design-follow-up-funnel` (BR_EML_003) — broader email architecture
- → **brunson-funnels** for funnel integration

---
*Task: BR_EML_001 | Agent: brunson-email | Version: 1.0*
