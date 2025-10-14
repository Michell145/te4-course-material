"use strict";

console.log("Script loaded");

const postsList = document.getElementById("posts");

const fetchPosts = async () => {
  if (!postsList) {
    console.warn("No posts list found");
    return;
  }
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    console.log(data);

    postsList.innerHTML = "";

    const frag = document.createDocumentFragment();
    data.foreach((item) => {
      const li = document.createElement("li");
      const title = document.createElement("h2");
      const body = document.createElement("p");

      title.textContent = item.title;
      title.style.fontSize = "20px";
      title.style.textAlign = "center";
      body.textContent = item.body;
      body.style.fontSize = "16px";
      body.style.textAlign = "center";

      li.appendChild(title);
      li.appendChild(body);
      frag.appendChild(li);
    });
    postsList.appendChild(frag);
  } catch (error) {
    console.error("Could not fetch posts", error);
    postsList.innerHTML = "<li>Could not fetch posts</li>";
  }
};
fetchPosts();

//JSON - JavaScript Object Notation and parse
/* const jsonString = '{"name": "Micho", "age": 30, "city": "Stockholm"}';
localStorage.setItem("user", jsonString);
sessionStorage.setItem("user", jsonString);
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.name, user.age, user.city);
*/

// const classObj = {
//   name: "TE-4 25",
//   numberOfStudents: 13,
//   students: [
//     { name: "Micho", age: 18, city: "Stockholm" },
//     { name: "Manhal", age: 20, city: "Stockholm" },
//     { name: "Lucas", age: 19, city: "Stockholm" },
//     { name: "Erkan", age: 18, city: "Stockholm" },
//     { name: "Nirari", age: 18, city: "Stockholm" },
//     { name: "Frank", age: 30, city: "Stockholm" },
//     { name: "mohammed", age: 20, city: "Stockholm" },
//     { name: "abinash", age: 18, city: "Stockholm" },
//     { name: "albin", age: 18, city: "Stockholm" },
//     { name: "tunahan", age: 19, city: "Stockholm" },
//     { name: "sam", age: 18, city: "Stockholm" },
//     { name: "erik", age: 19, city: "Stockholm" },
//     { name: "Nirari", age: 18, city: "Stockholm" },
//   ],
// };

// console.log(classObj.name, classObj.numberOfStudents);
// for (const student of classObj.students) {
//   console.log(student.name, student.age, student.city);
// }

const students = {
  name: " TE-4 25",
  numberOfStudents: 13,
  students: [
    { name: "Micho", age: 18, grade: 9, passed: true },
    { name: "Manhal", age: 20, grade: 8, passed: true },
    { name: "Lucas", age: 19, grade: 7, passed: true },
    { name: "Erkan", age: 18, grade: 6, passed: true },
    { name: "Nirari", age: 18, grade: 5, passed: true },
    { name: "Frank", age: 30, grade: 4, passed: false },
    { name: "mohammed", age: 20, grade: 3, passed: false },
    { name: "abinash", age: 18, grade: 2, passed: false },
    { name: "albin", age: 18, grade: 1, passed: false },
    { name: "tunahan", age: 19, grade: 0, passed: false },
    { name: "sam", age: 18, grade: 10, passed: true },
  ],
};

const jsonString = '{"name": "Micho", "age": 30, "city": "Stockholm"}';
localStorage.setItem("user", jsonString);
sessionStorage.setItem("user", jsonString);
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.name, user.age, user.city);

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "fetchBtn") {
    fetchPosts();
  }
});
const box = document.getElementById("box");
async function fetchData() {
  box.innerHTML = await fetch("https://api.quotable.io/random").then(res => res.text());
  console.log(box);

}
fetchData();