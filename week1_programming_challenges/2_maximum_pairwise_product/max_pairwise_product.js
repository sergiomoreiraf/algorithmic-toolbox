const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n;

function readLine(line) {
  if (!n) {
    n = parseInt(line.toString());
    return;
  }
  const a = line.split(' ').map(value => {
    return parseInt(value);
  });

  main(n, a);

  process.exit();
}

function main(n, a) {
  // your code here
}

module.exports = readLine;
