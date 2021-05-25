const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Habits model
class Habits extends Model {}

// create fields/columns for Habits
Habits.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Habits;
