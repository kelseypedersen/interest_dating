'use strict';

angular.module('interestDatingApp')
  .controller('NavCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
