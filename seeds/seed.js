const sequelize = require('../config/connection');
const { User, Habit } = require('../models');

const userData = require('./userData.json');
const habitData = require('./habitData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });


    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const habits = await Habit.bulkCreate(habitData);
    console.log("Seeding complete");
    process.exit(0);
};

seedDatabase();