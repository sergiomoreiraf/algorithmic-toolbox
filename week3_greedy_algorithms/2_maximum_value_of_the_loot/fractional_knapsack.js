const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  k,
  v = [],
  w = [];

function readLine(line) {
  const a = parseInt(line.split(' ')[0]);
  const b = parseInt(line.split(' ')[1]);
  if (n === undefined) {
    n = a;
    k = b;
    return;
  }
  v.push(a);
  w.push(b);
  if (v.length === n) {
    main(n, k, v, w);
    process.exit();
  }
  return;
}

function main(n, k, v, w) {
  // your code here
}

module.exports = readLine;
