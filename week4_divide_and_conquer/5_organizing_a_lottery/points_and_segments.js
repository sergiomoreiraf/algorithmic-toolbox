const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let s,
  p,
  a = [],
  b = [],
  x = [];

function readLine(line) {
  if (s === undefined) {
    s = parseInt(line.split(' ')[0]);
    p = parseInt(line.split(' ')[1]);
    return;
  }
  if (a.length < s) {
    const _a = parseInt(line.split(' ')[0]);
    const _b = parseInt(line.split(' ')[1]);
    a.push(_a);
    b.push(_b);
    return;
  }
  x = line.split(' ').map(x => {
    return parseInt(x);
  });
  main(s, p, a, b, x);
  process.exit();
}

function main(s, p, a, b, x) {
  // your code here
}

module.exports = readLine;
