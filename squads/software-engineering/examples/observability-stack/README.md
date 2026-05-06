# Example: Observability Stack (O11y)

Este *Golden Master* demonstra o padrão de rastreabilidade, logs e métricas (Os Três Pilares da Observabilidade) exigidos pelo `@eng-perf` e `@eng-audit`.

## Padrão Oficial da Squad

### 1. Logs Estruturados (Structured Logging)
Sempre emito JSON em produção para facilitar ingestão por ferramentas como ELK Sec ou Datadog.

```json
// BOM
{ "level": "info", "message": "User checkout completed", "traceId": "abc-123", "userId": "user-42", "durationMs": 45 }

// RUIM
"INFO: User user-42 just completed their checkout in 45ms. Trace: abc-123"
```

### 2. Distributed Tracing (Context Propagation)
Todo serviço HTTP ou gRPC deve repassar o Header de Trace (ex: `traceparent` do W3C ou `X-B3-TraceId`).

```python
# Padrão de injeção em chamadas downstream (Python/Requests)
import requests
from opentelemetry import trace
from opentelemetry.propagate import inject

def call_downstream_service(url):
    headers = {}
    inject(headers) # Injeta o Span atual nos Headers automaticamente
    return requests.get(url, headers=headers)
```

### 3. Métricas USE (Utilization, Saturation, Errors)
Toda aplicação reportar seu próprio limite:
- `http_requests_total{status="500"}`
- `http_request_duration_seconds_bucket`
- `db_connection_pool_active`

### Quando usar:
- Ao criar o template base/bootstrap de uma nova aplicação (`wf-new-project-bootstrap.yaml`).
- Na resolução de incidentes (`wf-incident-response.yaml`).
