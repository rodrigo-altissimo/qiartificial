# Brandbook Gap Analysis — design-md vs. Entrega Completa

> Analise do que o design-md entrega hoje vs. o que um brandbook profissional exige.
> Data: 2026-05-06

---

## O que o design-md entrega hoje

O pipeline atual extrai via analise estatica de CSS (sem headless browser):

### Tokens e Dados Extraidos (30+ categorias)

| Categoria | Status | Confianca | Detalhes |
|-----------|--------|-----------|----------|
| Cores (palette) | Completo | Alta (CSS vars) | 46+ variantes, 23 nomeadas, 1421 primitivas |
| Tipografia | Completo | Alta | 16 escalas, family/weight/lineHeight/letterSpacing |
| Espacamento | Completo | Alta | 5 tokens (4-44px) |
| Border-radius | Completo | Alta | 6 niveis (none → full) |
| Sombras | Completo | Media | Definicoes + opacity patterns |
| Motion/Animacao | Parcial | Media | Durations, easings, keyframes detectados |
| Breakpoints | Completo | Alta | Responsivos detectados |
| z-index | Completo | Alta | 5 camadas (base → tooltip) |
| Dark mode | Deteccao | Media | Sinal detectado, sem specs completas |
| Componentes | Parcial | Media | 91KB de propriedades (button/input/card/nav) |
| CSS Variables | Completo | Alta | 1502 vars (1421 primitivas + 81 aliases) |
| Font-faces | Completo | Alta | 18 declaracoes com fallback chains |
| Gradientes | Completo | Media | Primary/secondary definitions |
| Opacity scale | Completo | Media | Disabled/hover/muted |
| Container/max-width | Completo | Alta | Constraints detectados |
| Stack detection | Completo | Alta | Next.js, Tailwind, Radix, GSAP |

### Arquivos de Output (14 artefatos)

| Arquivo | Funcao no Brandbook |
|---------|---------------------|
| DESIGN.md | Documento central — design system narrativo |
| tokens.json | Tokens estruturados para desenvolvimento |
| tokens-extended.json | Specs com states/variants |
| preview.html | Visualizacao interativa (showcase) |
| render-contract.json | Contrato de render (theme/vars/surfaces) |
| quality-score.json | Auditoria de qualidade A-F |
| style-fingerprint.json | Classificacao de arquetipo visual |
| agent-prompt.txt | Prompt reutilizavel para LLM |
| extraction-log.yaml | Proveniencia de cada token |

---

## Referencia Real: Brandbook AIOX Movimento (Alan Nicolas)

> Fonte: https://brand.aioxsquad.ai/brandbook/movimento
> Stack: Next.js + Tailwind CSS | Dark Cockpit Edition | v2.0

### Estrutura do Brandbook AIOX (13 secoes)

| # | Secao | Categoria | Conteudo |
|---|-------|-----------|----------|
| 01 | Manifesto | Fundamentos | Crenca central, frase-ancora ("A IA e a seta. O X e seu") |
| 02 | Proposito & Valores | Fundamentos | Missao + 6 valores corporativos |
| 03 | Arquetipo | Fundamentos | Mix: Outlaw 50% + Magician 35% + Explorer 15% (Morpheus) |
| 04 | Posicionamento | Estrategia | Categoria criada ("AI Orchestration Experience") + publico |
| 04b | Contraste | Estrategia | Diferenciacao competitiva (unico Outlaw no mercado) |
| 05 | BrandScript | Estrategia | Hero's Journey framework para storytelling |
| 06 | Truelines & Taglines | Estrategia | Frases-chave primarias e secundarias |
| 07 | Naming | Identidade Verbal | Semantica de cada letra: A→I→O→X |
| 08 | Vocabulario | Identidade Verbal | Power words + palavras banidas |
| 08b | Traits da Voz | Identidade Verbal | 4 dimensoes: direto, provocativo, tecnico, humano |
| 09 | Jornada do Heroi | Jornada & Prova | 6 estagios de transformacao do cliente |
| 10 | Depoimentos | Jornada & Prova | Resultados reais (R$500K valor, R$100K economia) |
| 11 | Marcas & Cores | Identidade Visual | Simbolos (triangulo, joystick) + paleta completa |
| 12 | Contrato da Marca | Compromisso | Promessas mutuas marca ↔ criadores |
| 13 | Os Fundadores | Compromisso | Alan Nicolas + Pedro Valerio (personas) |

### Tokens Visuais do AIOX

```
Dark:    VOID #000000 | TERMINAL #050505 | SURFACE #0F0F11 | OLIVE #1C1E19
Light:   CREAM #F4F4E8 | WARM WHITE #FFFFED | WHITE #FFFFFF
Accent:  KINETIC LIMON #D1FF00 | SIGNAL BLUE #0099FF | FLARE #ED4609
Fonts:   Geist (display + body) | RobotoMono (code/terminal)
```

### Insight: O que o Alan entrega NAO e um design system tecnico

O brandbook do AIOX e **estrategico primeiro, visual depois**. A maior parte do documento (secoes 01-10) e sobre:
- Posicionamento de marca
- Narrativa e storytelling
- Tom de voz e vocabulario
- Jornada do cliente
- Prova social

A identidade visual (secao 11) e apenas 1 das 13 secoes. O design-md cobre muito bem essa 1 secao mas nao toca nas outras 12.

---

## O que um Brandbook Profissional Exige (Modelo AIOX como referencia)

### Mapeamento: Secoes AIOX vs. Capacidade design-md

| Secao AIOX | design-md Cobre? | Gap | Solucao |
|------------|-------------------|-----|---------|
| 01 Manifesto | NAO | TOTAL | LLM + sessao estrategia |
| 02 Proposito & Valores | NAO | TOTAL | LLM + sessao estrategia |
| 03 Arquetipo | NAO | TOTAL | LLM (frameworks de arquetipo) |
| 04 Posicionamento | NAO | TOTAL | LLM + analise de mercado |
| 04b Contraste | NAO | TOTAL | design-md extrai CONCORRENTES + LLM compara |
| 05 BrandScript | NAO | TOTAL | LLM (StoryBrand/Hero's Journey) |
| 06 Truelines & Taglines | NAO | TOTAL | LLM (copy generation) |
| 07 Naming | NAO | TOTAL | LLM + sessao humana |
| 08 Vocabulario | PARCIAL | page-copy.json tem textos | LLM analisa e gera guidelines |
| 08b Traits da Voz | PARCIAL | page-copy.json | LLM classifica tom |
| 09 Jornada do Heroi | NAO | TOTAL | LLM + sessao estrategia |
| 10 Depoimentos/Prova | NAO | TOTAL | Requer clientes reais |
| 11 Marcas & Cores | SIM | ~90% coberto | design-md extrai tokens completos |
| 12 Contrato da Marca | NAO | TOTAL | LLM + sessao estrategia |
| 13 Fundadores | NAO | TOTAL | Input humano |

### Conclusao Revisada

**design-md cobre apenas ~8% de um brandbook no modelo AIOX** (1 de 13 secoes = identidade visual).

Os outros 92% sao:
- **~60% resolvivel com LLM** (manifesto, arquetipo, posicionamento, brandscript, naming, vocabulario, voz)
- **~25% requer input humano** (proposito real, valores reais, jornada real, depoimentos)
- **~7% o design-md pode auxiliar** (contraste via extracao de concorrentes, vocabulario via page-copy)

---

## Capitulos Tradicionais (complementar ao modelo AIOX)

| Capitulo | design-md Cobre? | Gap |
|----------|-------------------|-----|
| 1. Visao da Marca (missao, valores, posicionamento) | Nao | TOTAL — requer input humano |
| 2. Logo e Variantes (principal, mono, icone, area de respiro) | Parcial | Detecta logo.json mas sem guidelines de uso |
| 3. Paleta de Cores (primaria, secundaria, neutras, semanticas) | SIM | Completo — 46+ cores extraidas |
| 4. Tipografia (hierarchy, pairing, uso) | SIM | Completo — 16 escalas com metricas |
| 5. Espacamento e Grid | SIM | Completo — tokens + container |
| 6. Iconografia (sistema, sizing, usage) | Nao | TOTAL — nao extrai icones |
| 7. Fotografia/Ilustracao (estilo, tratamento, direcao de arte) | Nao | TOTAL — requer curadoria humana |
| 8. Tom de Voz e Copywriting | Nao | PARCIAL — detecta page-copy.json mas sem guidelines |
| 9. Componentes UI (buttons, forms, cards, nav) | Parcial | Propriedades extraidas, faltam interaction states completos |
| 10. Animacao e Motion | Parcial | Easings/durations detectados, falta coreografia |
| 11. Acessibilidade | Parcial | Score 39/100, sem remediacao |
| 12. Responsividade | SIM | Breakpoints completos |
| 13. Do's and Don'ts | Parcial | Presente no DESIGN.md narrativo |
| 14. Aplicacoes (mockups, exemplos reais) | Nao | TOTAL — requer producao |

---

## Classificacao dos Gaps

### Gap ZERO (design-md resolve 100%)

- Paleta de cores completa com naming e CSS vars
- Tipografia com todas as escalas e metricas
- Espacamento e border-radius tokenizado
- Breakpoints responsivos
- z-index e layering
- CSS variables documentadas

### Gap PARCIAL (design-md entrega base, precisa complemento)

| Item | O que tem | O que falta |
|------|-----------|-------------|
| Componentes | Propriedades extraidas (91KB) | Interaction states completos (loading, error, disabled) |
| Motion | Easings e durations | Coreografia e guidelines de uso |
| Acessibilidade | Score calculado | Remediacoes e WCAG compliance path |
| Tom de voz | page-copy.json com textos | Guidelines de copywriting |
| Logo | logo.json (asset) | Area de respiro, variantes, uso incorreto |
| Do's/Don'ts | Presente no DESIGN.md | Nao vinculado a enforcement automatico |

### Gap TOTAL (design-md nao cobre)

| Item | Solucao Necessaria |
|------|-------------------|
| Visao da marca | Input humano (sessao de estrategia) |
| Iconografia | Extracao de SVGs + curadoria + sizing guide |
| Fotografia/Ilustracao | Direcao de arte humana ou IA generativa |
| Aplicacoes/Mockups | Producao de exemplos reais |
| Multi-tema (dark mode specs) | Extensao do pipeline para extrair variantes |

---

## Estrategia de Solucao — 3 Caminhos

### Caminho 1: Melhorar o design-md (pipeline)

Adicionar modulos ao pipeline existente para cobrir gaps parciais:

| Modulo Novo | Esforco | Impacto |
|-------------|---------|---------|
| `extract-icons.cjs` — SVG extraction + sizing | Medio | Alto |
| `extract-dark-mode.cjs` — Variante dark completa | Medio | Medio |
| `extract-interaction-states.cjs` — Hover/focus/loading/error | Alto (precisa Playwright) | Alto |
| `generate-voice-guide.cjs` — LLM analisa copy e gera guidelines | Baixo | Medio |
| `generate-accessibility-fixes.cjs` — WCAG remediation | Baixo | Medio |

**Limitacao:** Sem headless browser, nao consegue capturar estados interativos reais.

### Caminho 2: Melhorar a Squad (processo humano + IA)

Criar agentes especializados que complementam o design-md:

| Agente | Funcao | Tipo |
|--------|--------|------|
| Brand Strategist | Sessao de estrategia → visao, valores, posicionamento | Humano-assistido |
| Visual Director | Curadoria de fotografia/ilustracao + direcao de arte | Humano + IA generativa |
| Icon Designer | Sistema de icones baseado no estilo extraido | IA generativa + curadoria |
| Copywriter | Tom de voz e guidelines de escrita | LLM + revisao |
| Motion Designer | Coreografia de animacoes | Humano + specs extraidos |

**Vantagem:** Cobre gaps totais sem modificar o pipeline.
**Limitacao:** Aumenta custo e tempo de entrega.

### Caminho 3: Hibrido (Recomendado)

```
design-md (automatico)     → Tokens, cores, tipografia, componentes, preview
+
LLM enhancement (semi-auto) → Tom de voz, accessibility fixes, do's/don'ts expandido
+
Humano (sessao curta)       → Visao da marca, logo guidelines, direcao de arte
+
IA generativa               → Mockups, aplicacoes, iconografia
```

**Fluxo proposto:**

```
1. Sessao de estrategia (60min) → Missao, valores, publico, referencias
2. design-md extrai 3-5 URLs de referencia → Base tecnica
3. LLM gera: tom de voz, accessibility path, naming conventions
4. IA generativa produz: mockups, aplicacoes visuais, icones
5. Humano revisa e ajusta → Brandbook final
6. Codigo: Next.js com design system implementado → Deploy
```

---

## Entregavel Final: Brandbook Digital Completo (Modelo AIOX)

### Estrutura Proposta — 15 Secoes

Baseado no modelo real do AIOX Movimento, com camada estrategica + visual + codigo:

```
brandbook/
│
├── FUNDAMENTOS (Estrategia — LLM + Humano)
│   ├── 01-manifesto.md              ← LLM gera + humano valida
│   ├── 02-proposito-valores.md      ← Sessao estrategia + LLM
│   └── 03-arquetipo.md              ← LLM (framework 12 arquetipos)
│
├── ESTRATEGIA (Posicionamento — LLM + Humano)
│   ├── 04-posicionamento.md         ← LLM + analise mercado
│   ├── 04b-contraste.md             ← design-md extrai concorrentes + LLM compara
│   ├── 05-brandscript.md            ← LLM (StoryBrand/Hero's Journey)
│   └── 06-truelines-taglines.md     ← LLM + humano seleciona
│
├── IDENTIDADE VERBAL (Voz — LLM)
│   ├── 07-naming.md                 ← LLM + sessao humana
│   ├── 08-vocabulario.md            ← LLM analisa page-copy + gera guidelines
│   └── 08b-traits-voz.md            ← LLM classifica tom (4 dimensoes)
│
├── JORNADA & PROVA (Narrativa — Humano + LLM)
│   ├── 09-jornada-heroi.md          ← LLM (6 estagios) + humano adapta
│   └── 10-depoimentos.md            ← Requer clientes reais (futuro)
│
├── IDENTIDADE VISUAL (Tokens — design-md)
│   ├── 11-marcas-cores.md           ← design-md (automatico)
│   ├── 11b-tipografia.md            ← design-md (automatico)
│   ├── 11c-espacamento-grid.md      ← design-md (automatico)
│   ├── 11d-componentes.md           ← design-md + LLM enhancement
│   ├── 11e-motion.md                ← design-md parcial + LLM guidelines
│   └── 11f-aplicacoes.md            ← IA generativa (mockups)
│
├── COMPROMISSO (Encerramento — LLM + Humano)
│   ├── 12-contrato-marca.md         ← LLM + humano valida
│   └── 13-fundadores.md             ← Input humano
│
├── TECNICO (Codigo — design-md)
│   ├── DESIGN.md                    ← design-md (documento central)
│   ├── tokens.json                  ← design-md (tokens estruturados)
│   ├── tokens-extended.json         ← design-md (states/variants)
│   ├── render-contract.json         ← design-md (contrato de render)
│   ├── preview.html                 ← design-md (showcase interativo)
│   └── quality-score.json           ← design-md (auditoria)
│
└── assets/
    ├── logo/                        ← Variantes (humano + IA)
    ├── icons/                       ← IA generativa
    ├── mockups/                     ← IA generativa
    └── site/                        ← Next.js live (deploy Vercel)
```

### Cobertura por Metodo (Revisada com modelo AIOX)

| Metodo | Secoes que cobre | % do Brandbook |
|--------|-----------------|:--------------:|
| LLM (automatizavel) | 01, 03, 04, 05, 06, 07, 08, 08b, 09, 12 + apoio em 02, 04b | ~55% |
| design-md (automatico) | 11 (a-f) + tecnico completo + apoio em 04b, 08 | ~20% |
| Humano (sessao + validacao) | 02, 10, 13 + validacao de 01, 06, 07, 12 | ~15% |
| IA generativa | 11f + assets (mockups, icones, logo) | ~10% |

### Comparativo: Antes vs. Depois da Analise AIOX

| Perspectiva | Antes (design system only) | Depois (modelo AIOX) |
|-------------|---------------------------|----------------------|
| design-md cobre | ~45% | ~20% |
| LLM cobre | ~20% | ~55% |
| Humano necessario | ~20% | ~15% |
| IA generativa | ~15% | ~10% |
| Foco principal | Tokens visuais | Estrategia + narrativa |

---

## Conclusao Revisada

**O brandbook do Alan revelou que o valor real esta na camada estrategica (60% do documento), nao na visual.**

O design-md e essencial para a camada tecnica, mas o diferencial do servico precisa ser a **orquestracao completa**: estrategia + verbal + visual + codigo.

### O que isso muda no servico Clone & Ship:

1. **O LLM e o motor principal** (~55% do brandbook e geravel por IA com bons prompts)
2. **O design-md e o diferencial tecnico** (ninguem mais extrai 1500+ tokens em 4h)
3. **O humano e o curador** (valida, ajusta, garante autenticidade)
4. **A entrega e um site NEXT.JS + brandbook digital navegavel** (como o do AIOX)

### Proximo passo concreto:

Criar uma **squad de branding** com agentes especializados que executam cada camada:

| Agente | Responsabilidade | Tipo |
|--------|-----------------|------|
| Brand Strategist | Secoes 01-06 (fundamentos + estrategia) | LLM agent |
| Voice Architect | Secoes 07-08b (identidade verbal) | LLM agent |
| Journey Designer | Secoes 09-10 (jornada + prova) | LLM agent |
| Visual Engineer | Secao 11 + tecnico (identidade visual) | design-md + LLM |
| Site Builder | Deploy Next.js do brandbook como site navegavel | @dev agent |

Isso transforma o servico de "extrair design system" para **"entregar brandbook estrategico completo em codigo"** — que e exatamente o que o Alan fez, mas para clientes externos.

---

## Decisao Tomada: Site como Showcase + Hibrido

**Decisao:** Opcao C (Hibrido) + transformar o site qiartificial.com.br no modelo vivo.

### Racional

O site da QI Artificial sera reestruturado para funcionar como **demonstracao funcional** do produto. O cliente navega o site e ja ve exatamente o que vai receber — brandbook navegavel com tokens ao vivo, componentes interativos, e toda a estrutura do entregavel.

### Implicacoes para o Gap

| Gap | Solucao no Showcase |
|-----|---------------------|
| Fundamentos (01-03) | QI cria o proprio manifesto/proposito/arquetipo como exemplo |
| Estrategia (04-06) | QI documenta o proprio posicionamento como modelo |
| Identidade Verbal (07-08b) | QI define o proprio vocabulario e voz |
| Identidade Visual (11) | Tokens Apple ja extraidos, aplicados ao vivo no site |
| Compromisso (12-13) | QI escreve o proprio contrato/fundadores |

**Beneficio duplo:** Ao construir o brandbook da propria QI, testamos o processo completo E criamos o showcase.

### Componentes do Site-Showcase (baseados nos tokens Apple existentes)

O site atual (`page.tsx`) tem 6 secoes basicas. A evolucao adiciona:

| Componente Novo | Funcao no Showcase | Token Apple Usado |
|-----------------|-------------------|-------------------|
| Sidebar navegavel | Mostra estrutura de brandbook (13+ secoes) | nav-glass, #f5f5f7 |
| Secao Tokens | Paleta ao vivo, tipografia, espacamento | Todos os CSS vars |
| Secao Componentes | Buttons, cards, inputs interativos | btn-primary, service-card, work-card |
| Secao Manifesto | Texto com estilo editorial Apple | font-display, tracking-[-0.015em] |
| Secao Processo | Explica Clone & Ship Engine visualmente | Gradients, blobs animados |
| Demo CTA | "Teste com sua marca" — preview instantaneo | section-dark + btn-primary |
| Preview interativo | Mostra DESIGN.md + tokens.json ao vivo | Code blocks, surface colors |

### Tokens Apple ja disponiveis para o Showcase

```css
/* Cores */
--color-primary: #000000      --color-secondary: #0071e3
--color-tertiary: #2997ff     --color-neutral: #86868b
--color-surface: #f5f5f7      --color-text: #1d1d1f
--color-text-muted: #6e6e73   --color-border: #d2d2d7

/* Tipografia */
--font-display: "SF Pro Display"    --font-text: "SF Pro Text"

/* Espacamento */
--spacing-xs: 4px   --spacing-sm: 8px   --spacing-md: 16px
--spacing-lg: 22px  --spacing-xl: 44px

/* Radius */
--radius-sm: 5px    --radius-md: 10px   --radius-lg: 12px
--radius-xl: 16px   --radius-full: 980px

/* Animacoes */
blob-float (12s)    blob-float-reverse (15s)    blob-pulse (10s)
fade-up (0.8s)      cubic-bezier(0.25, 0.1, 0.25, 1)
```

### Componentes existentes reutilizaveis

| Componente | Arquivo | Reutilizavel? |
|-----------|---------|---------------|
| `ServiceCard` | page.tsx:241 | Sim — serve como card de secao |
| `WorkCard` | page.tsx:266 | Sim — serve como preview de projeto |
| `nav-glass` | globals.css:99 | Sim — evolui para sidebar |
| `btn-primary` | globals.css:68 | Sim — CTA universal |
| `section-light/surface/dark` | globals.css:106 | Sim — alternancia de fundo |
| `hero-blob` | globals.css:140 | Sim — backgrounds decorativos |
| `animate-fade-up` | globals.css:180 | Sim — entrada de conteudo |

---

*Documento atualizado em 2026-05-06 | Decisao: Showcase + Hibrido | Tokens mapeados*
*QI Artificial*
