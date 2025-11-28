const http = require("http");

const data = [
  {
    title: "Server Update Completed",
    body: "All systems are now running smoothly after the maintenance.",
    createdAt: "2025-11-28T10:15:00Z",
  },
  {
    title: "New User Registered",
    body: "A new user has joined the platform using email: test@example.com.",
    createdAt: "2025-11-28T11:20:45Z",
  },
  {
    title: "Payment Received",
    body: "You have received a payment of $150 from client #204.",
    createdAt: "2025-11-28T12:05:30Z",
  },
  {
    title: "Task Completed",
    body: "The design revision task assigned yesterday has been marked as completed.",
    createdAt: "2025-11-28T13:40:10Z",
  },
  {
    title: "New Comment Added",
    body: "A user commented on your recent post: 'Looks great!'",
    createdAt: "2025-11-28T14:55:22Z",
  },
];

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // res.end("Welcome to the Todo App Server!");
  if (req.url === "/todos" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "text/html",
      email: "salmanfarsi9005@gmail.com",
    });
    // res.setHeader("content-type", "application/json");
    // res.setHeader("email", "salmanfarsi9005@gmail.com");
    // res.statusCode = 200;
    res.end(
      `<h1>Hello World!</h1> <h2>Hello World!</h2> <h3>Hello World!</h3>`
    );
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo Created Successfully!");
  } else {
    res.end("Route Not Found!");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listening to port 5000");
});
