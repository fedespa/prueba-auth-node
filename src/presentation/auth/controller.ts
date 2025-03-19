import { Request, Response } from "express";
import { Login } from "../../domain/use-cases/auth/login";
import { Register } from "../../domain/use-cases/auth/register";

export class AuthController {
    constructor(
        private readonly loginUseCase: Login,
        private readonly registerUseCase: Register
    ) { }

    public login = (req: Request, res: Response) => {
        const { email, password } = req.body

        if (!email) {
            res.status(400).json({ message: 'Email is required' })
            return
        }

        if (!password) {
            res.status(400).json({ message: 'Password is required' })
            return
        }

        this.loginUseCase.execute(email, password)
            .then((result) => {
                const { user, accessToken, refreshToken } = result

                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                })

                res.cookie('accessToken', accessToken, {
                    httpOnly: true,
                    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
                })

                res.status(200).json({ user })
            })
            .catch(err => {
                res.status(400).json({ message: err.message ?? "Ha sucedido un error" })
            })
    }

    public register = (req: Request, res: Response) => {
        const { email, password } = req.body
        console.log(email, password)

        if (!email) {
            res.status(400).json({ message: 'Email is required' })
            return
        }

        if (!password) {
            res.status(400).json({ message: 'Password is required' })
            return
        }

        this.registerUseCase.execute(email, password)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(400).json({ message: err.message ?? "Ha sucedido un error" })
            })
    }

}