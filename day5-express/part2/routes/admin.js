const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const Router = express.Router()

Router.use('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

module.exports = Router;