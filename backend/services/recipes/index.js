require('../../db');
const express = require('express');
const cors = require('cors');
const recipeRouter = require('./router');
const config = require('../../config/index.js');

const api = express();

api.use(express.json());

// api.use((err, req, res, next) => {
//   if(err.name === 'UnauthorizedError') {
//     res.status(401).send({
//       error: true,
//       message: 'You need to log in in order to perform this action'
//     });
//   }
// });
api.use(cors());
api.use('/api/recipes', recipeRouter);

api.listen(config.get('ports').recipes, err => {
    if (err) {
      return console.log('Error happened while starting the recipes service: ', err);
    }
    console.log('Recipes service successfully started on port', config.get('ports').recipes);
});

