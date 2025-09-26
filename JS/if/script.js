while (true) {
  let random = Math.floor(Math.random() * 10 + 1);
  console.log(random);
  if (random === 5) {
    console.log("Winner");
    break;
  }
}

for (let i = 200; i <= 1000; i++) {
  if (i === 900) {
    console.log("Winner");
  } else {
    console.log(i);
  }
}

let msg = "Micho är bäst";
let count = 0;
while (count <= 1000) {
  console.log(msg);
  count++;
}

const fruits = ["banana", "apple", "orange", "mango", "kiwi", "pear"];
for (const fruit of fruits) {
  console.log("I like to eat", fruit);
}

let i = 1;

for (i = 1; i <= 10; i++) {
  console.log(i);
}

let number = 10;

for (let number = 10; number >= 1; number--) {
  console.log(number);
}

let sum = null;
let n = 1;

do {
  sum = sum + number;
  console.log(`the sum is ${sum}`);
} while (sum <= 20);

const classmates = ["Micho", "Manhal", "Lucas", "Erkan", "nirari", "Frank"];
for (const classmate of classmates) {
  console.log("Hello", classmate);
}
