const fs = require('fs');

const requestHandler = (req, res) => {
    const method = req.method;
    const url = req.url;

    if (url === "/") {
      res.write(fs.readFileSync('./index.html'));
      return res.end();
    }
  
    if (url === "/createuser" && method === 'POST') {
      console.log('POST');
      const body = [];

      req.on('data', chunk => body.push(chunk));
      req.on('end', () => console.log(Buffer.concat(body).toString().split('=')[1]));

      res.setHeader('Location', '/');
      res.statusCode = 301;

      return res.end();
    }
  
    if (url === "/users") {
      res.write("<div>");
      res.write(`<ul>`);
      res.write("<li>A</li>");
      res.write("<li>D</li>");
      res.write("<li>b</li>");
      res.write("</ul>");
      res.write("</div>");
  
      return res.end();
    }
};

module.exports = {
  route: requestHandler,
};
