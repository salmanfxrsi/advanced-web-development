import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { client } from "../../config/mongodb";

const filePath = path.join(__dirname, "../../../db/todo.json");

export const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const cursor = await collection.find({});
  const todos = await cursor.toArray();
  res.json(todos);
});

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority, isCompleted } = req.body;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  await collection.insertOne({
    title,
    description,
    priority,
    isCompleted,
  });

  const cursor = await collection.find({});
  const todos = await cursor.toArray();
  res.json(todos);
});

todosRouter.get("/:title", (req: Request, res: Response) => {
  const { title, description, createdTime } = req.body;
  res.send("Hello World!");
});

todosRouter.put("/update-todo/:title", (req: Request, res: Response) => {
  const { title, description, createdTime } = req.body;
  res.send("Hello World!");
});

todosRouter.delete("/update-todo/:title", (req: Request, res: Response) => {
  const { title, description, createdTime } = req.body;
  res.send("Hello World!");
});
