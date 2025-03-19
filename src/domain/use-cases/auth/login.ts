import { PublicUserEntity } from "../../entities/public-user.entity";
import { UserRepository } from "../../repositories/user.repository";

export interface LoginUseCase {
    execute(email: string, password: string):  Promise<{ user: PublicUserEntity, accessToken: string, refreshToken: string }>
}


export class Login implements LoginUseCase {
    constructor (
        private readonly userRepository: UserRepository
    ){ }



    async execute(email: string, password: string): Promise<{ user: PublicUserEntity, accessToken: string, refreshToken: string }> {
        const user = await this.userRepository.findByEmail(email)
        if (!user) {
            throw new Error('User not found')
        }
        if (user.password !== password) {
            throw new Error('Invalid password')
        }

        const accessToken = 'accesstoken'
        const refreshToken = 'refreshtoken'

        return { user, accessToken, refreshToken }
    }

    
}