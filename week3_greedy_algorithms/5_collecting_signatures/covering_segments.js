const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  a = [],
  b = [];

function readLine(line) {
  if (n === undefined) {
    n = parseInt(line.toString());
    return;
  }
  const _a = parseInt(line.toString().split(' ')[0], 10);
  const _b = parseInt(line.toString().split(' ')[1], 10);
  a.push(_a);
  b.push(_b);
  if (a.length === n) {
    main(n, a, b);
    process.exit();
  }
}

function main(n, a, b) {
  // your code here
}

module.exports = readLine;
