export abstract class EncrypterInterface {
    abstract hash(password: string): string;
    abstract compare(password: string, hashed: string): boolean;
}