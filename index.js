const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()
const http = require('http');
const expressServer = http.createServer(app)
const port = 5000 || process.env.PORT;


const {Server} = require("socket-io")
const io = new Server(expressServer)

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

expressServer.listen(port, () => {
    console.log("Server Run At 5000");
})