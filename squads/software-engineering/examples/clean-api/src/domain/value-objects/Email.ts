// squads/software-engineering/examples/clean-api/src/domain/value-objects/Email.ts

export class Email {
    private readonly address: string;

    private constructor(address: string) {
        this.address = address;
    }

    public static create(address: string): Email {
        if (!this.isValid(address)) {
            throw new Error('Invalid email format');
        }
        return new Email(address.toLowerCase().trim());
    }

    public getValue(): string {
        return this.address;
    }

    private static isValid(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    public equals(other: Email): boolean {
        return this.address === other.getValue();
    }
}
