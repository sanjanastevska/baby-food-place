const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: ['Full name is a required field']
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
    image: {
        type: String 
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);