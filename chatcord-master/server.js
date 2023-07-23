const path = require("path")
const http = require("http")
const express = require("express")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, "public")))

io.on("connection" , socket => {

    socket.emit("message" , "welcome to ChatCord")

    socket.broadcast.emit("message" , "A User Joined chat")

    socket.on("disconnect" , ()=>{
        io.emit("message" , "a user has left chat")
    })

    socket.on("chatMessage", msg => {
        console.log(msg);
    })
})

const PORT = 3000 || process.env.PORT    

server.listen(PORT, ()=> console.log("server running" + " " + PORT))