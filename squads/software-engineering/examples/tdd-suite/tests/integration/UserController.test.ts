// squads/software-engineering/examples/tdd-suite/tests/integration/UserController.test.ts

import { UserController } from '../../../clean-api/src/presentation/controllers/UserController';
import { RegisterUserUseCase } from '../../../clean-api/src/application/use-cases/RegisterUserUseCase';
import { InMemoryUserRepository } from '../../../clean-api/src/infrastructure/repositories/InMemoryUserRepository';

describe('UserController (Integration)', () => {
    let controller: UserController;

    beforeEach(() => {
        // Arrange: Wire up the actual dependencies that the controller will use
        const repo = new InMemoryUserRepository();
        const useCase = new RegisterUserUseCase(repo);
        controller = new UserController(useCase);
    });

    it('should return 201 on successful registration', async () => {
        // Arrange
        const request = {
            body: {
                id: 'user-1',
                name: 'Alice',
                email: 'alice@example.com'
            }
        };

        // Act
        const response = await controller.register(request);

        // Assert
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('User created successfully');
    });

    it('should return 400 on invalid email', async () => {
        // Arrange
        const request = {
            body: {
                id: 'user-2',
                name: 'Bob',
                email: 'invalid-email'
            }
        };

        // Act
        const response = await controller.register(request);

        // Assert
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Invalid email format');
    });
});

// Polyfill for demonstration purposes
const expect = (actual: any) => ({
    toBe: (expected: any) => { if (actual !== expected) throw new Error(`Expected ${expected}, got ${actual}`); }
});
