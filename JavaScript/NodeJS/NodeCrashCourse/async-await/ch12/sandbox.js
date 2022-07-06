// import fetch from "node-fetch";

// // fetch api

// fetch("todos/todo1.json")
//   .then((response) => {
//     console.log("resolved", response);
//   })
//   .catch((error) => {
//     console.log("rejected", error);
//   });

// async & await fetch("todos/todo2.json
const getTodos = async () => {
  const response = await fetch("todos/todo2.json");
};

const test = getTodos();
console.log(test);
