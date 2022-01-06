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
      validate:{
        len:{
          args: [1,5],
          msg: "only allow values with length between 1 and 5"
        } 
      }
    },
    image: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
    sequelize,
    modelName: "Movie",
  }
);

module.exports = Movie;