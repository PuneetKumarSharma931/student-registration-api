
const mongoose = require('mongoose');
const validator = require('validator');

const Studentschema = new mongoose.Schema({

    Name: {
        required: true,
        type: String,
        minlength: 3
    },

    Email: {

        required: true,
        unique: [true, "Email Id already exist!"],
        type: String,
        validate(value) {

            if(!validator.isEmail(value)) {

                throw new Error("Email is wrong please input right email!");
            }
        }
    },

    Phone: {

        type: Number,
        required: true,
        unique: true,
        min: 10
    },

    Address: {

        type: String,
        required: true,
        minlength: 2
    }
});

const Student = new mongoose.model('Student', Studentschema);

module.exports = Student;