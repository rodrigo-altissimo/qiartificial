---
task: Prepare Squad (Brainstorm & Design)
responsavel: "@squad-creator"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - idea: Rough squad idea (domain, problem, experts)
  - documents: Optional PRD, spec, or reference docs
  - squad_type_hint: Optional hint (expert, pipeline, hybrid)
Saida: |
  - spd_path: Path to generated SPD document
  - spd_status: READY | CONDITIONAL | DRAFT
  - summary: Squad design summary
  - next_steps: How to create the actual squad from the SPD
Checklist:
  - "[ ] Identify squad type (expert/pipeline/hybrid)"
  - "[ ] Design tier architecture"
  - "[ ] Define all agents with roles and commands"
  - "[ ] Define all tasks with entrada/saida"
  - "[ ] Collect mind clone sources (expert squads)"
  - "[ ] Validate source GO/NO-GO (expert squads)"
  - "[ ] Design quality gates with numeric thresholds"
  - "[ ] Design routing flow"
  - "[ ] Configure voice & tone (if applicable)"
  - "[ ] Run SPD validation checklist"
  - "[ ] Generate SPD document"
---

# *prep-squad

The comprehensive squad preparation workflow. Guides the user through brainstorming, designing, and documenting a complete squad specification — producing a **Squad Preparation Document (SPD)** that can be used to create the actual squad.

This is the "Forge" workflow — thorough preparation that saves hours of debugging later.

**Mantra:** "30 minutes of preparation saves 10 hours of debugging."

## Usage

```bash
@squad-creator

*prep-squad
# → Full interactive brainstorm-to-SPD workflow

*prep-squad --idea "YouTube thumbnail optimization squad"
# → Starts with a seed idea

*prep-squad --docs ./docs/prd/my-feature.md
# → Document-driven design (extracts entities, workflows, integrations)

*prep-squad --extend ontarget-scripts
# → Extension prep for existing squad
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--idea` | string | - | Seed idea to start brainstorming |
| `--docs` | string | - | Comma-separated doc paths for document-driven design |
| `--extend` | string | - | Existing squad name for extension prep |
| `--output` | string | ./squads/.prep/ | Output directory for SPD |
| `--quick` | flag | false | Skip deep source collection (pipeline squads) |

## Knowledge Base

When executing this task, LOAD these KB files from `.aiox-core/development/data/squad-creator/`:

| File | When to Load | Purpose |
|------|-------------|---------|
| `squad-architecture-reference.md` | ALWAYS | Schema, structure, validation rules |
| `agent-template-quality-gates.md` | ALWAYS | What makes an excellent agent (7 levels) |
| `mind-clone-pipeline.md` | Expert squads | Source collection, Thinking/Voice DNA |
| `excellent-squad-examples.md` | ALWAYS | Real patterns from production squads |
| `company-context.md` | OnTarget squads | Company identity, brand voice, existing squads |
| `company-profile.md` | OnTarget squads | Full company profile, ebook, products |

## Workflow

### Phase 0: Opening

Ask the opening question:

```
What squad do you want to create? Give me the rough idea:
1. What domain or problem does it solve?
2. Is it based on any specific experts, authors, or methodologies?
3. What should users be able to DO with this squad?
```

Based on the answer, route to the appropriate workflow:

| User Response | Route To |
|--------------|----------|
| Clear idea with experts | **Workflow A: Expert Squad** |
| Clear idea without experts | **Workflow B: Pipeline/Hybrid Squad** |
| Vague idea | **Workflow C: Discovery Brainstorm** |
| Has a document/PRD | **Workflow D: Document-Driven Design** |
| Wants to extend existing squad | **Workflow E: Extension Prep** |

---

### Workflow A: Expert Squad (Mind-Clone Based)

**Step A1: Expert Identification**
For each expert:
- Full name
- Domain/specialty
- Why this expert? What makes their methodology unique?
- What agent will this expert power?

**Step A2: Source Material Audit (CRITICAL)**

For EACH expert, ask these questions IN ORDER:

```
Q1: "What books by {expert} have you read?"
    → For each: Title, year, finished? Key takeaways?

Q2: "What videos, talks, or interviews by {expert} have you watched?"
    → For each: Title/topic, approximate duration, key insights?

Q3: "Have you taken any courses or workshops by {expert}?"
    → Details of what was covered

Q4: "What are the 2-3 core FRAMEWORKS this expert teaches?"
    → Name each framework, describe the steps
    → Can you explain it without looking at notes?

Q5: "What would this expert NEVER say or do?"
    → Anti-patterns are critical for mind clones

Q6: "Are there any memorable quotes or principles you remember?"
    → Direct quotes reveal voice DNA

Q7: "Have you actually consumed this material, or are you working from summaries?"
    → BE HONEST. Summaries = Tier 3, not Tier 1.
```

**Step A3: Source Gap Analysis**

After collecting what the user has, evaluate against BLOCKING minimums:

| Requirement | Minimum | User Has | Status |
|-------------|---------|----------|--------|
| Total sources | 10+ | ? | ? |
| Tier 1 sources (BY the expert) | 5+ | ? | ? |
| Different source types | 3+ | ? | ? |
| Content volume | 5+ hours OR 200+ pages | ? | ? |
| Core framework in 3+ sources | Yes (triangulation) | ? | ? |

**Source Tier Classification:**
- **Tier 0 (User Materials):** Personal notes, course transcripts, private PDFs. HIGHEST confidence.
- **Tier 1 (Primary):** Books, interviews, talks, courses, blog posts BY the expert. HIGH confidence.
- **Tier 2 (Secondary):** Biographies, case studies, analyses ABOUT the expert. MEDIUM confidence.
- **Tier 3 (Tertiary):** Wikipedia, AI summaries, summary posts. LOW confidence.

**GO/NO-GO Decision:**
- **GO:** All 5 blocking checks pass → Proceed to SPD generation
- **CONDITIONAL:** 4/5 pass, clear plan to fill gap → Proceed with warnings
- **NO-GO:** <4/5 pass → STOP. Help user create a consumption plan.

**Step A4: Source Consumption Plan (If NO-GO or CONDITIONAL)**

If insufficient material:
1. Identify top 1-2 books → Recommend reading
2. Find 3-5 notable interviews/talks on YouTube → Provide search guidance
3. Find their blog/website/social media → Note it
4. Estimate time needed
5. Tell honestly: "Come back when you can explain the framework without notes."
6. Save partial SPD as DRAFT status

**Step A5: Framework Deep-Dive**

For each expert's core framework, extract:
```yaml
framework:
  name: "Framework Name"
  origin: "Where the expert teaches this"
  philosophy: "The core belief behind it"
  when_to_use: "Situations where this applies"
  when_NOT_to_use: "Where this framework fails"
  steps:
    - step_1: "Description"
    - step_2: "Description"
  anti_patterns:
    - "Common mistake 1"
  key_quote: "A quote that captures the essence"
```

---

### Workflow B: Pipeline/Hybrid Squad

**Step B1: Domain Mapping**
- What problem does this squad solve?
- What are the main workflows? (verb-noun: "analyze-data", "generate-report")
- What integrations are needed?
- Who are the stakeholders?

**Step B2: Process Architecture**
- What are the sequential phases?
- What are the intermediate outputs between phases?
- Where are the quality checkpoints?
- What can fail, and how should failures be handled?

**Step B3: Agent Design**
- What agents are needed for each phase?
- Is there an orchestrator that routes requests?
- What tools (non-persona scripts) are needed?

---

### Workflow C: Discovery Brainstorm

Guide through discovery:

**C1: Problem Statement**
> "Describe the problem this squad solves. Who has this problem? What do they do today without the squad?"

**C2: Outcome Vision**
> "If this squad existed and worked perfectly, what would the user get?"

**C3: Expert vs. Process**
> "Is this squad about applying a specific person's methodology, or automating a process?"

**C4: Existing Solutions**
> "Are there existing tools, frameworks, or experts that solve this? What's missing?"

**C5: Scope**
> "What's IN scope for v1.0? What's explicitly OUT of scope?"

After 5 questions, route to Workflow A or B.

---

### Workflow D: Document-Driven Design

When the user provides a PRD, spec, or other document:

**D1: Extract from Document**
- Domain entities (nouns that appear repeatedly)
- Workflows (action patterns)
- Integrations mentioned
- Stakeholders identified
- Quality requirements mentioned

**D2: Gap Questions**
Present what you extracted and ask:
> "I found these in your document. What's missing?"

**D3: Expert Check**
> "Are any of these based on specific experts or methodologies? If so, we need source materials."

Then route to Workflow A or B.

---

### Workflow E: Extension Prep

**E1: Current State**
> "Let me read the current squad.yaml."
Read the existing squad manifest.

**E2: Gap Identification**
> "What's missing? New agents? New tasks? New workflows?"
Run `*analyze-squad` internally to get coverage metrics.

**E3: Design Extension**
Design only the NEW components, ensuring they integrate with existing ones.

---

## Agent Architecture Design Rules

### Tier System
```
Tier 0: Diagnostic / Routing (Recommended, not mandatory)
  - Classifies requests before routing to specialists
  - BLOCKING unless foundation_first: false

Tier 1: Masters / Core Specialists
  - Primary workers, 3-5 agents typically

Tier 2: Specialists / Format Experts
  - Narrower scope, activated for specific use cases

Tier 3: Optimization / Tools
  - Quality scoring (non-persona scripts)
```

### Design Checklist (Per Agent)
- [ ] Unique `id` (kebab-case)
- [ ] Clear `role` description (5-200 chars)
- [ ] Assigned `tier` (0, 1, 2, or 3)
- [ ] Marked as orchestrator if applicable
- [ ] Inspiration source (if Expert squad)
- [ ] 1-3 core frameworks
- [ ] 2-5 commands
- [ ] Handoff rules

### Design Checklist (Per Task)
- [ ] Unique `name` (kebab-case, verb-noun pattern)
- [ ] Owning `agent`
- [ ] Clear description
- [ ] Entrada (inputs)
- [ ] Saida (outputs)
- [ ] Checklist (validation items)

---

## Quality Gates Design

Every squad needs quality gates:

```yaml
quality_gates:
  - id: "{SQUAD_PREFIX}_QG_{NUMBER}"
    name: "Human-readable name"
    description: "What this gate checks"
    blocking: true|false
    veto: true|false
    minimum_score: 7.0
    bypass_allowed: false
```

**Rules:**
- MINIMUM: diagnostic gate (Tier 0) + final QA gate
- Expert squads: add a veto gate for authenticity
- Pipeline squads: gates between each major phase
- Score thresholds must be specific numbers (9.5, not "high quality")

---

## SPD Validation Before Output

### Universal Checks (ALL Squads)
- [ ] Squad name is kebab-case, 2-50 chars
- [ ] Version is semver (e.g., 1.0.0)
- [ ] Description is under 500 chars
- [ ] Has a designated orchestrator agent
- [ ] Has Tier 0 diagnostic OR uses `foundation_first: false`
- [ ] Every task has an owning agent
- [ ] Every agent has at least one command
- [ ] No orphan agents (agents with zero tasks)
- [ ] No orphan tasks (tasks without an agent)
- [ ] Quality gates defined with IDs and thresholds
- [ ] Routing flow is clear with BLOCKING markers

### Expert Squad Checks (ADDITIONAL)
- [ ] Every expert-based agent has source materials listed
- [ ] Each expert has 10+ total sources
- [ ] Each expert has 5+ Tier 1 sources
- [ ] Each expert has 3+ different source types
- [ ] Content volume: 200+ pages OR 5+ hours per expert
- [ ] Core framework confirmed in 3+ sources (triangulation)
- [ ] GO/NO-GO assessment for each expert
- [ ] Voice indicators collected

### Pipeline Squad Checks (ADDITIONAL)
- [ ] Clear sequential phases defined
- [ ] Intermediate outputs between each phase
- [ ] Quality gate at each major phase transition
- [ ] Error handling defined

---

## SPD Generation

When all preparation is complete, generate the SPD using the template at:
`.aiox-core/development/templates/squad/spd-template.md`

Fill in all sections based on the collected information.

Save to: `./squads/.prep/{squad-name}-spd.md`

Display:
```
SPD generated successfully!

Status: {READY|CONDITIONAL|DRAFT}
Location: ./squads/.prep/{squad-name}-spd.md

Next steps (in a FRESH session):
  1. Review the SPD: cat ./squads/.prep/{squad-name}-spd.md
  2. Edit the SPD manually if needed
  3. Create squad from SPD: *create-squad {name} --from-spd ./squads/.prep/{squad-name}-spd.md
```

### VETO: MANDATORY HALT AFTER SPD

```
┌─────────────────────────────────────────────────────────────────┐
│  HARD STOP — THIS TASK ENDS HERE                                │
│                                                                 │
│  The *prep-squad task is COMPLETE once the SPD file is written. │
│                                                                 │
│  DO NOT:                                                        │
│  - Continue into *create-squad                                  │
│  - Start creating agents, tasks, or workflows                   │
│  - Execute mind-research-loop or clone-mind                     │
│  - Ask "Want me to create the squad now?"                       │
│  - Offer to "proceed with creation"                             │
│                                                                 │
│  The SPD is the DELIVERABLE. The user will start *create-squad  │
│  in a FRESH session with the SPD as input.                      │
│                                                                 │
│  ONLY acceptable follow-up actions:                             │
│  - Answer questions about the SPD contents                      │
│  - Make edits to the SPD if user requests changes               │
│  - Explain how to use the SPD in a future session               │
└─────────────────────────────────────────────────────────────────┘
```

**Veto Condition:** If the agent attempts to execute *create-squad, create-agent, clone-mind, or any creation task after SPD generation → BLOCK. This is a process violation. The SPD is the terminal artifact of *prep-squad.

---

## Progress Tracking

At any point, show progress when asked:

```
SQUAD PREP PROGRESS
===================
[x] Phase 0: Opening - Squad idea captured
[x] Phase 1: Squad Identity - Name, domain, type defined
[ ] Phase 2: Agent Architecture - Designing agents and tasks
[ ] Phase 3: Source Collection - (Expert squads only)
[ ] Phase 4: Quality Gates - Defining validation rules
[ ] Phase 5: Voice & Routing - Communication style
[ ] Phase 6: SPD Generation - Final document
```

---

## Important Behaviors

### SPD Is The Deliverable — Never Continue Past It
The entire purpose of *prep-squad is to produce the SPD document. Once written to disk, the task is DONE. The user will use the SPD in a fresh `*create-squad` session. Never offer to continue into creation.

### Be Honest About Gaps
If sources are insufficient, say so clearly. A half-baked mind clone is worse than no mind clone. Mark SPD as CONDITIONAL or DRAFT.

### Never Rush to SPD
Don't produce the SPD until you've gone through the full workflow. Preparation is the point.

### Ask One Phase at a Time
Don't dump all questions at once. Go through phases sequentially.

### Use Knowledge Base
Reference the KB files when:
- Explaining what makes a good squad → excellent-squad-examples.md
- Describing required structure → squad-architecture-reference.md
- Explaining agent requirements → agent-template-quality-gates.md
- Walking through mind clone requirements → mind-clone-pipeline.md

---

## Error Handling

| Error | Cause | Resolution |
|-------|-------|------------|
| `NO_IDEA` | User can't describe the squad | Use Workflow C: Discovery Brainstorm |
| `INSUFFICIENT_SOURCES` | Expert squad without enough material | Create consumption plan, mark DRAFT |
| `OVERLAP_DETECTED` | New squad overlaps existing one | Show existing squad, suggest extension |

## Related

- **Agent:** @squad-creator (Craft)
- **Template:** spd-template.md
- **Next:** *create-squad --from-spd
- **KB:** data/squad-creator/*.md
