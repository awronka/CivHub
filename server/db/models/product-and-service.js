'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	"title": {type: String, required: true},
	"description": String,
	"tags": [String],
	"link": String,

	"language": {type: String, required: true},
	"contributors": [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

mongoose.model('ProductAndService', schema);