const key = "maker";

const car = {
  maker: "volvo",
  model: "xc90",
  year: 2020,
  color: "black",
  fuel: "gasoline",
  seats: 7,
  isElectric: false,
};

car.maker = "ford";
console.log(car);

delete car.fuel;
console.log(car);
car.fuel = "diesel";
console.log(car);

console.log(car[key]);

const { maker, model, year, color, fuel, seats, isElectric } = car;

console.log(maker);

const person = new Object();
person.name = "Michell da silva issa";
person.age = 18;
person.profession = "student";

console.log(person);

const school = {
  name: "NTI Gymnasium",
  address: "RÖNTGENVÄGEN 19",
  zipCode: "14152",
  city: "STOCKHOLM",
  phone: "08-123 456 78",
  email: "info@nti-gymnasium.dk",
  classes: {
    class1: { name: "te4", students: 30 },
    class2: { name: "el22", students: 28 },
    class3: { name: "tek22", students: 32 },
  },
};
console.log(school);

for (const items in school) {
  console.log(school[items]);
}

// Exercise 1
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
console.log(book.title);
console.log(book.author);
console.log(book.year);

const user = {
  name: "John Doe",
  city: "New York",
};

console.log(`hello, my name is ${user.name} and I live in ${user.city}`);

const books = [
  {
    name: "Harry potter",
    author: "j.k rowling",
    year: "2002",
  },
  {
    name: "The green book",
    author: "idk",
    year: "idk",
  },
  {
    name: "book",
    author: "idk",
    year: "idk",
  },
];

console.log(books[1].name);

const classroom = {
  teacher: "Fransico",
  subject: "JavaScript",
  students: ["Micho", "Manhal", "Lucas", "Erkan", "Nirari", "Frank"],
};

for (const item in classroom.students) {
  console.log(classroom.students[item]);
}
