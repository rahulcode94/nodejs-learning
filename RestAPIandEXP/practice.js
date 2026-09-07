const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")


const app = express()
const port = 8000

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.end("Hello Practice")
})

app.get("/api/users", (req, res) => {
    return res.json(users)

})

//get users with there user id
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    res.json(user)
})

app.post("/api/users", (req, res) => {
    const body = req.body;
    console.log("Body", body)

    users.push({ ...body, id: users.length + 1 })
    fs.appendFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        res.json({ Status: "Sucess", id: users.length })
    })

})

app.patch("/api/users", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)

    if (!user) {
        return res.status(404).json({ massage: "user not find" })
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return res.status(404).json({ message: "Send a json object" })
    }

    for (const key of Objec)


})


app.listen(port, () => console.log("Practice starting..."))

