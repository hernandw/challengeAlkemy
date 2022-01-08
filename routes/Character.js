const express = require("express");
const router = express.Router();
const {
  getCharacters,
  createCharacter,
  getOnCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacterValor
} = require("../database/controllers/character.controller");

//Ruta para mostrar personajes
router.get("/characters", getCharacters);

//Ruta para mostrar un personaje por Id (incluida las peliculas)
router.get("/character/:id", getOnCharacter);

//Ruta para crear Personaje
router.post("/createcharacter", createCharacter);

//Ruta para Editar Personaje
router.patch("/editcharacter/:id", updateCharacter);

//Ruta para eliminar Personaje
router.delete("/deletecharacter/:id", deleteCharacter);

//Ruta para buscar un personaje por nombre, edad, peso
router.get('/character', getCharacterValor)


module.exports = router;
