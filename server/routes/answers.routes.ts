import { Request, Response, Router } from "express";
import { Answers } from "../models";

const answersRouter: Router = Router();
const ans = new Answers();

// *** GET all shows *** //
answersRouter.get('/', function(req, res, next) {
  ans.getAll()
    .then(function(shows) {
      res.status(200).json(shows);
    })
    .catch(function(error) {
      next(error);
  });
});

export { answersRouter }
