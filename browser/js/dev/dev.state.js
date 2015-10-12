'use strict';

app.config( function ($stateProvider) {

  $stateProvider
  .state('dev', {
    url: '/dev',
    templateUrl: 'js/dev/dev.html'
  });

});