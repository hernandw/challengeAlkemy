const express = require("express");
const app = express();
const createMail = require('./routes/new')

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(createMail);


module.exports = app;
