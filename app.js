const express = require('express');
const app = express();
const sequelize = require('./database/config/db');



//Setting
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());





//Routes
const userRoutes = require('./routes/user')



//levantar servidor
app.listen(PORT, (req, res) => {
  console.log(`Servidor Activo en port: ${PORT}`);

app.use(userRoutes)

  //arrancamos la BBDD
  sequelize
    .sync({ force: false})
    .then(() => {
      console.log("Conexión correcta a la BBDD");
    })
    .catch((error) => {
      console.log("Error al conectar la BBDD " + error);
    });
});


module.exports = app;