const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const ShopRouter = require('./routes/shop');
const AdminRouter = require('./routes/admin').router;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', AdminRouter);

app.use('/', ShopRouter);

app.use((err, res, req, next) => {
    console.log(err);
    res.status(404).send('<h1>Not Found</h1>');
});

app.listen(3000);


