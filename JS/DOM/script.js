const mainTitle = document.getElementById("main-title");
mainTitle.textContent = "Welcome to the updated starter template";
console.log(mainTitle.innerText);

const message = document.querySelector(".message");
console.log(message.innerText);

const headings = document.querySelectorAll(".subheading");

for (const heading of headings) {
  console.log(heading.textContent);
}

for (const heading of headings) {
  heading.style.color = "blue";
}

const listItems = document.querySelectorAll(".list-item");
for (const item of listItems) {
  item.style.fontSize = "20px";
  item.style.color = "blue";
  item.style.listStyle = "none";
}

const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "7";
newItem.classList.add("List-item");
list.appendChild(newItem);

for (const list of listItems) {
  list.style.backgroundColor = "lightgray";
  list.style.margin = "5px";
  list.style.padding = "10px";
  list.style.width = "50px";
  list.style.textAlign = "center";
}

for (const item of listItems) {
  item.style.borderRadius = "8px";
  item.style.border = "2px solid black";
}

newItem.remove();

const button = document.createElement("button");
button.textContent = "Click Me";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
document.body.appendChild(button);

button.addEventListener("click", () => {
  alert("Button was clicked!");
  button.style.width = "200px";
  button.style.backgroundColor = "lightblue";
  button.style.border = "none";
  button.style.borderRadius = "8px";
  button.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)";
});

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "lightgreen";
box.style.marginTop = "20px";
document.body.appendChild(box);

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "lightgreen";
});

const log = document.getElementById("log");
// exercise 2
input = document
  .getElementById("input")
  .addEventListener("keydown", (event) => {
    log.textContent = `${event.key} key pressed`;
    const length = event.target.value.length;
    console.log(length);
  });

input = document.getElementById("input").addEventListener("keyup", (event) => {
  log.textContent = `key released: ${event.key}`;
});

input = document.getElementById("input").addEventListener("input", (event) => {
  butt.textContent = `Micho is the best developer ever!`;
});

// Exercise 1
const box2 = document.createElement("div");
box2.style.width = "150px";
box2.style.height = "150px";
box2.style.backgroundColor = "orange";
box2.style.marginTop = "20px";
document.body.appendChild(box2);

box2.addEventListener("mouseover", () => {
  box2.style.backgroundColor = "red";
});

box2.addEventListener("mouseout", () => {
  box2.style.backgroundColor = "orange";
});

// Exercise 3
const form = document.getElementById("myForm");
const inputs = document.querySelectorAll(".input");
console.log(form);
console.log(inputs);

const stat = document.getElementById("stat");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  stat.textContent = "Fill you form correctly";
  const name = event.target.name.value;
  const message = event.target.message.value;

  if (!name || !message) {
    stat.textContent = "fill your form correctly";
    return;
  }
  stat.textContent = "Congrats!!";
});

const bar = document.getElementById("progress-bar");

bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.width = "0%";
bar.style.backgroundColor = "lightgreen";
bar.style.height = "5px";
bar.style.zIndex = "9999";

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  bar.style.width = `${scrollPercent}%`;
});

const size = document.getElementById("size");

window.addEventListener("resize", () => {
  size.textContent = `Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`;
});
