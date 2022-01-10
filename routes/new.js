const express = require("express");
const router = express.Router();
const sgMail = require("../services/sendgrid");

router.post("/api/mail", async (req, res) => {
  const { to, subject, text, html, sandboxMode = false } = req.body;

  const msg = {
    to,
    from: "hernandw@gmail.com",
    subject,
    text,
    html,
    mail_setting: {
      sandbox_mode: {
        enable: sandboxMode,
      },
    },
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    return res.status(error.code).send(error.message);
  }

  res.status(201).send({ success: true });
});

module.exports = router;
