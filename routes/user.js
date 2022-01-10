const express = require("express");
const router = express.Router();

const {
  getUser,
  createUser,
} = require("../database/controllers/user.controller");

//Ruta para Login
router.get("/auth/login", getUser);

//Ruta para Registrarse
router.post("/auth/register", createUser);

module.exports = router;
