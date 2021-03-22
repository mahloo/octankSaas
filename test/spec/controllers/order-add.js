'use strict';

describe('Controller: ClaimAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ClaimAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClaimAddCtrl = $controller('ClaimAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClaimAddCtrl.awesomeThings.length).toBe(3);
  });
});
