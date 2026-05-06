// squads/software-engineering/examples/tdd-suite/tests/unit/RegisterUserUseCase.test.ts

import { RegisterUserUseCase } from '../../../clean-api/src/application/use-cases/RegisterUserUseCase';
import { InMemoryUserRepository } from '../../../clean-api/src/infrastructure/repositories/InMemoryUserRepository';

describe('RegisterUserUseCase (Unit)', () => {
    let userRepository: InMemoryUserRepository;
    let useCase: RegisterUserUseCase;

    beforeEach(() => {
        // Arrange: Set up the dependencies (using a fast, in-memory fake, not a mock library)
        userRepository = new InMemoryUserRepository();
        useCase = new RegisterUserUseCase(userRepository);
    });

    it('should register a new user successfully', async () => {
        // Arrange
        const dto = {
            id: '123',
            name: 'John Doe',
            email: 'john@example.com'
        };

        // Act
        await useCase.execute(dto);

        // Assert
        const savedUser = await userRepository.findById('123');
        expect(savedUser).toBeDefined();
        expect(savedUser?.getName()).toBe('John Doe');
        expect(savedUser?.getIsActive()).toBe(true);
    });

    it('should throw an error if email is already registered', async () => {
        // Arrange
        const dto = {
            id: '123',
            name: 'John Doe',
            email: 'john@example.com'
        };

        // Act: Register first time
        await useCase.execute(dto);

        // Assert: Expect second registration to throw
        await expect(useCase.execute({
            id: '124',
            name: 'Jane Doe',
            email: 'john@example.com'
        })).rejects.toThrow('Email already registered');
    });
});

// Polyfill for demonstration purposes
const expect = (actual: any) => ({
    toBeDefined: () => { if (actual === undefined) throw new Error('Expected value to be defined'); },
    toBe: (expected: any) => { if (actual !== expected) throw new Error(`Expected ${expected}, got ${actual}`); },
    rejects: {
        toThrow: async (msg: string) => {
            let threw = false;
            try {
                await actual;
            } catch (e: any) {
                threw = true;
                if (e.message !== msg) throw new Error(`Expected error message "${msg}", got "${e.message}"`);
            }
            if (!threw) throw new Error('Expected function to throw, but it did not');
        }
    }
});
