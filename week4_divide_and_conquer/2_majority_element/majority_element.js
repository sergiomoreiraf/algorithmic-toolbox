const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  a = [];

function readLine(line) {
  if (n === undefined) {
    n = parseInt(line);
    return;
  }
  a = line.split(' ').map(x => {
    return parseInt(x);
  });
  main(n, a);
  process.exit();
}

function main(n, a) {
  // your code here
}

module.exports = readLine;
