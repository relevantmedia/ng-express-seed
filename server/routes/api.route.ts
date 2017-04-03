import { Request, Response, Router } from "express";

const apiRouter: Router = Router();

// placeholder route handler
apiRouter.get('/', (req, res, next) => {
  res.json({
    message: 'Hello World!'
  });
});

export {apiRouter};
