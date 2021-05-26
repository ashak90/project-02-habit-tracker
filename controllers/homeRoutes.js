const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('test', {
        message: "Hello World!",
        text: "some test text"
    });
});
router.get('/login', (req, res) => {
    res.status(400).send("Please log in!");
})

module.exports = router;