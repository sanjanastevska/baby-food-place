const express = require('express');
const controller = require('../../contollers/users');

const userRouter = express.Router();

userRouter.post('/register', controller.register)
    .post('/login', controller.login)
    // .patch('/:id', controller.update)
    // .delete('/:id', controller.del)
    // .get('/refresh-token', controller.refresh_token);

    
module.exports = userRouter;