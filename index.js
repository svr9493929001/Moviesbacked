import express, { query } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {
  getMoviesById,
  showMovies,
  addManyMovies,
  DeleteOne,
  updateOneMovie,
} from "./getMoviesById.js";
import { moviesRouter } from "./routes/movies.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 1000;
const MONGO_URL =
  process.env.MONGO_URL;
// One stop soluction to parse all the request as json
app.use(express.json());// parse body to json

export async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected!!!");
return client;
}


app.use("/movies", moviesRouter)

app.listen(PORT, () => console.log("App is stated on ", PORT));


