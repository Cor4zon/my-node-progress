const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const AdminRouter = require('./routes/admin');
const ShopRouter = require('./routes/shop');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/shop', ShopRouter);

app.use('/admin', AdminRouter);

app.use((res, req, next) => {
    res.status(404).send('<h1>Not Found</h1>');
});

app.listen(3000);


