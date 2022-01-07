const sequelize = require("./database/config/db");
/* const User = require("./models/User"); */
const Movie = require("./models/Movie");
const Character = require("./models/Character");
const Genre = require("./models/Genre");
require("./models/associations");



/* //User sin contraseña encriptada
const users = [
  {
    "username": "hernandw",
    "password": "123456",
    "name": "williams",
    "email": "hernandw@gmail.com",
    "role": 1,
  },
  {
    "username": "yessaleja",
    "password": "123456",
    "name": "Yessenia",
    "email": "yessaleja@gmail.com",
  },
  {
    "username": "hernandezf",
    "password": "123456",
    "name:" "Fabiana",
    "email": "hernandezf@gmail.com",
  },
  {
    "username": "carujop",
    "password": "123456",
    "name": "Pedro",
    "email": "carujop@gmail.com",
  },
]; */

const genres = [
  { name: "adventure", image: "adventure.jpg" },
  { name: "comedy", image: "comedy.jpg" },
  { name: "horror", image: "horro.jpg" },
  { name: "drama", image: "drama.jpg" },
  { name: "mistery", image: "mistery.jpg" },
  { name: "fantasy", image: "fantasy.jpg" },
  { name: "sciencie fiction", image: "sciencief.jpg" },
  { name: "thriller", image: "thriller.jpg" }

];





sequelize
  .sync({ force: false })
  .then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
  })
  /* .then(() => {
    // Rellenar usuarios (sin bcrypt)
    users.forEach((user) => User.create(user));
  }) */
  .then(() => {
    // Rellenar Generos
    genres.forEach((genre) => Genre.create(genre));
  })
  .then(async () => {
    let movie1 = await Movie.create(
      {
        title: "Spiderman: No Way No Home",
        date: "2021-12-16",
        rate: 5,
        image: "spiderman.jpg",
        GenreId: 1,
        Characters: [
          {
            name: "Peter Parker",
            age: 30,
            weight: 60,
            history:
              "un joven huérfano neoyorquino que adquiere superpoderes después de ser mordido por una araña radiactiva,15​ y cuya ideología como héroe se ve reflejada primordialmente en la expresión «un gran poder conlleva una gran responsabilidad»",
            image: "peterparker.jpg",
          },
        ],
      },
      { include: "Characters" }
    );

    let movie2 = await Movie.create(
      {
        title: "Sing 2",
        date: "2021-12-30",
        rate: 4,
        image: "sing2.jpg",
        GenreId: 2,
        Characters: [
          {
            name: "Buster Moon",
            age: 40,
            weight: 15,
            history:
              "Buster Moon is truly the optimist; he doesn't know when to quit, and believes in the concept that when you've hit rock bottom, the only way left to go is up.",
            image: "booster.jpg",
          },
        ],
      },
      { include: "Characters" }
    );

    let movie3 = Movie.create(
      {
        title: "Encanto",
        date: "2021-11-24",
        rate: 5,
        image: "encanto.jpg",
        GenreId: 2,
        Characters: [
          {
            name: "Mirabel Madrigal",
            age: 15,
            weight: 45,
            history:
              "es una joven que no tiene ningún don especial, cuando todos los miembros de la familia Madrigal cuentan con un don especial.",
            image: "mirabel.jpg",
          },
        ],
      },
      { include: "Characters" }
    );

    let movie4 = Movie.create(
      {
        title: "Fortress",
        date: "2021-12-17",
        rate: 2,
        image: "fortress.jpg",
        GenreId: 1,
        Characters: [
          {
            name: "Robert Michaels",
            age: 60,
            weight: 65,
            history:
              "Robert and his son Paul live in a top-secret resort for retired U.S. intelligence officers. A group of criminals breaches the compound and the pair has to save the day",
            image: "robert.jpg",
          },
          {
            name: "Paul Michaels",
            age: 55,
            weight: 63,
            history:
              "Robert and his son Paul live in a top-secret resort for retired U.S. intelligence officers. A group of criminals breaches the compound and the pair has to save the day",
            image: "michael.jpg",
          },
        ],
      },
      { include: "Characters" }
    );
  });