const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine(line) {
  const m = parseInt(line.split(' ')[0]);
  const n = parseInt(line.split(' ')[1]);
  main(m, n);
  process.exit();
}

function main(m, n) {
  // your code here
}

module.exports = readLine;
