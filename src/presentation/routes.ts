import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router()
        
        router.use("/api/auth", AuthRoutes.router)
        router.get("/", (req, res) => {
            res.json({ message: "Hello World" })
        })

        return router
    }
}