import { PublicUserEntity } from "../../domain/entities/public-user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

export class UserDatasource implements UserRepository {
    async create(email: string, password: string): Promise<PublicUserEntity> {
        return { email, password, id: "1" }
    }
    async findByEmail(email: string): Promise<PublicUserEntity> {
        if (email !== "spagnolofederico3@gmail.com") {
            throw new Error("User not found")
        }
        return { email: "spagnolofederico3@gmail.com", password: "roque1819", id: "1" }
    }
}