const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  a = [];

function readLine(line) {
  if (n === undefined) {
    n = parseInt(line.toString());
    return;
  }
  a = line
    .toString()
    .split(' ')
    .map(x => {
      return parseInt(x);
    });
  main(n, a);
  process.exit();
}

function main(n, a) {
  // your code here
}

module.exports = readLine;
