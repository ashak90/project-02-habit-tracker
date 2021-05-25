const { Habit, User } = require('../../models');

const router = require('express').Router();

//the /api/habits endpoint

router.get('/', async (req, res) => {
    try {
        const habits = await Habit.findAll({
            include: [{ model: User }]
        });
        res.status(200).json(habits);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;