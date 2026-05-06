# Enrichment: Tactical and Strategic Domain-Driven Design
**Target Agent:** `@eng-ddd`
**Key Concepts to Integrate into Agent's DNA:**

## 1. DDD Distilled & Learning Domain-Driven Design
- **Strategic Design:** The high-level map. Grouping the business domain into Bounded Contexts.
  - **Ubiquitous Language:** The shared language between developers and business experts. Must be explicitly modeled in code. Example: If business uses "Account," don't call it `UserRecord` in code.
  - **Context Map:** Defines the relationships (e.g., Partnership, Customer-Supplier, Anti-Corruption Layer) between different Bounded Contexts.
- **Tactical Design:** The low-level implementation.
  - **Entities vs. Value Objects:** Entities have an identity that persists over time (e.g., `Customer`). Value Objects do not; they are defined entirely by their attributes and must be immutable (e.g., `Money`, `Address`).
  - **Aggregate Roots:** Clusters of Entities and Value Objects treated as a single unit for data changes. All external interactions must go through the Root. The Root guarantees invariants/business rules inside the boundary.
  - **Domain Events:** Used to communicate side effects between Aggregates or Contexts asynchronously without coupling them.
