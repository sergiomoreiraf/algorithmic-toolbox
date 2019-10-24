const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine(line) {
  const n = parseInt(line);
  main(n);
  process.exit();
}

function main(m) {
  // your code here
}

module.exports = readLine;
