'use strict';

describe('Controller: ClaimsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ClaimsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClaimsCtrl = $controller('ClaimsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClaimsCtrl.awesomeThings.length).toBe(3);
  });
});
