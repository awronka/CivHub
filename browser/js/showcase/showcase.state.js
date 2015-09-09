'use strict';

app.config(function ($stateProvider){
	$stateProvider
	.state('showcase', {
		url: '/',
		abstract: true,
		templateUrl: 'js/showcase/showcase.html',
		controller: 'ShowcaseController',
		resolve: {
			projectShowcase: function($http, Project) {
				return Project.fetchAll();
			}
		}
	})
	.state('showcase.projects', {
		url: '',
		templateUrl: 'js/showcase/projects/projects.html'
	})
	.state('showcase.products-and-services', {
		url: '',
		templateUrl: 'js/showcase/product-and-service/products-and-services.html'
	});	
});