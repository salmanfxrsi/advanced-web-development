const { a, add, b } = require("./file_two");
const { a: a3, add: add3, b: b3 } = require("./file_three");

console.log(a3);
console.log(add3(2, 3, 4));
console.log(b3);
