'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	"title": {type: String, required: true},
	"problem_statement": String,
	"description": String,
	"tags": [String],
	"working_from": [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}], //otherwise, use links?
	"link": String,
	
	"language": {type: String, required: true},
	"location": {
		"ISO": String,
		"coordinates": [Number]
	},
	"currency": String,

	"status": String,
	"started": Date,
	"estimate": {
		"time": Date,
		"cost": Number
	},
	"activity": [{
		"event": String,
		"note": String,
		"date": Date,
		"spent": Number
	}],

	"documents": [{
		"title": String,
		"file_url": String
	}],
	"implementations": [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}], //otherwise use links?
	"contributors": [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],	// embed info in doc? - if so, we have to have a user, not a contact that is bidacity/civic-tracker specific




	"created": { type: Date, default: Date.now },
	"lastUpdated": { type: Date },
	"hasBeenShowcased": { type: Boolean, default: false},
	"currentlyShowcased": { type: Boolean, default: false}
});


mongoose.model('Project', schema);