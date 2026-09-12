//require mongose
const mongoose = require("mongoose")

//created schema
const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectUrl:{
        type:String,
        required:true,
        
    },
    visitHistory:[{timestamp:{type:Number}}],

},
{timestamps:true}
)

//created model
const URL = mongoose.model("url",urlSchema)

//export url
module.exports = URL;