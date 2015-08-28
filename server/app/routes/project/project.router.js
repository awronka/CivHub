'use strict';

var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Project = mongoose.model('Project');

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

router.put('/update', function (req, res, next) {
	Project.findByIdAndUpdate(req.body.project._id, req.body.project, {upsert:true}, function (err, project) {
		if (err) return next(err);
		console.log('Found and updated project', project);
		res.json(project);
	})
});

router.post('/create', function (req, res, next) {
	// Create
	Project.create(req.body)
	.then(function (project) {
		// Send back
		res.status(201).json(project);
	})
	.then(null, next);
});

router.delete('/delete', function (req, res, next) {
	// Find by ID
	Project.findByIdAndRemove(req.body._id, function (err, doc) {
		res.send('Deleted');
	});
});

module.exports = router;