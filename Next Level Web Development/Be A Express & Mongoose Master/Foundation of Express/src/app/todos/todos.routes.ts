import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

const filePath = path.join(__dirname, "../../../db/todo.json");

export const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const cursor = await collection.find({});
  const todos = await cursor.toArray();
  res.json(todos);
});

todosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const todo = await collection.findOne({ _id: new ObjectId(id) });
  res.json(todo);
});

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, priority, isCompleted } = req.body;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const data = await collection.insertOne({
    title,
    description,
    priority,
    isCompleted,
  });

  res.json(data);
});

todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const filter = { _id: new ObjectId(id) };
  const { title, description, priority, isCompleted } = req.body;
  const updateTodo = await collection.updateOne(
    filter,
    { $set: { title, description, priority, isCompleted } },
    { upsert: true }
  );
  res.json(updateTodo);
});

todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  const data = await collection.deleteOne({ _id: new ObjectId(id) });
  res.json(data);
});
