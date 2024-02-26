const fs = require('fs');

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

      console.log(`Number of students: ${totStudent}`);

      for (field in fieldCnt) {
        if (field) {
          console.log(`Number of students in ${field}: ${fieldCnt[field]}. List: ${fields[field].join(',')}`);
        }
      }
      resolve();
    });
  });
});

module.exports = countStudents;
