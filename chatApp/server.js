const path = require("path")
const http = require("http")
const express = require("express")
const socketio = require("socket.io")
let formatMessage = require("./utils/messages")
let {userJoin, getCurrentUser} = require("./utils/users")

const app = express()
const server = http.createServer(app) 
const io = socketio(server)

app.use(express.static(path.join(__dirname, "public")))

io.on("connection", socket => {
  
  socket.on("joinRoom", ({username, room}) => {
    let user = userJoin(socket.id, username, room)
    
    socket.join(user.room)
    socket.emit("message", formatMessage("chatapp", "welcome"))
    socket.broadcast
    .to(user.room)
    .emit("message", 
    formatMessage("chatapp", `${user.username} joined`))

  })


  socket.on("chatMessage", (msg) => {
  io.emit("message", formatMessage("", msg));
  })

  
  socket.on("disconnect", () => {
    io.emit("message", "a user has left the chat")
  })
})

const PORT = 3000 || process.env.PORT

server.listen(PORT, () => console.log("server running " + (PORT)))



