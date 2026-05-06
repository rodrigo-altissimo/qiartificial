# Manual de Operação dos Agentes (Software Engineering Squad)

Este documento descreve como utilizar os 15 agentes da Squad de Engenharia de Software no seu dia a dia. Eles foram desenhados para atuar desde o desenho da arquitetura até a resposta a incidentes de produção.

---

## 🧭 O Orquestrador

### `@eng-chief` (Principal Engineer / Lead)
**A Dor que Resolve:** Projetos sem direção, decisões técnicas divergentes entre a equipe e fluxos de trabalho caóticos.
**Principais Casos de Uso:**
- Requisitar um plano de ataque para uma nova feature grande.
- Delegar a aprovação de *Architecture Decision Records* (ADRs).
- Orquestrar a passagem de bastão (handoff) entre os agentes mais especializados.
**Como chamar:**
> *"@eng-chief, preciso construir um sistema de fila para notificações. Monte o plano arquitetural e liste quais dos outros agentes devo consultar em cada etapa."*

---

## 🏛️ Os Pilares Essenciais (Core Analysts)

### 1. `@eng-architect` (Arquiteto de Soluções)
**A Dor que Resolve:** Monólitos difíceis de manter, microsserviços mal acoplados, quedas de banco de dados por má modelagem.
**Como chamar:**
> *"@eng-architect, analisa esse schema de banco. Estou com problemas de N+1 queries na página inicial. Como redesenhar considerando que temos 10 mil leituras por segundo?"*

### 2. `@eng-security` (Engenheiro de AppSec / CISO)
**A Dor que Resolve:** Vazamento de dados, credenciais expostas no código, tokens JWT implementados de forma insegura, falta de criptografia.
**Como chamar:**
> *"@eng-security, revisa esse controller de autenticação (/login). Mapeie as ameaças usando STRIDE e me dê a correção exata."*

### 3. `@eng-clean-code` (Especialista em Manutenibilidade)
**A Dor que Resolve:** "God Classes" (classes gigantes), funções com dezenas de argumentos, código ilegível que só o autor original entende.
**Como chamar:**
> *"@eng-clean-code, esse arquivo 'PaymentProcessor.ts' tem 800 linhas. Quebre isso usando os padrões do SOLID e remova a complexidade ciclomática profunda."*

### 4. `@eng-perf` (Especialista em Performance)
**A Dor que Resolve:** APIs lentas, vazamento de memória (Memory Leaks), consumo excessivo de CPU.
**Como chamar:**
> *"@eng-perf, meu worker em Node.js está morrendo com 'OOMKilled' no Kubernetes a cada 2 horas. Qual a sua hipótese e o que devo monitorar?"*

---

## ⚙️ Os Operadores Especializados

### 5. `@eng-devops` / SRE
**A Dor que Resolve:** Pipelines demorados, falta de observabilidade, incidentes em produção demorando a ser resolvidos.
**Como chamar:**
> *"@eng-devops, crie um workflow do GitHub Actions que faça build do Docker, rode testes de segurança e faça o deploy no ECS com estratégia Blue/Green."*

### 6. `@eng-distributed`
**A Dor que Resolve:** Race conditions em sistemas com concorrência alta, dados inconsistentes entre serviços, falhas em sistemas baseados em eventos.
**Como chamar:**
> *"@eng-distributed, tenho dois microsserviços que precisam atualizar o mesmo saldo de carteira simultaneamente. Implemente isso usando Optimistic Locking ou bloqueios no Redis."*

### 7. `@eng-api`
**A Dor que Resolve:** APIs que quebram retrocompatibilidade, ausência de paginação correta, falta de idempotência (ex: cobrar o cliente duas vezes).
**Como chamar:**
> *"@eng-api, projete o contrato (OpenAPI/Swagger) para o checkout de um e-commerce. Quero idempotência rigorosa baseada em 'Idempotency-Key'."*

### 8. `@eng-data` (Engenheiro de Dados)
**A Dor que Resolve:** Bancos relacionais estrangulados por queries analíticas pesadas, replicação de dados problemática.
**Como chamar:**
> *"@eng-data, como implemento Change Data Capture (CDC) com Debezium no nosso Postgres para alimentar o Elasticsearch sem derrubar o banco?"*

### 9. `@eng-ddd` (Especialista em Domain-Driven Design)
**A Dor que Resolve:** Regras de negócio vazando na camada de banco de dados ou controllers; linguagem do negócio desconectada do código.
**Como chamar:**
> *"@eng-ddd, estamos construindo um ERP. Ajude a desenhar os 'Bounded Contexts' entre Faturamento e Estoque, evitando que eles usem a mesma tabela."*

---

## 🛠️ A Camada de Execução Diária

### 10. `@eng-refactor`
**A Dor que Resolve:** Códigos legados sem testes nos quais você tem medo de mexer.
**Como chamar:**
> *"@eng-refactor, extraia esse trecho de lógica para um Service Pattern, mas sem quebrar os testes existentes."*

### 11. `@eng-tdd`
**A Dor que Resolve:** Falta de cobertura de testes, cobertura alta mas inútil (testes que não testam nada de valor).
**Como chamar:**
> *"@eng-tdd, crie testes de unidade com Mocks para esse arquivo, focando nos 'Edge Cases' (ex: o que ocorre se a API terceira der timeout)."*

### 12. `@eng-agile`
**A Dor que Resolve:** Dúvidas sobre quebra de tickets, estimativas problemáticas, cerimônias ineficientes.
**Como chamar:**
> *"@eng-agile, pegue a seguinte Epic 'Sistema de Assinaturas' e quebre ela em User Stories granulares, focadas em entrega de valor vertical em dias, não meses."*

### 13. `@eng-audit` (Garantia de Qualidade/Compliance)
**A Dor que Resolve:** Pull Requests pendentes há dias, merge de códigos que violam padrões da empresa.
**Como chamar:**
> *"@eng-audit /mode audit [cole o PR ou o arquivo] — Realize uma auditoria estrita apontando severity Alta, Média ou Baixa. Seja rígido."*

---

## 🕹️ Modos de Operação (Comandos Especiais)

A maioria dos agentes aceitam certos modificadores no fim do seu prompt para mudar o "tom" da resposta:

1. **`/mode audit`**: Ele não vai gerar o código que resolve o problema, ele vai julgar o seu e dar um Pass/Fail baseado em dezenas de critérios estritos do nicho dele.
2. **`/mode design`**: O agente focará exclusivamente na "visão do helicóptero" (Caixas, Setas e Flow) e jamais produzirá código de implementação nesta etapa.
3. **`/mode debug`**: Modo Forense. Foco extremo em resolver um incidente o mais rápido possível (Mean Time To Recovery - MTTR).
4. **`/mode teach`**: Método Socrático. Ele não dá a resposta direta, mas aponta as teorias (ex: livros do Martin Fowler) e pergunta o que você acha melhor, caso você queira aprender.
