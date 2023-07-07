import { knex, Knex } from 'knex';

const knexconfig = require('../../../knexfile.js');

export class KnexConnection {
  private knexInstance: Knex;

  getConnection(): Knex {
    const connection = knex(knexconfig)
    console.log(process.env)
    this.knexInstance = connection;

    this.isConnectionAlive();

    return this.knexInstance;
  }

  private isConnectionAlive() {
    this.knexInstance.raw('SELECT 1')
      .then(() => {
        console.log('Database connected');
      })
      .catch((err) => {
        console.error('Database connection failed');
        throw err
      })
  }
}
