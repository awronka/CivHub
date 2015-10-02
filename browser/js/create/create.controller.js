'use strict';

app.controller('CreateController', function ($scope, $http, $state, $translate, user) {

	// Store User Info
	$scope.user = user;
	// Create New Project
	$scope.createProject = function (proj) {
		// Append current language as Language Code
		proj.language = $translate.use();
		// Make POST
		$http.post('/api/project/create', {project: proj, userId: user._id})
			.then(function (suc) {
				// Go to Newly Created Editor
				$state.go('projectEdit', {id: suc.data._id, project: suc.data});
			}, function (fail) {
				console.log(fail);
			});
		}

});