const http = require('http');
const express = require('express');

const app = express();

function middleware(req, res, next) {
    console.log('In first middleware');
    res.send('<h1>express</h1>');
}

app.use((req, res, next) => {
    console.log('In first middleware');
    res.statusCode =
    res.send('<h1>express</h1>');
});


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);