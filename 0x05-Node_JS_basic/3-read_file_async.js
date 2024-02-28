const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1);
      const fieldCnt = {};
      const fields = {};
      let totStudent = 0;

      for (const line of lines) {
        const [fName, , , field] = line.split(',').map((item) => item.trim());

        if (field in fieldCnt) {
          fieldCnt[field] += 1;
          fields[field].push(fName);
        } else {
          fieldCnt[field] = 1;
          fields[field] = [fName];
        }
        totStudent += 1;
      }

      console.log(`Number of students: ${totStudent}`);

      for (const field in fieldCnt) {
        if (fieldCnt.hasOwnProperty(field)) {
          console.log(`Number of students in ${field}: ${fieldCnt[field]}. List: ${fields[field].join(',')}`);
        }
      }
      resolve();
    });
  });
};

module.exports = countStudents;
