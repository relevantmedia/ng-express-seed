import * as path from 'path';
import * as express from 'express';
import * as fs from 'fs';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

//import routes
import {apiRouter} from './routes';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.staticRoutes();
    this.routes();
    this.createReadStream();
  }

  private createReadStream(): void {
    this.express.use((req, res, next) => {

        // if the request is not html then move along
        var accept = req.accepts('html', 'json', 'xml');
        if(accept !== 'html'){
            return next();
        }

        // if the request has a '.' assume that it's for a file, move along
        var ext = path.extname(req.path);
        if (ext !== ''){
            return next();
        }

        fs.createReadStream('./dist/client/' + 'index.html').pipe(res);
    });
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use('/api/v1', apiRouter);
  }

  private staticRoutes(): void {
    // in production mode run application from dist folder
    this.express.use(express.static(path.join(__dirname, '/../client')));
  }

}

export default new App().express;
