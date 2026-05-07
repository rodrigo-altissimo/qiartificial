# write-soap-opera-sequence

## Metadata
```yaml
task_id: BR_EML_001
agent: brunson-email
type: creation
complexity: high
estimated_time: 60-90min
source: "DotCom Secrets — Chapter 4: The Soap Opera Sequence"
```

## Purpose
Write a 5-email Soap Opera Sequence that turns new subscribers into buyers through serialized storytelling. The Soap Opera Sequence is the first email series a new lead receives — it builds an emotional bond with the Attractive Character and naturally leads to the first purchase.

> "The Soap Opera Sequence is the most powerful way to bond with your new subscriber. It uses the same psychological triggers that keep people watching soap operas for decades." — Russell Brunson

---

## The Framework: Soap Opera Sequence Architecture

Named after TV soap operas, this sequence uses cliffhangers, open loops, and serialized storytelling to keep subscribers opening every email. Each email has a specific psychological job.

### The 5-Email Structure

```
EMAIL    NAME               PURPOSE                    TIMING
─────    ────────────────    ──────────────────────     ─────────
1        Set the Stage       Introduce the AC +         Day 1
                             open the story loop        (immediately)
2        High Drama          The backstory conflict     Day 2
                             + emotional peak
3        Epiphany            The breakthrough moment    Day 3
                             + discovery of vehicle
4        Hidden Benefits     Unexpected benefits        Day 4
                             + social proof
5        Urgency & CTA       Close with urgency         Day 5
                             + direct call to action
```

### Key Soap Opera Principles
1. **Open Loops** — Every email opens a question that the NEXT email answers
2. **Cliffhangers** — End each email with "tomorrow I'll reveal..."
3. **Emotional Arcs** — Move from curiosity -> empathy -> hope -> desire -> action
4. **Character Driven** — The Attractive Character is the protagonist

---

## Input Required
```yaml
input_fields:
  attractive_character: ""      # Who is the AC?
  backstory: ""                 # AC's origin story
  new_subscriber_source: ""     # Where did they opt in? What lead magnet?
  first_offer: ""               # What are you selling in email 5?
  offer_price: ""
  target_avatar: ""
  dream_outcome: ""
  epiphany_moment: ""           # The breakthrough discovery
  hidden_benefits: []           # Unexpected positive outcomes
  urgency_mechanism: ""
```

---

## Step-by-Step Process

### Step 1: Write Email 1 — Set the Stage
Welcome them, set expectations, and open the first story loop.

```yaml
email_1:
  subject_line: ""              # Curiosity-driven, personal
  purpose: "Welcome + open the main story loop"
  structure:
    greeting: ""                # Warm, personal welcome
    set_expectations: ""        # "Over the next few days, I'm going to share..."
    introduce_ac: ""            # Brief intro of the Attractive Character
    open_story_loop: ""         # "It all started when..." (but don't finish the story)
    cliffhanger: ""             # "Tomorrow, I'll tell you what happened next..."
    ps: ""                      # Bonus curiosity hook
  tone: "Warm, personal, curious"
  word_count: "200-350 words"
  cta: "None (build relationship only)"

  rules:
    - Do NOT sell in email 1
    - Make them feel welcomed, not marketed to
    - Open a story loop that MUST be closed in email 2
    - Subject line should feel personal (no marketing speak)
```

### Step 2: Write Email 2 — High Drama
Deliver the emotional peak of the backstory. This is where empathy is built.

```yaml
email_2:
  subject_line: ""              # Continues the story thread
  purpose: "Emotional peak — the struggle and rock bottom"
  structure:
    story_continuation: ""      # Pick up where email 1 left off
    the_struggle: ""            # The wall, the failure, the pain
    rock_bottom: ""             # The lowest moment (be specific and vulnerable)
    emotional_weight: ""        # How it FELT (not just what happened)
    hint_of_hope: ""            # "But then something changed..."
    cliffhanger: ""             # "Tomorrow, I'll share the discovery that changed everything..."
    ps: ""
  tone: "Vulnerable, honest, dramatic"
  word_count: "300-400 words"
  cta: "None (build empathy only)"

  rules:
    - This is the most emotional email — don't hold back
    - Readers should see THEMSELVES in the struggle
    - The rock bottom must be specific (not generic "hard times")
    - End with hope, not despair
```

### Step 3: Write Email 3 — Epiphany
The breakthrough moment — this is where you introduce the vehicle (your solution).

```yaml
email_3:
  subject_line: ""              # "The discovery that changed everything..."
  purpose: "The Epiphany Bridge — introduce the vehicle"
  structure:
    story_resolution: ""        # Continue from email 2's cliffhanger
    the_epiphany: ""            # The exact moment of discovery
    what_changed: ""            # What specifically shifted
    the_vehicle: ""             # Name of the framework/method/approach
    early_results: ""           # First results after discovery
    bridge_to_offer: ""         # "I realized I could help others with this..."
    soft_mention: ""            # First subtle mention of your offer
    cliffhanger: ""             # "But the results I saw next surprised even me..."
    ps: ""
  tone: "Excited, revelatory, hopeful"
  word_count: "300-450 words"
  cta: "Soft — mention the offer exists, don't push"

  rules:
    - This is the PIVOT email — from story to solution
    - The epiphany must feel like a genuine discovery
    - Don't hard sell — just mention the offer exists
    - The vehicle should feel like a NEW OPPORTUNITY, not an improvement
```

### Step 4: Write Email 4 — Hidden Benefits
Share unexpected positive outcomes and stack social proof.

```yaml
email_4:
  subject_line: ""              # Curiosity about unexpected results
  purpose: "Stack proof + reveal hidden benefits"
  structure:
    unexpected_result: ""       # "Something I didn't expect happened..."
    hidden_benefit_1: ""        # Beyond the main promise
    hidden_benefit_2: ""        # Different dimension of value
    social_proof: ""            # Others who experienced same
    case_study: ""              # Specific person + their result
    bridge_to_offer: ""         # Stronger mention of the offer
    what_they_get: ""           # Brief outline of the offer
    cliffhanger: ""             # "Tomorrow I have something special for you..."
    ps: ""
  tone: "Surprised, grateful, proof-heavy"
  word_count: "300-400 words"
  cta: "Medium — include a link to the offer"

  rules:
    - Hidden benefits should be genuinely surprising
    - Social proof must be specific (names, numbers, timeframes)
    - This email builds logical justification for the emotional decision
    - Include a link to the offer but don't make it the focus
```

### Step 5: Write Email 5 — Urgency and CTA
The close. Make the ask directly and give them a reason to act TODAY.

```yaml
email_5:
  subject_line: ""              # Urgency + personal
  purpose: "Close the sale with urgency"
  structure:
    recap: ""                   # Brief story recap (1-2 sentences)
    the_offer: ""               # Full presentation of the offer
    value_reminder: ""          # What they get + value
    urgency: ""                 # Why they must act NOW
    risk_reversal: ""           # Guarantee
    direct_cta: ""              # "Click here to [get the offer]"
    final_push: ""              # Emotional appeal — what's at stake
    ps: ""                      # Restate urgency + link
  tone: "Direct, confident, urgent"
  word_count: "350-500 words"
  cta: "Strong — multiple CTA links throughout"

  rules:
    - This is a SALES email — be direct
    - Urgency must be real (deadline, limited spots, price increase)
    - Include the CTA link at least 3 times
    - The PS should be a mini sales pitch on its own
    - Don't apologize for selling — you're offering genuine value
```

### Step 6: Review the Complete Sequence Flow
Verify the emotional arc and story coherence across all 5 emails.

```yaml
sequence_validation:
  story_arc:
    email_1: "Curiosity + Welcome"
    email_2: "Empathy + Struggle"
    email_3: "Hope + Discovery"
    email_4: "Proof + Confidence"
    email_5: "Action + Urgency"
  open_loops_closed: true       # Every loop opened in email N is closed in N+1
  cliffhangers_resolved: true   # No dangling story threads
  sell_progression:
    email_1: "0% sell"
    email_2: "0% sell"
    email_3: "10% sell (soft mention)"
    email_4: "30% sell (link included)"
    email_5: "100% sell (direct CTA)"
```

---

## Output Template
```yaml
output:
  soap_opera_sequence:
    attractive_character: ""
    offer: ""
    offer_price: ""
    emails:
      email_1:
        subject: ""
        preview: ""
        word_count: ""
        cta: "none"
      email_2:
        subject: ""
        preview: ""
        word_count: ""
        cta: "none"
      email_3:
        subject: ""
        preview: ""
        word_count: ""
        cta: "soft mention"
      email_4:
        subject: ""
        preview: ""
        word_count: ""
        cta: "link included"
      email_5:
        subject: ""
        preview: ""
        word_count: ""
        cta: "direct close"
    total_word_count: ""
    send_schedule: "Day 1-5, one email per day"
    expected_results:
      open_rate: "30-50%"
      click_rate: "3-8%"
      conversion: "1-3%"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Email 1 opens a story loop that's closed in email 2
  - [ ] Email 2 has a genuine emotional peak (not generic struggle)
  - [ ] Email 3 introduces the vehicle as a New Opportunity
  - [ ] Email 4 includes at least one specific case study
  - [ ] Email 5 has a clear, urgent CTA with real deadline
  - [ ] Sell progression goes from 0% to 100% across 5 emails
  - [ ] Every email has a cliffhanger or open loop for the next
  - [ ] Subject lines create curiosity, not hype
  - [ ] Total sequence tells a coherent story with emotional arc
```

---

## Handoff
- -> **brunson-email** for `write-seinfeld-emails` (BR_EML_002) — transition to daily emails after
- -> **brunson-copy** for `write-attractive-character-copy` (BR_CPY_004) — develop the AC for emails
- -> **brunson-email** for `build-follow-up-funnel` (BR_EML_003) — integrate into automation

---
*Task: BR_EML_001 | Agent: brunson-email | Version: 1.0*
