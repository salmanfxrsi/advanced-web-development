import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://mongodb:${process.env.MONGO_PASSWORD}@cluster0.ocj7mmb.mongodb.net/todosDB?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
