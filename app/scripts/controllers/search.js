'use strict';

angular.module('interestDatingApp')
  .controller('SearchCtrl', function ($scope, $stateParams, $http, $q) {
    $http.get('http://dwa-backend.herokuapp.com/users/').success(function(data) {
      $scope.users = data
    })
    // $scope.user = $http.get('http://dwa-backend.herokuapp.com/users/' + $stateParams.id);
    // $scope.interests = $http.get('http://dwa-backend.herokuapp.com/users/' + $stateParams.id + '/interests');

    // $q.all([$scope.user, $scope.interests]).then(function(values) {

    //   $scope.user = values[0].data;
    //   $scope.interests = values[1].data;
    // });
  });
