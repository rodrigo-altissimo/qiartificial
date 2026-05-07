# Create Launch Email Sequence

## Metadata
```yaml
task_id: BR_LCH_003
agent: brunson-launch
type: creation
complexity: high
estimated_time: 45min
source: "DotCom Secrets, Chapter 12 + Expert Secrets, Chapter 15"
```

## Purpose

Create the complete email sequence for a product launch covering all three phases: pre-launch (warming and belief-building), launch (cart open to cart close), and post-launch (onboarding and nurture). Email is the backbone of every launch -- it is the channel you OWN, the direct line to your audience's inbox, and the primary revenue driver during a launch window.

> "Your email list is your ATM machine. When you need money, you send emails. But the difference between a list that prints money and a list that ignores you is the RELATIONSHIP you build through your emails." -- Russell Brunson

## The Framework: The Launch Email Architecture

### The Soap Opera Sequence (Pre-Launch)
Brunson's "Soap Opera Sequence" creates story-driven emails that build anticipation:
```
Email 1: Set the stage (introduce the story, create curiosity)
Email 2: High drama (backstory, the wall, emotional tension)
Email 3: Epiphany (the breakthrough moment)
Email 4: Hidden benefits (what else changed beyond the main result)
Email 5: Urgency / call to action (the clock is ticking)
```

### The Seinfeld Sequence (Post-Launch)
Ongoing emails that entertain and maintain connection:
- Be entertaining first, informative second
- Every email tells a story
- Always include a link/CTA (but softly)
- Daily or near-daily cadence

### Launch Email Cadence

```
PRE-LAUNCH (7-14 days):  3-5 emails, every 2-3 days
LAUNCH WEEK (5-7 days):  12-15 emails, 2-3 per day during close
POST-LAUNCH (7-14 days): 5-7 emails, daily then tapering
```

## Input Required
```yaml
input:
  launch_plan: "Output from plan-product-launch.md (BR_LCH_001)"

  product:
    name: ""
    price: 0
    payment_plan: ""
    bonuses: []
    guarantee: ""
    sales_page_url: ""
    cart_open_date: "YYYY-MM-DD"
    cart_close_date: "YYYY-MM-DD"

  stories:
    origin_story: "from BR_STR_001"
    vehicle_story: "from BR_STR_002"
    internal_belief_story: "from BR_STR_003"
    external_belief_story: "from BR_STR_004"
    customer_stories: []

  audience:
    list_size: 0
    relationship_strength: "new | developing | established | strong"
    previous_purchases: "none | low-ticket | mid-ticket | high-ticket"

  brand_voice:
    tone: "professional | casual | authoritative | playful | direct"
    from_name: ""
    signature_style: ""
```

## Step-by-Step Process

### Step 1: Map the Complete Email Calendar
Layout every email by date, time, and purpose:

**Pre-Launch Emails (Days -14 to -1):**
```
Day -14: "Something big is coming" (curiosity/anticipation)
Day -10: PLC 1 delivery (vehicle belief)
Day -7:  PLC 2 delivery (internal belief)
Day -5:  PLC 3 delivery (external belief)
Day -3:  "Get ready" (anticipation peak)
Day -1:  "Tomorrow changes everything" (final build-up)
```

**Launch Emails (Days 1-7):**
```
Day 1 AM:  "Doors are OPEN" (announcement + offer)
Day 1 PM:  "What you'll get" (offer details)
Day 2 AM:  "Why I created this" (origin story)
Day 2 PM:  "Already sold [X] spots" (social proof)
Day 3 AM:  Case study / testimonial deep dive
Day 3 PM:  FAQ (address top objections)
Day 4 AM:  "What people are saying" (live testimonials)
Day 5 AM:  "48 hours left" (urgency begins)
Day 5 PM:  "Bonus removal warning"
Day 6 AM:  "24 hours left" (major urgency)
Day 6 PM:  "Final testimonial stack"
Day 7 AM:  "Last day" (morning push)
Day 7 2PM: "Hours remaining" (afternoon urgency)
Day 7 8PM: "1 hour left" (final countdown)
Day 7 11PM: "Doors closing NOW" (last call)
```

**Post-Launch Emails (Days 8-14):**
```
Day 8:  "Doors are closed" (FOMO for non-buyers, welcome for buyers)
Day 9:  Value content (relationship repair for non-buyers)
Day 10: "What buyers are experiencing" (soft FOMO)
Day 12: Survey / feedback request
Day 14: "What's next" (transition to regular content)
```

### Step 2: Write Pre-Launch Emails

**Email P1: "Something Big is Coming"**
```
SUBJECT LINE OPTIONS:
  - "I've been working on something..."
  - "[First name], mark your calendar"
  - "This changes everything (and it's free)"

STRUCTURE:
  Opening: Personal, intimate tone
  Body: Tease what's coming without revealing details
  Curiosity hook: "I can't share everything yet, but..."
  CTA: "Hit reply and tell me your biggest challenge with [topic]"
  PS: Specific detail that increases curiosity
```

**Email P2-P4: Pre-Launch Content Delivery**
```
SUBJECT LINE FORMAT: Direct + curiosity
  - "Your free training is ready (Day 1 of 3)"
  - "[Topic]: The truth nobody's telling you"

STRUCTURE:
  Context: Why this matters right now
  Content link: Watch/read the training
  Key takeaway: One big idea from the content
  Engagement prompt: "What was your biggest takeaway?"
  PS: Tease next content piece
```

**Email P5: "Get Ready"**
```
SUBJECT LINE OPTIONS:
  - "This [day] at [time]..."
  - "Set an alarm for [date]"
  - "Are you ready for this?"

STRUCTURE:
  Recap: What they've learned in pre-launch
  Bridge: "But there's one thing I haven't shared yet..."
  Reveal: What's happening on launch day
  Instructions: Exactly what to do (check email, set reminder)
  Excitement building: What they'll get access to
```

### Step 3: Write Launch Week Emails

**Email L1: "Doors are OPEN" (Cart Open)**
```
SUBJECT LINE OPTIONS:
  - "It's here. [Product Name] is LIVE"
  - "Doors are open (finally)"
  - "[Product Name] is now available"

STRUCTURE:
  Opening: Excitement, energy, directness
  The offer: What it is, who it's for, what it does
  Core components: Brief list of what's included
  Bonuses: Highlight fast-action bonus
  Price: Clear pricing with payment plan option
  Guarantee: Risk reversal
  CTA: Primary button link
  PS: "Fast-action bonus disappears in [X] hours"
```

**Email L2: "The Story Behind This" (Origin)**
```
SUBJECT LINE OPTIONS:
  - "Why I had to create [Product]"
  - "The story behind [Product]"
  - "I almost didn't make this..."

STRUCTURE:
  Origin story (abbreviated from BR_STR_001)
  Connection to their situation
  Why this product is the result of that journey
  CTA: "If my story resonates, check out [Product]"
```

**Email L3-L4: Social Proof + Objections**
```
SUBJECT LINE OPTIONS:
  - "[Customer name] just shared this..."
  - "Your top 7 questions, answered"
  - "I keep getting asked this question..."

STRUCTURE:
  Customer story or FAQ answers
  Each answer subtly sells the product
  CTA: Link to sales page
```

**Email L5-L7: Urgency Sequence**
```
SUBJECT LINES (escalating urgency):
  - "48 hours left (+ what you lose if you wait)"
  - "24 hours. That's it."
  - "FINAL HOURS: [Product Name] closes at midnight"
  - "Last call (this email is your alarm)"

STRUCTURE:
  Progressively shorter and more direct
  Stack testimonials (different one each email)
  Remind of bonus removal / price increase
  Make the cost of INaction clear
  Final email: Emotional + direct CTA
```

### Step 4: Write Post-Launch Emails

**Email Post1: "Doors are Closed"**
```
Two versions:
  FOR BUYERS: "Welcome to [Product]! Here's your first step..."
  FOR NON-BUYERS: "Doors are closed. Here's what happened..."
```

**Email Post2-3: Relationship Maintenance**
```
Return to value-based content
Share results from new buyers (FOMO)
Transition to regular email cadence
Offer waitlist for next opening
```

### Step 5: Write Subject Lines
Create 3-5 subject line options for each email:

**Subject Line Frameworks:**
- Curiosity: "I wasn't going to share this, but..."
- Personal: "[Name], I have a question"
- Urgency: "This disappears at midnight"
- Social proof: "[Customer] went from $0 to $10K/mo"
- Controversial: "Stop doing [common thing]"
- Direct: "[Product Name] is live"
- Question: "What's holding you back?"

### Step 6: Compile and Format
Organize all emails into a deployable sequence with:
- Send date and time
- Subject line (with A/B options)
- From name
- Preview text
- Full email body
- CTA links
- Segmentation rules (buyer vs non-buyer after purchase)

## Output Template
```yaml
launch_email_sequence:
  date: "YYYY-MM-DD"
  product: ""
  total_emails: 0
  launch_dates:
    cart_open: ""
    cart_close: ""

  pre_launch:
    - email_id: "P1"
      send_date: ""
      send_time: ""
      subject_lines:
        primary: ""
        alternative_a: ""
        alternative_b: ""
      preview_text: ""
      body: |
        [Full email copy]
      cta: ""
      segment: "full list"

  launch:
    - email_id: "L1"
      send_date: ""
      send_time: ""
      subject_lines:
        primary: ""
        alternative_a: ""
      body: |
        [Full email copy]
      cta: ""
      segment: "full list minus buyers"

  post_launch:
    buyers:
      - email_id: "B1"
        send_date: ""
        subject: ""
        body: |
          [Full email copy]
    non_buyers:
      - email_id: "NB1"
        send_date: ""
        subject: ""
        body: |
          [Full email copy]

  segmentation_rules:
    after_purchase: "Move to buyer sequence, remove from launch sequence"
    non_openers: "Resend with different subject line after 24 hours"

  performance_targets:
    open_rate: "25-40%"
    click_rate: "3-8%"
    unsubscribe_rate: "<0.5% per email"
```

## Quality Gate
- [ ] Pre-launch emails build anticipation and break false beliefs
- [ ] Launch sequence covers cart open through cart close with escalating urgency
- [ ] Post-launch handles both buyers and non-buyers separately
- [ ] Each email has 2-3 subject line options for testing
- [ ] Emails follow Hook-Story-Offer structure
- [ ] Origin and belief-breaking stories integrated naturally
- [ ] Segmentation rules prevent buyers from receiving "buy" emails
- [ ] Close sequence has minimum 4 emails on final day
- [ ] Total email count is 20-30 for a full launch
- [ ] Tone is consistent with brand voice throughout

## Handoff
Email sequence is part of `plan-product-launch.md` (BR_LCH_001). Story content comes from BR_STR series tasks. Sales page link connects to `design-sales-page.md` (BR_PGS_002). Post-purchase onboarding connects to the product delivery system.

---
*Task: BR_LCH_003 | Agent: brunson-launch | Version: 1.0*
