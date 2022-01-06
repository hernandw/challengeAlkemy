const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/config/db");

class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: "username already exists" },
      lowercase: true,
      trim: true,
      validate: {
        isAlphanumeric: { args: true, msg: "ursername invalid characters" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      lowercase: true,
      trim: true,
      validate: {
        isAlpha: {
          args: true,
          msg: "will only allow letters",
        },
      },
      len: {
        args: [2, 20],
        msg: "only allow values with length between 2 and 20",
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: { msg: "email already exists" },
      allowNull: false,
      lowercase: true,
      trim: true,
      validate: {
        isEmail: { args: true, msg: "checks for email format (foo@bar.com)" },
      },
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0 //si es 0 es usuario normal 1 si es administrador
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
