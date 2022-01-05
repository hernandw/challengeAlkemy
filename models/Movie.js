const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/config/db");

class Movie extends Model {}
Movie.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    rate: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    cod_genre: {
      type: DataTypes.INTEGER,
      references: {
        model: "Genres",
        key: "id",
      },
      onDelete: "Cascade",
      onUpdate: "Cascade",
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "Movie",
  }
);

module.exports = Movie;