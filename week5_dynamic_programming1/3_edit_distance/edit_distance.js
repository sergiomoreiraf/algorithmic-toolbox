const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let s1, s2;

function readLine(line) {
  if (s1 == undefined) {
    s1 = line;
    return;
  }
  s2 = line;
  main(s1, s2);
  process.exit();
}

function main(s1, s2) {
  // your code here
}

module.exports = readLine;
