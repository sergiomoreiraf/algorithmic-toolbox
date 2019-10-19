const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n;

function readLine(line) {
  n = parseInt(line.toString());
  main(n);
  process.exit();
}

function main(n) {
  // your code here
}

module.exports = readLine;
