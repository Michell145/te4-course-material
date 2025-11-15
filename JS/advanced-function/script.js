const square = (x) => {
  return x * x;
};
console.log(square(5));


function doHomework(subject, callback) {
  console.log(`finished my ${subject} homework`);
  if (typeof callback === "function") {
    callback();
  }
}
doHomework("programming", () => {
  console.log(`finished my programming homework`);
});

function number(a, b = 1) {
  return a + b;
}
console.log(number(5, 2));

function maxNumber(...numbers) {
  return Math.max(...numbers);
}
console.log(maxNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

let array = [1, 2, 3, 4, 5];
let newArray = [...array, 6, 7, 8, 9, 10];
console.log(array);
console.log(newArray);