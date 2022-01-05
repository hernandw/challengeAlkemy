const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authConfig = require("../../database/config/auth");

exports.getUsers = async (req, res) => {
  try {
    let user = await User.findAll();
    res.json({
      data: user,
    });
  } catch (error) {
    res.json({
      message: "Error para mostrar los datos",
    });
  }
};

exports.createUser = async (req, res) => {
  //Encriptar la contraseña
  let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
  try {
    let newuser = await User.create({
      username: req.body.username,
      password: password,
      name: req.body.name,
      email: req.body.email,
      enable: req.body.enable,
    }).then((user) => {
      //Token de Usuario
      let token = jwt.sign({ user: user }, authConfig.secret, {
        expiresIn: authConfig.expires,
      });
      res.json({
        user: user,
        token: token,
      });
    });
    if (newuser) {
      return res.json({
        message: "Usuario creado correctamente",
        data: newuser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error al guardar los datos",
      data: {},
    });
  }
};
