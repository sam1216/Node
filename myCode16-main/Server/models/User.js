const mongoose = require("mongoose");
const {Schema} = mongoose;
//-------We can use this moment to store time with format--
const moment = require("moment")


const userSchema = new Schema({
    name: {
        type: String,
         required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "./public/uploads/1715061180820-.jpeg"
    },
    date: {
        type: String,
        default: moment().format('Do MMMM YYYY, dddd , h:mm:ss a')
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User;