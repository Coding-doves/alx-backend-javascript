/** 
 * create an HTTP server
 */

const http = require('http');
const fs = require('fs');

const hostname  = '127.0.0.1';
const port = 1245;

const countStudents = ((path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const fieldCnt = {};
      const fields = {};
      let totStudent = 0;
      let res = '';

      for (let i = 1; i < lines.length; i += 1) {
        const col = lines[i].split(',');
        const fName = col[0];
        const field = col[3];

        if (field in fieldCnt) {
          fieldCnt[field] += 1;
          fields[field].push(fName);
        } else {
          fieldCnt[field] = 1;
          fields[field] = [fName]
        }
        totStudent += 1;
      }

      res += `Number of students: ${totStudent}\n`;

      for (const field in fieldCnt) {
        if (field) {
          res += `Number of students in ${field}: ${fieldCnt[field]}. List: ${fields[field].join(',')}\n`;
        }
      }
      resolve(res);
    });
  });
});

//creatin the server
const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.statusCode = 200;
    //set header
    response.setHeader('Content-Type', 'text/plain');
    // Response body
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.statusCode = 200;
    //set header
    response.setHeader('Content-Type', 'text/plain');
    // Response body
    countStudents(process.argv[2])
    .then((outpt) => {
      response.end(`This is the list of our students\n${outpt}`);
    })
    .catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Not Found');
  }
});

// start server
app.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});

module.exports = app;
