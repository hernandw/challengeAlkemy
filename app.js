const express = require('express');
const app = express();
const sequelize = require('./database/config/db')

//Setting
const PORT = process.env.PORT || 3000;


//Rutas
app.get('/', (req, res)=>{
    res.send('Servidor Activo')
})


//levantar servidor
app.listen(PORT, (req, res) => {
  console.log(`Servidor Activo on port: ${PORT}`);

  //arrancamos la BBDD
  sequelize
    .authenticate()
    .then(() => {
      console.log("Conexión correcta a la BBDD");
    })
    .catch((error) => {
      console.log("Error al conectar la BBDD " + error);
    });
});