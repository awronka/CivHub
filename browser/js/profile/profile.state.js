'use strict';

app.config(function ($stateProvider) {
	$stateProvider
	.state('profile', {
		url: '/profile',
		abstract: true,
		templateUrl: 'js/profile/profile.html',
		controller: 'ProfileController',
		resolve: {
			user: function (AuthService) {
				return AuthService.getLoggedInUser()
			}
		}
	})
	.state('profile.contributions', {
		url: '',
		templateUrl: 'js/profile/profile-contributions.html'
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