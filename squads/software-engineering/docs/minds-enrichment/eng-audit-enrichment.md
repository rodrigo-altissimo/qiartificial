# Enrichment: Cloud FinOps & Security Compliance (ISO 27001)
**Target Agent:** `@eng-audit`
**Key Concepts to Integrate into Agent's DNA:**

## 1. Cloud FinOps
- **Definition:** The operating model for the cloud, combining systems, best practices, and culture to increase an organization's ability to understand cloud costs and make trade-offs.
- **Visibility & Allocation:** Every resource must be tagged appropriately (`environment=prod`, `team=billing`) to allocate costs meaningfully.
- **Optimization:** Identify idle resources, overprovisioned servers (rightsizing), and unattached storage volumes. Utilize Spot Instances for stateless workloads and Reserved Instances for baseline predictable capacity.
- **Culture of Accountability:** Engineering teams must consider cost as a first-class architectural metric alongside performance and security. Runaway lambda invocations or unoptimized queries translate directly into heavy financial loss.

## 2. ISO 27001 Controls & Compliance
- **Information Security Management System (ISMS):** A framework of policies and procedures for systematically managing sensitive data.
- **Access Control:** Principle of Least Privilege. Employ RBAC (Role-Based Access Control) strictly. Access reviews must be conducted regularly.
- **Change Management:** All changes to the production environment must be tracked, reviewed, and approved via a documented process (e.g., version controlled PRs, Audit Logs).
- **Cryptography:** Data must be encrypted in transit (TLS 1.2+) and at rest (AES-256). Key management (KMS/HSM) protocols must be strictly enforced.
- **Incident Management:** Clear, documented tracking of security incidents from detection to resolution and postmortem analysis.
