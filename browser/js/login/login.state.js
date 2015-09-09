'use strict';

app.config(function ($stateProvider){
	$stateProvider
	.state('login', {
		url: '/login',
		controller: 'LoginController',
		templateUrl: 'js/login/login.html'
	});
});