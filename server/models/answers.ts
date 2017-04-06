// var knex = require('./knex.js');
import * as db from './db';

function Answers() {
  return db.knex('answers');
}

// *** queries *** //

function getAll() {
  return Answers().select();
}


export { getAll }
