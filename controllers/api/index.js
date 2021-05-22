const router = require('express').Router();
const habitRoutes = require('./habit-routes');
const userRoutes = require('./user-routes');

router.use('/habits', habitRoutes);
router.use('/users', userRoutes);

module.exports = router;