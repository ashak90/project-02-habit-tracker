const router = require('express').Router();

//the /api/users endpoint

router.get('/', (req, res) => {
    res.send('<h1> Users </h1>');
});

module.exports = router;