import fs from 'fs';

const readDatabase = (filepath) => {
  const students = {};
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const firstLine = lines.slice(1);
        for (let i = 0; i < firstLine.length; i += 1) {
          if (firstLine[i]) {
            const field = firstLine[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });
};

module.exports = readDatabase;
