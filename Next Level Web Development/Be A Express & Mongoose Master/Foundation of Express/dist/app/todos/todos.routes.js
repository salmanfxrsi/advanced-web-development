"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", async (req, res) => {
    const db = await mongodb_1.client.db("todosDB");
    const collection = await db.collection("todos");
    const cursor = await collection.find({});
    const todos = await cursor.toArray();
    res.json(todos);
});
exports.todosRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const db = await mongodb_1.client.db("todosDB");
    const collection = await db.collection("todos");
    const todo = await collection.findOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(todo);
});
exports.todosRouter.post("/create-todo", async (req, res) => {
    const { title, description, priority, isCompleted } = req.body;
    const db = await mongodb_1.client.db("todosDB");
    const collection = await db.collection("todos");
    const data = await collection.insertOne({
        title,
        description,
        priority,
        isCompleted,
    });
    res.json(data);
});
exports.todosRouter.put("/update-todo/:id", async (req, res) => {
    const id = req.params.id;
    const db = await mongodb_1.client.db("todosDB");
    const collection = await db.collection("todos");
    const filter = { _id: new mongodb_2.ObjectId(id) };
    const { title, description, priority, isCompleted } = req.body;
    const updateTodo = await collection.updateOne(filter, { $set: { title, description, priority, isCompleted } }, { upsert: true });
    res.json(updateTodo);
});
exports.todosRouter.delete("/delete-todo/:id", async (req, res) => {
    const id = req.params.id;
    const db = await mongodb_1.client.db("todosDB");
    const collection = await db.collection("todos");
    const data = await collection.deleteOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(data);
});
//# sourceMappingURL=todos.routes.js.map