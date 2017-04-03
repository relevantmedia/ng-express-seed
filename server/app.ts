import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

//import routes
import * as Routes from './routes';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.staticRoutes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use('/api', Routes.apiRouter);

    // // Catch all other routes and return the index file
    // this.express.get('*', (req, res) => {
    //   res.sendFile(path.join(__dirname, '/../client/index.html'));
    // });
  }

  private staticRoutes(): void {
    // in production mode run application from dist folder
    this.express.use(express.static(path.join(__dirname, '/../client')));
  }

}

export default new App().express;
