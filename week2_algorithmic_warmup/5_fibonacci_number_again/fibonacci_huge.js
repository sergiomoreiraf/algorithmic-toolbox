const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine(line) {
  const n = parseInt(line.split(' ')[0]);
  const m = parseInt(line.split(' ')[1]);
  main(n, m);
  process.exit();
}

function main(n, m) {
  // your code here
}

module.exports = readLine;
