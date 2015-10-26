'use strict';

var router = require('express').Router();
var mongoose = require('mongoose');
var Project = mongoose.model('Project');
var User = mongoose.model('User');

// Evaluate Id
router.param('id', function (req, res, next, id) {
	//Find and populate requested project
	Project.findById(id).populate('contributors').exec()
	.then(function (project) {
		if (!project) throw HttpError(404);
		else {
			req.project = project;
			next();
		}
	})
});

// Get Specific Projects
router.get('/:id', function (req, res, next) {
	//Send back JSON of project
	res.json(req.project);
});

// Get All Projects
router.get('/', function (req, res, next) {
	Project.find({}, function (err, projects) {
		res.json(projects);
	});
});

router.post('/search', function (req, res, next) {
	var regex = new RegExp(req.body.query, 'i');
	Project.find()
	.or([{
			title: regex
		},{
			description: regex
		},{
			problem_statement: regex
		},{
			solution_tags: regex
		},{
			problem_tags: regex
		}])
	.exec(function (err, projects) {
		if (err) return handleError(err);
		res.json(projects);
	});
});

// Update a Project
router.put('/update', function (req, res, next) {
	Project.findByIdAndUpdate(req.body._id, req.body, {upsert:true}, function (err, project) {
		if (err) return next(err);
		console.log('Found and updated project', project);
		res.json(project);
	})
});

// Create a Project
router.post('/create', function (req, res, next) {
	// Create Project
	Project.create(req.body.project, function (err, newProject) {
		// Find Creator in DB
		if (err) return next(err);
		User.findById(req.body.userId, function (err, foundUser) {
			// Add Project to User Contributions
			foundUser.collaborations.push(newProject._id);
			foundUser.save();
			// Add Creators Id to Contributors Array 
			newProject.contributors.push(req.body.userId);
			newProject.save();
		})
	})
	.then(function (project) {
		// Send back project
		res.status(201).json(project);
	})
});

// Delete a Project
router.delete('/delete/:id', function (req, res, next) {
	// Find by ID
	Project.findByIdAndRemove({_id: req.params.id})
	.then(function (err, doc) {
		console.log("this doc has been deleted", doc);
		res.send(doc);
	});
});

module.exports = router;