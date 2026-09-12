const mongoose = require("mongoose")

async function connectTOMongo(url) {
    return mongoose.connect(url)
    
}

module.exports = {
    connectTOMongo,
}