const express = require('express');
const productsController = require('../controllers/products');

const Router = express.Router()

Router.use('/', productsController.getProducts);

module.exports = Router;