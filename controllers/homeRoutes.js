const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Habit } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/habits');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/habits', withAuth, async (req, res) => {
    const userData = await User.findByPk(req.session.user_id, {
        include: [{ model: Habit }]
    });
    const user = userData.get({ plain: true });
    res.render('habits', { ...user });
});

router.get('/addHabit', withAuth, async (req, res) => {
    res.render('addHabit');
});

router.get('/congrats', withAuth, async (req, res) => {
    const userData = await User.findByPk(req.session.user_id, {
        include: [{ model: Habit }]
    });
    const user = userData.get({ plain: true });
    res.render('congrats', { ...user });
})
module.exports = router;