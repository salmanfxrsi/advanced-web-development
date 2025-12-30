((require, module, __dirname) => {
  let a = 10;

  ((name) => {
    let a = 10;
    console.log(`I am learning ${name}`);
  })("IIFE in JavaScript");

  console.log(a);
  console.log(module);
  console.log(__dirname);
})(require, module, "./utils/add.js");
