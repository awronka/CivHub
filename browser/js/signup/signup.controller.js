'use strict';

app.controller('SignupController', function ($scope, $state, SignUp) {

	$scope.login = {};
	$scope.error = null;

	$scope.sendSignUp = function (signUpInfo) {
		$scope.error = null;

		SignUp.signup(signUpInfo)
		.then(function() {
			$state.go('showcase');
		})
		.catch(function() {
			$scope.error = 'Invalid login credentials.';
		});

	};

	$scope.getUsers = function() {
		SignUp.getUsers().then(function(users){
			console.log(users)
		});
	};


});