# Visual Blueprint: Software Architecture - The Hard Parts
**Target Agent:** `@eng-architect`
**Framework:** Granularity & Distributed Trade-offs

---

## [Source Type: Transcribed Architectural Diagram - Monolith vs Microservices]
**Visual Anchor:** A high-level system diagram split into two architectural states via a dashed gray line. The top shows a single monolithic cylinder. The bottom shows a distributed mesh of hexagons. 

### 1. Spatial Layout (The Board)
- **Top Section (The Monolith):** A massive green cylinder labeled `E-Commerce Core`. Inside, three distinct puzzle pieces represent `Orders`, `Inventory`, and `Payments`, all interlocked tightly. A single overarching "Transaction Boundary" circle encapsulates the entire cylinder.
- **Bottom Section (Distributed Services):** Three separate blue hexagons (`Orders`, `Inventory`, `Payments`). 
- **The Friction Point:** A bold, jagged red lightning bolt is drawn connecting `Orders` and `Inventory` hexagons. A sticky note next to it reads: "Synchronous Network Call = Latency + Failure Point".
- **Margin Notes:** "Eventual Consistency > Distributed Transactions".

### 2. Node & Relationship Map (The Transcription)
```yaml
diagram_type: "Distributed Architecture Trade-offs"
state_monolith:
  nodes:
    - id: MonoDB
      label: "Shared Database"
      color: "green"
      trait: "ACID Transactions"
  edges:
    - from: MonoDB
      to: MonoDB
      visual: "encircling ring"
      label: "Local ACID Transaction Boundary"

state_distributed:
  nodes:
    - id: Svc_Orders
      label: "Order Service"
      color: "blue"
    - id: Svc_Inventory
      label: "Inventory Service"
      color: "blue"
    - id: EventBus
      label: "Kafka Message Bus"
      color: "purple"
      visual_weight: "heavy"
  edges:
    - from: Svc_Orders
      to: Svc_Inventory
      visual: "red jagged line"
      label: "BAD: Synchronous internal call (Tight Coupling)"
    - from: Svc_Orders
      to: EventBus
      visual: "green dashed line"
      label: "GOOD: Emits 'OrderCreated' Event"
    - from: EventBus
      to: Svc_Inventory
      visual: "green dashed line"
      label: "GOOD: Consumes 'OrderCreated' Event asynchronously"
```

### 3. The Walkthrough (If this were a video)
*Transcribe the Architect pointing at the board:*

- **Minute 4:30:** "Breaking apart the monolithic code is the easy part." *(Draws a line separating the puzzle pieces at the top).* "Breaking apart the database is where the real pain begins. Notice this green cylinder? That gives us an ACID transaction for free. If the order fails, the inventory rolls back instantly."
- **Minute 8:15:** "Now look at the bottom section here." *(Points aggressively at the jagged red line between Orders and Inventory).* "If you split these services but have `Orders` make an HTTP call to `Inventory` every time a user buys something, you haven't built microservices. You've built a Distributed Monolith. If Inventory goes down, Orders goes down."
- **Minute 15:40:** "So how do we fix it? We remove the red line and route through this purple box, the Event Bus. We trade Availability for Consistency. We rely on **BASE** (Basically Available, Soft state, Eventual consistency). The order is accepted immediately, and inventory updates *eventually*."

### 4. Applied Mental Models
- **CAP Theorem in Practice:** You cannot have a distributed transaction across services without sacrificing availability. Choose AP (Available/Partition Tolerant) and use Saga patterns.
- **Granularity Rule of Thumb:** If two services constantly chat with each other synchronously (the red jagged line), they are too granular and should likely be merged back together.
