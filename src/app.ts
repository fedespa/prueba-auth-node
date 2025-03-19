import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"
import "dotenv/config"

(() => {
    main()
})()

function main(){
    const server = new Server()

    server.setRoutes(AppRoutes.routes)

    server.start()
}