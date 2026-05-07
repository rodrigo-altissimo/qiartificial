# Create Mass Movement Blueprint

## Metadata
```yaml
task_id: BR_MOV_001
agent: brunson-movement
type: creation
complexity: high
estimated_time: 45min
source: "Expert Secrets, Chapter 2-5 - Creating a Mass Movement"
```

## Purpose

Build a complete Mass Movement blueprint following Brunson's three core elements: the Charismatic Leader, the Cause, and the New Opportunity. This is NOT about building a customer base -- it is about creating a MOVEMENT of true believers who become evangelists for your message. The difference between a business and a movement is that businesses have customers, movements have followers who recruit other followers.

> "People don't buy the best products, they buy the ones they can understand the fastest. And movements are the fastest way to create understanding." -- Russell Brunson

## The Framework: The 3 Elements of a Mass Movement

### Element 1: The Charismatic Leader (The Attractive Character)
Every movement needs a leader who:
- Has a personal origin story (Epiphany Bridge)
- Speaks with conviction and certainty
- Creates a future-based cause people want to be part of
- Has polarity (willing to make some people uncomfortable)
- Leads from the front, not from the back

### Element 2: The Cause (The Future-Based Mission)
The cause must be:
- **Future-focused** -- "We are building a world where..."
- **Identity-shifting** -- "You are not just a [old identity], you are a [new identity]"
- **Enemy-clear** -- There must be a clear "us vs them" (not people, but ideas/systems)
- **Achievable** -- People need to believe they can participate

### Element 3: The New Opportunity
NOT an improvement. A completely NEW vehicle:
- **Improvement offer**: "Better diet" (boring, guilt-inducing)
- **New opportunity**: "The carnivore lifestyle" (exciting, fresh start)

The key distinction: improvements remind people of past failures. New opportunities give them a clean slate.

### The Mass Movement Equation

```
MOVEMENT = Charismatic Leader + Future-Based Cause + New Opportunity + Community
```

## Input Required
```yaml
input:
  leader_info:
    name: ""
    background: "Brief story of the leader"
    key_transformation: "What changed your life/perspective?"
    unique_perspective: "What do you believe that most people in your industry don't?"
    contrarian_belief: "What conventional wisdom do you disagree with?"

  market_info:
    niche: ""
    current_solutions: "What do people currently do to solve this problem?"
    why_current_fails: "Why do existing solutions fail or frustrate people?"
    dream_outcome: "What does the dream life/result look like for your audience?"

  audience_info:
    who_they_are: ""
    current_identity: "How they currently see themselves"
    desired_identity: "How they want to see themselves"
    common_enemy: "What system/belief/approach frustrates them?"
```

## Step-by-Step Process

### Step 1: Craft the Leader Identity
Define the Attractive Character archetype:

**Leader Backstory Elements:**
- The moment of awakening (your Epiphany Bridge moment)
- The struggle before the epiphany
- The discovery of the "new way"
- The results after adopting the new way
- Why you feel compelled to share this

**Leader Voice Characteristics:**
- Level of certainty (must be HIGH)
- Vulnerability balance (strong but relatable)
- Teaching style (stories > lectures)
- Polarizing stance (what hill will you die on?)

**Attractive Character Type (choose primary):**
- The Leader -- "Follow me, I'll show you the way"
- The Adventurer -- "Come with me on this journey"
- The Reporter -- "I've discovered something incredible"
- The Reluctant Hero -- "I didn't want to share this, but I have to"

### Step 2: Define the Future-Based Cause
Create the movement's mission:

**The Vision Statement:**
Format: "We are building a world where [specific future state] because [why it matters]."

**The Manifesto Themes (5-7 core beliefs):**
1. What we believe about [core topic]
2. What we stand against
3. What we stand for
4. How the world should be
5. What is possible for people who join us

**The Enemy (idea/system, NOT people):**
- Old way of doing things: "[Specific approach] is broken because..."
- The system that keeps people stuck: "[Specific system] benefits from your failure"
- The lie people have been told: "You've been told [lie], but the truth is..."

### Step 3: Architect the New Opportunity
Design the vehicle that replaces the old way:

**Opportunity Name:** A compelling, branded name for your method/system
**Opportunity Promise:** One sentence that captures the transformation
**Why It's NEW (not improved):**
- What existing framework/approach does it replace?
- Why is it fundamentally different (not just better)?
- What makes someone excited to try it (vs guilty for past failures)?

**The Vehicle Framework:**
```
OLD VEHICLE: [What people currently use] → Leads to [frustration/failure]
NEW VEHICLE: [Your method] → Leads to [dream outcome]
SWITCH MECHANISM: [Why they should switch NOW] → [Urgency/opportunity cost]
```

### Step 4: Create Identity Labels
Design the identity people adopt when they join:

**We call ourselves:** [Movement member name]
**Our rally cry:** [Catchphrase or slogan]
**Our symbol:** [Visual or conceptual symbol]
**Our language:** [3-5 unique terms only insiders use]
**Our rituals:** [Daily/weekly practices that reinforce identity]

### Step 5: Map the Movement Lifecycle
How someone goes from stranger to evangelist:

```
Stage 1: DISCOVER   → Sees content/ad, feels curiosity
Stage 2: RESONATE   → Hears the origin story, thinks "that's me"
Stage 3: BELIEVE    → Accepts the new opportunity as viable
Stage 4: COMMIT     → Takes action (opts in, purchases, joins)
Stage 5: TRANSFORM  → Gets results, identity shifts
Stage 6: EVANGELIZE → Shares with others, recruits new members
```

### Step 6: Design the Movement Content Strategy
What content keeps the movement alive:

**Weekly content pillars:**
1. Origin stories (yours and members')
2. Enemy exposure (what's wrong with the old way)
3. Framework teaching (the new opportunity in action)
4. Transformation spotlights (member results)
5. Rally cries (motivation and identity reinforcement)

## Output Template
```yaml
mass_movement_blueprint:
  date: "YYYY-MM-DD"
  movement_name: ""

  element_1_leader:
    attractive_character_type: ""
    origin_story_summary: ""
    epiphany_moment: ""
    certainty_level: "1-10"
    polarizing_stance: ""
    teaching_style: ""
    vulnerability_balance: ""

  element_2_cause:
    vision_statement: ""
    manifesto_themes:
      - belief: ""
        explanation: ""
    the_enemy:
      old_way: ""
      broken_system: ""
      the_lie: ""
    future_promise: ""

  element_3_new_opportunity:
    opportunity_name: ""
    opportunity_promise: ""
    old_vehicle: ""
    new_vehicle: ""
    switch_mechanism: ""
    why_new_not_improved: ""

  identity_design:
    member_name: ""
    rally_cry: ""
    symbol: ""
    insider_language:
      - term: ""
        meaning: ""
    rituals:
      - ritual: ""
        frequency: ""

  movement_lifecycle:
    stage_1_discover:
      trigger: ""
      content_type: ""
    stage_2_resonate:
      trigger: ""
      content_type: ""
    stage_3_believe:
      trigger: ""
      content_type: ""
    stage_4_commit:
      trigger: ""
      offer: ""
    stage_5_transform:
      trigger: ""
      support: ""
    stage_6_evangelize:
      trigger: ""
      mechanism: ""

  content_strategy:
    pillar_1_origin: ""
    pillar_2_enemy: ""
    pillar_3_framework: ""
    pillar_4_transformations: ""
    pillar_5_rally: ""

  movement_summary:
    one_liner: ""
    we_believe: ""
    we_fight_against: ""
    we_create: ""
    join_because: ""
```

## Quality Gate
- [ ] All 3 mass movement elements fully developed (leader, cause, new opportunity)
- [ ] Leader has a specific origin story, not generic bio
- [ ] Cause is future-based with clear vision statement
- [ ] Enemy is a system/belief, NOT a person or group
- [ ] New opportunity is genuinely NEW, not an improvement repackaged
- [ ] Identity labels created (member name, rally cry, insider language)
- [ ] Movement lifecycle maps complete stranger-to-evangelist journey
- [ ] Content strategy provides actionable weekly pillars
- [ ] Blueprint is specific enough to execute, not just theoretical

## Handoff
Blueprint feeds into `write-manifesto.md` (BR_MOV_002) for the detailed manifesto. Identity elements connect to `create-identity-framework.md` (BR_MOV_004). Origin story integrates with `craft-origin-story.md` (BR_STR_001). Community design connects to `build-community-plan.md` (BR_MOV_003).

---
*Task: BR_MOV_001 | Agent: brunson-movement | Version: 1.0*
