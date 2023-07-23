const path = require("path")
const http = require("http")
const express = require("express")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, "public")))

io.on("connection", socket => {

    socket.emit("message", "welcome")
    socket.broadcast.emit("message", "a user has been join")

   socket.on("disconnect", () => {
    io.emit("message", "a user has left the chat")
   })

   socket.on("chatMessage", (msg) => {
    console.log("message" , msg);
   })
 })

const PORT = 3000 || process.env.PORT

server.listen(PORT, () => console.log("server running" + (PORT)))



