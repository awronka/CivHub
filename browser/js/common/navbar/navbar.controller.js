'use strict';

app.controller('NavbarController', function ($rootScope, AuthService, AUTH_EVENTS, $state, $scope) {

  // NAV ITEMS
  $scope.itemsHide = [
      { label:'SIGNUP', state:'signup', auth: true },
      { label:'LOGIN', state:'login', auth: true }
  ]
  $scope.itemsShow = [
      { label:'PROFILE', state:'profile.collaborations', auth: true},
      { label:'SHAREAPROJECT', state:'create', auth: true}
  ]

  // LOGIN
  $scope.user = null;
  $scope.isLoggedIn = function () {
      return AuthService.isAuthenticated();
  };
  $scope.logout = function () {
      AuthService.logout().then(function () {
         $state.go('home');
      });
  };
  var setUser = function () {
      AuthService.getLoggedInUser().then(function (user) {
          $scope.user = user;
      });
  };
  var removeUser = function () {
      $scope.user = null;
  };
  setUser();
  $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
  $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
  $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

});