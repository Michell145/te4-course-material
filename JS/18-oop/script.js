const car = {
  brand: "Toyota",
  model: "Corolla",
  speed: 120,
  drive: function () {
    console.log(`Driving at ${this.speed} km/h`);
  },
};
car.fuel = "Gasoline";
car.drive();
console.log(car);

class Car {
  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }

  drive() {
    console.log(`Driving a ${this.brand} ${this.model} at ${this.speed} km/h`);
  }
}
const myCar = new Car("Honda", "Civic", 150);
myCar.drive();

class ElectricCar extends Car {
  constructor(brand, model, speed, batteryCapacity) {
    super(brand, model, speed);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`Charging the ${this.brand} ${this.model}`);
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model 3", 200, 75);
myElectricCar.drive();
myElectricCar.charge();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Micho", 18);
const person2 = new Person("frank", 18);
person1.greet();
person2.greet();

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    } else {
      console.log("Insufficient funds.");
    }
  }
}
const myAccount = new BankAccount("Micho", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(2000);

class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.species} says ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(species, sound, breed) {
    super(species, sound);
    this.breed = breed;
  }
  makeSound() {
    console.log(`The dog of breed ${this.breed} barks: ${this.sound}`);
  }
}

class Cat extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }
  makeSound() {
    console.log(`The ${this.color} cat meows: ${this.sound}`);
  }
}
class Bird extends Animal {
  constructor(species, sound, canFly) {
    super(species, sound);
    this.canFly = canFly;
  }
  makeSound() {
    console.log(`The bird chirps: ${this.sound}`);
  }
}

const dog = new Dog("Dog", "Woof", "Labrador");
const cat = new Dog("Dog", "MIAUUUUU!", "Shortbread");
const bird = new Dog("Dog", "PIRIPIPIE", "Pigeon");

const sounds = [dog.sound, cat.sound, bird.sound];

for (const sound of sounds) {
  console.log(sound);
}
