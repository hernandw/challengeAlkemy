const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class User extends Model {}
User.init(
  {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        lowercase: true,
        trim: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        unique: { msg: "Name already exists" },
        allowNull: false,
        lowercase: true,
        trim: true,
        validate: {
          isAlphanumeric: { args: true, msg: "name invalid characters" },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: { msg: "email already exists" },
        allowNull: false,
        lowercase: true,
        trim: true,
      },
      enable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
  },
  {
    timestamps: false,
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
