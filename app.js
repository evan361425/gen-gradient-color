const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
  // parse URL
  const parsedUrl = url.parse(req.url);
  // extract URL path
  let pathname = `.${parsedUrl.pathname}`;
  // based on the URL path, extract the file extention. e.g. .js, .doc, ...
  const ext = path.parse(pathname).ext;
  // get filename
  const filename = ext === '.js' ? 'dist/index.js' : 'index.html';
  const filepath = path.join(__dirname, filename);
  // console.log(parsedUrl, path.parse(pathname), ext);
  // read file from file system
  fs.readFile(filepath, function(err, data){
    res.statusCode = 200;
    res.setHeader('Content-type', ext === '.js' ? 'text/javascript' : 'text/html' );
    res.end(data);
  });
}).listen(port, hostname);
