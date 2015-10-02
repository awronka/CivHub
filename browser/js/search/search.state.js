'use strict';

app.config(function ($stateProvider){
    $stateProvider
    .state('search', {
        url: '/search?query',
        templateUrl: 'js/search/search.html',
        controller: 'SearchController',
        resolve: {
            query: function($stateParams) {
                return $stateParams.query;
            },
            projects: function($stateParams, $http) {
                var query = $stateParams.query;
                // console.log(query)
                return $http.post('api/project/search', {query: query}).then(function(res){
                    console.log(res.data);
                    return res.data;
                });
            }
        }
    });
});