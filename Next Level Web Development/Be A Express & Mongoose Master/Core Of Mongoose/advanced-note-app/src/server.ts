import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;
const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://mongodb:mongodb@cluster0.ocj7mmb.mongodb.net/?appName=Cluster0`
    );
    server = app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
