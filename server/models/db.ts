import * as client from "knex";
const environment = process.env.NODE_ENV || 'development';
import * as config from "../knexfile.js";

export module DB {
  export var knex: client = client(config[environment]);
}
