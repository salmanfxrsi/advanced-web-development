const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("Ding Dong! The school bell is ringing!");
});

schoolBell.on("ring", () => {
  console.log("Time to change classes!");
});

schoolBell.on("broken", () => {
  console.log("The school bell is broken. Please fix it!");
});

schoolBell.emit("ring");
schoolBell.emit("broken");
