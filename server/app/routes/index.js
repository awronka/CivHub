'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/users', require('./users/user.router'));
router.use('/project', require('./project/project.router'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
