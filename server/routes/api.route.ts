import { Request, Response, Router } from "express";
import * as answers from "../models/answers";

const apiRouter: Router = Router();

// placeholder route handler
apiRouter.get('/', (req, res, next) => {
  res.json({
    message: 'Hello World!'
  });
});

// *** GET all shows *** //
apiRouter.get('/answers', function(req, res, next) {
  answers.getAll()
    .then(function(shows) {
      res.status(200).json(shows);
    })
    .catch(function(error) {
      next(error);
    });
});


export {apiRouter};
