import express, {} from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "../db/todo.json");
app.get("/", (req, res) => {
    res.send("Welcome To Todo App!");
});
app.get("/todos", (req, res) => {
    const data = fs.readFileSync(filepath, { encoding: "utf-8" });
    res.json(data);
});
app.post("/todos/create-todo", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Hello World From Create Todo!");
});
export default app;
