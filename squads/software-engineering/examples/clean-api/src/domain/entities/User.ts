// squads/software-engineering/examples/clean-api/src/domain/entities/User.ts

import { Email } from '../value-objects/Email';

export class User {
    private constructor(
        private readonly id: string,
        private name: string,
        private email: Email,
        private isActive: boolean,
        private readonly createdAt: Date
    ) { }

    public static create(id: string, name: string, email: Email): User {
        if (!name || name.trim().length === 0) {
            throw new Error('User name cannot be empty');
        }

        return new User(id, name, email, true, new Date());
    }

    public deactivate(): void {
        this.isActive = false;
    }

    public activate(): void {
        this.isActive = true;
    }

    // Getters
    public getId(): string { return this.id; }
    public getName(): string { return this.name; }
    public getEmail(): Email { return this.email; }
    public getIsActive(): boolean { return this.isActive; }
    public getCreatedAt(): Date { return this.createdAt; }
}
