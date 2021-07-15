const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    branch: String,

    backlog: Number,

    location: {
        type: String,
        required: true
    },

    agreement: Number,

    interview: {
        type: String, 
        required: true
    },

    ctc: {
        type: String,
        required: true
    },

    description: String
});

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;