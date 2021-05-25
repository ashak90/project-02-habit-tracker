const { User, Habit } = require('../../models');

const router = require('express').Router();

//the /api/users endpoint

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{ model: Habit }]
        });
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;