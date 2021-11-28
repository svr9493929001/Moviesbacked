import express from "express";
const router = express.Router();

router
  .route("/signup")
  .post(async (request, response) => {
    const {username, password} = request.body;
    
    response.send({ username, password });
  });

export const usersRouter = router;
