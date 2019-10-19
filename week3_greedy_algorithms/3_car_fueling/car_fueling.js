const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let d,
  m,
  n,
  stop = [];

function readLine(line) {
  if (d === undefined) {
    d = parseInt(line.toString());
    return;
  }
  if (m === undefined) {
    m = parseInt(line.toString());
    return;
  }
  if (n === undefined) {
    n = parseInt(line.toString());
    return;
  }
  stop = line
    .toString()
    .split(' ')
    .map(function(x) {
      return parseInt(x);
    });
  main(d, m, n, stop);
  process.exit();
}

function main(d, m, n, stop) {
  // your code here
}

module.exports = readLine;
