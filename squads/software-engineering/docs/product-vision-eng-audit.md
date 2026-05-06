# 🎯 Visão de Produto: Engineering Audit Squad

> O squad de Software Engineering como produto de análise de projetos.

---

## 1. O Que É

Um **auditor de engenharia automatizado** que analisa a saúde de qualquer projeto de software e gera um relatório executivo com score, findings, e roadmap de melhoria.

**Analogia:** Uma consultoria ThoughtWorks/McKinsey em caixa — operada por 14 agentes especialistas, cada um clonado de um expert real.

---

## 2. Proposta de Valor

| Para Quem | Problema | Solução |
|-----------|----------|---------|
| **CTOs / Tech Leads** | "Não sei a saúde real do meu projeto" | Scorecard multi-dimensional com evidências |
| **Startups pré-investimento** | "Investidor quer due diligence técnica" | Relatório auditável que mostra maturidade |
| **Times de engenharia** | "Onde está nosso tech debt mais caro?" | Priorização por impacto/esforço com números |
| **Empresas adquirindo software** | "Esse código vale o que estão pedindo?" | Avaliação objetiva da qualidade técnica |

---

## 3. Os 14 Especialistas (O Motor)

| Agent | Expert Clonado | O Que Analisa |
|-------|---------------|---------------|
| eng-architect | Neal Ford | Arquitetura, fitness functions, acoplamento, ADRs |
| eng-security | OWASP/Janca | OWASP Top 10, STRIDE, secrets, dependencies |
| eng-devops | Gene Kim | CI/CD, DORA metrics, SLOs, observabilidade |
| eng-clean-code | Ousterhout | Complexidade, naming, deep/shallow modules |
| eng-distributed | Kleppmann | CAP, consistência, replicação, idempotência |
| eng-agile | Kent Beck | TDD, testing pyramid, XP practices |
| eng-ddd | Eric Evans | Bounded contexts, aggregates, ubiquitous language |
| eng-api | Fielding/Newman | REST design, versioning, error handling |
| eng-perf | Brendan Gregg | USE Method, N+1, caching, latency |
| eng-tdd | Michael Feathers | Legacy code, seams, characterization tests |
| eng-refactor | Martin Fowler | Code smells, refactoring moves, tech debt |
| eng-data | Reis/Housley | Pipelines, schema evolution, data quality |
| eng-chief | Composite | Orquestração, triage, decisões |
| eng-audit | Composite | Quality gate final, scoring, relatório |

---

## 4. O Output: Engineering Health Report

### 4.1 Scorecard (página 1 do relatório)

```
╔══════════════════════════════════════════════════╗
║        ENGINEERING HEALTH SCORE: 3.2/5.0        ║
║        ████████████████░░░░░░░░  64%             ║
╠══════════════════════════════════════════════════╣
║ Security          ██████████████░░  4.2  ✅      ║
║ Performance       ████████████░░░░  3.5  ⚠️      ║
║ Operability       ████████░░░░░░░░  2.5  ❌      ║
║ Code Quality      ██████████████░░  4.0  ✅      ║
║ Testability       ██████░░░░░░░░░░  2.0  ❌      ║
║ Data Integrity    ████████████░░░░  3.5  ⚠️      ║
╚══════════════════════════════════════════════════╝
```

### 4.2 Findings por Severidade (página 2)

```
🔴 P0 — Blockers (2)
  1. Hardcoded API keys em 3 arquivos (eng-security)
  2. Zero testes no módulo de pagamento (eng-tdd)

🟡 P1 — Must Fix (5)
  3. N+1 queries em /api/orders — p99 = 3.2s (eng-perf)
  4. Sem rollback procedure documentado (eng-devops)
  5. Aggregate "Order" com 47 campos (eng-ddd)
  ...

🟢 P2 — Should Fix (8)
  ...

🔵 P3 — Enhancements (12)
  ...
```

### 4.3 Roadmap Priorizado (página 3)

```
| #  | Ação                          | Impacto | Esforço | Prioridade |
|----|-------------------------------|---------|---------|------------|
| 1  | Remover secrets do código     | Crítico | 2h      | 🔴 AGORA   |
| 2  | Testes no módulo pagamento    | Alto    | 3 dias  | 🔴 Sprint  |
| 3  | Corrigir N+1 em /api/orders   | Alto    | 4h      | 🟡 Sprint  |
| 4  | Documentar rollback procedure | Médio   | 2h      | 🟡 Sprint  |
| 5  | Splittar aggregate Order      | Médio   | 1 semana| 🟢 Backlog |
```

---

## 5. Modelos de Distribuição

### 5.1 Dependência Core

O squad é composto de **arquivos .md e .yaml** (prompts e instruções). Ele precisa de um **runtime de IA** para funcionar. Atualmente roda sobre o **AIOS com Antigravity**.

```
Squad (.md/.yaml) → Runtime (AIOS/Antigravity) → Análise → Relatório
```

> ⚠️ **Sem o runtime, os arquivos são apenas texto.** O runtime é a engine que executa os agents.

### 5.2 Modelos Viáveis

#### Modelo A: Consultoria Automatizada (Go-to-Market imediato)
```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   Cliente    │────▶│  Você (AIOS) │────▶│  Relatório   │
│ envia repo   │     │  roda squad  │     │  entregue    │
└─────────────┘     └──────────────┘     └──────────────┘
```
- Cliente fornece acesso ao repo (GitHub token ou convite)
- Você roda o squad no seu ambiente AIOS
- Entrega o relatório (PDF/HTML/Dashboard)
- **Preço:** R$ 2.000-10.000 por auditoria (depende do tamanho)
- **Prazo:** 24-48 horas
- **Pros:** Funciona amanhã. Zero desenvolvimento.
- **Contras:** Não escala sem você. Serviço, não produto.

#### Modelo B: SaaS (Escalável)  
```
┌─────────────┐     ┌──────────────────────────┐     ┌──────────┐
│   Cliente    │────▶│  Plataforma Web           │────▶│ Dashboard│
│ conecta repo │     │  (AIOS no backend)        │     │ + Report │
└─────────────┘     └──────────────────────────┘     └──────────┘
```
- Cliente conecta via GitHub App (OAuth, read-only)
- AIOS/Antigravity roda no servidor como backend
- Relatório gerado automaticamente e exibido no dashboard
- **Preço:** R$ 299-999/mês (assinatura)
- **Pros:** Escala. Recorrente. O cliente faz self-service.
- **Contras:** Precisa construir: web app, auth, GitHub integration, infra

#### Modelo C: GitHub Action (Viralização)
```yaml
# Cliente adiciona no .github/workflows/eng-audit.yml
- uses: antigravity/engineering-audit@v1
  with:
    api-key: ${{ secrets.ANTIGRAVITY_KEY }}
```
- Roda dentro do CI/CD do cliente (código nunca sai)
- Resultado aparece como check no PR
- Marketplace do GitHub como canal de distribuição
- **Preço:** Free tier (1 scan/mês) + Pro (R$ 199/mês ilimitado)
- **Pros:** Viral. Automático. Marketplace pronto.
- **Contras:** Precisa empacotar o AIOS como GitHub Action (complexo)

#### Modelo D: CLI + Dashboard (Privacidade máxima)
```bash
# Cliente instala e roda localmente
npx @antigravity/eng-audit scan .
# → Gera metrics.json (só números, zero código)
# → Upload automático para dashboard (opcional)
```
- O scan roda na máquina do cliente
- Código NUNCA sai do ambiente
- Só métricas anônimas são enviadas (se o cliente autorizar)
- **Pros:** Empresas com política de segurança restrita (bancos, governo)
- **Contras:** Precisa empacotar a lógica de análise em CLI stand-alone

---

## 6. Acesso a Repos Privados

| Mecanismo | Segurança | Complexidade | Uso |
|-----------|-----------|-------------|-----|
| **GitHub App (read-only)** | ✅ Alta (OAuth, revogável) | Média | SaaS, produção |
| **Personal Access Token** | ⚠️ Média (token compartilhado) | Baixa | MVP, beta |
| **Clone local (CLI)** | ✅ Máxima (código não sai) | Baixa | Empresas restritivas |
| **GitHub Action** | ✅ Alta (roda no CI do cliente) | Alta | Marketplace |

---

## 7. Roadmap de Go-to-Market

### Fase 1: Validação (Mês 1-2)
```
[ ] Levar o squad a 5.0/5.0 (expandir profundidade dos agents)
[ ] Rodar 3 auditorias piloto (projetos reais) como consultoria
[ ] Coletar feedback: o relatório gera valor? O que falta?
[ ] Refinar o formato do relatório baseado no feedback
```

### Fase 2: Produto Mínimo (Mês 3-4)
```
[ ] Definir modelo de distribuição (consultoria OU SaaS)
[ ] Se consultoria: criar landing page + processo padronizado
[ ] Se SaaS: construir web app com GitHub OAuth + dashboard
[ ] Definir pricing (por auditoria ou assinatura)
[ ] Lançar para primeiros clientes pagantes
```

### Fase 3: Escala (Mês 5-12)
```
[ ] Automatizar o pipeline de auditoria (reduzir intervenção manual)
[ ] Adicionar GitHub Action para scans automáticos
[ ] Expandir para novos squads (DevOps Audit, Security Audit, Data Audit)
[ ] Marketing: case studies dos primeiros clientes
[ ] Parcerias com consultorias de engenharia
```

---

## 8. Preços de Mercado — Pesquisa (Fev 2025)

### 8.1 Auditoria de Código — Mercado Internacional (USD)

| Porte do Projeto | Linhas de Código | Preço Internacional | Prazo |
|------------------|-----------------|---------------------|-------|
| **Pequeno** | < 20K LOC | $1,000 — $5,000 | 2-5 dias |
| **Médio** | 20K — 100K LOC | $5,000 — $15,000 | 1-2 semanas |
| **Grande / Enterprise** | > 100K LOC | $15,000 — $50,000+ | 2-6 semanas |

*Fonte: Synavos, DevCom, WebMobTech (2024-2025)*

### 8.2 Mercado Brasileiro — Consultoria Manual

| Tipo | Preço Praticado |
|------|----------------|
| Hora de consultor sênior | R$ 200 — 400/hora |
| Auditoria manual (~40h) | R$ 8.000 — 16.000 |
| Assessment ThoughtWorks/similar | R$ 50.000 — 100.000+ |
| Pentest / Security audit | R$ 15.000 — 40.000 |

> **Nota:** Empresas como CodeBit e Conviso não divulgam preços publicamente — negociação caso a caso.

### 8.3 Players Brasileiros (Competidores Diretos)

| Empresa | O que faz | Modelo | Limitação |
|---------|-----------|--------|-----------|
| **CodeBit (CodeReview)** | Auditoria de código com laudo técnico | Consultoria manual | Só qualidade de código, sem arquitetura/processo |
| **Conviso** | AppSec, segurança no SDLC | Consultoria + ferramentas | Só security |
| **NoBug Tecnologia** | Auditoria de código, análise estática | Consultoria manual | Uma dimensão |
| **Base2** | QA e testes (Crowdtest) | Serviço + plataforma | Só testing |

> ⚠️ **Nenhum player brasileiro oferece auditoria multi-dimensional com IA.** Todos são consultoria manual em 1-2 dimensões.

### 8.4 Players Globais (Competidores Indiretos)

| Produto | Dimensão | Preço | Gap vs Nosso |
|---------|----------|-------|-------------|
| **SonarCloud** | Code quality (bugs, smells, coverage) | $10-30/mês | Só código — não olha arquitetura/processo |
| **CodeClimate** | Quality metrics + velocity | $15-50/mês | Sem domain expertise, sem DDD/distributed |
| **Snyk** | Security scanning | $25-100/mês | Só security — não olha performance/quality |
| **LinearB** | Engineering metrics (DORA-like) | $20-40/dev/mês | Só métricas — sem análise qualitativa |
| **Codacy** | Code quality + AI review | $15-40/mês | Automatizado mas genérico |
| **Amazon CodeGuru** | ML-powered code review | $10-30/mês | Só AWS, foco em performance/security |
| **Aikido Security** | AI security analysis | Custom | Só security |

### 8.5 Nosso Diferencial Competitivo

```
COMPETIDORES:  1 dimensão × regras genéricas × scan estático
NÓS:          14 dimensões × frameworks de experts reais × raciocínio com IA
```

- **14 especialistas** vs 1 dimensão por competidor
- **Expertise de livros reais** (Neal Ford, Kent Beck, Kleppmann — não são regras do lint)
- **Relatório acionável** com priorização de impacto/esforço
- **Cross-cutting** — um finding de security impacta performance e operability
- **Raciocínio** — não é scan estático, é análise com contexto e julgamento

---

## 9. Pricing Detalhado — Estratégia

### 9.1 Modelo Consultoria (Go-to-Market imediato)

| Tier | O que inclui | Seu tempo | Preço | Margem |
|------|-------------|-----------|-------|--------|
| **Quick Scan** | Scorecard 6 pilares + top 5 findings P0/P1 | 2-4h | **R$ 1.500 — 3.000** | ~R$ 500/h |
| **Full Audit** | Relatório completo, 6 pilares, todos P0-P3, roadmap priorizado | 1-2 dias | **R$ 5.000 — 8.000** | ~R$ 400/h |
| **Deep Dive** | Full Audit + call de 1h com cliente + acompanhamento 30 dias | 2-3 dias | **R$ 10.000 — 15.000** | ~R$ 350/h |

### 9.2 Justificativa de Preço

```
CONSULTORIA MANUAL TRADICIONAL:
  1 consultor × 1-2 semanas × R$ 300/h = R$ 12.000 — 24.000
  Cobre 2-3 dimensões (o que o consultor sabe)
  
NOSSO SQUAD COM IA:
  14 especialistas × 1-2 dias = R$ 5.000 — 15.000
  Cobre 6 dimensões com 14 perspectivas
  
RESULTADO:
  → 10x mais rápido (dias vs semanas)
  → 5x mais abrangente (14 vs 2-3 perspectivas)
  → 30-50% mais barato que consultoria manual equivalente
```

### 9.3 Modelo SaaS (Fase 2+)

| Tier | Inclui | Preço |
|------|--------|-------|
| **Free** | 1 scan/mês, scorecard básico (sem detalhes) | R$ 0 |
| **Pro** | Scans ilimitados, relatório completo, histórico de evolução | **R$ 297 — 497/mês** |
| **Team** | Pro + DORA tracking + multi-repo + dashboard do time | **R$ 797 — 997/mês** |
| **Enterprise** | On-prem scan + suporte dedicado + SLA | Sob consulta |

### 9.4 Unit Economics (Consultoria)

```
RECEITA POR AUDITORIA:        R$ 5.000 (Full Audit médio)
CUSTO FIXO (AIOS/API):        R$ 200-500 (tokens de IA)
CUSTO DE TEMPO:                8-16h
LUCRO POR AUDITORIA:           R$ 4.500+
AUDITORIAS POR MÊS (1 pessoa): 8-10 possíveis

RECEITA MENSAL POTENCIAL:      R$ 40.000 — 50.000
CUSTO OPERACIONAL:             R$ 5.000 (tools + infra)
LUCRO MENSAL:                  R$ 35.000 — 45.000
```

---

## 10. Posicionamento no Mercado

```
                    PROFUNDIDADE DA ANÁLISE
                    ←  Superficial    Profunda →
                    
  PREÇO  │  SonarCloud    │              │
  BAIXO  │  Codacy        │              │
         │  CodeClimate   │              │
  ───────┼────────────────┼──────────────┤
         │                │              │
  MÉDIO  │  Snyk          │  ★ NÓS ★    │
         │  LinearB       │  (Eng Audit) │
  ───────┼────────────────┼──────────────┤
         │                │              │
  ALTO   │                │  ThoughtWorks│
         │                │  (manual)    │
```

**Nosso sweet spot:** Profundidade de consultoria premium, velocidade de ferramenta automatizada, preço de meio de mercado.

---

> **Próximo passo:** Levar o squad a 5.0/5.0, depois rodar 3 auditorias piloto (projetos reais) para validar o formato do relatório e o valor percebido pelo cliente.
