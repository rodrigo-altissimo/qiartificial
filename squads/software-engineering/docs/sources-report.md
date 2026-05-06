# Relatório de Fontes — Software Engineering Squad

> Todas as fontes utilizadas na expansão dos agents, tasks, checklists, docs e data/DNA.

## Resumo

**30+ livros e frameworks** de referência em engenharia de software, escritos por autores reconhecidos mundialmente. Nenhum conteúdo é inventado — cada conceito, padrão, metodologia e checklist tem origem rastreável.

---

## 📚 Livros e Publicações

| # | Título | Autor(es) | Ano | Usado em |
|---|--------|-----------|-----|----------|
| 1 | **Clean Code** | Robert C. Martin | 2008 | eng-clean-code |
| 2 | **A Philosophy of Software Design** | John Ousterhout | 2018 | eng-clean-code |
| 3 | **Refactoring** | Martin Fowler | 2018 | eng-clean-code, eng-refactor |
| 4 | **Working Effectively with Legacy Code** | Michael Feathers | 2004 | eng-refactor, eng-tdd |
| 5 | **Domain-Driven Design** | Eric Evans | 2003 | eng-ddd |
| 6 | **Implementing Domain-Driven Design** | Vaughn Vernon | 2013 | eng-ddd |
| 7 | **Designing Data-Intensive Applications** | Martin Kleppmann | 2015 | eng-distributed |
| 8 | **Release It!** | Michael Nygard | 2018 | eng-distributed |
| 9 | **Building Microservices** | Sam Newman | 2021 | eng-distributed, eng-api |
| 10 | **Microservices Patterns** | Chris Richardson | 2018 | eng-distributed |
| 11 | **Systems Performance** | Brendan Gregg | 2020 | eng-perf |
| 12 | **The Art of Capacity Planning** | John Allspaw | 2008 | eng-perf |
| 13 | **Site Reliability Engineering** | Google (Beyer et al.) | 2016 | eng-devops, eng-perf |
| 14 | **The Phoenix Project** | Gene Kim et al. | 2013 | eng-devops |
| 15 | **The DevOps Handbook** | Gene Kim, Jez Humble et al. | 2016 | eng-devops |
| 16 | **Accelerate** | Forsgren, Humble, Kim | 2018 | eng-devops, eng-agile, eng-chief |
| 17 | **Test-Driven Development: By Example** | Kent Beck | 2002 | eng-tdd |
| 18 | **Growing Object-Oriented Software, Guided by Tests** | Freeman & Pryce | 2009 | eng-tdd |
| 19 | **xUnit Test Patterns** | Gerard Meszaros | 2007 | eng-tdd |
| 20 | **Extreme Programming Explained** | Kent Beck | 2004 | eng-agile |
| 21 | **Succeeding with Agile** | Mike Cohn | 2009 | eng-agile |
| 22 | **Building Evolutionary Architectures** | Neal Ford et al. | 2017 | eng-architect |
| 23 | **Fundamentals of Software Architecture** | Richards & Ford | 2020 | eng-architect |
| 24 | **Software Architecture: The Hard Parts** | Ford, Richards et al. | 2021 | eng-architect |
| 25 | **Alice and Bob Learn Application Security** | Tanya Janca | 2020 | eng-security |
| 26 | **The Web Application Hacker's Handbook** | Stuttard & Pinto | 2011 | eng-security |
| 27 | **Fundamentals of Data Engineering** | Joe Reis & Matt Housley | 2022 | eng-data |
| 28 | **Data Mesh** | Zhamak Dehghani | 2022 | eng-data |
| 29 | **Data Quality Fundamentals** | Barr Moses et al. | 2022 | eng-data |
| 30 | **API Design Patterns** | JJ Geewax (Google) | 2021 | eng-api |
| 31 | **REST API Design Rulebook** | Mark Masse | 2011 | eng-api |
| 32 | **Team Topologies** | Skelton & Pais | 2019 | eng-chief |

---

## 🏛️ Standards e Regulamentações

| Standard | Organização | Usado em |
|----------|------------|----------|
| **OWASP Top 10 (2021)** | OWASP Foundation | eng-security, eng-audit |
| **OWASP ASVS** | OWASP Foundation | eng-security, eng-audit |
| **LGPD (Lei 13.709/2018)** | Governo Federal do Brasil | eng-audit |
| **GDPR (EU 2016/679)** | União Europeia | eng-audit |
| **SOC 2** | AICPA | eng-audit |
| **OpenAPI 3.0** | OpenAPI Initiative | eng-api |
| **GraphQL Spec** | GraphQL Foundation (ex-Facebook) | eng-api |
| **gRPC** | Google / CNCF | eng-api |
| **OpenTelemetry** | CNCF | eng-devops |

---

## 🔬 Metodologias e Frameworks

| Metodologia | Autor/Origem | Conceitos Extraídos | Usado em |
|-------------|-------------|---------------------|----------|
| **USE Method** | Brendan Gregg | Utilization, Saturation, Errors | eng-perf |
| **RED Method** | Tom Wilkie (Grafana) | Rate, Errors, Duration | eng-perf |
| **4 Golden Signals** | Google SRE | Latency, Traffic, Errors, Saturation | eng-devops |
| **DORA Metrics** | DORA/Google | Deploy freq, Lead time, MTTR, CFR | eng-chief |
| **STRIDE** | Microsoft | Threat modeling framework | eng-security |
| **SOLID** | Robert C. Martin | 5 design principles | eng-clean-code |
| **TDD Cycle** | Kent Beck | Red-Green-Refactor | eng-tdd |
| **Testing Pyramid** | Mike Cohn | Unit 70%, Integration 20%, E2E 10% | eng-tdd |
| **Strangler Fig** | Martin Fowler | Incremental legacy migration | eng-refactor |
| **Mikado Method** | Ola Ellnestam | Dependency graph refactoring | eng-refactor |
| **CAP Theorem** | Eric Brewer (2000) | Consistency vs Availability | eng-distributed |
| **PACELC** | Daniel Abadi | Extension of CAP | eng-distributed |
| **Saga** | Hector Garcia-Molina (1987) | Distributed transactions | eng-distributed |
| **Circuit Breaker** | Michael Nygard | Resilience pattern | eng-distributed |
| **Fitness Functions** | Neal Ford | Automated architecture governance | eng-architect |
| **ADR** | Michael Nygard | Architecture Decision Records | eng-architect |
| **Data Mesh** | Zhamak Dehghani | 4 principles of decentralized data | eng-data |
| **Data Observability** | Barr Moses (Monte Carlo) | 5 pillars of data quality | eng-data |
| **XP Practices** | Kent Beck | Pair programming, CI, collective ownership | eng-agile |
| **Trunk-Based Dev** | Paul Hammant | Short-lived branches + feature flags | eng-agile |
| **Mutation Testing** | Richard Lipton (1971) | Test suite effectiveness verification | eng-agile |
| **Cyclomatic Complexity** | Thomas McCabe (1976) | Code complexity measurement | eng-clean-code |
| **Cognitive Complexity** | SonarSource | Human-readable complexity metric | eng-clean-code |

---

## 📊 Métricas da Expansão

| Métrica | Valor |
|---------|-------|
| Livros referenciados | 32 |
| Standards/regulamentações | 9 |
| Metodologias/frameworks | 23 |
| Total de fontes distintas | **64** |
| Autores únicos | **40+** |

> [!NOTE]
> Todo conceito, padrão, checklist e template no squad tem origem em uma ou mais das fontes acima. O conteúdo é uma **síntese aplicável** dessas fontes, adaptada para uso prático em contexto de engenharia de software.
