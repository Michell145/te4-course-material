`use strict`;
console.log("Script loaded");

const form = document.querySelector("form");
const result = document.querySelector("#result");
const error = document.querySelector("#error");
const final = document.querySelector("#final");
/*
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    const res = a / b;
    result.textContent = res;
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    error.textContent = error.message;
  }finally {
    console.log("Execution completed");
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const a = +e.target.value_a.value;
  const b = +e.target.value_b.value;
  console.log(typeof a, typeof b);

  divide(Number(a), Number(b));
});
*/

function multiply(x, y) {
  try {
    if (typeof y === "string") {
      throw new Error("Invalid input: y should be a number");
    }
    const res = x * y;
    result.textContent = res;
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Execution completed");
  }
}

console.log(multiply(5, 5));
console.log(multiply(5, "a"));

const users = [
    { name: "Micho", age: 18 },
    { name: "Manhal", age: null },
    { name: "Lucas", age: 20 },
]
getUserAge(users[0].age);
function getUserAge(age) {
    try {
        if (age === null) {
            throw new Error("Age is not defined");
        }
        const birthYear = new Date().getFullYear() - age;
        console.log(`User is ${age} years old, born in ${birthYear}`);
        return age;
        
    } catch (error) {
        console.error("Error:", error.message);
    }finally{
        console.log("Execution completed");
    }
}
getUserAge(users[1].age);
getUserAge(users[2].age);


