const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create User model
class User extends Model {}

// create fields/columns for User model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    user_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    undersocred: true,
    modelName: "user",
  }
);

module.exports = User;
