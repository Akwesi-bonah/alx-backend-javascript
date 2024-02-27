const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const lines = fs.readFileSync(path, 'utf-8').toString()
    .trim().split('\n');
  const groups = {};
  const fields = lines[0].split(',');
  const students = fields.slice(0, fields.length - 1);
  for (const line of lines.slice(1)) {
    const record = line.split(',');
    const value = record.slice(0, record.length - 1);
    const field = record[record.length - 1];
    if (!Object.keys(groups).includes(field)) {
      groups[field] = [];
    }
    const entries = students.map((name, idx) => [name, value[idx]]);
    groups[field].push(Object.fromEntries(entries));
  }
  const totals = Object.values(groups)
    .reduce((prev, cur) => (prev || []).length + cur.length);
  console.log(`Number of students: ${totals}`);
  for (const [dept, group] of Object.entries(groups)) {
    const names = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${dept}: ${group.length}. List: ${names}`);
  }
};

module.exports = countStudents;
