'use strict';
window.app = angular.module('CiviHub', ['ui.router', 'fsaAuth', 'pascalprecht.translate']);

app.config(function ($urlRouterProvider, $locationProvider, $translateProvider, $provide) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/auth/:provider', function () {
        window.location.reload();
    });
    // i18n SETTINGS
    var fileNameConvention = {
        prefix: 'locale-',
        suffix: '.json'
    };
    var langMap = {
        'en_AU': 'en',
        'en_CA': 'en',
        'en_NZ': 'en',
        'en_PH': 'en',
        'en_UK': 'en',
        'en_US': 'en',
        'fr_FR': 'fr'

    };
    $translateProvider
        .useStaticFilesLoader(fileNameConvention)
        .registerAvailableLanguageKeys(['en', 'fr'],langMap)
        .determinePreferredLanguage() // Get the user's system language
        .fallbackLanguage(['en']) // If their system uses a lang we don't support, fall back to this lang
        .useSanitizeValueStrategy('sanitizeParameters'); //Prevents hacking of interpolated strings

});

// This app.run is for controlling access to specific states.
app.run(function ($rootScope, AuthService, $state) {

    // The given state requires an authenticated user.
    var destinationStateRequiresAuth = function (state) {
        return state.data && state.data.authenticate;
    };

    // $stateChangeStart is an event fired
    // whenever the process of changing a state begins.
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

        if (!destinationStateRequiresAuth(toState)) {
            // The destination state does not require authentication
            // Short circuit with return.
            return;
        }

        if (AuthService.isAuthenticated()) {
            // The user is authenticated.
            // Short circuit with return.
            return;
        }

        // Cancel navigating to new state.
        event.preventDefault();

        AuthService.getLoggedInUser().then(function (user) {
            // If a user is retrieved, then renavigate to the destination
            // (the second time, AuthService.isAuthenticated() will work)
            // otherwise, if no user is logged in, go to "login" state.
            if (user) {
                $state.go(toState.name, toParams);
            } else {
                $state.go('login');
            }
        });

    });

    // Make sure always starting at the top of page when changing state
    $rootScope.$on('$stateChangeSuccess',function(){
        $("html, body").animate({ scrollTop: 0 });
    });

});