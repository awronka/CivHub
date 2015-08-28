'use strict';

var router = require('express').Router();
module.exports = router;

router.param('id', function (req, res, next, id) {
	//Find and populate requested project
	Project.findById(id).exec()
	.then(function (project) {
		if (!project) throw HttpError(404);
		else {
			req.project = project;
			next();
		}
	})
	.then(next, null);
});

router.get('/:id', function (req, res, next) {
	//Send back JSON of project
	res.json(req.project);
});