// squads/software-engineering/examples/clean-api/src/presentation/controllers/UserController.ts

import { RegisterUserUseCase, RegisterUserDTO } from '../../application/use-cases/RegisterUserUseCase';

// DTO from the external framework (e.g., Express Request)
export interface HttpRequest {
    body: any;
}

export interface HttpResponse {
    statusCode: number;
    body: any;
}

export class UserController {
    constructor(private readonly registerUseCase: RegisterUserUseCase) { }

    public async register(req: HttpRequest): Promise<HttpResponse> {
        try {
            const dto: RegisterUserDTO = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
            };

            await this.registerUseCase.execute(dto);

            return {
                statusCode: 201,
                body: { message: 'User created successfully' },
            };
        } catch (error: any) {
            // Basic Error handling mapping domain errors to HTTP statuses
            if (error.message === 'Email already registered' || error.message.includes('Invalid')) {
                return {
                    statusCode: 400,
                    body: { error: error.message },
                };
            }

            return {
                statusCode: 500,
                body: { error: 'Internal Server Error' },
            };
        }
    }
}
