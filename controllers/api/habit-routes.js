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

router.get('/:id', withAuth, async (req, res) => {
    try {
        const habit = await Habit.findByPk(req.params.id);
        habit ? res.status(200).json(habit) : res.status(404).send("Habit not found!");
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

router.put('/:id', withAuth, async (req, res) => {
    try {
        const habit = await Habit.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        habit ? res.status(200).json(habit) : res.status(404);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/increment/:id', withAuth, async (req, res) => {
    try {
        await Habit.increment('frequency', {
            by: 1,
            where: {
                id: req.params.id
            }
        });
        const habit = await Habit.findByPk(req.params.id);
        habit ? res.status(200).json(habit) : res.status(404);
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