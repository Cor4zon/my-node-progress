const express = require('express');
const http = require('http');

const app = express();

// app.use((req, res, next) => {
//     console.log('mew');
//     next();
// })

// app.use((req, res, next) => {
//     console.log('bark');
//     next();
// })

app.use('/users', (req, res, next) => {
    console.log('mew');
    res.send('<h1>Users page</h1>')
    next();
})

app.use('/', (req, res, next) => {
    console.log('bark');
    res.send('<h1>Main page</h1>')
    next();
})

// app.listen(3000);
const server = http.createServer(app);
server.listen(3000);