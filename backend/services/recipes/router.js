const express = require('express');
const controller = require('../../contollers/recipes');

const recipeRouter = express.Router();

recipeRouter
    .get('/newest', controller.newestRecipes)
    .get('/popular', controller.popularRecipes)
    .get('/filter', controller.filterByCategory)
    .get('/', controller.fetch)
    .get('/user-recipes', controller.fetchRecipesByUser)
    .get('/:id', controller.fetchOne)
    .post('/', controller.create)
    .patch('/:id', controller.update)
    .patch('/rating/:id', controller.rate)
    .delete('/:id', controller.del)

  
module.exports = recipeRouter;