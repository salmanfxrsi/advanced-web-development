"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
app.get("/", (req, res) => {
    res.send("Hello, Welcome To Todos App!");
});
app.get("/todos/:id", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(req.params);
    console.log(req.query);
    res.json(data);
});
app.post("/todos/create-todo", (req, res) => {
    const { title, description, createdTime } = req.body;
    res.send("Hello World!");
});
exports.default = app;
//# sourceMappingURL=app.js.map