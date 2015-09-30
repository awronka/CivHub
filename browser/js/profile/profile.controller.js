'use strict';

app.controller('ProfileController', function($scope, $state, AuthService, user){

	$scope.user = user;
	$scope.logout = function () {
        AuthService.logout().then(function () {
           $scope.loggedIn = false;
           $state.go('showcase.projects');
        });
    };

});