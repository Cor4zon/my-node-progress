const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const Router = express.Router()

Router.use('/', (req, res, next) => {
    console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    res.render('shop', { products: adminData.products, title: 'PUUUG' });
});

module.exports = Router;