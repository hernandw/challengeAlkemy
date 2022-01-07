const express = require("express");
const router = express.Router();
const { createMovie } = require("../database/controllers/movie.controller");

router.post("/createmovie", createMovie);

module.exports = router;
