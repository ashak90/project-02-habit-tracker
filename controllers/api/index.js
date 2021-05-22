const router = require('express').Router();
const habitRoutes = require('./habit-routes');

router.use('/habits', habitRoutes);

module.exports = router;