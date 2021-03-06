'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    "name": { type: String },
    "emails": [{ type: String }],
    "avatar": { type: String },
    "password": { type: String },
    "salt": { type: String },
    "github": {
        id: String,
        username: String
    },
    "twitter": {
        id: String,
        username: String,
        token: String,
        tokenSecret: String
    },
    "language": { type: String },
    "joined": { type: Date, default: Date.now },
    "location": {
        "city": String,
        "state": String,
        "country": String
    },
    "isAdmin": { type: Boolean, default: false },

    "collaborations": [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}],
    "invites": { type: Number, default: 0 },
    "invited": [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

// generateSalt, encryptPassword and the pre 'save' and 'correctPassword' operations
// are all used for local authentication security.
var generateSalt = function () {
    return crypto.randomBytes(16).toString('base64');
};

var encryptPassword = function (plainText, salt) {
    var hash = crypto.createHash('sha1');
    hash.update(plainText);
    hash.update(salt);
    return hash.digest('hex');
};

schema.pre('save', function (next) {

    if (this.isModified('password')) {
        this.salt = this.constructor.generateSalt();
        this.password = this.constructor.encryptPassword(this.password, this.salt);
    }

    next();

});

schema.statics.generateSalt = generateSalt;
schema.statics.encryptPassword = encryptPassword;

schema.method('correctPassword', function (candidatePassword) {
    return encryptPassword(candidatePassword, this.salt) === this.password;
});

mongoose.model('User', schema);