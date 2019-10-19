const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine(line) {
  const m = parseInt(line.toString());
  main(m);
  process.exit();
}

function main(m) {
  // your code here
}

module.exports = readLine;
