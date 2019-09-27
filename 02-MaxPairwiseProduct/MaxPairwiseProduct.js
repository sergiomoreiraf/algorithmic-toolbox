const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let size;

function readLine(line) {
  if (!line || line === '\n') {
    return;
  }
  if (!size) {
    size = parseInt(line.toString());
    return;
  }
  const arrays = line.toString().split(' ', size);
  size = null; //ready for another call

  maxPairwiseProducts(arrays);

  process.exit();
}

function maxPairwiseProducts(arrays) {
  let idxMaxNumber1, idxMaxNumber2;
  for (i = 0; i < arrays.length; i++) {
    if (!idxMaxNumber1 || arrays[i] > arrays[idxMaxNumber1]) {
      idxMaxNumber1 = i;
    }
  }
  for (i = 0; i < arrays.length; i++) {
    if (
      (!idxMaxNumber2 || arrays[i] > arrays[idxMaxNumber2]) &&
      idxMaxNumber1 != i
    ) {
      idxMaxNumber2 = i;
    }
  }
  console.log(arrays[idxMaxNumber1] * arrays[idxMaxNumber2]);
}

module.exports = readLine;
