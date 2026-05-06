// squads/software-engineering/examples/clean-api/src/application/use-cases/RegisterUserUseCase.ts

import { User } from '../../domain/entities/User';
import { Email } from '../../domain/value-objects/Email';
import { UserRepository } from '../../domain/repositories/UserRepository';

export interface RegisterUserDTO {
    id: string;
    name: string;
    email: string;
}

export class RegisterUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    public async execute(dto: RegisterUserDTO): Promise<void> {
        const email = Email.create(dto.email);

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('Email already registered');
        }

        const user = User.create(dto.id, dto.name, email);
        await this.userRepository.save(user);
    }
}
