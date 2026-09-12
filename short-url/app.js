const express = require("express")
const {connectTOMongo} =require("./connect") 
const urlRoute = require("./routes/url")

const app = express()
const port = 8001;

connectTOMongo("mongodb://localhost:27017/first-app");
app.use("/url",urlRoute)

app.use(express.json())

app.listen(port, ()=> console.log("url shortner server is started..."))