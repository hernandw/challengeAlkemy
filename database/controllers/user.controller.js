const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authConfig = require("../../database/config/auth");

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
      message: "Error para mostrar los datos",
    });
  }
};

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
      message: "error al guardar los datos " + error,
      data: {},
    });
  }
};
