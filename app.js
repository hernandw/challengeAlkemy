const e = require('express');
const express = require('express');
const app = express();
const sequelize = require('./database/config/db');
const usuario = require('./database/models/User');


//Setting
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Rutas
app.get('/', (req, res)=>{
    usuario.create({
      username: 'hernandw',
      password: '123456',
      name: 'Williams',
      email: 'hernandw@gmail.com',
      enable: false
    }).then(user =>{
      res.json(user)
    })
})


//levantar servidor
app.listen(PORT, (req, res) => {
  console.log(`Servidor Activo on port: ${PORT}`);

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