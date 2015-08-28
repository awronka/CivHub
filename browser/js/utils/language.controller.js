'use strict';

app.controller('LanguageController', function ($rootScope, $scope, $translate, $state) {
	$rootScope.$state = $state;
	$scope.changeLanguage = function (languageKey) { 
		console.log(languageKey);
		$translate.use(languageKey);
	}
});