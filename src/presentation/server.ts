import express, { Router } from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

export class Server {
    public readonly app = express()

    constructor (){
        this.configure()
    }

    private configure() {
        this.app.use(cors({
            origin: "*", // ⚠️ Permitir todas (mejor especificar dominio en producción)
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"]
        }))
        this.app.use(cookieParser())
        this.app.use(express.json())
    }


    public setRoutes(routes: Router){
        this.app.use(routes)
    }

    public start() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`)
        })
    }
}