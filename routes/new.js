const express = require("express");
const app = express();
const router = express.Router();
const sgMail = require("../services/sendgrid");

//midlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




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
