console.log("Script module loaded successfully.");
console.log("This is a TypeScript starter template.");

let personage: number = 28;
let price: number = 49.99;
let hexavalue: number = 0xff00ff;
let itemquantity: number = 1000;

let totalecoast: number = itemquantity * price;
console.log(`Total cost for ${itemquantity} items is $${totalecoast}.`);
console.log(`Hexadecimal value: ${hexavalue}`);
console.log(`Personage: ${personage} years old.`);
console.log(`Price per item: $${price}`);

type RGB = [number, number, number];
let color: RGB = [255, 0, 255];
console.log(`RGB Color: (${color[0]}, ${color[1]}, ${color[2]})`);

const logmessage = (name: string): void => {
  let logmessage = `Hello, ${name}! Welcome to TypeScript.`;
  console.log(logmessage);
};
logmessage("Developer");

const calculateArea = (length: number, width: number): number => {
  return length * width;
};
console.log(`Area of the table is : ${calculateArea(10, 30)}`);

const data: unknown = ["person1", "person2", "person3"];
if (Array.isArray(data)) console.log(data[0]);

//! asssignemt
let username: string = "Michell";
let highscore: number = 4500;
let isLoggedIn: boolean = true;
let countdown: number | null = null;

let keytags: string[] = ["alpha", "beta", "gamma"];
type score = {
  points: number;
  isFinal: boolean;
};

const s: score = { points: 30, isFinal: true };

let currentscore: score[] = [s];
let userSettings: string | undefined = undefined;

function logError(errorMessage: string): void {
  console.log(`Error: ${errorMessage}`);
}

function calculatePercentage(total: number, value: number): number {
  return (value / total) * 100;
}

const precentage: number = calculatePercentage(200, 50);
console.log(precentage);

