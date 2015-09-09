'use strict';

app.directive('onSubmit', function($state){
	return {
		restrict: 'A',
		link: function (scope, elem, attrs){
			// SEARCH
		    scope.submitSearch = function (query) {
		    	elem.children().val('');
		        $state.go('search', {query: query});
		    }
		}
	}
});