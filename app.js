const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.post("/api/data", (req, res) => {
    const data = req.body
    console.log(data)
    res.send(data)
})

app.get("/html", (req, res) => {
	const filePath = path.join(__dirname, "app.html")
	fs.readFile(filePath, 'utf8', (err, data) => {
		res.send(data)
	})
})

app.listen(3000, () => {
    console.log("Server listening on http://localhost:3000")
})