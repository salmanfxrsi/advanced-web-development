"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongodb_1 = require("mongodb");
const app_1 = __importDefault(require("./app"));
let server;
const port = 5000;
const uri = `mongodb+srv://mongodb:${process.env.MONGO_PASSWORD}@cluster0.ocj7mmb.mongodb.net/todosDB?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
const bootstrap = async () => {
    await client.connect();
    console.log("Connected To MongoDB");
    server = app_1.default.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};
bootstrap();
//# sourceMappingURL=server.js.map