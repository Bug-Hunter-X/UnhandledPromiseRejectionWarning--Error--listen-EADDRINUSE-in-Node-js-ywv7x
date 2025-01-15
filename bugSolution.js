const http = require('http');
const net = require('net');

function isPortAvailable(port) {
  return new Promise((resolve, reject) => {
    const tester = net.createServer()
      .once('error', err => {
        if (err.code === 'EADDRINUSE') {
          resolve(false);
        } else {
          reject(err);
        }
      })
      .once('listening', () => {
        tester.close();
        resolve(true);
      })
      .listen(port);
  });
}

async function startServer(port) {
  const portAvailable = await isPortAvailable(port);

  if (portAvailable) {
    const requestListener = function (req, res) {
      res.writeHead(200);
      res.end('Hello, World!');
    };

    const server = http.createServer(requestListener);

    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } else {
    console.error(`Port ${port} is already in use.`);
  }
}

const port = 8080;
startServer(port); 
