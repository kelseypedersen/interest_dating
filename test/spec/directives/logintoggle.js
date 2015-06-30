'use strict';

describe('Directive: loginToggle', function () {

  // load the directive's module
  beforeEach(module('interestDatingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<login-toggle></login-toggle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loginToggle directive');
  }));
});
