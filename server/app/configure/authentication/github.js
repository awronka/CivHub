'use strict';
var passport = require('passport');
var GithubStrategy = require('passport-github2').Strategy;
var mongoose = require('mongoose');
var UserModel = mongoose.model('User');

module.exports = function (app) {

	var githubConfig = app.getValue('env').GITHUB;

	var githubCredentials = {
		clientID: githubConfig.clientID,
		clientSecret: githubConfig.clientSecret,
		callbackUrl: githubConfig.callbackURL
	};

	var verifyCallback = function (accessToken, refreshToken, profile, done) {

		UserModel.findOne({'github.id': profile.id}).exec()
			.then(function (user) {

				if (user) {
					return user;
				} else {
					// console.log(profile);
					return UserModel.create({
						name: profile.name,
						avatar: profile.avatar_url,
						emails: [profile.emails[0].value],
						github: {
							id: profile.id,
							username: profile.login
						},
						isAdmin: false
					});
				}
			})
			.then(function (userToLogin) {
				done(null, userToLogin);
			}, function (err) {
				console.log('Error creating user from Github Authentication', err);
				done(err);
			});

	};

	passport.use(new GithubStrategy(githubCredentials, verifyCallback));

	app.get('/auth/github', passport.authenticate('github', {scope: ['user:email'] }),
		function(req, res){
			// Wont be called since request redirect will go to github for authentication
		});

	app.get('/auth/github/callback',
		passport.authenticate('github', { failureRedirect: '/login' }),
		function (req, res) {
			res.redirect('/');
		});

};