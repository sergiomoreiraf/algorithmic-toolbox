const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine(line) {
  if (line !== '\n') {
    var a = parseInt(line.toString().split(' ')[0], 10);
    var b = parseInt(line.toString().split(' ')[1], 10);
    console.log(a + b);
    process.exit();
  }
}

module.exports = readLine;
