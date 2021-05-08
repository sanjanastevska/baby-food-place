const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Firstname is a required field']
    },
    lastName: {
        type: String,
        required: [true, 'Lastname is a required field']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is a required field']
    },
    password: {
        type: String,
        minlength: [8, 'At least 8 chars'],
        required: [true, 'Password is a required field']
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

const User = mongoose.model('User', userSchema);
module.exports = { User };

