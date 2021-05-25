const { Habit, User } = require('../../models');
const withAuth = require("../../utils/auth");
const router = require('express').Router();

//the /api/habits endpoint

router.get('/', withAuth, async (req, res) => {
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