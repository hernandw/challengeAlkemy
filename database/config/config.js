//Archivos de Configuración del Servidor
require("dotenv").config();
const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE_DEV,
  DB_DATABASE_TEST,
  DB_DATABASE_PROD,
  SENDGRID_API_KEY
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE_DEV,
    host: DB_HOST,
    dialect: "postgres",
    SENDGRID_API_KEY: SENDGRID_API_KEY
    
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE_TEST,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE_PROD,
    host: DB_HOST,
    dialect: "postgres",
  },
};
