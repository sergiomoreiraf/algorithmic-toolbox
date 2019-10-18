const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine(line) {
  var a = parseInt(line.split(' ')[0]);
  var b = parseInt(line.split(' ')[1]);
  console.log(a + b + '');
  //process.stdout.write(a + b + '');
  process.exit();
}

module.exports = readLine;
