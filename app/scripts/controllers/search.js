'use strict';

angular.module('interestDatingApp')
  .controller('SearchCtrl', function ($scope, $http, API_URL) {
    $http.get(API_URL + 'search').success(function(data) {
      $scope.users = data

      for (var person in $scope.users){
        $scope.users[person].show = true;
      }
    })
    $scope.searchInterests = function(){
      if (!$scope.query){
        for (var person in $scope.users){
          $scope.users[person].show = true;
        }
        return;
      }
      for (var person in $scope.users){
        $scope.users[person].show = $scope.users[person].interests.some(function(obj){
          return obj.name == $scope.query
        })
      }
    }
  });

