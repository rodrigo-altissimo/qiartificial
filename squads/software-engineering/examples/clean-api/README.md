# Example: Clean API (Ports & Adapters)

Este é um *Golden Master* que serve como referência arquitetural para a criação de novos serviços na Squad de Software Engineering.

## Estrutura (Onion/Hexagonal Architecture)

1. **Domain (`src/domain/`)**: O núcleo da aplicação. Contém as regras de negócio puras (`Entities`, `Value Objects`). Não conhece bancos de dados, frameworks web ou bibliotecas externas.
2. **Application (`src/application/`)**: Orquestra os casos de uso (`UseCases/Services`). Coordena as entidades de domínio e pede à infraestrutura para salvar os dados. Conhece o domínio, mas não a infra.
3. **Infrastructure (`src/infrastructure/`)**: Implementa as interfaces (Ports) definidas pelas camadas internas. Aqui ficam os Adapters do banco de dados (`Repositories`), chamadas de rede, etc.
4. **Presentation (`src/presentation/`)**: Ponto de entrada (Controllers / Resolvers). Transforma as requisições HTTP (ou gRPC, CLI) em comandos compreensíveis pela camada de Application.

## Quando consultar este exemplo:
- Ao construir um novo microsserviço.
- Ao refatorar controladores "gordos" (Fat Controllers).
- Quando precisar validar as fronteiras de dependência.
