const User = require('../models/User');


exports.getUsers = async (req, res) => {
   try {
    let user = await User.findAll();
    res.json({
        data: user
    })
   } catch (error) {
       res.json({
           message: "Error para mostrar los datos"
       })
   }
}

exports.createUser = async (req, res) => {
  try {
    const { username, password, name, email, enable } = req.body;
    let newuser = await User.create({
      username,
      password,
      name,
      email,
      enable,
    });
    if (newuser) {
     return res.json({
        message: "Usuario creado correctamente",
        data: newuser
      });
    }
  } catch (error) {
      console.log(error)
    res.status(500).json({
      message: "error al guardar los datos",
      data: {}
    });
  }
 
};