const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../database/controllers/user.controller");
const { createGenre } = require("../database/controllers/genre.controller");
const { createMovie } = require('../database/controllers/movie.controller');



//Ruta para Login
router.get("/auth/login", getUser);

//Ruta para Registrarse
router.post("/auth/register", createUser);



//Ruta para Crear Peliculas
router.post('/createmovie', createMovie);


module.exports = router;