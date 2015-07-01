'use strict';

angular.module('interestDatingApp')
  .controller('LoginCtrl', function ($scope, $http, alert, auth) {

    $scope.signup = function() {
      var user = {
        username: $scope.username,
        email: $scope.email,
        password: $scope.password,
      };

      auth.register(user).success(function(res) {
        alert('success', 'Registered', 'Welcome!');
      })
      .error(function(err) {
        alert('warning', 'Error', err);
      });
    };

    $scope.login = function() {
      var user = {
        email: $scope.lemail,
        password: $scope.lpassword,
      };

      auth.login(user).success(function(res) {
        alert('success', 'Logged in', 'Welcome back!');
      })
      .error(function(err) {
        alert('warning', 'Error', err);
      });
    }
  });
