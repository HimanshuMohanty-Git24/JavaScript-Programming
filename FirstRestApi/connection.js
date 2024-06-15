const mongoose = require("mongoose");

async function connectMongoDB(url){
    //Database Connection
    return mongoose.connect(url)
}

module.exports = {
    connectMongoDB
}