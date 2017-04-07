// import * as knex from 'knex';
// const environment = process.env.NODE_ENV || 'development';
// const config = require('../../knexfile.js')[environment];
//
// exports = knex(config);
import * as client from "knex";
const environment = process.env.NODE_ENV || 'development';
import * as config from "../knexfile.js";

// export const knex: client = client({
//   client: 'pg',
//   connection: 'postgres://localhost/alice_stage',
//   migrations: {
//     directory: __dirname + '/db/migrations'
//   },
//   seeds: {
//     directory: __dirname + '/db/seeds/development'
//   }
// });

// export const knex = require('knex')(config[environment]);

export module DB {
  export var knex: client = client(config[environment]);
}
