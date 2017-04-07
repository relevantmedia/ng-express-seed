// var knex = require('./knex.js');
import {DB} from './db';

export class Answers {
  private answers = DB.knex('answers');

  getAll() {
    return this.answers.select();
  }

}
