const app = require("./app");
//Setting
const PORT = process.env.PORT || 4000;
require("./models/associations");

const userRouter = require("./routes/user");
const genreRouter = require("./routes/genre");
const movieRouter = require("./routes/movie");
const characterRouter = require("./routes/character");
const sequelize = require("./database/config/db");

app.use(userRouter);
app.use(genreRouter);
app.use(movieRouter);
app.use(characterRouter);

//levantar servidor
app.listen(PORT, (req, res) => {
    console.log(`Servidor Activo en port: ${PORT}`);
  
    //arrancamos la BBDD
    sequelize
      .sync({ force: false }) // true rehace las tablas
      .then(() => {
        console.log("Conexión correcta a la BBDD");
      })
      .catch((error) => {
        console.log("Error al conectar la BBDD " + error);
      });
  });