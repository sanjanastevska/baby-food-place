const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    preparationTime: {
        type: Number,
        required: true
    },
    numberPeople: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);