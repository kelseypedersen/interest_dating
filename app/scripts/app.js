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


  // $httpProvider.interceptors.push('authInterceptor');

})