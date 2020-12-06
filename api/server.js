const express = require("express")
const bodyParser = require("body-parser")
const db = require("./models")
const cors = require("cors")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

db.sequelize.sync()

app.get("/", (req, res) => {
    console.log("hello?")
    res.sendFile(path.join(__dirname, '../client/index.html'), (err) => {
        if(err)
            console.log(err)
    })
})

app.post("/", (req, res) => {
    console.log(req.body)
    res.redirect("/")
})

app.use(express.static("client"))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`)
})