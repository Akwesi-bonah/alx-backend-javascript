const welcome = 'Welcome to Holberton School, what is your name?';
const response = 'Your name is: ';
const endNote = 'This important software is now closing';

process.stdout.write(`${welcome}\n`);
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(response + name);
  }
});

process.stdin.on('end', () => {
  // eslint-disable-next-line camelcase
  process.stdout.write(`${endNote} \n`);
});
