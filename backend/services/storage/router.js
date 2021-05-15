const express = require('express');
const controller = require('../../contollers/storage');

const storageRouter = express.Router();

storageRouter
    .get('/:files', controller.fetch)
    .get('/files/:filename', controller.downloadFile)
    .post('/upload', controller.upload)
    .delete('/files/:filename', controller.del);

module.exports = storageRouter;