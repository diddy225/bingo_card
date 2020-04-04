// We need 5 random numbers per letter B I N G O

// B 1 - 15
// I 16 - 30
// N 31 - 45
// G 46 - 60
// O 61 - 75

const getRandomNumbers = (min, max) => {
  let array = [];
  for (let i = 0; array.length < 6; i++) {
    let random = Math.floor(Math.random() * (max - min)) + min;
    if (array.indexOf(random) === -1) array.push(random);
  }
  return array;
};

const b = getRandomNumbers(1, 15);
const i = getRandomNumbers(16, 30);
const n = getRandomNumbers(31, 45);
const g = getRandomNumbers(46, 60);
const o = getRandomNumbers(61, 75);

let bingoCardNums = [];
const randomBingoNums = bingoCardNums.concat(b, i, n, g, o);

const cardBuilder = () => {
  let boxNum = 0;
  for (let num of randomBingoNums) {
  }
};
