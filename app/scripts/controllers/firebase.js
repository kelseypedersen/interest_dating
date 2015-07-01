angular.module('interestDatingApp')
  .controller("FirebaseCtrl", function($scope, $firebaseArray) {
      //CREATE A FIREBASE REFERENCE
      var ref = new Firebase("https://fiery-heat-2774.firebaseio.com/users");

      // GET MESSAGES AS AN ARRAY
      $scope.messages = $firebaseArray(ref);

      //ADD MESSAGE METHOD
      $scope.addMessage = function(e) {

        //LISTEN FOR RETURN KEY
        if (e.keyCode === 13 && $scope.msg) {
          //ALLOW CUSTOM OR ANONYMOUS USER NAMES
          var name = $scope.name || "anonymous";

          //ADD TO FIREBASE
          $scope.messages.$add({
            from: name,
            body: $scope.msg
          });

          //RESET MESSAGE
          $scope.msg = "";
        }
      }
    }
  );
  // .controller("FirebaseCtrl", function($scope, $firebaseObject) {
  //   var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");

  //   // download the data into a local object
  //   $scope.data = $firebaseObject(ref);
  //   // putting a console.log here won't work, see below

  //   $scope.messages = $firebaseArray(ref);

  //   // create an instance of the authentication service
  //   var auth = $firebaseAuth(ref);
  //   // login with Facebook
  //   auth.$authWithOAuthPopup("facebook").then(function(authData) {
  //     console.log("Logged in as:", authData.uid);
  //   }).catch(function(error) {
  //     console.log("Authentication failed:", error);
  //   });

  //   //ADD MESSAGE METHOD
  //   $scope.addMessage = function(e) {

  //     //LISTEN FOR RETURN KEY
  //     if (e.keyCode === 13 && $scope.msg) {
  //       //ALLOW CUSTOM OR ANONYMOUS USER NAMES
  //       var name = $scope.name || "anonymous";
  //       $scope.messages.$add({ from: name, body: $scope.msg });
  //       //RESET MESSAGE
  //       $scope.msg = "";
  //     }
  //   }
  // });