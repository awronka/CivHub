'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	"event": String,
	"note": String,
	"date": Date,
	"spent": Number
});

mongoose.model('Event', schema);