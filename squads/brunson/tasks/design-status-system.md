# design-status-system

## Metadata
```yaml
task_id: BR_MOV_003
agent: brunson-movement
type: creation
complexity: medium
estimated_time: 30-45min
source: "Expert Secrets — Chapter 7: The New Opportunity + Chapter 19: Creating Your Movement"
```

## Purpose
Design a status elevation system that raises your audience's perceived identity within your community. People don't just buy products — they buy the identity transformation that comes with being part of your movement. A status system creates visible milestones that keep members engaged and ascending.

> "People will do more for status than they will for money. Give them a way to earn status in your community and they'll never leave." — Russell Brunson

---

## The Framework: Status Elevation Architecture

Status elevation works because humans are hardwired for social hierarchy. When you create a clear status system within your community, members self-motivate to ascend — and they pull others along with them.

### The Status Ladder

```
LEVEL 5: LEGEND / INNER CIRCLE
├── Status: Elite recognition
├── Access: Direct relationship with founder
├── Marker: Custom title, public recognition
└── Entry: Invitation only / highest tier buyers

LEVEL 4: EXPERT / LEADER
├── Status: Recognized authority
├── Access: Leadership opportunities
├── Marker: Badge, featured case study
└── Entry: Proven results + contribution

LEVEL 3: PRACTITIONER / IMPLEMENTER
├── Status: Active participant
├── Access: Advanced resources
├── Marker: Badge, community role
└── Entry: Completed core program + results

LEVEL 2: STUDENT / MEMBER
├── Status: Committed learner
├── Access: Core community
├── Marker: Member badge
└── Entry: Purchased core offer

LEVEL 1: FOLLOWER / SUBSCRIBER
├── Status: Interested observer
├── Access: Free content
├── Marker: None
└── Entry: Opted in
```

---

## Input Required
```yaml
input_fields:
  community_name: ""
  movement_name: ""
  value_ladder: ""
  target_avatar: ""
  identity_transformation: ""   # Who do they become?
  current_community_size: ""
  platform: ""                  # Facebook group, Skool, Circle, Slack
  gamification_preference: ""   # light, moderate, heavy
```

---

## Step-by-Step Process

### Step 1: Define the Identity Transformation at Each Level
What does the member BECOME at each level?

```yaml
identity_levels:
  level_1:
    name: ""                    # e.g., "Explorer"
    identity: ""                # "I'm learning about [topic]"
    behavior: ""                # What they do at this level
    marker: ""                  # How they're recognized
  level_2:
    name: ""                    # e.g., "Builder"
    identity: ""                # "I'm building my first [thing]"
    behavior: ""
    marker: ""
  level_3:
    name: ""                    # e.g., "Architect"
    identity: ""                # "I'm getting real results with [thing]"
    behavior: ""
    marker: ""
  level_4:
    name: ""                    # e.g., "Master"
    identity: ""                # "I'm an expert at [thing]"
    behavior: ""
    marker: ""
  level_5:
    name: ""                    # e.g., "Legend"
    identity: ""                # "I'm a recognized leader in [thing]"
    behavior: ""
    marker: ""
```

### Step 2: Define Ascension Criteria
Clear, objective criteria for moving up each level.

```yaml
ascension_criteria:
  level_1_to_2:
    requirement: ""             # Purchase, completion, participation
    timeframe: ""
    verification: ""
  level_2_to_3:
    requirement: ""
    timeframe: ""
    verification: ""
  level_3_to_4:
    requirement: ""
    timeframe: ""
    verification: ""
  level_4_to_5:
    requirement: ""
    timeframe: ""
    verification: ""
```

### Step 3: Design Status Markers
Visible indicators that signal status to the community.

```yaml
status_markers:
  digital_badges:
    level_1: ""
    level_2: ""
    level_3: ""
    level_4: ""
    level_5: ""
  community_roles:
    level_1: ""
    level_2: ""
    level_3: ""
    level_4: ""
    level_5: ""
  recognition_mechanisms:
    shoutouts: ""               # Public recognition
    featured_stories: ""        # Case study spotlights
    leaderboards: ""            # Visible rankings
    awards: ""                  # Periodic awards
  physical_markers:
    certificates: true/false
    merchandise: true/false
    plaques: true/false
```

### Step 4: Design Status-Driven Offers
Each level unlocks exclusive offers that reinforce status.

```yaml
status_offers:
  level_2_exclusive:
    offer: ""
    messaging: "Available only to [Level 2 Name] members"
  level_3_exclusive:
    offer: ""
    messaging: ""
  level_4_exclusive:
    offer: ""
    messaging: ""
  level_5_exclusive:
    offer: ""
    messaging: ""
```

### Step 5: Create the Engagement Loop
Design the cycle that keeps members active and ascending.

```yaml
engagement_loop:
  trigger: ""                   # What starts the loop?
  action: ""                    # What do they do?
  reward: ""                    # What do they get?
  investment: ""                # What have they put in?
  escalation: ""                # How does it grow?
  social_proof: ""              # How do others see their progress?
  loop_frequency: ""            # How often does the loop repeat?
```

---

## Output Template
```yaml
output:
  status_system:
    community: ""
    levels:
      - level: 1
        name: ""
        identity: ""
        criteria: ""
        markers: []
      - level: 2
        name: ""
        identity: ""
        criteria: ""
        markers: []
      - level: 3
        name: ""
        identity: ""
        criteria: ""
        markers: []
      - level: 4
        name: ""
        identity: ""
        criteria: ""
        markers: []
      - level: 5
        name: ""
        identity: ""
        criteria: ""
        markers: []
    engagement_loop: ""
    status_offers: []
    expected_impact:
      retention_increase: "20-40%"
      ascension_rate: "10-20% per level"
      ltv_increase: "30-60%"
```

---

## Quality Gate
```yaml
quality:
  - [ ] Each level has a clear identity transformation (not just access)
  - [ ] Ascension criteria are objective and measurable
  - [ ] Status markers are visible to the community
  - [ ] Each level feels like a meaningful achievement
  - [ ] Status-driven offers align with the value ladder
  - [ ] Engagement loop creates a self-reinforcing cycle
  - [ ] System is implementable on the chosen platform
  - [ ] Level names are inspiring and align with the movement language
```

---

## Handoff
- -> **brunson-movement** for `build-community-plan` (BR_MOV_001) — integrate into community
- -> **brunson-movement** for `create-future-cause` (BR_MOV_004) — align with movement narrative
- -> **brunson-offers** for `build-irresistible-offer` (BR_OFR_001) — design level-exclusive offers

---
*Task: BR_MOV_003 | Agent: brunson-movement | Version: 1.0*
