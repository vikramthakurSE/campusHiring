const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    usn: {
        type: Number,
        required: true,
        unique: true,
        uppercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    cpassword: {
        type: String,
        required: true,
        trim: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})


//creating collection

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;