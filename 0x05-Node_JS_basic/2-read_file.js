const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
      if (field) {
        console.log(`Number of students in ${field}: ${fieldCnt[field]}. List: ${fields[field].join(',')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
