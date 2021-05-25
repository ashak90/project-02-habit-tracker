const { User, Habit } = require("../models");
const log = async () => {
    const users = await User.findAll({ raw: true, include: Habit });
    const habits = await Habit.findAll({ raw: true, include: User });
    console.log(users, habits);
}
log();