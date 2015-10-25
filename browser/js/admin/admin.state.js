'use strict';

app.config(function($stateProvider){
	$stateProvider
	.state('admin', {
		url: '/admin',
		controller: 'AdminController',
		templateUrl: 'js/admin/admin.html',
		resolve: {
			GetAdmin : function(AuthService, $state){
				return AuthService.getLoggedInUser().then(function(user){
					if(user.isAdmin === false){
						$state.go('showcase');
					}
					else{
						return user;
					}
				})
			}
		}
	});
});