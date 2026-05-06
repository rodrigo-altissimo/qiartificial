# Calculate Cost-of-Convenience

**Task ID:** `calculate-cost`
**Pattern:** HO-TP-001 (Task Anatomy Standard)
**Version:** 1.0.0
**Last Updated:** 2026-03-10

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Calculate Cost-of-Convenience |
| **status** | `pending` |
| **responsible_executor** | solution-ranker |
| **execution_type** | `Agent` |
| **input** | Mainstream solution + alternative solutions with pricing data |
| **output** | Cost comparison with convenience premium calculation |
| **action_items** | 4 steps |
| **acceptance_criteria** | 3 criteria |

**Estimated Time:** 2-5 min

## Executor Specification

| Attribute | Value |
|-----------|-------|
| **Type** | Agent |
| **Pattern** | GF-EP-002 |
| **Executor** | solution-ranker |
| **Rationale** | Quantitative analysis of total cost of ownership |

## Overview

Calculates the "convenience premium" — the extra cost (monetary and
non-monetary) of choosing the mainstream/obvious solution over a
non-obvious alternative. Helps users understand what they're paying for
convenience vs. what they could save.

## Input

- **mainstream_solution** (object)
  - Description: The obvious/default solution with pricing
  - Required: Yes

- **alternative_solutions** (array)
  - Description: Non-obvious solutions with pricing
  - Required: Yes

## Output

- **cost_analysis** (object)
  - Format:
    ```yaml
    mainstream:
      name: "{name}"
      monthly: "{amount}"
      annual: "{amount}"
      setup_cost: "{amount}"
      hidden_costs: ["{list}"]
      tco_1yr: "{amount}"
      tco_3yr: "{amount}"
    alternatives:
      - name: "{name}"
        monthly: "{amount}"
        annual: "{amount}"
        setup_cost: "{amount}"
        hidden_costs: ["{list}"]
        tco_1yr: "{amount}"
        tco_3yr: "{amount}"
        savings_1yr: "{amount}"
        savings_3yr: "{amount}"
        convenience_premium: "{percentage}"
    non_monetary_costs:
      mainstream:
        vendor_lock_in: high | medium | low
        data_ownership: full | partial | none
        customizability: high | medium | low
      best_alternative:
        vendor_lock_in: high | medium | low
        data_ownership: full | partial | none
        customizability: high | medium | low
    ```

## Action Items

### Step 1: Gather Pricing Data

For each solution (mainstream + alternatives):
1. Monthly subscription cost (per seat if applicable)
2. Annual cost (check for annual discounts)
3. One-time setup costs
4. Hidden costs: data migration, training, plugins, overages

### Step 2: Calculate TCO

For each solution:
- 1-year TCO = (monthly × 12) + setup + estimated hidden costs
- 3-year TCO = (monthly × 36) + setup + estimated hidden costs × 3

### Step 3: Calculate Convenience Premium

For each alternative vs mainstream:
- Savings = mainstream_tco - alternative_tco
- Convenience premium = (savings / alternative_tco) × 100%
- This shows what % extra the user pays for the "easy" mainstream option

### Step 4: Assess Non-Monetary Costs

Compare vendor lock-in, data ownership, and customizability:
- These factors often matter more than price in the long run
- Document trade-offs clearly

## Acceptance Criteria

- [ ] **AC-1:** TCO calculated for mainstream + at least top 3 alternatives
- [ ] **AC-2:** Convenience premium expressed as percentage
- [ ] **AC-3:** Non-monetary costs compared (lock-in, data, customizability)

## Handoff

| Attribute | Value |
|-----------|-------|
| **Next Task** | `rank-solutions` (sub-task return) |
| **Trigger** | Cost analysis complete |

---

_Task Version: 1.0.0_
_Pattern: HO-TP-001 (Task Anatomy Standard)_
_Last Updated: 2026-03-10_
_Compliant: Yes_
