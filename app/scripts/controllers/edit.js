angular.module('interestDatingApp')
  .controller('EditCtrl', function ($scope, authToken, $http, $q, API_URL, $state) {
    var user = $http.get(API_URL + 'users/' + authToken.getToken());
    var interests = $http.get(API_URL + 'users/' + authToken.getToken() + '/interests');

    $q.all([user, interests]).then(function(values) {
      $scope.user = values[0].data;
      $scope.interests = values[1].data;
    });

    $scope.update = function() {

      var user = {
        gender: $scope.gender,
        looking_for: $scope.lookingFor,
        ethnicity: $scope.ethnicity,
        height: $scope.height,
        age: $scope.age,
        eye_color: $scope.eyeColor,
      };

      console.log(user)
      $.ajax({
        method: "POST",
        url: API_URL + "users/" + authToken.getToken(),
        dateType: "json",
        crossDomain: true,
        data: {
          user: user
        }
      }).success(function(){
        $state.go('user/' + authToken.getToken())
      });
    }
  });