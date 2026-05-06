# Example: Test-Driven Development (TDD) Suite

Este é um *Golden Master* que serve como referência para a estratégia de testes da Squad de Software Engineering, liderada pelo `@eng-tdd`.

## A Pirâmide de Testes (Referência)

1. **Unit Tests (`tests/unit/`)**:
   - Foco: Regras de negócio puras (Entities) e coordenação (Use Cases).
   - Velocidade: Devem rodar em milissegundos.
   - Regra de Ouro: **Não use bibliotecas de Mockição complexas (como jest.mock) se puder usar um Fake simples.** O arquivo `InMemoryUserRepository` no nosso exemplo da API é um *Fake*. Ele finge ser o banco de dados rodando em memória e é milhões de vezes mais rápido e menos frágil que um mock.

2. **Integration Tests (`tests/integration/`)**:
   - Foco: Como as camadas "conversam" entre si.
   - Exemplo: O Controller consegue passar a requisição corretamente para o Use Case e devolver o código HTTP 201 ou 400 dependendo do que o Domínio retornar?
   - Importante: Se for interagir com o Banco de Dados real, suba um container limpo (via Testcontainers) para cada suíte para garantir isolamento.

## Padrão Estrutural: AAA (Arrange, Act, Assert)
Todo bloco de teste **deve** usar comentários dividindo o fluxo em três etapas:
- **Arrange (Preparar)**: Setup de dados e dependências.
- **Act (Agir)**: Executar a chamada ao sistema sob teste (SUT).
- **Assert (Verificar)**: Validar os resultados (retornos e efeitos colaterais).
