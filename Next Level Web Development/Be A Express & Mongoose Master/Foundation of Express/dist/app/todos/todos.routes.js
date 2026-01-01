"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("../../config/mongodb");
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", async (req, res) => {
    const db = await mongodb_1.client.db("todosDB");
    const collection = await db.collection("todos");
    const cursor = await collection.find({});
    const todos = await cursor.toArray();
    res.json(todos);
});
exports.todosRouter.post("/create-todo", async (req, res) => {
    const { title, description, priority, isCompleted } = req.body;
    const db = await mongodb_1.client.db("todosDB");
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
exports.todosRouter.get("/:title", (req, res) => {
    const { title, description, createdTime } = req.body;
    res.send("Hello World!");
});
exports.todosRouter.put("/update-todo/:title", (req, res) => {
    const { title, description, createdTime } = req.body;
    res.send("Hello World!");
});
exports.todosRouter.delete("/update-todo/:title", (req, res) => {
    const { title, description, createdTime } = req.body;
    res.send("Hello World!");
});
//# sourceMappingURL=todos.routes.js.map