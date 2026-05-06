// squads/software-engineering/examples/clean-api/src/infrastructure/repositories/InMemoryUserRepository.ts

import { User } from '../../domain/entities/User';
import { Email } from '../../domain/value-objects/Email';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class InMemoryUserRepository implements UserRepository {
    private users: Map<string, User> = new Map();

    public async save(user: User): Promise<void> {
        this.users.set(user.getId(), user);
    }

    public async findById(id: string): Promise<User | null> {
        return this.users.get(id) || null;
    }

    public async findByEmail(email: Email): Promise<User | null> {
        for (const user of this.users.values()) {
            if (user.getEmail().equals(email)) {
                return user;
            }
        }
        return null;
    }
}
