const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    preparationTime: {
        type: Number
    },
    numberPeople: {
        type: Number
    },
    description: {
        type: String
    },
    recipe: {
        type: String
    },
    rating: {
        type: Number,
        default:0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);