const mongoose = require('mongoose');
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    usn: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is not valid");
            } 
        }
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