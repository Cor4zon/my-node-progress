const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write(fs.readFileSync('index.html'));
        return res.end();
    }
     if (url === '/message' && method === 'POST') {
        const body = [];
        // listen for chunk of data
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        // listen for end of parsing request data
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            fs.writeFileSync('text.txt', parsedBody.split('=')[1]);
        });
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.write(fs.readFileSync('index-2.html'));
    res.end();
});

server.listen(80);
