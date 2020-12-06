const express = require("express")
const bodyParser = require("body-parser")
const db = require("./models")
const cors = require("cors")
const app = express()
const path = require("path")
const userController = require("./controllers/UserController")
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use("/api", userController)

db.sequelize.sync()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'), (err) => {
        if(err)
            console.log(err)
    })
})

app.use(express.static("client"))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`)
})