const express = require('express');
const controller = require('../../contollers/storage');

const storageRouter = express.Router();

storageRouter.post('/upload', controller.upload)
      .get('/files/:name', controller.download)

module.exports = storageRouter;