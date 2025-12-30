const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {

  //  GET ALL TODOS
  if (req.url === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(data);
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    })

    req.on("end", () => {
      const todo = JSON.parse(data);
      console.log(todo);
    })
    res.end("Todo Created Successfully!");
  } else {
    res.end("Route Not Found!");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listening to port 5000");
});
