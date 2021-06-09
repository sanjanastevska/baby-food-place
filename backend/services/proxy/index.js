const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');
const config = require('../../config/index');

const app = express();

app.use('/api/users', proxy(
    `http://localhost:${config.get('ports').users}`,
    { 
        limit: '5mb',
        proxyReqPathResolver: (req) => {
            return `http://localhost:${config.get('ports').users}/users${req.url}`
        }
    }
));

app.use('/api/recipes', proxy(
    `http://localhost:${config.get('ports').recipes}`,
    {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${config.get('ports').recipes}/api/recipes${req.url}`
        }
    }
));

app.use('/api/storage', proxy(
    `http://localhost:${config.get('ports').storage}`,
    {
        proxyReqPathResolver: (req) => {
            return `http://localhost:${config.get('ports').storage}/api/storage${req.url}`
        }
    }
));

app.use('/images', express.static(path.resolve(__dirname, './frontend/public/images')));

const PORT = process.env.PORT || config.get('ports').proxy;

app.listen(PORT, err => {
    if(err) {
        return console.log('Could not start proxy service', err);
    }
    console.log(`Proxy service successfully started on PORT: ${PORT}...`);
});