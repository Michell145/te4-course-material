let c = 85;
let d = 1;
let f = 15;

console.log(c + d * f);
console.log(c * d * f);
console.log(c * d - f);
console.log(c * d + f);

let a = 10; // Define variable a
let b = 5;  // Define variable b
let result = a + b + f;

if (result >= 50 && result < 100) {
  console.log("You have a high score!");
} else {
  console.log("better luck next time");
}

let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score < 70) {
  grade = "C";
}

console.log("score:", score);
console.log("grade:", grade);
