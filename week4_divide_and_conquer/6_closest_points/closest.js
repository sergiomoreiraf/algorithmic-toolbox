const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  p = [];

function readLine(line) {
  if (n === undefined) {
    n = parseInt(line);
    return;
  }
  const [x, y] = line.split(' ').map(x => parseInt(x));
  p.push([x, y]);
  if (p.length === n) {
    main(n, p);
    process.exit();
  }
}

function main(n, p) {}

module.exports = readLine;
