import express from "express";
import router from "./routes/product.route";
const app = express();

app.use(express.json());
app.use("/", router);

app.listen("5000", () => {
    console.log("express server is running!")
})