const router = require('express').Router();
const exampleRoutes = require('./example-route');

router.use('/example', exampleRoutes);

module.exports = router;