'use strict';

app.config(function ($stateProvider) {
	$stateProvider
	.state('create', {
		url: '/create',
		templateUrl: 'js/create/create.html',
		controller: 'CreateController',
		resolve: {
			user: function (AuthService) {
				return AuthService.getLoggedInUser();
			}
		}
	});
});