const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  a = [],
  m,
  b = [],
  l,
  c = [];

function readLine(line) {
  if (n === undefined) {
    n = parseInt(line);
    return;
  }
  if (a.length === 0) {
    a = line.split(' ').map(x => {
      return parseInt(x);
    });
    return;
  }
  if (m === undefined) {
    m = parseInt(line);
    return;
  }
  if (b.length === 0) {
    b = line.split(' ').map(x => {
      return parseInt(x);
    });
    return;
  }
  if (l === undefined) {
    l = parseInt(line);
    return;
  }
  c = line.split(' ').map(x => {
    return parseInt(x);
  });
  main(n, a, m, b, l, c);
  process.exit();
}

function main(n, a, m, b, l, c) {
  // your code here
}

module.exports = readLine;
