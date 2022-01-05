const express = require("express");
const router = express.Router();
const { getCharacters } = require("../database/controllers/character.controller");



//Ruta para mostrar personajes
router.get("/characters", getCharacters);

//Ruta para crear Personaje
/* router.post("/createcharacter", createCharacter);

//Ruta para Editar Personaje
router.patch("/createcharacter", editCharacter);

//Ruta para eliminar Personaje
router.delete('/deletecharacter/:id', deleteCharacter) */





module.exports = router;