
import express from "express"
import { createServer } from "http"
import path from "path"
import reloader from "./reloader.js"
import ip from "ip"

import DataBase from "./dbparser.js"
import { Server } from "socket.io"

const server = express()
const httpServer = createServer(server)
const PORT = process.env.PORT || 3000
const MODE = process.env.MODE || 'dev'

const DB = new DataBase('./db/notes.json')
const io = new Server(httpServer)

io.on("connection", socket => {
    socket.emit("change", DB.data)
    socket.on("change", async data => {
        DB.data = data
        socket.broadcast.emit('change', DB.data)
        DB.save()
    })
})

server.use(express.static('./build'))
server.use(express.json())
reloader(server)

server.get('/api/info', (req, res) => {
    res.json({
        mode: MODE,
    })
})

server.get('/*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'))
})

httpServer.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server setting mode "${MODE}"`)
    console.log(`React-base custom server avaliable on`)
    console.log(`Localhost => http://localhost:${PORT}`)
    console.log(`Onlinehost => http://${ip.address()}:${PORT}`)
})