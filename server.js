const http = require('http');
const fs = require('fs');

const requestListener = (req, res) => {
    serveCss(req, res);
    if (req.url === '/') {
        fs.readFile('./AdminLogin.html', function (err, htmlPage) {
            if (err) {
                res.end('error has been occured');
            }
            res.writeHeader(200, { 'Content-Type': 'text/html' });
            res.write(htmlPage);
            res.end();
        });
    }
};

const serveCss = (req, res) => {
    if (req.url.indexOf('.css') !== -1) {
        fs.readFile(req.url.substr(1), function (err, css) {
            if (err) {
                res.end('error has been occured');
            }
            res.writeHeader(200, { 'Content-Type': 'text/css' });
            res.write(css);
            res.end();
        });
    }
};

http.createServer(requestListener).listen(process.env.PORT || 8080);