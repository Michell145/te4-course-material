localStorage.setItem("name", "Micho");
const para = document.createElement("p");
document.body.appendChild(para);

const name = localStorage.getItem("name");
para.innerText = "Hello, " + name + "! Welcome back.";

localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.body.style.backgroundColor = "#333";
  document.body.style.color = "#fff";
} else {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";
}

const clearButton = document.createElement("button");
clearButton.innerText = "clear all localStorage";
clearButton.onclick = function () {
  localStorage.removeItem("name");
  localStorage.removeItem("theme");
  localStorage.removeItem("favoriteColor");
  para.innerText = "Local storage cleared.";
};
document.body.appendChild(clearButton);

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your favorite color";
document.body.appendChild(input);

const saveButton = document.createElement("button");
saveButton.innerText = "Save Color";
saveButton.onclick = function () {
  const color = input.value;
  localStorage.setItem("favoriteColor", color);
  para.innerText = "Favorite color saved: " + color;
};
document.body.appendChild(saveButton);

let tasks = [];
const todoContainer = document.createElement("div");
const todoTitle = document.createElement("h3");
todoTitle.innerText = "To-Do List";
const taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Add a task";
const addTaskButton = document.createElement("button");
addTaskButton.innerText = "Add Task";
const clearTasksButton = document.createElement("button");
clearTasksButton.innerText = "Clear All Tasks";
const taskList = document.createElement("ul");

todoContainer.appendChild(todoTitle);
todoContainer.appendChild(taskInput);
todoContainer.appendChild(addTaskButton);
todoContainer.appendChild(clearTasksButton);
todoContainer.appendChild(taskList);
document.body.appendChild(todoContainer);

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.innerText = task;
    const del = document.createElement("button");
    del.innerText = "Delete";
    del.style.marginLeft = "8px";
    del.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });
    li.appendChild(text);
    li.appendChild(del);
    taskList.appendChild(li);
  });
}

function addTask() {
  const value = taskInput.value.trim();
  if (!value) return;
  tasks.push(value);
  taskInput.value = "";
  saveTasks();
  renderTasks();
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
clearTasksButton.addEventListener("click", () => {
  tasks = [];
  localStorage.removeItem("tasks");
  renderTasks();
});

const stored = localStorage.getItem("tasks");
tasks = stored ? JSON.parse(stored) : [];
renderTasks();
