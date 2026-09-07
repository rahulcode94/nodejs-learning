const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 8000
app.use(express.urlencoded({ extended: false }))

//connect database
mongoose
    .connect("mongodb://localhost:27017/first-app")
    .then(() => console.log("connected to db"))
    .catch(err => console.log("Mongo Erro", err))


//schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },

},
    { timestamps: true }
);


//create model
const User = mongoose.model("user", userSchema)


//do post request
app.post("/api/users", async (req, res) => {
    const body = req.body;
    console.log(body)

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,

    })

    console.log("result", result)

    return res.status(201).json({ message: "success" })

})

//get all users
app.get("/api/users", async (req,res)=>{
    const alldbusers = await User.find({});
    return res.json(alldbusers);
})

app.route("/api/users/:id")
.get(async (req,res)=>{
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"User not found"});
    return res.json(user)
})
.patch( async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id, {lastName: "changed"})
    return res.json({status:"Success"})
})
.delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"Success"})

})

app.listen(port, () => console.log("Server Started"))