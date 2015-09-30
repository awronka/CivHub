'use strict';

app.directive('footer', function (){
	return {
		restrict: 'E',
		scope: {},
		controller: 'LanguageController',
		templateUrl: 'js/common/footer/footer.html'
	};
})