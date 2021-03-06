const User = require("../../models/User");
const jwt = require("jsonwebtoken"); // Genera un token al registrarse y loguearse
const bcrypt = require("bcryptjs"); // Encripta la contraseña
const authConfig = require("../../database/config/auth");
const sgMail = require("../../services/sendgrid");
const app = require('../../app');


// Consulta un usuario
exports.getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    await User.findOne({
      where: {
        email: email,
      },
    }).then((user) => {
      if (!user) {
        res.status(404).json({ msg: "user not found" });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          //Token de Usuario
          let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });
          res.json({
            user: user,
            token: token,
          });
        } else {
          res.status(401).json({ msg: "wrong passwords" });
        }
      }
    });
  } catch (error) {
    res.json({
      message: "Error para mostrar los datos " + error,
    });
  }
};

// Crea un Usuario
exports.createUser = async (req, res) => {
  //Encriptar la contraseña
  let password = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(authConfig.rounds)
  );
  try {
    let newuser = await User.create({
      username: req.body.username,
      password: password,
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    }).then((user) => {
      //Token de Usuario
      /* let token = jwt.sign({ user: user }, authConfig.secret, {
        expiresIn: authConfig.expires
      }); */
      //Enviar correo
      const msg = {
        to: req.body.email,
        from: "hernandw@gmail.com",
        subject: "Registro creado Exitosamente",
        text: "muchas gracias por registrarte",
        html: "<p>Gracias</p>",
       
      };
    
      try {
        sgMail.send(msg);
      } catch (error) {
        return res.status(error.code).send(error.message);
      }
    
      res.status(201).send({ success: true });




      res.json({
        user: user,
        token: token,
      });
    });
    if (newuser) {
      /* return res.json({
        message: "Usuario creado correctamente",
        data: newuser,
      }); */
      /* const { to, subject, text, html, sandboxMode = false } = req.body; */

      const msg = {
        to: "hernandw@gmail.com",
        from: "hernandw@gmail.com",
        subject: "Registro creado Exitosamente",
        text: "muchas gracias por registrarte",
        html: "<p>Gracias</p>",
        /* mail_setting: {
          sandbox_mode: {
            enable: sandboxMode,
          },
        }, */
      };
    
      try {
        await sgMail.send(msg);
      } catch (error) {
        return res.status(error.code).send(error.message);
      }
    
      res.status(201).send({ success: true });

    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error al guardar los datos " + error,
      data: {},
    });
  }
};
