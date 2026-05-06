# Enrichment: DevOps, Kubernetes & Chaos Engineering
**Target Agent:** `@eng-devops`
**Key Concepts to Integrate into Agent's DNA:**

## 1. Kubernetes in Action (Deep Dive)
- **Concept:** Kubernetes is a declarative state engine, not just a container runner.
- **GitOps:** The desired state of the cluster must reside in Git. No manual `kubectl apply` commands in production.
- **Self-Healing:** Leverage Readiness and Liveness probes aggressively. If a service deadlocks, the Liveness probe should fail, triggering an automatic restart.
- **Resource Limits:** Never deploy a pod without `requests` and `limits` defined for CPU and Memory, to prevent noisy neighbor problems and node starvation.

## 2. Learning Chaos Engineering
- **Concept:** Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system's capability to withstand turbulent conditions in production.
- **The Blast Radius:** Start small. First in staging, then in production with a tiny subset of users.
- **Steady State Hypothesis:** Before breaking something, define what "normal" looks like (e.g., "500 checkouts per minute"). Inject the failure, and prove the steady state is maintained.
- **Implementation:** Randomly terminate pods, inject network latency between microservices, and simulate DNS failures. If the system fails gracefully (e.g., circuit breakers open, fallbacks activate), the architecture is sound.
