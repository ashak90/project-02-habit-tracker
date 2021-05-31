const { Habit, User } = require('../../models');
const withAuth = require("../../utils/auth");
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

router.post('/', withAuth, async (req, res) => {
    try {
        const newHabit = await Habit.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newHabit);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const habitData = await Habit.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });
        habitData ? res.status(200).json(habitData) : res.status(404).json({ message: 'No habit with this ID!' });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;