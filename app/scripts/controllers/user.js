'use strict';

angular.module('interestDatingApp')
  .controller('UserCtrl', function ($scope, $stateParams, $http, $q, API_URL) {
    // $http.get('http://dwa-backend.herokuapp.com/users/' + $stateParams.id).success(function(data) {
    //   $scope.user = data
    // })
    var user = $http.get(API_URL + 'users/' + $stateParams.id);
    var interests = $http.get(API_URL + 'users/' + $stateParams.id + '/interests');

    $q.all([user, interests]).then(function(values) {
      $scope.user = values[0].data;
      $scope.interests = values[1].data;
    });
  });
