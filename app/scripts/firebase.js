angular.module('interestDatingApp')
  .controller("FirebaseCtrl", function($scope, $firebaseObject) {
    var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
    
    // download the data into a local object
    $scope.data = $firebaseObject(ref);
    // putting a console.log here won't work, see below

    // create an instance of the authentication service
    var auth = $firebaseAuth(ref);
    // login with Facebook
    auth.$authWithOAuthPopup("facebook").then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  });
    