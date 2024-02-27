const express = require('express');
const fs = require('fs').promises;

const app = express();

const countStudents = (path) => {
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
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
  .then((data) => {
    response.end(`This is the list of our students\n${outpt}`);
  })
  .catch(() => {
    response.statusCode = 404;
    response.end('Cannot load the database');
  });
})

app.listen(1245);

module.exports = app;
