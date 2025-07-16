const mysql = require("mysql2");
require("dotenv").config();
const DB_HOSTNAME = process.env.DB_HOSTNAME;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
//Test connection
// const connection = mysql.createConnection({
//   host: DB_HOSTNAME,
//   port: DB_PORT, //default 3306
//   user: DB_USER, //default empty
//   password: DB_PASSWORD,
//   database: DB_NAME,
// });
const connection = mysql.createPool({
  host: DB_HOSTNAME,
  port: DB_PORT, //default 3306
  user: DB_USER, //default empty
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
