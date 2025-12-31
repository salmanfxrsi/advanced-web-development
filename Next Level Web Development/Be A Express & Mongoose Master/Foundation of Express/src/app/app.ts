import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

app.use(express.json());

const todosRouter = express.Router();

app.use("/todos", todosRouter);

todosRouter.get("/all-todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });

  res.json({
    message: "From Todos Router",
    data,
  });
});

const filePath = path.join(__dirname, "../../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Welcome To Todos App!");
});

app.get("/todos/:id", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(req.params);
  console.log(req.query);
  res.json(data);
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, description, createdTime } = req.body;
  res.send("Hello World!");
});

export default app;
