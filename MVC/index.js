const express = require("express")
const {connectMongoDb} = require("./db")
const userRouter = require("./routes/user")

const app = express()
const port = 8000
connectMongoDb("mongodb://localhost:27017/first-app").then(()=> console.log("Mondodb Connected!"))

app.use(express.urlencoded({extended:false}))



//it means it will go to route and match /user/:id
app.use("/user",userRouter)

app.listen(port, ()=> console.log("MVC started"))