const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine(line) {
  var a = parseInt(line.split(' ')[0], 10);
  var b = parseInt(line.split(' ')[1], 10);
  main(a, b);
  process.exit();
}

function main(a, b) {
  // your code here
}

module.exports = readLine;
