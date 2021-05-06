const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: ['Firstname is a required field']
    },
    lastName: {
        type: String,
        required: ['Lastname is a required field']
    },
    email: {
        type: String,
        unique: true,
        required: ['Email is a required field']
    },
    password: {
        type: String,
        required: ['Password is a required field']
    },
    avatar: {
        type: String 
    },
    dateOfBirth: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);