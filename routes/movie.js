const express = require("express");
const router = express.Router();
const { getMovies, getMoviesDetails, createMovie, editMovie, deleteMovie } = require("../database/controllers/movie.controller");


//Busqueda de peliculas (titulo e Imagen)
router.get("/movies", getMovies);


//Detalles de peliculas incluido personaje
router.get('/movies/:id', getMoviesDetails);

//Ingresar una pelicula
router.post('/createmovie', createMovie);

//Editar Pelicula
router.patch('/editmovie/:id', editMovie);

//Borrar Pelicula
router.delete('/deletemovie/:id', deleteMovie);

module.exports = router;
