const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;

    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write(fs.readFileSync('index.html'));
    } else {
        res.write(fs.readFileSync('index-2.html'));
    }
    res.end();
});

server.listen(80);
