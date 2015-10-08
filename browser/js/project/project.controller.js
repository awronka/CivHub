'use strict';

app.controller('ProjectController', function ($scope, $http, $state, AuthService, Project, project) {
	// User Concerns

	$scope.user = null;
	var User = function() {
		AuthService.getLoggedInUser().then(function (user) {
			$scope.user = user;
		});
	}	
	User();

	$scope.isAContributor = function (project) {
		if ($scope.user != null){
			var hasContr = project.contributors.indexOf($scope.user._id);
			if (hasContr != -1) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
		
	}


	// Project Concerns
	$scope.project = project;
	$scope.updateProject = function (proj) {
		console.log('sending: ', proj);
		$http.put('/api/project/update', proj)
			.then(function (suc) {
				console.log('returned: ', suc);
				$state.go('projectView', {id: suc.data._id, project: suc.data});
			})
		}
	$scope.deleteProject = function (proj) {
		console.log('sending: ', proj._id);
		$http.put('/api/project/delete', proj)
			.then(function (suc) {
				console.log('returned: ', suc);
				$state.go('showcase.projects');
			});
		}

});