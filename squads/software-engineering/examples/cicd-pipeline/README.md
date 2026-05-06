# Example: CI/CD Pipeline (Governança Automatizada)

Este *Golden Master* demonstra um pipeline de integração contínua (CI) seguro e inviolável, exigido pelo `@eng-devops` e `@eng-security`.

## Padrão Oficial da Squad (Exemplo Github Actions)

Todo pipeline DEVE possuir os seguintes "Gates" antes do merge:

```yaml
name: CI/CD Pipeline

on:
  pull_request:
    branches: [ main ]

jobs:
  lint-and-complexity:
    name: Code Quality
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run lint
      - run: npm run check-complexity # Deve falhar se houver Cyclomatic Complexity > 15
  
  security-sast:
    name: Security Scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      # Verifica vazar secrets
      - uses: trufflesecurity/trufflehog@main
      # Verifica pacotes CVEs vulneráveis pendentes
      - run: npm audit --audit-level=high

  unit-and-integration-tests:
    name: Quality Gates
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run test:unit
      - run: npm run test:integration
      # A cobertura absoluta não pode baixar.
      - run: npx nyc check-coverage --lines 80 --functions 80 --branches 80

  deploy-staging:
    name: Deploy to Staging
    needs: [lint-and-complexity, security-sast, unit-and-integration-tests]
    runs-on: ubuntu-latest
    # Apenas se tudo passar, fazemos o release.
    steps:
      - run: echo "Deploying..."
```

## Regras Fundamentais:
1. **Shift-Left Security:** Falhe o build imediatamente se um CVE ou Secret for detectado.
2. **Cobertura é Lei:** Se a Cobertura Líquida cair abaixo do benchmark (80%), o PR deve quebrar.
3. Não instale bibliotecas sem fixar a versão exata no lockfile para garantir Builds Determinísticos.
