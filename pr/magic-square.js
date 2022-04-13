const getColumArray = (array, column) =>
  array.flat().filter((e, i) => i % array.length === column);

const getSumDiagonals = (array) => {
  const diagonalArr_1 = [];
  array.forEach((el, index) => {
    diagonalArr_1.push(el[index]);
  });

  const diagonalArr_2 = [];
  const i = array[0].length - 1;
  array.forEach((el, index) => {
    diagonalArr_2.push(el[i - index]);
  });

  const diagonalSum = [];
  diagonalSum.push(diagonalArr_1.reduce((a, c) => a + c));
  diagonalSum.push(diagonalArr_2.reduce((a, c) => a + c));

  return diagonalSum;
};

const magicSquare = (array) => {
  const sum = [];
  array.forEach((line, index) => {
    sum.push(line.reduce((a, c) => a + c));
    sum.push(getColumArray(array, index).reduce((a, c) => a + c));
  });
  getSumDiagonals(array).forEach((el) => {
    sum.push(el);
  });
  return sum.every((e) => e == sum[0]);
};

////////////////////////////////////////
///// Testing application! ///////
////////////////////////////////////////
let square = [];

square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
console.log('Expected: Magic Square!');
console.log('Is it magic square?', magicSquare(square) ? 'YES' : 'NO');
console.log('--------');

square = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2],
];
console.log('Expected: Magic Square!');
console.log('Is it magic square?', magicSquare(square) ? 'YES' : 'NO');
console.log('--------');

square = [
  [8, 3, 4],
  [1, 5, 9],
  [6, 7, 2],
];
console.log('Expected: Magic Square!');
console.log('Is it magic square?', magicSquare(square) ? 'YES' : 'NO');
console.log('--------');

square = [
  [6, 1, 8],
  [7, 5, 3],
  [2, 9, 4],
];
console.log('Expected: Magic Square!');
console.log('Is it magic square?', magicSquare(square) ? 'YES' : 'NO');
console.log('--------');

square = [
  [2, 7, 6],
  [9, 1, 1],
  [4, 3, 8],
];
console.log('Expected: NOT magic square');
console.log('Is it magic square?', magicSquare(square) ? 'YES' : 'NO');
console.log('--------');

square = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 3],
];
console.log('Expected: NOT magic square');
console.log('Is it magic square?', magicSquare(square) ? 'YES' : 'NO');
console.log('--------');

square = [
  [8, 1, 4],
  [1, 5, 9],
  [6, 7, 2],
];
console.log('Expected: NOT magic square');
console.log('Is it magic square?', magicSquare(square) ? 'YES' : 'NO');
console.log('--------');

square = [
  [7, 5, 3],
  [6, 1, 8],
  [2, 9, 4],
];
console.log('Expected: NOT magic square');
console.log('Is it magic square?', magicSquare(square) ? 'YES' : 'NO');
