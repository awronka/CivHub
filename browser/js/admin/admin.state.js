'use strict';

app.config(function($stateProvider){
	$stateProvider
	.state('admin', {
		url: '/admin',
		controller: 'AdminController',
		templateUrl: 'js/admin/admin.html'
	});
});