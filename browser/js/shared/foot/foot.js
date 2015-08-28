'use strict';

app.directive('footer', function (){
	return {
		restrict: 'E',
		scope: {},
		controller: 'LanguageController',
		templateUrl: 'js/shared/foot/foot.html'
	};
})