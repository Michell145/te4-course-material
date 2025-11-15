console.log("Script module loaded successfully.");
console.log("This is a TypeScript starter template.");
let personage = 28;
let price = 49.99;
let hexavalue = 0xff00ff;
let itemquantity = 1000;
let totalecoast = itemquantity * price;
console.log(`Total cost for ${itemquantity} items is $${totalecoast}.`);
console.log(`Hexadecimal value: ${hexavalue}`);
console.log(`Personage: ${personage} years old.`);
console.log(`Price per item: $${price}`);
let color = [255, 0, 255];
console.log(`RGB Color: (${color[0]}, ${color[1]}, ${color[2]})`);
const logmessage = (name) => {
    let logmessage = `Hello, ${name}! Welcome to TypeScript.`;
    console.log(logmessage);
};
logmessage("Developer");
const calculateArea = (length, width) => {
    return length * width;
};
console.log(`Area of the table is : ${calculateArea(10, 30)}`);
const data = ["person1", "person2", "person3"];
if (Array.isArray(data))
    console.log(data[0]);
//! asssignemt
let username = "Michell";
let highscore = 4500;
let isLoggedIn = true;
let countdown = null;
let keytags = ["alpha", "beta", "gamma"];
const s = { points: 30, isFinal: true };
let currentscore = [s];
let userSettings = undefined;
function logError(errorMessage) {
    console.log(`Error: ${errorMessage}`);
}
function calculatePercentage(total, value) {
    return (value / total) * 100;
}
const precentage = calculatePercentage(200, 50);
console.log(precentage);
export {};
//# sourceMappingURL=main.js.map