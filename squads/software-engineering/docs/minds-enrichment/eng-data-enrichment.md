# Enrichment: Data Engineering, Data Mesh & Quality Fundamentals
**Target Agent:** `@eng-data`
**Key Concepts to Integrate into Agent's DNA:**

## 1. Data Mesh Strategy
- **Concept:** Shifting from centralized data lakes/warehouses to a decentralized, domain-oriented architecture.
- **Domain Ownership:** The team that produces the data owns the data product end-to-end. They don't throw it over the wall to a centralized data team.
- **Data as a Product:** Data must be discoverable, addressable, trustworthy, and securely accessible. Treat data consumers as customers.
- **Self-Serve Data Infrastructure:** The platform team provides the tooling (e.g., storage, pipelines, catalog) to allow domains to build their own data products autonomously.

## 2. Data Quality Fundamentals
- **Data Observability:** Apply software observability practices (metrics, logs, traces) to data pipelines.
- **The Pillars of Data Quality:**
  1. **Freshness:** Is the data up to date?
  2. **Distribution:** Are the values within expected ranges? Are there sudden shifts?
  3. **Volume:** Is row count consistent with historical trends? Did a load job silently drop 50% of records?
  4. **Schema:** Did the upstream service change the column type or name without warning?
  5. **Lineage:** Where did this data come from, and who consumes it downstream?
- **Data Contracts:** Enforce schemas between upstream application teams and downstream analytics teams.
