const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/config/db");

class Character extends Model {}
Character.init(
  {
    name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.DOUBLE
    },
    history: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "Character",
  }
);

module.exports = Character;