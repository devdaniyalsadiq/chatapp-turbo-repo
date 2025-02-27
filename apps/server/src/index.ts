import { createServer } from "http"
import SocketService from "./services/socket"

async function init() {
  const httpServer = createServer()
  const PORT = process.env.PORT ? process.env.PORT : 8000

  const socketService = new SocketService()
  socketService.io.attach(httpServer)
  httpServer.listen(PORT, () => {
    console.log(`HTTP Server started at PORT:${PORT}`)
  })

  socketService.initListener()
}

init()
