import express from "express";
const router = express.Router();
import {
  getMoviesById,
  showMovies,
  addManyMovies,
  DeleteOne,
  updateOneMovie,
} from "../getMoviesById.js";

router
.route("/").get(async (request, response) => {
  const filtermovies = await showMovies(request);
  response.send(filtermovies);
}).post(async (request, response) => {
  const result = await addManyMovies(request);
  response.send(result);
});

router.get(`/:id`, async (request, response) => {
  const movie = await getMoviesById(request);
  response.send(movie);
});

router.delete(`/:id`, async (request, response) => {
  const movie = await DeleteOne(request);
  const notfound = { message: "No matcing movies" };
  console.log(movie);
  movie ? response.send(movie) : response.status(404).send(notfound);
});

router.put(`/:id`, async (request, response) => {
  const movie = await updateOneMovie(request);
  response.send(movie);
});

export const moviesRouter = router;
