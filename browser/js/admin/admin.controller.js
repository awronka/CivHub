'use strict';

app.controller('AdminController', function($scope, GetAdmin){
	$scope.Admin = GetAdmin;
	
});