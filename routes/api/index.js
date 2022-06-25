const router = require('express').Router();

const bookRoutes = require('./Book-route');
const userRoutes = require('./User-route');

router.use('/book', bookRoutes);
router.use('/user', userRoutes);

module.exports = router;