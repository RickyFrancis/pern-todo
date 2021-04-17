const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();

// Local PostgreSQL DB Connection

// const pool = new Pool({
//   user: 'postgres',
//   password:
//     'ABC123',
//   host: 'localhost',
//   port: 5432,
//   database: 'perntodo',
// });

// Heroku PostgreSQL DB Connection

const { Client } = require('pg');

const pool = new Client({
  connectionString: process.env.HEROKU_POSTGRESQL_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
