const router = require('express').Router();

const exampleRoutes = require('./example-route');
const homeRoute = require('./homeRoute')

router.use('/example', exampleRoutes);
router.use("/", homeRoute)
module.exports = router;