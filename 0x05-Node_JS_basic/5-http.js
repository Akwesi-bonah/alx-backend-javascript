const http = require('http');
const fs = require('fs');

const port = 1245;
const app = http.createServer();
const database = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(
          0,
          dbFieldNames.length - 1,
        );

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

const ROUTES = [
  {
    route: '/',
    handler(_, res) {
      const responseTxt = 'Hello Holberton School!';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseTxt.length);
      res.write(Buffer.from(responseTxt));
      res.end();
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const respParts = ['This is the list of our students'];
      countStudents(database)
        .then((report) => {
          respParts.push(report);
          const responseTxt = respParts.join('\n');
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseTxt.length);
          res.write(Buffer.from(responseTxt));
          res.end();
        })
        .catch((err) => {
          console.error(err);
          respParts.push(err instanceof Error ? err.message : err.toString());
          const responseTxt = respParts.join('\n');
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseTxt.length);
          res.write(Buffer.from(responseTxt));
          res.end();
        });
    },
  },
  {
    route: '*',
    handler(_, res) {
      const responseTxt = '404 - Not Found';
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseTxt.length);
      res.write(Buffer.from(responseTxt));
      res.end();
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of ROUTES) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(port);

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

module.exports = app;
