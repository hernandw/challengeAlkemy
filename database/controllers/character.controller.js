const res = require("express/lib/response");
const Character = require("../../models/Character");
const Movie = require("../../models/Movie");
const Genre = require("../../models/Genre");
const { Sequelize } = require('sequelize');
const {Op} = require('sequelize');



//Ruta para Consultar Personajes
exports.getCharacters = async (req, res) => {
  try {
    let newCharacter = await Character.findAll();
    res.json({
      data: newCharacter,
    });
  } catch (error) {
    res.json({
      msg: "Error para mostrar datos" + error,
      data: {},
    });
  }
};

//Ruta para crear Personajes
exports.createCharacter = async (req, res) => {
  try {
    const { name, age, weight, history, image } = req.body;
    let newCharacter = await Character.create({
      name,
      age,
      weight,
      history,
      image,
    });
    if (newCharacter) {
      res.json({
        msg: "Usuario creado correctamente",
        data: newCharacter,
      });
    }
  } catch (error) {
    res.json({
      msg: "Error para crear Personaje " + error,
      data: {},
    });
  }
};

//Consultar un solo personaje por Id
exports.getOnCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findOne({
      include: {
        model: Movie,
        through: {
          attributes: []
        },
        attributes: ['title']
      },
      attributes: ["name", "age", "weight", "history", 'image'],
      where: {
        id
      }
    });
    if (character === null) {
      res.json({ msg: "id no existe", data: {} });
    } else {
      res.json({
        data: character,
      });
    }
  } catch (error) {
    res.json({
      msg: "id no existe " + error,
    });
  }
};

//Eliminar un personaje por Id
exports.deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    let deleteRowCount = await Character.destroy({
      where: {
        id,
      },
    });
    res.json({
      msg: "Personaje Eliminado Correctamente",
      count: deleteRowCount,
    });
  } catch (error) {
    res.json({
      msg: "error para eliminar el personaje: " + error,
    });
  }
};

//Ruta para editar un personaje
exports.updateCharacter = async (req, res) => {
  const { id } = req.params;
  const { name, age, weight, history, image } = req.body;
  let character = await Character.findAll({
    attributes: ["id", "name", "age", "weight", "history", "image"],
    where: {
      id,
    },
  });
  if (character.length > 0) {
    character.forEach(async (c) => {
      await c.update({
        name,
        age,
        weight,
        history,
        image,
      });
    });
  }
  return res.json({
    msg: "Personaje Actualizado",
    data: character,
  });
};


//Ruta para consultar por valor
exports.getCharacterValor = async (req, res) => {
  try {
    //Buscar por edad
    if (req.query.age) {
      const respuesta = await Character.findAll({
        where: {
          age: req.query.age,
        },
      }).then((respuesta) => res.json(respuesta));
      //Buscar por peso
    } else if (req.query.weight) {
      const respuesta = await Character.findAll({
        where: {
          weight: req.query.weight,
        },
      }).then((respuesta) => res.json(respuesta));
    } else if (req.query.name) {
      const respuesta = await Character.findAll({
        where: {
          name: { [Op.substring]: req.query.name },
        },
      }).then((respuesta) => res.json(respuesta));
      //Buscar por pelicula
    } else if(req.query.movies){
      const respuesta = await Character.findAll({
        include: [{
          model: Movie,
          through: {
            attributes: []
          },
          where: {id: req.query.movies},
          
                    attributes: {exclude: 'GenreId'}
        }]
      })
      .then((respuesta) => res.json(respuesta));
    }
  } catch (error) {
    res.status(404).json({
      msg: "no se encuentra valor",
      data: {},
    });
  }
};
