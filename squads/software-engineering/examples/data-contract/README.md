# Example: Data Contracts & Data Mesh Integrations

Este *Golden Master* demonstra o uso de **Contratos de Dados** exigido pelo `@eng-data` para evitar a quebra de pipelines de Analytics.

## O Problema (Data Swamp)
A engenharia de software muda uma coluna no PostgreSQL de `user_status` (string) para `status_code` (integer). A engenharia de dados, que lê a replicação desse banco silenciosamente, acorda no dia seguinte com 500 dashboards de Diretoria quebrados (Falha Silenciosa de Pipeline).

## Padrão Oficial da Squad: O Data Contract

Um Contrato de Dados é um arquivo declarativo (`yaml` ou `json`) guardado **no repositório da aplicação (software engineering)**. Se o dev quebrar o schema, o CI quebra o pull request do dev, protegendo a equipe de dados.

### Exemplo de Contrato (`contract.yaml`)
```yaml
dataset: user_events
owner: team-auth
version: "1.2.0"

schema:
  type: record
  fields:
    - name: user_id
      type: string
      description: "UUID v4 of the user"
      constraints:
        required: true
    - name: status
      type: string
      description: "ACTIVE, INACTIVE or SUSPENDED"
      constraints:
        enum: [ACTIVE, INACTIVE, SUSPENDED]
    - name: created_at
      type: timestamp
```

## Como Implementar:
1. Ao invés de o time de dados fazer scraping de tabelas cruas, o time de Backend engata um *Outbox Pattern* e emite eventos JSON/Protobuf aderentes a esse contrato para um Kafka ou SNS/SQS.
2. O time de Dados apenas consome os eventos que **passaram** na validação rigorosa do schema.
3. Isso transforma dados de um "Subproduto Técnico" para um "Data Product de 1ª classe".
