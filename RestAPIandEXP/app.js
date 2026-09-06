const express = require("express")

//using file system to add data in mock
const fs = require("fs")

//require users
const users = require("./MOCK_DATA.json")
const { json } = require("stream/consumers")

const app = express()
//port
const port = 8000

//middleware to make a accept post request
app.use(express.urlencoded({extended:false}))

//route
//html document rendering
app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li> ${user.first_name}</li>`)}.join
    </ul>
    `;
    res.send(html);
})

//json 
// get/users
app.get("/api/users", (req, res) => {
    return res.json(users)
})

// dynamic path parameters to get users GET /api/users/:id
// :id - veriable dynamic
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
});

//post request create new user 
app.post("/api/users", (req, res) => {
    const body = req.body;
    //console.log("Body",body)

    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data)=>{
        return res.json({status:"Success", id:users.length})
    })


    //return res.json({status:"pending"})

})

//we can make same requiest for common path
app.route("/api/users/:id")
    .patch((req, res) => {
        return res.json({ status: "pending" })

    })
    .delete((req, res) => {
        return res.json({ status: "pending" })

    })




app.listen(port, () => console.log(`Server Started at Port ${port}`))