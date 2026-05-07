# Design Language — QI Artificial

> Definição da linguagem visual compartilhada da QI Artificial.
> Autor: @design:alla-kholmatova (Design Language Architect)
> Data: 2026-05-07
> Status: Aprovado pelo cliente
> Handoff: → @design:jina-anne (Token Architecture)

---

## 1. Propósito do Produto

A QI Artificial existe para **transformar como marcas são construídas**. O produto Clone & Ship extrai o DNA visual de qualquer site em 4 horas e entrega um brandbook completo como site navegável em código vivo (Next.js + Tailwind + Vercel).

O método inverte o processo criativo tradicional: em vez de criar do zero, clona o melhor e adapta. Isso define a tensão central que a linguagem visual resolve:

> **Precisão tecnológica** (extração automatizada, dados CSS, tokens)
> **+**
> **Expressão criativa** (estúdio de design, personalidade de marca, brandbook)

A linguagem deve mostrar **ambos os lados simultaneamente** — técnico mas expressivo, preciso mas vivo.

---

## 2. Arquétipo Visual

### Referência: AIOX Movimento (o que NÃO somos)

O AIOX Movimento usa Outlaw 50% + Magician 35% + Explorer 15% — rebelde, provocador, dark cockpit. Esse é o posicionamento do Alan Nicolas. Não é a QI Artificial.

### Arquétipo QI Artificial

| Arquétipo | Peso | Por quê |
|-----------|------|---------|
| **Creator** | 50% | Constrói identidades visuais. O produto É criação — transforma dados em marca. A razão de existir é fazer coisas bonitas e funcionais |
| **Magician** | 35% | Transforma realidade — 4h para um design system é mágica técnica. O "Clone & Ship Engine" é alquimia: CSS bruto vira brandbook completo |
| **Explorer** | 15% | Pioneiro — ninguém mais extrai 1500+ tokens via análise estática. Método novo, territórios novos |

### Persona Resultante: O Alquimista Criativo

Não é o rebelde que quebra regras (Outlaw). É o criador que **transforma matéria bruta em ouro** — pega CSS cru e entrega marca viva. Confiante na técnica, expressivo no resultado.

---

## 3. Princípios de Design

Cada princípio segue o formato "**Valor A sobre Valor B**" — para forçar priorização real.

### Princípio 1: Expressão sobre Neutralidade

O design deve ter personalidade visível. Cores, formas, tipografia devem comunicar "este é um estúdio criativo que domina tecnologia." Nunca parecer genérico. Nunca parecer template.

- **Significa:** Paleta com cores que não existem num site corporativo. Tipografia com caráter. Elementos visuais que surpreendem.
- **Não significa:** Caos visual, excesso decorativo, ou design que prioriza estilo sobre usabilidade.
- **Teste:** Se uma agência de contabilidade poderia usar esse design, ele está errado.

### Princípio 2: Demonstração sobre Descrição

O site é a prova. Cada seção do brandbook É o entregável real. Não diga ao cliente o que ele vai receber — mostre. Tokens ao vivo, componentes interativos, código visível.

- **Significa:** Swatches de cor que o usuário clica e copia o código. Tipografia renderizada ao vivo. Componentes com toggle de source code.
- **Não significa:** Páginas de texto explicando o produto. Marketing tradicional com bullet points.
- **Teste:** Se o visitante precisa imaginar o que vai receber, a página falhou.

### Princípio 3: Precisão sobre Aproximação

O Clone & Ship Engine extrai dados reais — 1500+ CSS vars, 46+ cores, 16 escalas tipográficas. Essa precisão técnica deve transparecer no design. Grids rigorosos, alinhamento perfeito, informação bem organizada.

- **Significa:** Dados concretos visíveis (números, tokens, código). Layout com grid disciplinado. Tabelas e specs limpos.
- **Não significa:** Design robótico ou frio. A precisão serve à expressão, não a substitui.
- **Teste:** Se um dado está arredondado ou vago, não está preciso o suficiente.

### Princípio 4: Transformação sobre Estático

O produto é sobre movimento — de referência para brandbook, de CSS para tokens, de dados para marca. O design deve comunicar transformação: antes/depois, processo, evolução.

- **Significa:** Transições sutis, estados hover que revelam, animações com propósito. Gradientes que evoluem. Fluxos visuais de A→B.
- **Não significa:** Animação gratuita, parallax pesado, ou distrações visuais.
- **Teste:** Se uma animação não comunica mudança de estado, ela é decoração — remova.

---

## 4. Padrões Perceptuais

### 4.1 Paleta de Cores — Direção

| Papel | Direção | Racional |
|-------|---------|----------|
| **Primária** | Violeta/Roxo profundo | Creator archetype — criatividade, imaginação, transformação. Território livre no espaço de design studios BR |
| **Accent quente** | Coral/Laranja vibrante | Energia, calor humano, contrasta com o violeta. Comunica que tecnologia tem alma |
| **Accent frio** | Cyan/Teal | Precisão técnica, dados, código. O lado "engine" do produto. Complementar ao coral |
| **Neutras** | Off-white quente + cinza com tom de violeta | Humanizam sem perder profissionalismo. Não é o cinza puro da Apple |
| **Dark mode** | Violeta muito escuro (não preto puro) | Diferencia do #000000 genérico. O "dark" da QI tem profundidade, não ausência |

**Por que violeta como primária:**
- Creator archetype → violeta é historicamente a cor da criação, imaginação, alquimia
- Diferenciação total — Apple é azul, AIOX é verde neon, agências BR são azul escuro
- Funciona em light e dark mode com boa versatilidade
- Combina "técnico" (tons frios) com "criativo" (tons quentes) na mesma cor

### 4.2 Tipografia — Direção

| Uso | Direção | Fonte recomendada |
|-----|---------|-------------------|
| **Display/headings** | Geometric sans-serif com personalidade — formas nítidas, levemente técnica mas com caráter | **Space Grotesk** |
| **Body text** | Sans-serif legível, com boa altura-x e bom desempenho em telas | **Inter** |
| **Code/terminal** | Monospace com ligaduras | **JetBrains Mono** |

Todas são gratuitas (Google Fonts / open source), performáticas na web, e amplamente suportadas.

**Por que não SF Pro:** SF Pro é a fonte literal da Apple. Usar SF Pro é vestir a roupa de outra marca. Para um estúdio de design vendendo identidade própria, isso é uma contradição fatal.

### 4.3 Espaçamento e Ritmo

**Escala:** `4, 8, 12, 16, 24, 32, 48, 64, 96` (4pt base, mais generosa que a Apple)

**Direção:** Mais respiração entre seções. Whitespace generoso nos headers. Sensação de "espaço para a criatividade existir."

**Diferença da Apple:** A escala Apple (4, 8, 16, 22, 44) tem gaps inconsistentes. A nova escala é matematicamente coerente e mais aberta.

### 4.4 Formas e Superfícies

| Elemento | Apple (atual) | QI Artificial (direção) |
|----------|---------------|------------------------|
| Border radius | 5-16px conservador | Mais variado — radius generoso (16-24px) para cards, pill shapes para badges/tags, cantos vivos em containers de código |
| Superfícies | Flat, sem profundidade | Sutil profundidade — sombras suaves com tom de violeta, glassmorphism sutil na nav com tint de cor |
| Gradientes | Blobs abstratos sem cor | Gradientes com propósito — violeta→coral para transformação, cyan→violeta para tecnologia |
| Decorativos | Blobs genéricos | Formas geométricas que remetem a extração/grid/tokens — visualizações de dados abstratas |

### 4.5 Motion e Animação

| Princípio | Expressão |
|-----------|-----------|
| **Transformação** | Transições que mostram mudança de estado — hover revela código, scroll revela profundidade |
| **Precisão** | Timing consistente, easings suaves (nunca bounce/elastic) |
| **Revelação progressiva** | Conteúdo aparece ao scroll com fade-up sutil |
| **Feedback rico** | Hover states que comunicam interatividade — cor muda, sombra aparece, escala sutil |

**Easings:** `cubic-bezier(0.25, 0.1, 0.25, 1)` para entradas, `cubic-bezier(0.4, 0, 0.2, 1)` para saídas.
**Duração padrão:** 200ms (micro), 400ms (médio), 600ms (macro).

---

## 5. Padrões Funcionais

Classificados por propósito, não por aparência:

| Propósito | Padrões Funcionais | Descrição |
|-----------|-------------------|-----------|
| **Navegação** | Sidebar, Nav, Breadcrumb | Orientar o usuário no brandbook (13+ seções) |
| **Demonstração** | TokenSwatch, TypeScale, SpacingDemo, ComponentPreview | Mostrar o produto ao vivo — cada um é um entregável real |
| **Ação** | Button (primary/secondary/ghost), CTA contextual | Converter: "Iniciar projeto", "Ver demo", "Copiar token" |
| **Informação** | SectionHeader, Card, CodeBlock, Badge | Estruturar conteúdo estratégico e técnico |
| **Transformação** | Demo input, Before/After, Process visualization | Comunicar a mudança que o produto causa |
| **Prova** | Case study card, Metric display, Quality score | Validar a promessa com dados concretos |

---

## 6. Vocabulário Visual Compartilhado

Termos que o design e o código devem compartilhar:

| Termo | Significado | Onde aparece |
|-------|-------------|-------------|
| **billboard** | Seção hero que comanda atenção | Homepage, topo de cada seção |
| **showcase** | Demonstração interativa de token/componente | Seções tokens e componentes |
| **engine-viz** | Visualização do processo Clone & Ship | Seção processo |
| **proof-card** | Card que apresenta evidência (case, métrica, score) | Seção prova social |
| **token-swatch** | Amostra visual de um token (cor, tipo, spacing) | Seção identidade visual |
| **code-reveal** | Bloco que mostra código fonte com toggle | ComponentPreview, CodeBlock |
| **transform-flow** | Visualização antes→depois ou input→output | Demo, processo |

---

## 7. Resumo da Linguagem

```
QUEM: Creator (50%) + Magician (35%) + Explorer (15%)
      → O Alquimista Criativo

PRINCÍPIOS:
  1. Expressão sobre Neutralidade
  2. Demonstração sobre Descrição
  3. Precisão sobre Aproximação
  4. Transformação sobre Estático

PERCEPTUAL:
  Cores    → Violeta profundo + Coral + Cyan + Neutras quentes
  Tipo     → Space Grotesk (display) + Inter (body) + JetBrains Mono (code)
  Espaço   → Escala 4pt generosa (4-96), whitespace como elemento de design
  Formas   → Radius generoso, gradientes com propósito, profundidade sutil
  Motion   → Transformação, revelação, precisão (nunca bounce)

FUNCIONAL:
  6 propósitos → Navegação, Demonstração, Ação, Informação, Transformação, Prova

VOZ VISUAL:
  "Técnico mas expressivo. Preciso mas vivo. Código que tem alma."
```

---

## 8. O que esta linguagem substitui

| Aspecto | Apple (remover) | QI Artificial (adotar) |
|---------|----------------|----------------------|
| Cor primária | #0071e3 (azul Apple) | Violeta profundo |
| Cor de superfície | #f5f5f7 (cinza frio) | Off-white quente |
| Cor de texto | #1d1d1f (preto Apple) | Dark violeta profundo |
| Tipografia display | SF Pro Display | Space Grotesk |
| Tipografia body | SF Pro Text | Inter |
| Personalidade | Neutra, invisível | Expressiva, viva |
| Tom | Corporativo frio | Criativo confiante |

---

## 9. Handoff

Este documento alimenta:

1. **@design:jina-anne** → Token Architecture (valores hex exatos, escalas, naming convention)
2. **@design:brad-frost** → Atomic Decomposition (hierarquia de componentes)
3. **@design:andy-bell** → CSS Architecture (implementação em Tailwind/CSS vars)
4. **@dev** → Implementação final em Next.js

---

## Documentos Relacionados

| Documento | Path |
|-----------|------|
| Brainstorming & Offer Architecture | `docs/brainstorming-clone-and-ship.md` |
| Brandbook Gap Analysis | `docs/brandbook-gap-analysis.md` |
| Roadmap Showcase Site | `docs/roadmap-showcase-site.md` |

---

*Design Language definida em 2026-05-07 | QI Artificial*
*Alla Kholmatova — Design Language Architect*
