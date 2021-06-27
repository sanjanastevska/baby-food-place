require('../../db');
const express = require('express');
const cors = require('cors');
const userRouter = require('./router');
const config = require('../../config/index.js');

const api = express();

api.use(express.json());
api.use(cors());
api.use('/api/users', userRouter);

api.listen(config.get('ports').users, err => {
    if (err) {
      return console.log('Error happened while starting the users service: ', err);
    }
    console.log('Users service successfully started on port', config.get('ports').users);
});

