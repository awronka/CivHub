'use strict';

app.config(function($stateProvider){
	$stateProvider
	.state('admin', {
		url: '/admin',
		controller: 'AdminController',
		templateUrl: 'js/admin/admin.html',
		resolve: {
			GetAdmin : function(AuthService){
				return AuthService.getLoggedInUser().then(function(user){
						return user;
				})
			},
			GetFirstTenProj: function($http, Project) {
				Project.fetchAll().then(function(projects){
					if(projects.length > 10){
						return projects.slice(0,9)
					}
					else{
						return projects
					}
				})
			}
		}
	});
});