import { PublicUserEntity } from "../entities/public-user.entity";

export abstract class UserRepository {
    abstract create(email: string, password: string): Promise<PublicUserEntity>
    abstract findByEmail(email: string): Promise<PublicUserEntity>
}