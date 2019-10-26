const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  a = [],
  m,
  b = [];

function readLine(line) {
  if (n === undefined) {
    n = parseInt(line);
    return;
  }
  if (a.length === 0) {
    a = line.split(' ').map(x => {
      parseInt(x);
    });
    return;
  }
  if (m === undefined) {
    m = parseInt(line);
    return;
  }
  b = line.split(' ').map(x => {
    parseInt(x);
  });
  main(n, a, m, b);
  process.exit();
}

function main(n, a, m, b) {
  // your code here
}

module.exports = readLine;
