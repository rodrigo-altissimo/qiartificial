# Visual Blueprint: Design Patterns & Clean Code Architecture
**Target Agent:** `@eng-clean-code`
**Framework:** The Code Smell Visualization Matrix

---

## [Source Type: Transcribed Whiteboard Session - Refactoring Legacy Code]
**Visual Anchor:** A large whiteboard split into two sections. The left side shows a chaotic, tangled web of red lines connecting 5 oversized boxes (Legacy Monolith). The right side shows a neatly stacked set of 4 blue boxes with single, unidirectional green arrows (Clean Architecture). 

### 1. Spatial Layout (The Board)
- **Left Side (The Problem):** A giant "God Class" box named `UserManager` is drawn in the center, surrounded by 8 smaller boxes (e.g., `EmailSender`, `DatabaseTx`, `CachePoller`). Every small box has a thick red line pointing directly into `UserManager`. Above it reads "TIGHT COUPLING".
- **Right Side (The Solution):** A pyramid structure. The bottom layer is `Infrastructure`, middle is `Application`, top is `Domain`. A thick black line separates `Domain` from the rest, with a sticky note saying "NEVER CROSS UPWARDS".
- **Bottom Right Sribbles:** "New() is Glue" circled three times in red marker.

### 2. Node & Relationship Map (The Transcription)
```yaml
diagram_type: "Component Transition Matrix"
state_before:
  nodes:
    - id: GodClass
      label: "UserManager.ts (3,000 lines)"
      color: "red"
      visual_weight: "massive"
    - id: Dependencies
      label: "Email, DB, Cache"
      color: "orange"
  edges:
    - from: Dependencies
      to: GodClass
      visual: "thick solid lines, bidirectional"
      label: "Tight Coupling (Hardcoded Instantiation)"

state_after:
  nodes:
    - id: UseCase
      label: "RegisterUserUseCase.ts"
      color: "green"
      layer: "Application"
    - id: Interface
      label: "IUserRepository"
      color: "blue"
      layer: "Domain"
    - id: Implementation
      label: "PostgresUserRepository"
      color: "yellow"
      layer: "Infrastructure"
  edges:
    - from: UseCase
      to: Interface
      visual: "dotted line"
      label: "Depends on Abstraction"
    - from: Implementation
      to: Interface
      visual: "solid line, upwards arrow"
      label: "Implements (Dependency Inversion)"
```

### 3. The Walkthrough (If this were a video)
*Transcribe the Master Architect pointing at the board:*

- **Minute 2:15:** "Look closely at this `UserManager` on the left." *(Taps the red box hard with the marker)*. "It knows about the database, it knows about the email provider. Every time you change the database schema, compiling this class breaks. This is what we call Fragility."
- **Minute 6:40:** "So what do we do? We apply the **Dependency Inversion Principle**." *(Draws the dotted line from `UseCase` to `Interface` on the right board)*. "Notice how `RegisterUserUseCase` doesn't point to Postgres. It points to an Interface. The flow of control still goes from UseCase to DB at runtime, but the *source code dependency* points in the opposite direction."
- **Minute 12:10:** "And remember this rule here:" *(Circles the phrase 'New() is Glue')* "Every time you type the keyword `new` inside a business logic class, you are hardcoding a dependency. Inject them instead."

### 4. Applied Mental Models
- **Favor Composition Over Inheritance:** Extend behavior by composing objects (plugging different implementations into the Interface) rather than creating deep, fragile inheritance hierarchies.
- **Deep vs Shallow Modules:** The `IUserRepository` is a deep module. It hides complex SQL logic behind a simple `save(user)` interface.
