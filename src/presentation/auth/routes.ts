import { Router } from "express"
import { AuthController } from "./controller"
import { Login } from "../../domain/use-cases/auth/login"
import { Register } from "../../domain/use-cases/auth/register"
import { UserDatasource } from "../../infraestructure/datasources/user.datasource"

export class AuthRoutes {
    static get router(): Router {
        const router = Router()

        const userDatasource = new UserDatasource()

        const loginUseCase = new Login(userDatasource)
        const registerUseCase = new Register(userDatasource)

        
        const authController = new AuthController(loginUseCase, registerUseCase)


        router.post('/login', authController.login)
        router.post('/register', authController.register)
        
        return router
    }
}