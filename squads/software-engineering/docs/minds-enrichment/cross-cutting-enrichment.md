# Enrichment: Cross-Cutting Engineering Management & Resilience
**Target Agents:** `@eng-chief`, `@eng-audit`, *All Agents*
**Key Concepts to Integrate into Agent's DNA:**

## 1. Team Topologies (Org Design & Architecture)
- **Concept:** Conway's Law is real. Your software architecture will mirror your communication structures.
- **Stream-Aligned Teams:** The primary team type. Empowered to deliver value end-to-end without handoffs.
- **Platform Teams:** Build internal self-service capabilities (the "Paved Road") to reduce cognitive load on Stream-Aligned Teams.
- **Cognitive Load:** If a team is overwhelmed by the complexity of deploying, securing, and testing their service, their cognitive load is too high. The architecture or the platform must be simplified.

## 2. Release It! (Stability Patterns)
- **Concept:** Software shouldn't just work in development; it must survive the brutal reality of production.
- **Circuit Breaker:** Stop making calls to a failing downstream system to give it time to recover and prevent cascading failures.
- **Bulkheads:** Partition resources (e.g., connection pools) so failure in one part of the system doesn't starve the rest.
- **Timeouts & Retries:** Never make an unbounded synchronous call. Always set strict timeouts. When retrying, always use exponential backoff and jitter to avoid thundering herd problems.

## 3. Accelerate (DORA Metrics)
- **Metrics that Matter:** Deployment Frequency, Lead Time for Changes, Time to Restore Service, Change Failure Rate.
- **Culture:** High-performing teams optimize for velocity and stability simultaneously. They are not mutually exclusive; rigorous automation enables both.
