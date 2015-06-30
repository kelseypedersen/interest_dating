'use strict';

angular.module('interestDatingApp')
  .controller('LoginCtrl', function ($scope, $http, alert, auth) {

    $scope.register = function() {

      var user = {
        username: $scope.username,
        email: $scope.email,
        password: $scope.password,
      };

      auth.register(user).success(function(res) {
        alert('success', 'Registered', 'Welcome, ' + res.user.email + '!');
      })
      .error(function(err) {
        alert('warning', 'Error', err.message);
      });
    }

    $scope.login = function() {

      var user = {
        email: $scope.email,
        password: $scope.password,
      };

      auth.login(user).success(function(res) {
        alert('success', 'Logged in', 'Welcome back, ' + res.user.email + '!');
      })
      .error(function(err) {
        alert('warning', 'Error', err.message);
      });
    }
  });
