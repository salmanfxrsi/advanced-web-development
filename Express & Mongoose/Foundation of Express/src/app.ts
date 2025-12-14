import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const app: Application = express();

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = path.join(__dirname, "../db/todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Todo App!");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, { encoding: "utf-8" });
  res.json(data);
});

app.post("/todos/create-todo", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.send("Hello World From Create Todo!");
});

export default app;
