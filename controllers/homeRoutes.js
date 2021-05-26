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
    res.render('habits');
});

module.exports = router;