console.log(process.argv);
const fs = require("fs");

const inputArgument = process.argv.slice(2);

const text = inputArgument.join(" ");

if (!text) {
  console.log("Please provide a message to log!");
  console.log("Example : node index.js Hello World!");
  process.exit(1);
}

const filePath = __dirname + "\\log.txt";
fs.appendFile(filePath, text + "\n", { encoding: "utf-8" }, (err) => {
  if (err) {
    console.log("File is not appending!");
  } else console.log("File added successfully");
});
