# Roadmap — QI Artificial Showcase Site

> Transformar qiartificial.com.br no modelo vivo do produto Clone & Ship.
> O site E o produto. O cliente navega e ve exatamente o que vai receber.
> Data: 2026-05-06

---

## Visao Geral

```
ESTADO ATUAL                          ESTADO FUTURO
┌──────────────────────┐              ┌──────────────────────────────────────┐
│ Landing page basica  │              │ Brandbook navegavel da QI Artificial │
│ 6 secoes estaticas   │    ────►     │ Showcase do produto Clone & Ship     │
│ Gradients abstratos  │              │ Demo interativa para prospects       │
│ Sem demo do produto  │              │ Cada secao = entregavel real         │
└──────────────────────┘              └──────────────────────────────────────┘
```

## Documentos de Referencia

| Documento | Conteudo | Path |
|-----------|----------|------|
| Brainstorming & Offer | SCAMPER + Hormozi + Pricing + Entrega | `docs/brainstorming-clone-and-ship.md` |
| Gap Analysis | design-md vs brandbook + tokens mapeados | `docs/brandbook-gap-analysis.md` |
| DESIGN.md | Design system Apple extraido | `DESIGN.md` |
| Page atual | Landing page Next.js | `src/app/page.tsx` |
| Globals CSS | Tokens + animacoes | `src/app/globals.css` |

---

## Arquitetura do Showcase

### Estrutura de Paginas

```
src/app/
├── page.tsx                          ← Hero + CTA (manter, refinar)
├── brandbook/
│   ├── layout.tsx                    ← Layout com sidebar navegavel
│   ├── page.tsx                      ← Intro do brandbook QI
│   ├── manifesto/page.tsx            ← Secao 01: Manifesto
│   ├── proposito/page.tsx            ← Secao 02: Proposito & Valores
│   ├── arquetipo/page.tsx            ← Secao 03: Arquetipo
│   ├── posicionamento/page.tsx       ← Secao 04: Posicionamento
│   ├── brandscript/page.tsx          ← Secao 05: BrandScript
│   ├── taglines/page.tsx             ← Secao 06: Truelines
│   ├── naming/page.tsx               ← Secao 07: Naming
│   ├── vocabulario/page.tsx          ← Secao 08: Vocabulario & Voz
│   ├── tokens/page.tsx               ← Secao 11: Paleta + Tipo + Espacamento (INTERATIVO)
│   ├── componentes/page.tsx          ← Secao 11d: Componentes UI (INTERATIVO)
│   └── processo/page.tsx             ← Como funciona o Clone & Ship
├── demo/
│   └── page.tsx                      ← "Teste com sua marca" — input URL → preview
└── components/
    ├── brandbook/
    │   ├── Sidebar.tsx               ← Navegacao lateral (13 secoes)
    │   ├── SectionHeader.tsx         ← Header padrao de secao
    │   ├── TokenSwatch.tsx           ← Amostra de cor interativa
    │   ├── TypeScale.tsx             ← Escala tipografica ao vivo
    │   ├── SpacingDemo.tsx           ← Visualizacao de espacamento
    │   ├── ComponentPreview.tsx      ← Preview de componente com codigo
    │   └── CodeBlock.tsx             ← Bloco de codigo estilizado
    ├── ui/
    │   ├── Button.tsx                ← Variantes: primary, secondary, ghost
    │   ├── Card.tsx                  ← ServiceCard evoluido
    │   ├── Input.tsx                 ← Input com estados
    │   └── Badge.tsx                 ← Tags/labels
    └── layout/
        ├── Nav.tsx                   ← Nav frosted glass (extraido do page.tsx)
        └── Footer.tsx               ← Footer (extraido do page.tsx)
```

### Componentes do Apple Design System para Reutilizar

Baseados nos tokens ja extraidos em `globals.css`:

| Componente | Tokens Usados | Onde Aparece |
|-----------|---------------|-------------|
| **Sidebar** | nav-glass, --color-surface, --color-border | Layout do brandbook |
| **TokenSwatch** | Todas as --color-* vars | Secao tokens (paleta ao vivo) |
| **TypeScale** | --font-display, --font-text, tracking values | Secao tokens (tipografia) |
| **SpacingDemo** | --spacing-xs ate --spacing-xl | Secao tokens (espacamento) |
| **Button variants** | btn-primary, --color-blue, --radius-full | Secao componentes |
| **Card** | service-card, --radius-xl, shadow hover | Secao componentes |
| **Input** | --color-border, --radius-md, --color-text | Secao componentes |
| **SectionHeader** | --font-display, tracking-[-0.015em], fade-up | Todas as secoes |
| **CodeBlock** | --color-dark-surface, monospace | Secao tokens/processo |

---

## Roadmap de Execucao

### Sprint 1: Fundacao do Showcase

**Objetivo:** Criar a estrutura navegavel do brandbook com sidebar e primeiras secoes.

| # | Tarefa | Tipo | Prioridade |
|---|--------|------|-----------|
| 1.1 | Extrair Nav e Footer do `page.tsx` para componentes separados | Refactor | Alta |
| 1.2 | Criar layout do brandbook com Sidebar navegavel | Build | Alta |
| 1.3 | Criar componente SectionHeader padrao | Build | Alta |
| 1.4 | Escrever conteudo: Manifesto da QI Artificial | Conteudo | Alta |
| 1.5 | Escrever conteudo: Proposito & Valores | Conteudo | Alta |
| 1.6 | Escrever conteudo: Posicionamento (Clone & Ship) | Conteudo | Alta |
| 1.7 | Atualizar hero do `page.tsx` com link para brandbook | Edit | Media |

**Entregavel:** `/brandbook` navegavel com 3+ secoes de conteudo real.

### Sprint 2: Showcase Visual Interativo

**Objetivo:** Secoes de tokens e componentes ao vivo — o "wow factor".

| # | Tarefa | Tipo | Prioridade |
|---|--------|------|-----------|
| 2.1 | Criar TokenSwatch — amostras de cor com hex/var interativos | Build | Alta |
| 2.2 | Criar TypeScale — demonstracao de todas as escalas tipograficas | Build | Alta |
| 2.3 | Criar SpacingDemo — visualizacao de espacamento | Build | Media |
| 2.4 | Criar ComponentPreview com toggle de codigo fonte | Build | Alta |
| 2.5 | Montar secao `/brandbook/tokens` com todos os swatches | Build | Alta |
| 2.6 | Montar secao `/brandbook/componentes` com Button, Card, Input | Build | Alta |
| 2.7 | Criar CodeBlock estilizado para mostrar tokens.json/DESIGN.md | Build | Media |

**Entregavel:** Secoes interativas mostrando tokens e componentes ao vivo.

### Sprint 3: Processo + Demo

**Objetivo:** Explicar como funciona e dar um gostinho ao prospect.

| # | Tarefa | Tipo | Prioridade |
|---|--------|------|-----------|
| 3.1 | Criar pagina `/brandbook/processo` — visual do Clone & Ship Engine | Build | Alta |
| 3.2 | Criar pagina `/demo` — input de URL + preview basico | Build | Alta |
| 3.3 | Integrar design-md para extracao rapida (~5% preview) | Build | Alta |
| 3.4 | Escrever secoes restantes: naming, vocabulario, voz | Conteudo | Media |
| 3.5 | Criar CTA de contato contextual em cada secao | Build | Media |

**Entregavel:** Fluxo completo de venda no site.

### Sprint 4: Pipeline de Entrega

**Objetivo:** Scripts de exportacao para gerar entregaveis reais.

| # | Tarefa | Tipo | Prioridade |
|---|--------|------|-----------|
| 4.1 | Script `export:git` — prepara repo para transfer | Build | Alta |
| 4.2 | Script `export:zip` — gera pacote ZIP estruturado | Build | Alta |
| 4.3 | Script `export:static` — Next.js export estatico | Build | Media |
| 4.4 | Template de brandbook Next.js reutilizavel | Build | Alta |
| 4.5 | Prompts LLM para secoes estrategicas (manifesto, arquetipo, etc) | Conteudo | Alta |
| 4.6 | Checklist do processo end-to-end | Doc | Media |

**Entregavel:** Pipeline funcional de entrega para clientes.

### Sprint 5: Primeiro Case

**Objetivo:** Validar com projeto real.

| # | Tarefa | Tipo | Prioridade |
|---|--------|------|-----------|
| 5.1 | Selecionar empresa para piloto (gratis) | Outreach | Alta |
| 5.2 | Executar processo completo | Execucao | Alta |
| 5.3 | Cronometrar cada etapa | Metricas | Alta |
| 5.4 | Documentar custos reais | Metricas | Alta |
| 5.5 | Registrar antes/depois como case | Conteudo | Alta |
| 5.6 | Com dados reais, validar pricing | Analise | Alta |

**Entregavel:** MVN completo + primeiro case publicado.

---

## Recomendacao: Comecar pelo Sprint 1

O Sprint 1 e o mais impactante porque:

1. **Cria o container** — a estrutura de brandbook navegavel que depois recebe tudo
2. **Conteudo estrategico primeiro** — define manifesto, proposito e posicionamento da QI (o valor real esta aqui, nao nos tokens)
3. **Baixa complexidade tecnica** — sao paginas de conteudo com layout e sidebar
4. **Valida a arquitetura** — testa se a estrutura funciona antes de investir nos interativos

O Sprint 2 e o "wow factor" que impressiona, mas sem o Sprint 1 nao tem onde viver.

---

## Stack Tecnico

| Tecnologia | Uso |
|-----------|-----|
| Next.js 15 (App Router) | Site + brandbook |
| Tailwind CSS 4 | Estilizacao com tokens Apple |
| CSS Variables | Design tokens ao vivo |
| Vercel | Deploy + dominio |
| design-md | Extracao de tokens para demo |
| DESIGN.md | Guardrail IA para consistencia |

---

*Roadmap criado em 2026-05-06 | QI Artificial*
*Conecta: brainstorming-clone-and-ship.md + brandbook-gap-analysis.md*
