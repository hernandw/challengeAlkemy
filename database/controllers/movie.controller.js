const Movie = require("../../models/Movie");
const Character = require("../../models/Character");
const { Op } = require("sequelize");
const Genre = require("../../models/Genre");


//Busqueda de Peliculas solo por titulo e imagen
exports.getMovies = async (req, res) => {
  try {
    const peliculas = await Movie.findAll({
      attributes: ["title", "image"],
    }).then((peliculas) => res.json(peliculas));    
  } catch (error) {
    res.status(404).json({
      msg: "Error para cargar Peliculas" + error,
      data: {},
    });
  }
};

//Detalles de Peliculas
exports.getMoviesDetails = async (req, res) => {
  const detallePelicula = await Movie.findOne({
    include: {
      model: Character,
      through: {
        attributes: []
      },
      attributes: ["name"],
    },
    where: {
      id: req.params.id,
    },
    attributes: {exclude: 'GenreId'}
  }).then((detallePelicula) => {
    res.json(detallePelicula);
  });
};


//Registrar una pelicula
exports.createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create({
      title: req.body.title,
      date: req.body.date,
      rate: req.body.rate,
      image: req.body.image,
      GenreId: req.body.GenreId
    }).then(newMovie=> {
      res.json({
        msg: "se ha creado la pelicula correctamente",
        data: newMovie
      })
    })
  } catch (error) {
    res.status(404).json({
      msg: "error al guardar pelicula " + error,
      data: {}
    })
  }
};

//Actualizar una pelicula
exports.editMovie = async (req, res) => {
  const { title, date, rate, image, GenreId } = req.body;
  await Movie.update({
    title,
    date,
    rate,
    image,
    GenreId
  },{
    where: {
      id: req.params.id
    }
  }
  ).then(result =>{
    res.json(result)
  })
}

//Borrar una pelicula
exports.deleteMovie = async (req, res) => {
  try {
    const pelicula = await Movie.destroy({
      where: {
        id: req.params.id
      },
    }).then((pelicula) => {
      res.json(pelicula);
    });
  } catch (error) {
    console.log(error)
    res.json({
      msg: "error para eliminar " + error,
      data: pelicula,
    });
  }
}; 

//Buscar Pelicula por titulo o por Género
exports.getMoviesValor = async (req, res) => {
  try {
    //Buscar por titulo
    if (req.query.title) {
      const respuesta = await Movie.findAll({
        where: {
          title: { [Op.substring]: req.query.title },
        },
      }).then((respuesta) => {
        res.json(respuesta);
      });
      //Buscar por Género
    }else if(req.query.Genre){
      const respuesta = await Movie.findAll({
        where:{
          GenreId:  { [Op.eq]: req.query.Genre }
        }
      }).then(respuesta => {
        res.json(respuesta);
      })
      //Buscar por Fecha
      
    }
  } catch (error) {
    console.log(error)
    res.status(404).json({
      msg: "Error al buscar " + error,
      data: {}
    })
  }
};