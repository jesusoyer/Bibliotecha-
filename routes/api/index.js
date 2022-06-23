const router = require('express').Router();

const exampleRoutes = require('./example-route');
const userRoutes = require('./User-route');

<<<<<<< HEAD
=======
router.use('/example', exampleRoutes);
router.use('/user', userRoutes);
>>>>>>> e995c624d1a7e1067420f55734609a429e0ff7af

router.use('/example', exampleRoutes);
module.exports = router;