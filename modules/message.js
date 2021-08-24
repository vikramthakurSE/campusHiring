const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
    name: String,
    email: String,
    msg: String
});

const Message = new mongoose.model("Message", msgSchema);

module.exports = Message;
