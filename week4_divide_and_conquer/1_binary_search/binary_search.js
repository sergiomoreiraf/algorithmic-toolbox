const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  a = [],
  k,
  b = [];

function readLine(line) {
  if (n === undefined) {
    a = line
      .toString()
      .split(' ')
      .map(x => {
        return parseInt(x);
      });
    n = a.shift();
    return;
  }
  b = line
    .toString()
    .split(' ')
    .map(x => {
      return parseInt(x);
    });
  k = b.shift();
  main(n, a, k, b);
  process.exit();
}

function main(n, a, k, b) {
  // your code here
}

module.exports = readLine;
