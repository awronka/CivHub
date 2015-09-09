'use strict';

app.controller('CreateController', function ($scope, $http, $state, $translate) {

	// Create New Project
	$scope.createProject = function (proj) {
		// Append current language as Language Code
		proj.language = $translate.use();
		// Make POST
		$http.post('/api/project/create', proj)
			.then(function (suc) {
				// Go to Newly Created Editor
				$state.go('projectEdit', {id: suc.data._id, project: suc.data});
			}, function (fail) {
				console.log(fail);
			});
		}

});