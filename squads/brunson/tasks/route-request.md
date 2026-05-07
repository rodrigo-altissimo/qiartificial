# route-request

## Metadata
```yaml
task_id: BR_CHF_001
agent: brunson-chief
type: routing
complexity: low
estimated_time: 5-10min
source: "DotCom Secrets — The Secret Formula + Expert Secrets — Finding Your Voice"
```

## Purpose
Route the user's request to the correct specialized Brunson agent based on intent analysis. The Chief operates as the funnel ecosystem orchestrator, ensuring every request reaches the agent best equipped to deliver maximum value.

> "You're just one funnel away. But you need to know WHICH funnel, and that starts with understanding what you actually need." — Russell Brunson

---

## The Framework: Request Routing Matrix

The Brunson Squad operates as a specialized funnel-building team. Each agent owns a specific domain of Brunson's methodology. Routing correctly is the difference between a scattered response and a precision-engineered funnel asset.

### Agent Domain Map

```
REQUEST TYPE                        AGENT                 TRIGGER KEYWORDS
─────────────────────────────────   ───────────────────   ──────────────────────────────
Business model / strategy           brunson-chief         strategy, business model, scaling
Funnel architecture / value ladder  brunson-funnels       funnel, value ladder, architecture
Expert positioning / opportunity    brunson-expert        expert, authority, new opportunity
Traffic / Dream 100                 brunson-traffic       traffic, Dream 100, ads, organic
Webinar / presentation              brunson-webinar       webinar, presentation, Perfect Webinar
Copywriting / sales letters         brunson-copy          copy, sales letter, VSL, headline
Page design / layout                brunson-pages         page, squeeze, sales page, layout
Email sequences                     brunson-email         email, sequence, follow-up, Soap Opera
Hooks / attention                   brunson-hooks         hook, curiosity, pattern interrupt
Offer construction                  brunson-offers        offer, stack, guarantee, OTO
Funnel auditing / hacking           brunson-advisor       audit, diagnose, hack, benchmark
Movement building                   brunson-movement      community, movement, manifesto, cause
Story crafting                      brunson-stories       story, Epiphany Bridge, origin story
Swipe file analysis                 brunson-swipe         swipe, reverse engineer, competitor
Launch sequences                    brunson-launch        launch, challenge, event, invisible
```

### Routing Priority
1. **Exact match** — Keywords map directly to one agent
2. **Intent match** — User's goal maps to agent's domain
3. **Multi-agent** — Complex requests get broken into sub-tasks
4. **Chief handles** — Strategy-level requests stay with Chief

---

## Input Required
```yaml
input_fields:
  user_request: ""
  business_context: ""
  current_stage: ""          # startup, growth, scale, optimization
  urgency: ""                # immediate, this week, this quarter
  previous_interactions: ""  # any prior Brunson Squad work
```

---

## Step-by-Step Process

### Step 1: Parse the User Request
Extract the core intent from the user's message. Identify the primary action they want to take.

```yaml
request_analysis:
  raw_request: ""
  primary_intent: ""         # build, fix, optimize, create, analyze
  domain: ""                 # funnel, traffic, copy, offer, etc.
  complexity: ""             # single-agent, multi-agent, strategy
  deliverable_expected: ""   # document, strategy, audit, template
```

### Step 2: Match to Agent Domain
Compare the request against the Agent Domain Map. Look for keyword triggers and intent alignment.

```yaml
routing_match:
  primary_agent: ""
  confidence: ""             # high, medium, low
  secondary_agents: []       # if multi-step is needed
  reasoning: ""              # why this agent?
```

### Step 3: Check for Multi-Agent Workflows
Some requests require multiple agents in sequence. Identify the workflow chain.

```yaml
workflow_chain:
  is_multi_agent: true/false
  sequence:
    - agent: ""
      task: ""
      output_feeds_into: ""
    - agent: ""
      task: ""
      output_feeds_into: ""
```

**Common Multi-Agent Chains:**
- "Build a funnel" = brunson-funnels -> brunson-pages -> brunson-copy -> brunson-email
- "Launch a product" = brunson-offers -> brunson-webinar -> brunson-launch -> brunson-traffic
- "Grow my audience" = brunson-traffic -> brunson-hooks -> brunson-email -> brunson-movement

### Step 4: Determine Business Stage Context
The user's business stage affects which frameworks apply.

```yaml
stage_context:
  stage: ""                  # startup, growth, scale, optimization
  appropriate_frameworks:
    startup: "Secret Formula, Value Ladder, Attractive Character"
    growth: "Perfect Webinar, Dream 100, Soap Opera Sequence"
    scale: "Traffic Secrets, Funnel Stacking, Movement Building"
    optimization: "Funnel Hacking, Split Testing, Economics"
```

### Step 5: Generate Routing Decision
Produce the final routing with context for the receiving agent.

```yaml
routing_decision:
  target_agent: ""
  target_task: ""
  context_package:
    user_request: ""
    business_stage: ""
    key_constraints: ""
    expected_output: ""
    priority: ""
```

---

## Output Template
```yaml
output:
  routing:
    request_summary: ""
    primary_agent: ""
    primary_task: ""
    workflow_type: "single | multi-agent | strategy"
    workflow_chain:
      - step: 1
        agent: ""
        task: ""
        estimated_time: ""
      - step: 2
        agent: ""
        task: ""
        estimated_time: ""
    context_for_agent:
      business_name: ""
      business_stage: ""
      specific_need: ""
      constraints: ""
    confidence: "high | medium | low"
    chief_notes: ""
```

---

## Quality Gate
```yaml
quality:
  - [ ] Request fully understood — not just keywords but intent
  - [ ] Agent selection matches the domain expertise needed
  - [ ] Multi-agent workflows have logical sequence
  - [ ] Context package includes all info the receiving agent needs
  - [ ] Business stage is identified and appropriate frameworks referenced
  - [ ] No ambiguity — if confidence is low, ask clarifying questions
  - [ ] Routing decision includes estimated time for the full workflow
```

---

## Handoff
- -> **Target Agent** with context package and task reference
- -> **brunson-chief** for `create-funnel-stack` (BR_CHF_003) if multi-funnel strategy needed
- -> **brunson-advisor** for `diagnose-funnel-health` (BR_ADV_002) if user describes problems

---
*Task: BR_CHF_001 | Agent: brunson-chief | Version: 1.0*
