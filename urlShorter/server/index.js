const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")

const app = express()

app.use(helmet())
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())
app.use(express.static("./public"))


app.get("/url/:id", (req, res) => {
    // get a short url
  })

  
app.get("/:id", (req, res) => {
  //redirect to url
})

app.post("/:id", (req, res) => {
    // create a short url
})




const port = process.env.PORT || 571

app.listen(port, () => {
    console.log(`listenning http://localhost:${port}`);
})















