const mongoose = require("mongoose")
const express = require("express")

const app = express()
port = 3000

app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb://localhost:27017/first-app")
    .then(() => console.log("Connected to db"))
    .catch(err => console.log(err))



const myschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
},
    { timestamps: true }
)

//model 
const User = mongoose.model("user",myschema)


app.get("/", (req, res) => {
    console.log(req)
    res.end("helo rlj")
})


app.post("/api/user",async(req,res)=>{
    const body = req.body
    console.log(body)

    const result = await User.create({
        firstname:body.first_name,
        lastname:body.last_name,
        email:body.email,
    })

    console.log(result)
    return res.status(201).json({meassage:"Success"})
})

app.listen(3000, () => console.log("practice of crud"))