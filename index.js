import express, { query } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { moviesRouter } from "./routes/movies.js";
import { usersRouter } from "./routes/users.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 1000;
const MONGO_URL =
process.env.MONGO_URL ;

app.use(express.json());
app.use(cors());
export async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected!!!");
return client;
}

app.get("/", (request, response) => {
  response.send("This is the first port i build ");
});

app.use("/movies", moviesRouter);

app.use("/users", usersRouter);
app.listen(PORT, () => console.log("App is stated on ", PORT));