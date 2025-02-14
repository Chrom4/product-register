import express from "express";
import apiRouter from "./routes/api.js";
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/prodreg";
const app = express();
const client = new MongoClient(uri);
let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db();

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);

    throw error;
  }
};

connectDB().then(() => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export { db };
