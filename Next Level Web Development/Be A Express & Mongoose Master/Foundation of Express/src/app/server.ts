import dotenv from "dotenv";
dotenv.config();
import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";

let server;
const port = 5000;

const uri =
  `mongodb+srv://mongodb:${process.env.MONGO_PASSWORD}@cluster0.ocj7mmb.mongodb.net/todosDB?appName=Cluster0`;
  
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const bootstrap = async () => {
  await client.connect();
  console.log("Connected To MongoDB");
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
