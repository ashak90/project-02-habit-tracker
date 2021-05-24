const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('test', {
        message: "Hello World!",
        text: "some test text"
    });
});

module.exports = router;