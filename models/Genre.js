const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/config/db");

class Genre extends Model {}
Genre.init(
  {
    name: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      }},
  {
    timestamps: false,
    sequelize,
    modelName: "Genre",
  }
);

module.exports = Genre;