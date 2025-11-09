const fs = require("fs");

const text = "Learning File System";

console.log("Task 1");

fs.writeFileSync("hello.txt", text);

console.log("Task 2");

const data = fs.readFileSync("hello.txt", "utf-8");

console.log(data);

console.log("Task 3");
