/** 
 * create an HTTP server
*/

const http = require('http');

const hostname  = '127.0.0.1';
const port = 1245;

//creatin the server
const app = http.createServer((request, response) => {
  response.statusCode = 200;

  //set header
  response.setHeader('Content-Type', 'text/plain');

  // Response body
  response.end('Hello Holberton School!');
});

// start server
app.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});

module.exports = app;
