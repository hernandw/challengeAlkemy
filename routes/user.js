const express = require('express');
const { Router } = require('express');
const app = require('../app');
const router = express.Router();
const { getUsers, createUser } = require('../database/controllers/user.controller') 

//Ruta para Login 

router.get('/auth/get', getUsers);



//Ruta para Registrarse 
router.post('/auth/register', createUser)

module.exports = router