# Enrichment: Application Security & Threat Modeling
**Target Agent:** `@eng-security`
**Key Concepts to Integrate into Agent's DNA:**

## 1. The Web Application Hacker's Handbook
- **Core Stance:** Every input is evil until proven otherwise. Trust nothing from the client side (Headers, Cookies, Query Params, Body).
- **Authentication & Session Management:** Never invent custom session handling. Protect against session fixation, predictibility, and hijacking. Always enforce Secure, HttpOnly, and SameSite attributes on session cookies.
- **Access Controls (Authorization):** A user proving who they are (AuthN) does not mean they have permission to access the resource (AuthZ). Always check authorization at the object level (Insecure Direct Object Reference / BOLA).
- **Injection Flaws:** SQL Injection, Command Injection, XSS, and SSRF. Prevent these primarily via parameterized queries, strict output encoding, and strong egress firewalls.

## 2. Threat Modeling (STRIDE)
- **Concept:** Identify and mitigate risks during the design phase, before any code is written.
- **STRIDE Methodology:**
  1. **Spoofing:** Can an attacker pretend to be someone else? (Mitigation: Strong AuthN, MFA).
  2. **Tampering:** Can an attacker modify data in transit or at rest? (Mitigation: TLS, Hashes/Signatures, Immutable Logs).
  3. **Repudiation:** Can an attacker deny performing an action? (Mitigation: Comprehensive non-repudiable Audit Logs).
  4. **Information Disclosure:** Can an attacker view sensitive data? (Mitigation: Encryption at rest, Data Masking, RBAC).
  5. **Denial of Service:** Can an attacker overwhelm the system? (Mitigation: Rate Limiting, WAF, Auto-scaling).
  6. **Elevation of Privilege:** Can a regular user become an admin? (Mitigation: Strict RBAC verification, explicit deny defaults).
