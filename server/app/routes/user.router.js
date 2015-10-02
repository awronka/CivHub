'use strict';

var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Project = mongoose.model('Project');

var ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

// Evaluate Id
router.param('id', function (req, res, next, id) {
	console.log('resolving for user');
	User.findById(id).populate('collaborations').exec()
		.then(function (user) {
			if (!user) throw HttpError(404);
			else {
				req.user = user;
				next();
			}
		})
		.then(null, next);
});

// Get Specific User
router.get('/:id', ensureAuthenticated, function (req, res) {
	res.json(req.user);
});

// Get All Users
router.get('/', function (req, res, next) {
	User.find().exec()
		.then(function (users) {
			res.json(users);
		});
});