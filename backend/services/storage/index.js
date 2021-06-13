const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const config  = require('../../config/index');
const router = require('./router');

const api = express();

api.use(cors());
api.use(fileUpload());
// api.use('/uploads',express.static('public/uploads'));
// api.use('/uploads', express.static(path.join(process.cwd() + '/uploads')));
api.use('/api/storage', router);

api.use('/',express.static(`${__dirname}/../../../frontend/public/uploads`));
// api.get('/', function(req, res) {
//   res.sendFile(path.join(process.cwd() + '/index.html'));
// });


api.listen(config.get('ports').storage, err => {
    if (err) {
      return console.log('Error happened while starting the storage service: ', err);
    }
    console.log('Storage service successfully started on port', config.get('ports').storage);
});