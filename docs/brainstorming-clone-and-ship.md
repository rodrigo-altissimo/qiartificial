# Clone & Ship — Brainstorming & Offer Architecture

> Sessao de ideacao coordenada: SCAMPER (Fase 1) + Hormozi Grand Slam Offer (Fase 2) + Hormozi Chief Pricing (Fase 3)
> Data: 2026-05-06
> Participantes: @analyst (SCAMPER) + hormozi-offers (empacotamento) + hormozi-chief (pricing)
> Referencia de mercado: brand.aioxsquad.ai/brandbook/movimento (AIOX Movimento — Alan Nicolas)

---

## Contexto

A QI Artificial possui uma ferramenta proprietaria (design-md) que extrai design systems completos de qualquer site via analise estatica de CSS. O objetivo desta sessao e explorar como empacotar isso como servico/produto de estudio de design, entregando nao apenas um site mas um **brandbook completo** com toda a marca.

### Ativos Disponiveis

| Ativo | Descricao |
|-------|-----------|
| design-md skill | 30+ scripts que extraem DESIGN.md de qualquer URL |
| Pipeline de extracao | fetch → collect CSS → detect tokens → prompt LLM → post-process |
| Output por extracao | DESIGN.md, tokens.json, tokens-extended.json, preview.html, render-contract.json, quality-score.json, style-fingerprint.json, extraction-log.yaml |
| Dados extraidos | 1500+ CSS vars, 16 escalas tipograficas, 46+ cores, 18 font-faces, componentes, motion, shadows, breakpoints |
| Custo por extracao | ~R$1 (Haiku) a ~R$25 (Opus) |
| Tempo de extracao | ~4 horas (pipeline completo) |
| Stack de entrega | Next.js + Tailwind + Vercel |

---

## Fase 1: SCAMPER — 20 Ideias Geradas

### S — Substitute (Substituir)

1. **Substituir Figma por codigo vivo** — Entregar design system direto em Next.js/Tailwind em vez de arquivos Figma. O cliente recebe codigo funcional, nao mockup estatico.

2. **Substituir reunioes de briefing por extracao automatica** — Em vez de semanas de discovery, extrair o DNA visual de 3-5 referencias que o cliente admira e usar como ponto de partida.

3. **Substituir designer manual por pipeline IA** — O "designer" e a combinacao de extracao automatica + ajuste humano. Reduz custo e tempo dramaticamente.

### C — Combine (Combinar)

4. **Clone & Ship = Extracao + Build + Deploy** — Pacote unico que vai da referencia ao site no ar em dias, nao semanas.

5. **Design System + Landing Page + Brand Deck** — Combinar os tres entregaveis em um pacote que resolve identidade visual de ponta a ponta.

6. **Auditoria visual + Rebrand** — Primeiro extrair o design system atual do cliente (mostrar gaps), depois propor o novo baseado em referencias premium.

### A — Adapt (Adaptar)

7. **Adaptar modelo SaaS: Design-as-a-Service** — Assinatura mensal onde o cliente tem acesso a X extracoes + ajustes por mes.

8. **Adaptar modelo de franquia: "Clone & Ship Certified"** — Licenciar a ferramenta para outros estudios/freelancers que queiram oferecer o mesmo servico.

9. **Adaptar para verticais especificas** — Pacotes especializados: "Clone & Ship para Fintechs", "Clone & Ship para SaaS", "Clone & Ship para E-commerce".

### M — Modify (Modificar)

10. **4-Hour Design System** — Comprimir o processo para entregar o design system extraido em 4 horas. Velocidade como diferencial absoluto.

11. **Try Before You Buy** — Extrair o design system de uma referencia gratuitamente e mostrar o preview.html como demonstracao antes do cliente comprar o build completo.

12. **Design System Subscription** — Modelo de assinatura onde o cliente recebe atualizacoes continuas do design system conforme a marca evolui.

### P — Put to Other Uses (Outros Usos)

13. **Auditoria competitiva** — Extrair design systems de 5-10 concorrentes do cliente e entregar analise comparativa (cores, tipografia, componentes, acessibilidade).

14. **Due diligence visual para M&A** — Avaliar consistencia de marca de empresas em processo de aquisicao.

15. **Onboarding de designers** — Novo designer entra na equipe? Extrai o design system atual e entrega como documentacao instantanea.

### E — Eliminate (Eliminar)

16. **Eliminar o briefing** — O cliente so precisa enviar 3-5 URLs de referencia. Sem formulario, sem reuniao de discovery, sem questionario de 50 perguntas.

17. **Eliminar revisoes infinitas** — O design system extraido e objetivo (baseado em dados CSS reais). Reduz subjetividade e loops de aprovacao.

### R — Reverse (Reverter)

18. **Reverse engineering como servico** — Em vez de criar do zero, clonar o melhor e adaptar. Inversion do fluxo criativo tradicional.

19. **Cliente escolhe o resultado primeiro** — Mostra 10 previews de design systems de sites premium. Cliente escolhe o que mais gosta. Depois adapta.

20. **Anti-portfolio** — Em vez de mostrar trabalhos passados, mostrar o que o cliente VAI ter. Demo ao vivo com o site de referencia dele.

### Top 10 Ranqueadas (por impacto x viabilidade)

| Rank | Ideia | Score |
|------|-------|-------|
| 1 | 4-Hour Design System (#10) | 9.5 |
| 2 | Try Before You Buy (#11) | 9.0 |
| 3 | Clone & Ship pacote unico (#4) | 9.0 |
| 4 | Substituir Figma por codigo (#1) | 8.5 |
| 5 | Eliminar briefing (#16) | 8.5 |
| 6 | Auditoria competitiva (#13) | 8.0 |
| 7 | Verticais especificas (#9) | 8.0 |
| 8 | Anti-portfolio demo ao vivo (#20) | 7.5 |
| 9 | Design Subscription (#12) | 7.5 |
| 10 | Reverse engineering servico (#18) | 7.0 |

---

## Fase 2: Hormozi Grand Slam Offer

### Value Equation — Diagnostico

```
Value = (Dream Outcome x Perceived Likelihood)
        / (Time Delay x Effort & Sacrifice)
```

**Score inicial (Fase 2 — hormozi-offers, escopo site):**

| Variavel | Score | Analise |
|----------|-------|---------|
| Dream Outcome | 7/10 | Rebrand completo em codigo vivo. Forte, mas "rebrand" e generico |
| Perceived Likelihood | 5/10 | Tecnologia diferenciada mas sem cases. Variavel MAIS FRACA |
| Time Delay | 9/10 | 4 horas para extracao. Arma principal |
| Effort & Sacrifice | 7/10 | Code-first elimina Figma, mas cliente ainda precisa aprovar e integrar |

**Score revisado (Fase 3 — hormozi-chief, escopo brandbook completo):**

| Variavel | Score | Analise |
|----------|-------|---------|
| Dream Outcome | 9/10 | Brandbook estrategico completo (13 secoes) + site navegavel. Mudanca de status real |
| Perceived Likelihood | 7/10 | Entrega tangivel como site (nao PDF). Falta cases para subir mais |
| Time Delay | 7/10 | 14-21 dias (vs 90-120 dias de agencia). Ainda forte mas nao mais "4 horas" |
| Effort & Sacrifice | 8/10 | Cliente participa de 1-2 sessoes. Resto e DFY |

**Composite revisado: (9 x 7) / (3 + 2) = 12.6** — Oferta forte.

**Alavanca principal:** Aumentar Perceived Likelihood via garantia + prova social + demonstracao ao vivo.

### Unique Mechanism

**Nome:** "Clone & Ship Engine"

Sistema proprietario que extrai o design system completo de qualquer site em 4 horas — cores, tipografia, espacamento, componentes, tokens — e entrega como codigo vivo em Next.js, pronto para deploy.

### Value Stack — 7 Componentes

| # | Componente | Valor |
|---|-----------|-------|
| 1 | Clone & Ship Engine — Extracao Completa | R$4.000 |
| 2 | Landing Page Premium em Next.js | R$8.000 |
| 3 | Brand Deck Digital | R$3.000 |
| 4 | Kit de Componentes Reutilizaveis | R$5.000 |
| 5 | Sessao de Estrategia Visual — 60min | R$2.000 |
| 6 | Deploy + Dominio Configurado | R$1.500 |
| 7 | 30 Dias de Ajustes Ilimitados | R$3.000 |
| | **VALOR TOTAL COMUNICADO** | **R$26.500** |

### Pricing — Evolucao em 2 fases

**Fase 2 (hormozi-offers) — Escopo site + design system:**

| Tier | Nome | Entrega | Preco |
|------|------|---------|-------|
| Starter | Clone & Ship Express | Extracao + Brand Deck + 1 pagina | R$2.900 |
| Pro | Clone & Ship Pro | Extracao + 3-5 paginas + Kit Componentes + Deploy + 15d ajustes | R$5.900 |
| Grand Slam | Clone & Ship Total | Value Stack completo + Estrategia + 30d ajustes ilimitados | R$9.700 |

**Fase 3 (hormozi-chief) — Escopo brandbook estrategico completo (modelo AIOX):**

| Tier | Nome | Entrega | Prazo | Preco |
|------|------|---------|-------|-------|
| Essential | Clone & Ship Essential | Identidade Visual + Verbal (secoes 07-11) | 7 dias | R$4.900 |
| Strategic | Clone & Ship Strategic | Brandbook completo 13 secoes (modelo AIOX) | 14 dias | R$12.000 |
| Grand Slam | Clone & Ship Grand Slam | Brandbook + site Next.js navegavel + deploy | 21 dias | R$19.700 |

> **Status:** Pricing estimado. Aguardando MVN real (custo de entrega, capacidade/mes, primeiro case) para validacao.

### Guarantee — Risk Reversal

**Tipo:** Condicional com resultado especifico (Level 2)

> "Se em 7 dias uteis voce nao tiver seu site no ar com design system funcional e deploy completo, voce nao paga nada."

**Alternativa agressiva (Level 4):**

> "Site no ar em 7 dias ou devolvemos 100% + pagamos R$500 pelo seu tempo."

### Scarcity (Genuina)

- Capacidade real: maximo 4 projetos/mes (a definir com dados reais)
- Bonus de primeiros clientes: Kit de Componentes Premium incluido nos 10 primeiros

### Urgency (Genuina)

- Preco de lancamento com data real de expiracao
- Escala de comunicacao: 48h → 24h → 4h → 1h antes do deadline

### Naming — Formula MAGIC

| Elemento | Valor |
|----------|-------|
| M (Mecanismo) | Clone & Ship Engine |
| A (Avatar) | Startups e scale-ups |
| G (Grafico) | "Clone" — implica velocidade e precisao |
| I (Ideia) | Design system extraido por IA |
| C (Convergencia) | 4 horas / 7 dias |
| O (Objetivo) | Site profissional no ar, marca resolvida |

**3 opcoes de nome:**

1. **"Clone & Ship — Design System em 4 Horas"** (tecnico/startup)
2. **"4-Hour Rebrand — Da referencia ao deploy em um dia"** (amplo)
3. **"Design System Express — Da referencia ao deploy em um dia"** (corporativo)

---

## Fase 3: Hormozi Chief — Pricing & Benchmarks de Mercado

### Referencia: Brandbook AIOX Movimento

Analise do brandbook real em brand.aioxsquad.ai/brandbook/movimento (Alan Nicolas + Pedro Valerio).

**Estrutura do AIOX Movimento (13 secoes, 5 categorias):**

| # | Secao | Categoria |
|---|-------|-----------|
| 01 | Manifesto | Fundamentos |
| 02 | Proposito & Valores | Fundamentos |
| 03 | Arquetipo | Fundamentos |
| 04 | Posicionamento | Estrategia |
| 04b | Contraste (diferenciacao competitiva) | Estrategia |
| 05 | BrandScript (Hero's Journey) | Estrategia |
| 06 | Truelines & Taglines | Estrategia |
| 07 | Naming | Identidade Verbal |
| 08 | Vocabulario (power words + palavras banidas) | Identidade Verbal |
| 08b | Traits da Voz (4 dimensoes) | Identidade Verbal |
| 09 | Jornada do Heroi (6 estagios) | Jornada & Prova |
| 10 | Depoimentos (prova social) | Jornada & Prova |
| 11 | Marcas & Cores | Identidade Visual |
| 12 | Contrato da Marca | Compromisso |
| 13 | Os Fundadores | Compromisso |

**Tokens visuais do AIOX:**
```
Dark:    VOID #000000 | TERMINAL #050505 | SURFACE #0F0F11 | OLIVE #1C1E19
Light:   CREAM #F4F4E8 | WARM WHITE #FFFFED | WHITE #FFFFFF
Accent:  KINETIC LIMON #D1FF00 | SIGNAL BLUE #0099FF | FLARE #ED4609
Fonts:   Geist (display + body) | RobotoMono (code/terminal)
Stack:   Next.js + Tailwind CSS | Dark Cockpit Edition | v2.0
```

**Insight critico:** O brandbook do AIOX e **estrategico primeiro, visual depois**. A identidade visual (secao 11) e apenas 1 de 13 secoes. O design-md cobre ~20% do brandbook, nao ~45% como estimado antes.

### Benchmarks de Mercado

| Fornecedor | Escopo | Prazo | Preco |
|------------|--------|-------|-------|
| Freelancer senior BR | Logo + guidelines basicas | 30-45 dias | R$3.000 - R$8.000 |
| Agencia tradicional BR (tier 2) | Brandbook + identidade visual | 60-90 dias | R$15.000 - R$40.000 |
| Agencia premium BR (tier 1) | Branding estrategico completo | 90-120 dias | R$50.000 - R$150.000 |
| Estudio boutique US | Strategic brand system | 8-16 semanas | $15,000 - $50,000 |
| Consultoria de marca (Ana Couto, Gad) | Full rebrand corporativo | 4-6 meses | R$200.000+ |

O brandbook AIOX Movimento, pelo nivel de profundidade, se posiciona no range de agencia premium — R$50.000 a R$100.000 se contratado externamente.

### Ancora de Venda

```
"Um brandbook estrategico como esse custa entre R$50.000 e R$100.000
em agencias tradicionais e leva 3-4 meses.

Com o Clone & Ship Engine, entregamos o mesmo nivel de profundidade
em 14-21 dias por R$12.000 a R$19.700.

Nao porque vale menos. Porque a tecnologia comprimiu o tempo."
```

### Estrategia de Pricing Progressivo

O preco sobe com a prova. Nao com a vontade.

| Fase | Projeto | Preco | Objetivo |
|------|---------|-------|----------|
| 1 | Primeiro projeto | R$0 (gratis) | Gerar case + depoimento + medir custo real |
| 2 | Projetos 2-3 | R$2.900 (Essential) | Validar demanda e processo |
| 3 | Projetos 4-7 | R$4.900 (Essential) | Escalar com prova |
| 4 | Com 5+ cases | R$12.000 (Strategic) | Lancar tier completo |
| 5 | Com 10+ cases | R$19.700 (Grand Slam) | Posicionamento premium |

### MVN Pendente (dados necessarios para validar pricing)

| Dado | Status | Impacto |
|------|--------|---------|
| Custo real de entrega (horas + API + infra) | Pendente | Define margem por tier |
| Capacidade por mes (projetos simultaneos) | Pendente | Define scarcity real |
| Primeiro case entregue | Pendente | Habilita pricing acima de R$2.900 |
| Tempo real ponta-a-ponta | Pendente | Valida prazos prometidos |

---

## Entregaveis do Servico — Visao Completa (Revisada)

O servico **nao e apenas um site**. E um **brandbook estrategico completo** entregue como site navegavel em codigo:

### Entregaveis por Tier (Modelo Brandbook AIOX)

| Entregavel | Essential | Strategic | Grand Slam |
|-----------|-----------|-----------|------------|
| **FUNDAMENTOS** | | | |
| Manifesto da marca | | x | x |
| Proposito & Valores | | x | x |
| Arquetipo de marca | | x | x |
| **ESTRATEGIA** | | | |
| Posicionamento | | x | x |
| Contraste competitivo (design-md extrai concorrentes) | | x | x |
| BrandScript (Hero's Journey) | | | x |
| Truelines & Taglines | | x | x |
| **IDENTIDADE VERBAL** | | | |
| Naming (semantica) | x | x | x |
| Vocabulario (power words + banidas) | x | x | x |
| Traits da Voz (dimensoes) | x | x | x |
| **JORNADA & PROVA** | | | |
| Jornada do Heroi (6 estagios) | | | x |
| Espaco para depoimentos | | | x |
| **IDENTIDADE VISUAL** | | | |
| DESIGN.md (design system documentado) | x | x | x |
| tokens.json (tokens estruturados) | x | x | x |
| preview.html (showcase interativo) | x | x | x |
| Paleta de cores completa | x | x | x |
| Tipografia (16 escalas) | x | x | x |
| Componentes UI documentados | x | x | x |
| quality-score.json (auditoria) | x | x | x |
| style-fingerprint.json (arquetipo visual) | x | x | x |
| **COMPROMISSO** | | | |
| Contrato da marca | | | x |
| Pagina dos fundadores | | | x |
| **ENTREGA TECNICA** | | | |
| Site Next.js navegavel (brandbook digital) | | x | x |
| Deploy Vercel + dominio | | x | x |
| Kit de componentes React | | x | x |
| render-contract.json | x | x | x |
| Sessao de estrategia (60min) | | x (1 sessao) | x (2 sessoes) |
| Ajustes incluidos | 7 dias | 15 dias | 30 dias ilimitados |
| Analise de acessibilidade | | | x |

### Metodo de Producao por Camada

| Camada | Metodo | % do Brandbook |
|--------|--------|:--------------:|
| LLM (prompts especializados) | Manifesto, arquetipo, posicionamento, brandscript, naming, vocabulario, voz, taglines, contrato | ~55% |
| design-md (extracao automatica) | Cores, tipografia, espacamento, componentes, tokens, preview, quality score | ~20% |
| Humano (sessao + validacao) | Proposito real, valores, jornada, depoimentos, fundadores | ~15% |
| IA generativa | Mockups, icones, aplicacoes visuais | ~10% |

---

## Fase 4: Modelo de Entrega & Logistica

### Principio: A entrega se adapta ao cliente, nao o contrario

O servico atende 3 perfis distintos. O pipeline interno gera **uma fonte unica** e exporta no formato adequado.

### 3 Modelos por Perfil de Cliente

| Perfil | Descricao | Formato de Entrega | Acesso |
|--------|-----------|-------------------|--------|
| **Tecnico** | Tem Git, tem dev, usa CI/CD | Repo Git privado (transfer ou collaborator) | GitHub |
| **Semi-tecnico** | Tem site/app mas nao usa Git | ZIP estruturado + link protegido | Google Drive / portal |
| **Nao-tecnico** | So quer a marca pronta | Brandbook navegavel (link) + Kit Figma/Canva | URL + Figma |

### Modelo 1: Cliente Tecnico (tem Git)

```
qi-artificial/brandbook-{cliente} (repo privado)
  → Transfer ownership para org do cliente
  OU
  → Add como collaborator (se QI mantem/atualiza)
```

Entregaveis no repo:
```
brandbook-{cliente}/
├── README.md                    ← Guia de integracao
├── DESIGN.md                    ← Guardrail IA (Cursor/Copilot/Claude)
├── brandbook/                   ← Site Next.js navegavel
│   ├── src/app/                 ← Paginas do brandbook
│   └── public/assets/           ← Logo, icones, mockups
├── tokens/
│   ├── tokens.json              ← Universal
│   ├── tokens.css               ← CSS custom properties
│   ├── tokens-tailwind.js       ← Config Tailwind
│   └── tokens-figma.json        ← Import Figma
├── components/                  ← Kit React reutilizavel
│   ├── Button.tsx
│   ├── Card.tsx
│   └── index.ts
├── docs/
│   ├── manifesto.md
│   ├── posicionamento.md
│   ├── voz-vocabulario.md
│   └── guidelines-uso.md
└── assets/
    ├── logo/                    ← Variantes SVG/PNG
    └── mockups/                 ← Aplicacoes visuais
```

O `DESIGN.md` no root faz qualquer LLM (Cursor, Copilot, Claude Code) gerar codigo dentro do design system automaticamente.

### Modelo 2: Cliente Semi-Tecnico (sem Git)

```
entrega-brandbook-{cliente}/
├── tokens/
│   ├── tokens.css               ← Cola no projeto
│   ├── tokens-tailwind.js       ← Se usa Tailwind
│   └── tokens.json              ← Universal
├── assets/
│   ├── logo-primary.svg
│   └── logo-mono.svg
├── brandbook/                   ← Site estatico (HTML export)
│   └── index.html               ← Abre no browser
├── DESIGN.md                    ← Guardrail IA
└── GUIA-DE-USO.pdf              ← Instrucoes visuais simples
```

Entrega via link protegido (Google Drive, Notion, ou portal proprio).

### Modelo 3: Cliente Nao-Tecnico

- Brandbook como **site navegavel** (link publico ou protegido por senha)
- **Kit Figma/Canva** com templates prontos:
  - Posts para redes sociais
  - Cartao de visita
  - Assinatura de email
  - Apresentacao institucional
- Tokens exportados como **variaveis do Figma** (importacao direta)
- DESIGN.md fica como asset interno da QI para manutencao futura

### Pipeline de Exportacao (interno)

```
brandbook-source/ (repo interno QI Artificial)
  │
  ├── npm run export:git     → Repo pronto para transfer
  ├── npm run export:zip     → Pacote ZIP estruturado
  └── npm run export:static  → Site estatico + PDF
```

Uma fonte unica, 3 formatos de saida. Custo marginal de adaptacao: ~zero.

### Politica de Repo Git

- SEMPRE criar no GitHub da QI Artificial (qi-artificial org)
- NUNCA plugar direto no Git do cliente
- Opcoes pos-entrega:
  - **Transfer** — cliente quer ownership total
  - **Collaborator** — QI mantem acesso para atualizacoes
  - **Export** — cliente nao usa Git (ZIP/static)
- Historico e controle ficam com a QI
- Possibilita **manutencao recorrente** como upsell: "Atualizamos seu brandbook por R$X/mes"

### Diferencial Unico na Entrega: DESIGN.md como Guardrail IA

Nenhum concorrente entrega isso. O DESIGN.md funciona como **system prompt** para LLMs:

```
Agencia tradicional: entrega PDF → dev interpreta manualmente → inconsistencias
QI Artificial: entrega DESIGN.md → LLM le automaticamente → codigo consistente
```

Quando o dev do cliente usa Cursor, Copilot ou Claude Code, o DESIGN.md no root do projeto faz a IA gerar codigo dentro do design system sem precisar de instrucoes manuais.

---

## Fase 5: Site QI Artificial como Showcase (Modelo Vivo)

### Conceito

O site qiartificial.com.br **e** o produto. Nao e um site que fala sobre o servico — e uma demonstracao funcional do que o cliente recebe.

### Estrategia

| O que o site mostra | O que o cliente entende |
|---------------------|------------------------|
| Brandbook navegavel da propria QI | "Isso e o que vou receber" |
| Design tokens aplicados ao vivo | "Os tokens realmente funcionam" |
| Componentes interativos | "Tenho um kit pronto para usar" |
| DESIGN.md gerando o proprio site | "A IA vai manter meu projeto consistente" |

### Proposta de Valor ao Vivo

Na hora da venda, o fluxo seria:

```
1. Cliente ve o site da QI → ja visualiza o formato da entrega
2. QI faz demo rapida (~5%) com a marca do cliente
   → Extrai 3-5 tokens do site/referencia dele
   → Mostra preview instantaneo com as cores/fonts dele
3. Cliente percebe: "isso ja funciona com a MINHA marca"
4. Conversao
```

O "Try Before You Buy" (Ideia #11 do SCAMPER) se materializa aqui.

---

## Proximos Passos — Roadmap

### Fase A: Showcase (qiartificial.com.br como modelo)

1. Reestruturar o site em secoes de brandbook (sidebar + conteudo)
2. Criar secao "Tokens" mostrando paleta, tipografia, espacamento ao vivo
3. Criar secao "Componentes" com buttons, cards, inputs interativos
4. Criar secao "Processo" explicando Clone & Ship Engine
5. Adicionar secao "Demo" com CTA para testar com marca do cliente

### Fase B: Pipeline de Entrega

6. Criar scripts de exportacao (git / zip / static)
7. Criar template de brandbook Next.js reutilizavel
8. Criar prompts LLM para secoes estrategicas (manifesto, arquetipo, posicionamento)
9. Documentar processo end-to-end em checklist

### Fase C: Primeiro Case

10. Escolher 1 pessoa/empresa para projeto piloto (gratis)
11. Executar processo completo: estrategia → extracao → LLM → build → deploy
12. Cronometrar cada etapa
13. Documentar custos reais (API + horas + infra)
14. Registrar antes/depois como primeiro case

### Fase D: Validacao e Escala

15. Com dados reais, validar pricing e margem por tier
16. Lancar tier Essential (R$4.900) com case como prova
17. Iterar pricing conforme mais cases

---

*Documento gerado em 2026-05-06 | Atualizado com Fase 4 (entrega) e Fase 5 (showcase) | QI Artificial*
