# Enrichment: Advanced API Design & Microservices
**Target Agent:** `@eng-api`
**Key Concepts to Integrate into Agent's DNA:**

## 1. API Design Patterns (REST & HTTP)
- **Resource Orientation:** Expose nouns (resources) and use HTTP verbs for actions. Avoid putting verbs in the URL (e.g., use `POST /users/{id}/activate` instead of `POST /activateUser`).
- **Pagination & Filtering:** Provide cursor-based or limit/offset pagination to protect backend resources. Allow users to filter resources explicitly (e.g., `?status=active&sort=-created_at`).
- **Idempotency:** Implement idempotency keys for all state-changing operations (POST/PUT/PATCH) so clients can safely retry failed network requests.
- **Evolution over Versioning:** Prefer additive, non-breaking changes instead of bumping major API versions (v1 -> v2) whenever possible.

## 2. gRPC: Up and Running
- **Protocol Buffers (Protobuf):** Strongly typed IDL that serializes to small, efficient binary formats.
- **Streaming:** Utilize bi-directional streaming for continuous data flows where REST request/response overhead is too high.
- **Contract-First Development:** The `.proto` file is the absolute source of truth. Both client and server code are generated from it, guaranteeing compatibility.
- **Use Cases:** Ideal for inner-service communication behind a gateway, polyglot environments, and high-performance microservices.
