'use strict';

angular.module('interestDatingApp')
  .controller('MainCtrl', function (authToken, $scope) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
