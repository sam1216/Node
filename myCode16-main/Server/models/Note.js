const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment")

const NoteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: moment().format('Do MMMM YYYY, dddd , h:mm:ss a')
    }
})

module.exports = mongoose.model("notes", NoteSchema)