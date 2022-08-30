import express from "express"

const server = express()
const PORT = process.env.PORT || 3000
const SessionKey = Date.now().toString()


server.use(express.static('./build'))

server.get('/', (req, res) => {
    res.sendFile('./index.html')
})

if (process.env.MODE === "dev") {
    server.get('/getSessionKey', (req, res) => {
        res.send(SessionKey)
    })
} else {
    server.get('/getSessionKey', (req, res) => {
        res.send('none')
    })
}

server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server started on http://localhost:${PORT}`)
})