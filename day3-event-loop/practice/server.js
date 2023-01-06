const http = require('http');
const fs = require('fs');
const { route } = require('./routes');

const server = http.createServer(route);

server.listen(3000);