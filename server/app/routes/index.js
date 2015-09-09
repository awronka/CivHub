'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/users', require('./user.router'));
router.use('/project', require('./project.router'));
router.use('/productandservice', require('./product-and-service.router'));

router.use(function (req, res) {
    res.status(404).end();
});
