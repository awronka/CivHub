'use strict';

app.directive('navbar', function(){
  return {
    restrict: 'E',
    controller: 'NavbarController',
    templateUrl: 'js/common/navbar/navbar.html'
  }
});