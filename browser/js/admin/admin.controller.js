'use strict';

app.controller('AdminController', function($scope,$state, GetAdmin, GetFirstTenProj, Project){
	console.log(GetAdmin)
	$scope.Admin = GetAdmin;
	$scope.projects = GetFirstTenProj;
	// checks for admin status if not isntantly redirects to the home page 
	var activate = function(){
		   if(GetAdmin == null){
			  $state.go('showcase.projects');
		   }
		   else if(!$scope.Admin.isAdmin){
			  $state.go('showcase.projects'); 
		   }
	}			
	activate();		 
	
	$scope.submitSearch = function(query){
		Project.getProjectsByName(query).then(function(projects){
			$scope.projects = projects;
		})
	}
	
	$scope.deletProject = function(id){
		Project.deleteProject(id).then(function(project){
			console.log("This project has been delete", project)
		})
	}
	
});