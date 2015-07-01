'use strict';

angular.module('interestDatingApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise("/main");

  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: '/views/main.html',
  })
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl',
  })
  .state('user', {
    url: '/user/{id}',
    templateUrl: '/views/user.html',
    controller: 'UserCtrl',
  })
  .state('search', {
    url: '/search',
    templateUrl: '/views/search.html',
    controller: 'SearchCtrl',
  })
  .state('logout', {
    url: '/logout',
    controller: 'LogoutCtrl',
  })
  .state('edit', {
    url: '/edit',
    templateUrl: '/views/edit.html',
    controller: 'EditCtrl',
  })

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  // $httpProvider.interceptors.push('authInterceptor');

})
.constant('API_URL', 'http://jzs-macbook.local:3000/');

