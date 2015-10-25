'use strict';

app.controller('AdminController', function($scope,$state, GetAdmin, GetFirstTenProj, Project){
	console.log(GetAdmin)
	$scope.Admin = GetAdmin;
	
	// checks for admin status if not isntantly redirects to the home page 
	// var activate = function(){
	// 	   if(GetAdmin == null){
	// 		  $state.go('showcase.projects');
	// 	   }
	// 	   else if(!$scope.Admin.isAdmin){
	// 		  $state.go('showcase.projects'); 
	// 	   }
	// }			
	// activate();		 
	
	
	
});