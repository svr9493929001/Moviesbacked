import { createConnection } from "./index.js";

export async function getMoviesById(request) {
  const { id } = request.params;
  const client = await createConnection();
  const movie = await client
    .db("B252we")
    .collection("movies")
    .findOne({ id: id });
  return movie;
}
export async function showMovies(request) {
  let filter = request.query;
  const client = await createConnection();
  if (filter.rating) {
    filter.rating = +filter.rating;
  }
  const filtermovies = await client
    .db("B252we")
    .collection("movies")
    .find(filter)
    .toArray();
  return filtermovies;
}
export async function addManyMovies(request) {
  const data = request.body;
  console.log("data", data);
  const client = await createConnection();
  const result = await client
    .db("B252we")
    .collection("movies")
    .insertMany(data);
  return result;
}
export async function DeleteOne(request) {
  const { id } = request.params;
  const client = await createConnection();
  const movie = await client
    .db("B252we")
    .collection("movies")
    .deleteOne({ id: id });
  return movie;
}
export async function updateOneMovie(request) {
  const { id } = request.params;
  const client = await createConnection();
  const data = request.body;
  const movie = await client
    .db("B252we")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
  return movie;
}
