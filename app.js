const http = require('node:http'); // Load the built-in HTTP module

const hostname = '127.0.0.1'; // Localhost
const port = 3000;           // Port number

// Create the server and define its behavior
const server = http.createServer((req, res) => {
  res.statusCode = 200;                         // Success status code
  res.setHeader('Content-Type', 'text/plain');  // Define text format
  res.end('Hello, World! Your Node.js server is working.\n'); 
});

// Start listening for traffic on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
