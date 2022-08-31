import express from "express"
import path from "path"

const server = express()
const PORT = process.env.PORT || 3000
const SessionKey = Date.now().toString()


server.use(express.static('./build'))

if (process.env.MODE === "dev") {
    server.get('/getSessionKey', (req, res) => {
        res.send(SessionKey)
    })
} else {
    server.get('/getSessionKey', (req, res) => {
        res.send('none')
    })
}

server.get('/*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'))
})


server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server started on http://localhost:${PORT}`)
})