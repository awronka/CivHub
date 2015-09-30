'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	"title": {type: String, required: true},
	"problem_statement": String,
	"description": String,
	"tags": [String],
	"dependencies": [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}], //otherwise, use links?
	"link": String,
	
	"language": {type: String},
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
		"event_type": String,
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



	"logo": {type: String, required: false},
	"created": { type: Date, default: Date.now },
	"last_updated": { type: Date },
	"has_been_showcased": { type: Boolean, default: false},
	"currently_showcased": { type: Boolean, default: false},
	"appreciations": Number,
	"comments": [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});


mongoose.model('Project', schema);