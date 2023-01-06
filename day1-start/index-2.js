const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;

    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write(fs.readFileSync('index-2.html'));
    } else if (url === '/message') {
        console.log(req);
        res.write(fs.readFileSync('index.html'));
    }
    res.end();
});

server.listen(80);
