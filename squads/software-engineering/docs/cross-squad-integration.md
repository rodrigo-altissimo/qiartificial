# Cross-Squad Integration: Software Engineering 🤝 Design System

Este documento estabelece o modelo operacional de colaboração entre a **Software Engineering Squad (SE)** e a **Design System Squad (DS)**. O objetivo é garantir que decisões arquiteturais de frontend e backend não ocorram em silos, mas através de um fluxo de valor contínuo (Stream-Aligned).

## Visão Geral da Integração
Enquanto a SE Squad (liderada pelo `@eng-chief`) é responsável pela resiliência, performance, arquitetura de dados e APIs do sistema, a DS Squad (liderada pelo `@design-chief`) foca na escalabilidade visual, acessibilidade universal, semântica UI e arquitetura CSS.

A sobreposição perfeita ocorre na camada de **Frontend Architecture** e **Componentização Visual**.

## Matriz de Handoff e Pontos de Contato

### 1. Início de Novo Projeto Institucional (Greenfield)
Quando a SE Squad executa o `wf-new-project-bootstrap.yaml`:
- O `@eng-architect` define a stack core (ex: Next.js + React Sever Components).
- O `@eng-chief` aciona imediatamente um handoff para o `@design-chief`.
- O `@jina-anne` (DS) e o `@micah-godbolt` (DS) estruturam a fundação de Design Tokens (Tailwind v4 configs, CSS Variables) dentro do novo repositório gerado pela SE Squad.

### 2. Criação de Novos Endpoints / APIs Front-Facing
Quando a SE Squad desenha uma API consumida por clientes web (`wf-api-design.yaml`):
- O `@eng-api` desenha as respostas JSON.
- Handoff opcional para o `@stephanie-walter` (DS) validar se a estrutura de dados atende às necessidades de usabilidade do client-side UI sem múltiplos round-trips (BFF - Backend for Frontend pattern).

### 3. Construção de Novas Features UI Complexas
Quando o time de produto pede uma nova tela complexa:
- O `@eng-clean-code` garante a manutenibilidade do estado global (Redux/Zustand) e injeção de dependências.
- Paralelamente, invoca-se o `@brad-frost` (DS) para quebrar a UI em Átomos/Moléculas reutilizáveis e o `@heydon-pickering` (DS) entra cruzando com o `@eng-audit` para garantir validação de Acessibilidade (ARIA, Contrast) estritamente testada.

## Como Iniciar uma Colaboração (Na Prática)
Se você estiver conversando com o orquestrador da SE Squad (`@eng-chief`) e notar que o escopo invadiu responsabilidades estéticas ou estruturais do frontend, emita o comando:

> "@eng-chief, as regras de negócio deste componente React estão sólidas, mas a hierarquia visual e a acessibilidade precisam de auditoria. Faça um handoff dos requisitos de UI para o @design-chief da Squad de Design."

### Artefatos Compartilhados
A SE Squad e a DS Squad devem co-habitar e respeitar:
- **Design Tokens (`tokens.json` ou `tailwind.config.ts`)**: Mantidos pela DS, imutáveis pela SE sem revisão.
- **Data Contracts (`contract.yaml`)**: Mantidos pela SE, definem o estado estrito consumido pelos componentes da DS.

---
*Documento mantido colaborativamente pelos Orchestrators das Squads de Software Engineering e Design System.*
