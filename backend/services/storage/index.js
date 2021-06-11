const express = require('express');
const jwt = require('express-jwt');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const config  = require('../../config/index');
const router = require('./router');

const api = express();

// api.use(jwt({
//     secret: config.get('auth').jwt_key,
//     algorithms: ['HS256']
// }));

// api.use((err, req, res) => {
//     if (err.name === 'UnauthorizedError') {
//       res.status(401).send({
//         error: true,
//         message: 'You need to log in in order to perform this action'
//       });
//     }
// });

api.use(cors());
api.use(fileUpload());

api.use('/api/storage', router);

api.listen(config.get('ports').storage, err => {
    if (err) {
      return console.log('Error happened while starting the storage service: ', err);
    }
    console.log('Storage service successfully started on port', config.get('ports').storage);
});