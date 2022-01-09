const express = require("express");
const app = express();
/* const sequelize = require("./database/config/db"); */


//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


module.exports = app;
