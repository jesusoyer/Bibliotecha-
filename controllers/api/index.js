const router = require('express').Router();
const userRoutes = require('./User-route')
const bookRoutes = require('./Book-route');


router.use('/users', userRoutes);
router.use('/books', bookRoutes);


module.exports = router;