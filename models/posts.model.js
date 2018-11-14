const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Posts", postSchema);