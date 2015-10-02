'use strict';

app.config(function ($stateProvider) {
	$stateProvider
	.state('profile', {
		url: '/profile',
		abstract: true,
		templateUrl: 'js/profile/profile.html',
		controller: 'ProfileController',
		resolve: {
			user: function ($http, AuthService, User) {
				var id = AuthService.getLoggedInUser()['$$state']['value']['_id'];
				var user = new User({_id: id});
				return user.fetch();
			}
		}
	})
	.state('profile.collaborations', {
		url: '',
		templateUrl: 'js/profile/profile-collaborations.html'
	})
	.state('profile.appreciations', {
		url: '',
		templateUrl: 'js/profile/profile-appreciations.html'
	})
	.state('profile.requests', {
		url: '',
		templateUrl: 'js/profile/profile-requests.html'
	})
	.state('profile.settings', {
		url: '',
		templateUrl: 'js/profile/profile-settings.html'
	});
});