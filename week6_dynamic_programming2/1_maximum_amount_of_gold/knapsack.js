const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let k,
  n,
  w = [];

function readLine(line) {
  if (k === undefined) {
    [k, n] = line.split(' ').map(x => parseInt(x));
    _s = s;
    return;
  }
  w = line.split(' ').map(x => {
    return parseInt(x);
  });
  main(k, n, w);
  process.exit();
}

function main(k, n, w) {
  // your code here
}

module.exports = readLine;
