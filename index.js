import express, { query } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 1000;
const MONGO_URL =
  process.env.MONGO_URL;
// One stop soluction to parse all the request as json
app.use(express.json());// parse body to json

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected!!!");
return client;
}

app.get("/", (request, response) => {
  response.send("This is the first port i build");
});

app.get(`/movies/:id`, async (request, response) => {
  const { id } = request.params;
const client = await createConnection();
const movie = await client
  .db("B252we")
  .collection("movies")
  .findOne({ id: id });
  const notfound = { message: "No matcing movies" };
  console.log(movie);
  movie ? response.send(movie) : response.status(404).send(notfound);
});

app.get(`/movies`, async (request, response) => {
    let filter = request.query;
    const client = await createConnection();
    if(filter.rating){
        filter.rating =+ filter.rating;
    }
    const filtermovies = await client
      .db("B252we")
      .collection("movies")
      .find(filter)
      .toArray();
      console.log(filtermovies)
    response.send(filtermovies);
});

app.post(`/movies`, async (request, response) => {
    const data = request.body;
    console.log("data",data);
    const client = await createConnection();
    const result = await client
    .db("B252we")
    .collection("movies")
    .insertMany(data);
    response.send(result);
    console.log(result);
});

app.delete(`/movies/:id`,async (request, response) => {
   const { id } = request.params;
   const client = await createConnection();
   const movie = await client
     .db("B252we")
     .collection("movies")
     .deleteOne({ id: id });
   const notfound = { message: "No matcing movies" };
   console.log(movie);
   movie ? response.send(movie) : response.status(404).send(notfound);
})

app.put(`/movies/:id`, async (request, response) => {
  const { id } = request.params;
  const client = await createConnection();
  const data = request.body;
  const movie = await client
    .db("B252we")
    .collection("movies")
    .updateOne({ id: id }, {$set : data});
  const notfound = { message: "No matcing movies" };
  console.log(movie);
  movie ? response.send(movie) : response.status(404).send(notfound);
});

app.listen(PORT, () => console.log("App is stated on ", PORT));

// C - Create - post
// R - Read   - get
// U - Update - put
// D - Delete - Delete 