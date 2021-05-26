const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Habit } = require('../models');

router.get('/', (req, res) => {
    res.render('test', {
        message: "Hello World!",
        text: "some test text"
    });
});
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/habits');
        return;
    }
    res.status(400).send("Please log in!");
});
router.get('/signup', (req, res) => {
    res.status(400).send("Please sign up");
});
router.get('/habits', withAuth, async (req, res) => {

});

module.exports = router;