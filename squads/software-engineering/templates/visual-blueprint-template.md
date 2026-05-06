# Template: Visual Enrichment Blueprint

**Purpose:** 
This template forces all software engineering enrichment knowledge to be formatted as *Transcribed Multimodal Assets* (e.g., as if an AI agent is looking at a screenshot of a whiteboard or architectural diagram). Do not use dry, academic bullet points. Describe the visual layout, connections, and structural hierarchy.

---

## [Source Type: e.g., YouTube Whiteboard Screenshot / C4 Model Diagram]
**Visual Anchor:** [Describe the core visual metaphor. E.g., "A large whiteboard split into 3 vertical columns with red arrows flowing left to right"]

### 1. Spatial Layout (The Board)
- **Top Left:** [What is drawn here?]
- **Center Focus:** [What is the main diagram?]
- **Bottom Right (Warnings/Notes):** [What is scribbled in the margins?]

### 2. Node & Relationship Map (The Transcription)
```yaml
# Strict YAML representation of the visual diagram
diagram_type: "Component Relational"
nodes:
  - id: A
    label: "Frontend Client"
    color: "blue"
    visual_weight: "heavy"
  - id: B
    label: "API Gateway"
    color: "yellow"
    visual_weight: "medium"
edges:
  - from: A
    to: B
    visual: "thick solid line, red arrow"
    label_on_arrow: "HTTPS POST"
```

### 3. The Walkthrough (If this were a video)
*Transcribe the instructor pointing at the board:*
- **Minute 0:00:** "Notice how the `Frontend Client` (pointing to the blue box on the left) NEVER talks directly to the database..."
- **Minute 5:30:** "If we break this connection here (drawing a red 'X' on the line between A and B), the system..."
