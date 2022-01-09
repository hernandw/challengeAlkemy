const express = require("express");
const router = express.Router();
const sgMail = require('../services/sendgrid');
const {
  getUser,
  createUser,
} = require("../database/controllers/user.controller");

//Ruta para Login
router.get("/auth/login", getUser);

//Ruta para Registrarse
router.post("/auth/register", createUser);

router.post("/api/mail", async (req, res) => {
  const { to, subject, text, html } = req.body;

  const msg = {
    to: 'hernandw@gmail.com',
    from: "hernandw@gmail.com",
    subject: 'hola',
    text: 'hola',
    html: '<p>hola</p>'
  };

  

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
});


module.exports = router;
