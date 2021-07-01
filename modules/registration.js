const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    usn: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})


//creating collection

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;