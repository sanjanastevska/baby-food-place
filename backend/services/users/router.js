const express = require('express');
const controller = require('../../contollers/users');

const userRouter = express.Router();

userRouter.post('/register', controller.register)
    .post('/login', controller.login)
    .get('/activate-account/:email/:token', controller.activateAccount)
    .patch('/:id', controller.update)

  
module.exports = userRouter;