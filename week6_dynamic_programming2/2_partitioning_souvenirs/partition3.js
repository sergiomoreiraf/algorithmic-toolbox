const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  v = [];

function readLine(line) {
  if (n === undefined) {
    n = parseInt(line);
    return;
  }
  v = line.split(' ').map(x => {
    return parseInt(x);
  });
  main(n, v);
  process.exit();
}

function main(n, v) {
  // your code here
}

module.exports = readLine;
