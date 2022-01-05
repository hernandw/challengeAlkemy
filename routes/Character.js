const express = require("express");
const router = express.Router();
const { getPost } = require("../database/controllers/character.controller");



//Ruta para Login
router.get("/auth/login", getPost);




module.exports = router;