'use strict';

angular.module('interestDatingApp')
  .controller('LogoutCtrl', function ($state, authToken) {
    authToken.removeToken();
    $state.go('main');
  });
