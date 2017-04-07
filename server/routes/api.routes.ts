import { Request, Response, Router } from "express";
import { answersRouter } from "./answers.routes";

const apiRouter: Router = Router();

// placeholder route handler
apiRouter.get('/', (req, res, next) => {
  res.json({
    message: 'Hello World!'
  });
});

apiRouter.use('/answers', answersRouter);


export { apiRouter };
