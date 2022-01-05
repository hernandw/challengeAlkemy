const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../database/controllers/user.controller");



//Ruta para Login
router.get("/auth/get", getUsers);


//Ruta para Registrarse
router.post("/auth/register", createUser);

module.exports = router;