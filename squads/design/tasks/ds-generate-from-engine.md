---
description: Gera um Design System completo baseado em Python (UI/UX Pro Max Engine)
---

# Generate Design System via UUPM Engine

Esta task aciona o motor gerador Python (`uupm-engine`) recém-integrado à Squad de Design. O motor cruza 100 regras de raciocínio, 67 estilos de UI e 96 paletas de cores através de bancos CSV para cuspir um `MASTER.md` de altíssima fidelidade.

## Objetivos
- Executar o script `search.py` do UUPM Engine para uma determinada indústria/produto.
- Salvar a saída detalhada do motor como um artefato estático (Design System Master).
- Fornecer este `MASTER.md` aos desenvolvedores de interface para implementação determinística.

## Passos da Execução

1. **Obter Contexto do Usuário (se não fornecido):**
   - Qual a indústria/nicho do projeto? (ex: "B2B SaaS Analytics", "Beauty Spa", "Fintech Dashboard")
   - Qual o nome do projeto? (ex: "Acme Metrics")

2. **Geração do Design System (CLI):**
   - Navegue até: `squads/design/tools/uupm-engine/`
   - Execute o script Python apontando para a string de nicho/produto e solicite a saída em Markdown persistente:
     ```bash
     python3 scripts/search.py "[nicho ou keywords]" --design-system --persist -p "[Nome do Projeto]" -f markdown
     ```
   *(Nota: Isso criará/atualizará a pasta `design-system/MASTER.md` localmente baseada no output do Python)*

3. **Validação do Output:**
   - Leia o arquivo gerado: `design-system/MASTER.md`
   - O arquivo inclui Paletas (Primárias, Secundárias, Neutras)?
   - O arquivo inclui Tipografia (Fontes Hero, Corpo, pesos)?
   - O arquivo inclui Key Effects e Antipatterns a evitar?

4. **Incorporação ao Projeto Final:**
   - Mova ou copie a pasta gerada localmente (`design-system/MASTER.md`) para o repositório do cliente `docs/design-system/MASTER.md`.
   - Crie o commit: `feat(design): generate master design system via UUPM engine`

## Artefatos Output
- `docs/design-system/MASTER.md` (A "Bíblia" visual do projeto, gerada deterministicamente pela IA + Python).
