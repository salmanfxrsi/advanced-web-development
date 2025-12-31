import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todosRouter } from "./todos/todos.routes";
const app: Application = express();

app.use(express.json());


app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Welcome To Todos App!");
});

export default app;
