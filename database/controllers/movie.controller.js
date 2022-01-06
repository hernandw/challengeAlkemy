const Movie = require("../../models/Movie");


exports.createMovie = async (req, res) => {
  const { title, date, rate, image, cod_genre } = req.body;
  try {
    let newmovie = await Movie.create({
      title,
      date,
      rate,
      image,
      cod_genre
    }).then((movie) => {
      res.json(movie);
    });
    if (movie) {
      res.json({ msg: "pelicula creada correctamente", data: newmovie });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error al guardar pelicula",
      data: {},
    });
  }
};

