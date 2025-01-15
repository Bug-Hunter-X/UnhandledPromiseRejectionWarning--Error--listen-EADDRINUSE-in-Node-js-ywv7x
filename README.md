# UnhandledPromiseRejectionWarning: Error: listen EADDRINUSE in Node.js

This repository demonstrates a common Node.js error and its solution. The error, 'UnhandledPromiseRejectionWarning: Error: listen EADDRINUSE', occurs when a server attempts to bind to a port that's already in use.  The solution involves checking for port availability and handling the error gracefully.

## Bug

The `bug.js` file contains a simple HTTP server that listens on port 8080. If another process is already using this port, the server will throw the `EADDRINUSE` error.

## Solution

The `bugSolution.js` file demonstrates a more robust approach. It includes error handling and a mechanism to check if the port is available before attempting to bind to it.