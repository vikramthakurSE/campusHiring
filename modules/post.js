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

    batch: String,

    percentage: String,

    backlog: String,

    location: {
        type: String,
        required: true
    },

    role: String,

    agreement: String,

    interview: {
        type: String, 
        required: true
    },

    ctc: {
        type: String,
        required: true
    },

    link: String,

    description: String
});

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;