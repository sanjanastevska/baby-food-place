require('../../db');
const express = require('express');
// const jwt = require('express-jwt');
const userRouter = require('./router');
const config = require('../../config/index.js');

const api = express();

api.use(express.json());

// api.use(jwt({
//   secret: config.get('auth').jwt_key,
//   algorithms: ['HS256']
// }).unless({
//   path: [
//     'api/users/register',
//     'api/users/login'
//   ]
// }));

api.use((err, req, res, next) => {
  if(err.name === 'UnauthorizedError') {
    res.status(401).send({
      error: true,
      message: 'You need to log in in order to perform this action'
    });
  }
});

api.use('/api/users', userRouter);

api.listen(config.get('ports').users, err => {
    if (err) {
      return console.log('Error happened while starting the users service: ', err);
    }
    console.log('Users service successfully started on port', config.get('ports').users);
});

