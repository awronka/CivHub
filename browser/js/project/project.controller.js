'use strict';

app.controller('ProjectController', function ($scope, $http, $state, Project, project) {
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
		console.log('sending: ', proj.project._id);
		$http.delete('/api/project/delete', {id: proj.project._id})
			.then(function (suc) {
				$state.go('showcase.projects');
			});
		}
});