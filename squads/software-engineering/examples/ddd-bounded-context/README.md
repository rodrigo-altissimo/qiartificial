# Example: DDD Bounded Contexts

Este *Golden Master* ilustra como desenhar fronteiras claras entre domínios (Bounded Contexts) usando Eventos de Domínio para comunicação, evitando acoplamento de banco de dados.

## Padrão Oficial da Squad

### O Erro Comum (Monolito Emaranhado)
Serviços que compartilham o mesmo banco de dados e fazem joins (Ex: `Orders` e `Inventory` consultando as mesmas tabelas).

### A Estrada Pavimentada (The Paved Road)
Comunicação **Assíncrona Choroegraphada** entre Bounded Contexts.

#### Exemplo de Código (Domain Event Publisher)
```typescript
// Contexto: Vendas (Sales)
export class OrderCreatedEvent {
  constructor(public readonly orderId: string, public readonly lines: OrderLine[]) {}
}

export class Order extends AggregateRoot {
  public completeCheckout() {
    this.status = 'PAID';
    // O domínio emite um fato que ocorreu passado.
    this.addDomainEvent(new OrderCreatedEvent(this.id, this.items));
  }
}
```

#### Exemplo de Código (Event Subscriber/Consumer)
```typescript
// Contexto: Estoque (Inventory) - Outro microsserviço ou módulo totalmente isolado
export class ReduceInventoryOnOrderCreated {
  constructor(private inventoryRepo: InventoryRepository) {}

  @Subscribe(OrderCreatedEvent.name)
  public async handle(event: OrderCreatedEvent) {
     const items = event.lines;
     // Reage ao fato, subtraindo do próprio banco de dados de Inventory
     await this.inventoryRepo.reserveStock(items);
  }
}
```

## Regras Fixas
1. **Nunca** chame o banco de dados de um Bounded Context diretamente de outro.
2. Agregados devem referenciar outros agregados **apenas por ID**, nunca por referência de memória direta.
3. Eventos devem carregar o mínimo de dados necessários ou uma URL para buscar (Event Carried State Transfer vs Notification).
