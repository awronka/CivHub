'use strict';

app.config(function ($stateProvider){
	$stateProvider
	.state('search', {
		url: '/search?query',
		templateUrl: 'js/search/search.html',
		controller: 'SearchController',
		resolve: {
			query: function($stateParams) {
				var dirtySearch = $stateParams.query;
				// Need to clean up search
				console.log(dirtySearch);
				return dirtySearch;
			}
		}
	});
});