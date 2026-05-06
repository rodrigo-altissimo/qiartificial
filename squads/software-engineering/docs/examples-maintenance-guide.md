# Guia de Manutenção Contínua: Exemplos / Golden Masters

A pasta `examples/` contém o código "gabarito" (Golden Masters) da **Squad de Software Engineering**. É a fundação do raciocínio Few-Shot dos agentes. Se os exemplos estiverem desatualizados, a inteligência da Squad irá regredir.

Este guia orienta a Squad (principalmente o `@eng-chief`) sobre **como e quando** atualizar estes exemplos.

## O Papel dos Golden Masters
Os agentes observam a arquitetura, as convenções de linting, a estrutura de pastas e a abordagem de testes da pasta `examples/` antes de sugerirem ou revisarem código. Estes exemplos formam a "Paved Road" (Estrada Pavimentada) da organização.

## Gatilhos de Atualização

### 1. Após um Postmortem Blameless (Incidentes)
Sempre que o workflow `wf-feedback-loop.yaml` for concluído após um incidente Sev-1/Sev-2, a Squad **deve**:
1. Identificar se o código vulnerável/lento que causou o incidente seguiu a arquitetura do exemplo atual.
2. Se sim, o modelo base deve ser corrigido. Exemplo: Se o `clean-api` não protegia contra SQL Injection na sua interface InMemory genérica, o exemplo deve ser re-escrito usando um ORM moderno ou queries parametrizadas.

### 2. Ao Adotar uma Nova Tecnologia (Tech Radar)
A arquitetura muda. O que era um REST limpo hoje pode precisar virar gRPC amanhã, ou o Node.js pode ser trocado por Go/Rust num contexto de alta performance.
- Quando uma nova tecnologia for formalmente adotada pelas lideranças de engenharia:
  - Crie uma nova sub-pasta (ex: `examples/clean-api-grpc-go/`).
  - Marque a antiga como obsoleta no respectivo `README.md`.
  - Instrua o `@eng-architect` a preferir o novo modelo para novos microsserviços.

### 3. Melhoria de Conventions & Linting
Se o time humano decidir aplicar regras mais rígidas (ex: max 2 funções por classe, max 10 de complexidade ciclomática), os arquivos em `examples/` devem ser os **primeiros** a serem refatorados para passar no novo crivo.

## Lista de Verificação Anual (Squad Audit)
Uma vez por ano, o `@eng-audit` deve revisar toda a pasta `examples/` sob as seguintes métricas (baseadas nos *Mental Models* do `config.yaml`):
- O código continua limpo e legível?
- Os testes rodam em milissegundos e usam Fakes em vez de Mocks complexos?
- A injeção de dependência e os limites de contexto (Bounded Contexts) estão claros?

**Lembre-se:** A Squad é tão inteligente quanto os dados de treinamento de contexto que ela possui. Mantenha os Golden Masters impecáveis.
