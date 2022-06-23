const router = require('express').Router();

const exampleRoutes = require('./example-route');
const userRoutes = require('./User-route');

router.use('/example', exampleRoutes);
router.use('/user', userRoutes);

module.exports = router;