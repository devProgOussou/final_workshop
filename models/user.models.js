const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: isEmail,
            message: '{VALUE} n\'est pas un email valide!'
        },
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024
    }
})

module.exports = mongoose.model('User', userSchema);