const express = require("express")
const fs = require("fs")
const app = express()
const PORT = 9000

fs.mkdirSync("dist", (error) => {
    if (error) {
        console.log("the directory already exists")
    }
})
fs.writeFileSync("dist/_redirects", "/* /index.html 200", (error) => {
    if (error) {
        console.log("the file already exists")
    }
})

app.use(express.static("dist"))

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html")
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
