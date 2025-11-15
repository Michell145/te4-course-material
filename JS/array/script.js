// Exercise 1
const colors = ["red", "blue", "green"];
console.log(colors[0]);
console.log(colors[2]);



colors.push("yellow");
console.log(colors);

colors.shift();
console.log(colors);

// Exercise 2
const numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 99);
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
console.log(numbers);

// Exercise 3
const shoppingCart = ["milk", "bread", "apples", "eggs", "cheese"];
shoppingCart.splice(2, 1);
console.log(shoppingCart);
console.log(shoppingCart.includes("milk"));
