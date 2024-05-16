const mongoose = require("mongoose")

const connectToMongoDB = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/Code16')
    .then(() => {
        console.log("Connected to MongoDB");
    })  
    .catch(error => {
        console.log("MongoDB not connected");
    })
}

module.exports = connectToMongoDB