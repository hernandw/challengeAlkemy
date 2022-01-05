const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
  let password = bcrypt.hashSync(req.body.password, 10);
  try {
    let newuser = await User.create({
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      email: req.body.email,
      enable: req.body.enable,
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
