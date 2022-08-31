import express from "express"
import path from "path"
import reloader from "./reloader.js"

const server = express()
const PORT = process.env.PORT || 3000


server.use(express.static('./build'))
reloader(server)

server.get('/*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'))
})



server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server started on http://localhost:${PORT}`)
})