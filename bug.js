const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Error:  UnhandledPromiseRejectionWarning: Error: listen EADDRINUSE: address already in use :::8080
//This error occurs when you try to start a server on a port that is already in use by another process.
//This is a common error when developing Node.js applications.