const User = require("./User");
const Habit = require("./Habit");

User.hasMany(Habits, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
Habit.belongsTo(User, {
    foreignKey: "user_id"
});
module.exports = { User, Habit };

