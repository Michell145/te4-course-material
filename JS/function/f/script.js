let name = "Micho";
let age = 18;

function info(name, age) {
  return `My name is ${name} and I am ${age} years old`;
}

console.log(info("Michel", 19));

const add = function (a, b) {
  return a + b;
};

console.log(add(5, 10));

const n = function (name) {
  return `hello ${name}`;
};

console.log(n("Micho"));

const bmi = function (name, weight, height, age) {
  return `${name}'s BMI is ${(weight / (height * height)).toFixed(
    2
  )} and the age is ${age}`;
};

console.log(bmi("Micho", 80, 1.86, 18));

const subtract = (a, b) => {
  const result = a - b;
  return result;
};

console.log(subtract(10, 5));

const minus = (a, b) => a - b;
const sum = (a, b) => {
  return a + b;
};

function calculateArea(width, height = 10) {
  return width * height;
}

console.log(calculateArea(5, 20));
console.log(calculateArea(5));

const clalculateAge = (birthYear, currentYear = 2025) => {
  const age = currentYear - birthYear;
  console.log(age);
};

clalculateAge(2006);

const showTemp = (Temp = 10) => {
  if (Temp < 0) return `freezing`;
  if (Temp < 20 && Temp < 32) return `warm`;
  if (Temp > 40) return `boiled`;
};

console.log(showTemp(20));

const calculateGrade = (name, score = 100) => {
  if (score >= 90 && score <= 100) return `A`;
  if (score >= 80 && score <= 89) return `B`;
  if (score >= 70 && score <= 79) return `C`;
  if (score >= 60 && score <= 69) return `D`;
  if (score >= 50 && score <= 59) return `F`;
  if (score <= 49 && score <= 0) return `invalid number`;
  if (score > 100) return `invalid number`;
};
console.log(calculateGrade("Micho", -10));
