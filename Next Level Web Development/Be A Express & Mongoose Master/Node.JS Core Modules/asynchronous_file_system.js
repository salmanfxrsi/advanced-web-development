const fs = require("fs");

const text = "Learning File System";

console.log("Task 1");

fs.writeFile("hello.txt", text, (err) => {
  if (err) {
    console.log("Error Writing File:", err);
  } else {
    console.log("File written successfully!");

    fs.readFile("hello.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("Error Reading File:", err);
      } else {
        console.log("File content:", data);
      }
    });
  }
});

console.log("Task 2");
console.log("Task 3");
