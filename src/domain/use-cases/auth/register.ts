import { PublicUserEntity } from "../../entities/public-user.entity";
import { UserRepository } from "../../repositories/user.repository";

export interface RegisterUseCase {
    execute(email: string, password: string): Promise<PublicUserEntity>
}

export class Register implements RegisterUseCase {

    constructor (
        private readonly userRepository: UserRepository
    ){ }

    async execute(email: string, password: string): Promise<PublicUserEntity> {
        const user = await this.userRepository.create(email, password)
        return user
    }

}