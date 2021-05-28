const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Habits model
class Habit extends Model { }

// create fields/columns for Habits
Habit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // good_habit: {
    //   type: DataTypes.BOOLEAN
    // },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 7
      }
    },
    target_freq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 7
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    undersocred: true,
    modelName: "habit",
  }
);

module.exports = Habit;
