let array = ["star wars", "matrix", "inception", "interstellar", "the dark knight"];
console.log(array[1]);

array.shift();
array.push("the godfather");
console.log(array);

let array1 = [1, 2, 3, 4, 5];
let doubled = array1.map(n => n ** 2);
console.log(doubled);

let odd = doubled.filter(n => n % 2 === 0);
console.log(odd);

const board = [
  ["X", "O", "X"],
  ["O", "X", "X"],
  ["O", "X", "O"]
];
const center = board[1][1];
console.log(center);

let array3 = [10, 20, 30, 40, 50];
let sum = array3.reduce((total, n) => total + n, 0);
console.log(sum);