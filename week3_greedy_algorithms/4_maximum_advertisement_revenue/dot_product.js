const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n, a, b;

function readLine(line) {
  if (n === undefined) {
    n = parseInt(line.toString());
    return;
  }
  if (a === undefined) {
    a = line
      .toString()
      .split(' ')
      .map(function(x) {
        return parseInt(x);
      });
    return;
  }
  b = line
    .toString()
    .split(' ')
    .map(function(x) {
      return parseInt(x);
    });
  main(n, a, b);
  process.exit();
}

function main(n, a, b) {
  // your code here
}

module.exports = readLine;
