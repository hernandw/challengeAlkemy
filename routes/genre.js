const express = require("express");
const router = express.Router();
const { createGenre } = require("../database/controllers/genre.controller");

//Ruta para crear Género
router.post("/creategenre", createGenre);

module.exports = router;
