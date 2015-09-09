'use strict';

var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var ProductAndService = mongoose.model('ProductAndService');

// Evaluate Id
router.param('id', function (req, res, next, id) {
	//Find and populate requested project
	ProductAndService.findById(id).exec()
	.then(function (project) {
		if (!project) throw HttpError(404);
		else {
			req.project = project;
			next();
		}
	})
	.then(next, null);
});

// Get Specific PAS
router.get('/:id', function (req, res, next) {
	//Send back JSON of project
	res.json(req.project);
});

// Get All PAS
router.get('/', function (req, res, next) {
	ProductAndService.find({}, function(err, pas){
		res.json(pas);
	});
});

// Update a PAS
router.put('/update', function (req, res, next) {
	
});

// Create a PAS
router.post('/create', function (req, res, next) {
	
});

// Delete a PAS
router.delete('/delete', function (req, res, next) {
	
});

module.exports = router;