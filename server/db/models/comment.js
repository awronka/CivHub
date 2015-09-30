'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	'project': {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},
	'user': {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	'comment': String,
	'date_created': {type: Date, default: Date.now}
});

mongoose.model('Comment', schema);