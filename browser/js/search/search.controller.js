'use strict';

app.controller('SearchController', function($scope, query, projects) {
	$scope.query = query;
	$scope.projects = projects;
});