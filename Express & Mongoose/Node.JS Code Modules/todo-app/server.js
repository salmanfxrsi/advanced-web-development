const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // res.end("Welcome to the Todo App Server!");
  if (req.url === "/todos" && req.method === "GET") {
    res.end("All Todos Fetched Successfully!");
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo Created Successfully!");
  } else {
    res.end("Route Not Found!");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listening to port 5000");
});
