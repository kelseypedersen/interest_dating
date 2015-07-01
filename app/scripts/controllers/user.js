'use strict';

angular.module('interestDatingApp')
  .controller('UserCtrl', function ($scope, $stateParams, $http, $q) {
    // $http.get('http://dwa-backend.herokuapp.com/users/' + $stateParams.id).success(function(data) {
    //   $scope.user = data
    // })
    $scope.user = $http.get('http://dwa-backend.herokuapp.com/users/' + $stateParams.id);
    $scope.interests = $http.get('http://dwa-backend.herokuapp.com/users/' + $stateParams.id + '/interests');

    $q.all([$scope.user, $scope.interests]).then(function(values) {

      $scope.user = values[0].data;
      $scope.interests = values[1].data;
    });
  });
