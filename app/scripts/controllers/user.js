'use strict';

angular.module('interestDatingApp')
  .controller('UserCtrl', function ($scope, $stateParams, $http, $q, API_URL, authToken) {

    $scope.id = $stateParams.id;
    $scope.current_id = authToken.getToken();

    var user = $http.get(API_URL + 'users/' + $stateParams.id);
    var interests = $http.get(API_URL + 'users/' + $stateParams.id + '/interests');

    $q.all([user, interests]).then(function(values) {
      $scope.user = values[0].data;
      $scope.interests = values[1].data;
    });

    $scope.chat = false;
    $scope.video = false;
  });
