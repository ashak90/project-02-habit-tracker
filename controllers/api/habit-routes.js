const router = require('express').Router();

//the /api/habits endpoint

router.get('/', (req, res) => {
    res.send('<h1> Habits </h1>');
});

module.exports = router;