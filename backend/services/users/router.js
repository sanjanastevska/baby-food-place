const express = require('express');
const controller = require('../../contollers/users');

const userRouter = express.Router();

userRouter.post('/register', controller.register)
    .post('/login', controller.login)
    .post('/activate-account', controller.activateAccount)
    .patch('/:id', controller.update)
    .delete('/:id', controller.del)

  
module.exports = userRouter;