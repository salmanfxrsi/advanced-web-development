import express, { Application, NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { todosRouter } from "./todos/todos.routes";
const app: Application = express();

app.use(express.json());

app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log({
    url: req.url,
    method: req.method,
    header: req.header,
  });
  next();
  res.send("Hello, Welcome To Todos App!");
});

(req: Request, res: Response) => {
  console.log("Hey!");
  res.send("Welcome to Todos App");
};

export default app;
