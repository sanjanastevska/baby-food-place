const express = require('express');
const controller = require('../../contollers/recipes');

const recipeRouter = express.Router();

recipeRouter
    .get('/newest', controller.newestRecipes)
    .get('/popular', controller.popularRecipes)
    .get('/', controller.fetch)
    .get('/:id', controller.fetchOne)
    .post('/', controller.create)
    .patch('/:id', controller.update)
    .delete('/:id', controller.del)

  
module.exports = recipeRouter;