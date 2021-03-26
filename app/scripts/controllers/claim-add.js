'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClaimAddCtrl
 * @description
 * # ClaimAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('ClaimAddCtrl', function ($scope, $location, $http, $route, $rootScope, Constants) {
  $scope.claim = {};
  $scope.addClaim = true;

  $scope.saveClaim = function() {
    var claim = {
      title: $scope.claim.title,
      dateClaimed: new Date($scope.claim.dateClaimed),
      claimedBy: $rootScope.currentUser,
      oneCar: $scope.claim.oneCar,
      driver2: $scope.claim.driver2
    };

    $http.post(Constants.CLAIM_MANAGER_URL + '/claim', claim)
      .then(function(response) {
        console.log('Claim added');
      })
      .catch(function(response) {
        $scope.error = "Error saving claim: " + response.message;
        console.log("Error saving claim: " + response.message);
      });
    $scope.claim = {};
    $route.reload();
  };

  $scope.cancel = function() {
    $location.path('/claims');
  };
});
