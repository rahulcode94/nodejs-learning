const User = require("../Model/user")

async function handleGetAllUser(req, res) {
    const alldbusers = await User.find({});
    return res.json(alldbusers);
}

async function handleGetUerById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" }); 
    return res.json(user)

}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" })
    return res.json({ status: "Success" })

}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" })

}

async function handleCreateUser(req,res) {
     const body = req.body;
    console.log(body)

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,

    })

    console.log("result", result)

    return res.status(201).json({ message: "success" , id:result._id})
    
}


module.exports = {
    handleGetAllUser,
    handleGetUerById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser,
}