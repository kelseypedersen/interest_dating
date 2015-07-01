'use strict';

angular.module('interestDatingApp')
  .controller('SearchCtrl', function ($scope, $http) {
    $http.get('http://dwa-backend.herokuapp.com/search').success(function(data) {
      $scope.users = data
      // debugger
      // $scope.users.forEach(function(user) {
      //   user.show = true;
      // })
      for (var person in $scope.users){
        // console.log($scope.users[person].interests);
        // // // if (value == "name") doSomething();
        // $scope.users[person].interests.forEach(function(user) {
        //   person.show = false;
        // })
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

