import { knex, Knex } from 'knex';

const knexconfig = require('../../../knexfile.js');

export class KnexConnection {
  getConnection(): Knex {
    return knex(knexconfig);
  }
}
