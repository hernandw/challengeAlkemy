const express = require("express");
const router = express.Router();
const sgMail = require('../services/sendgrid')

router.post("/api/mail", async (req, res) => {
  const { to, subject, text, html } = req.body;


  const msg = {
    to,
    from: "hernandw@gmail.com",
    subject,
    text,
    html,
  };

  try {
      await sgMail.send(msg);
  } catch (error) {
      return res.status(error.code).send(error.message)
  }

  res.send(201).send({ success: true });
});
