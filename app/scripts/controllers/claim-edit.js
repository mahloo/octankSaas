'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClaimEditCtrl
 * @description
 * # ClaimEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('ClaimEditCtrl', function ($scope, $location, $http, $route, $routeParams, $rootScope, Constants) {
  // fetch the item to edit
  $scope.editClaim = true;

  $http.get(Constants.CLAIM_MANAGER_URL + '/claim/' + $routeParams.id)
    .then(function(response) {
      $scope.claim = response.data;
      $scope.claim.dateClaimed = new Date($scope.claim.dateClaimed);
    })
    .catch(function(response) {
      console.log('Error getting claim: ' + response.message);
    })
    .finally(function() {
      console.log('Finished getting claim');
  });

  $scope.saveClaim = function() {
    var claim = {
      title: $scope.claim.title,
      claim_id: $scope.claim.claim_id,
      claimedBy: $rootScope.currentUser,
      dateClaimed: $scope.claim.dateClaimed,
      oneCar: $scope.claim.oneCar,
      driver2: $scope.claim.driver2
    };

    $http.put(Constants.CLAIM_MANAGER_URL + '/claim', claim)
      .then(function(response) {
        console.log('Claim updated');
        $location.path('/claims');
      })
      .catch(function(response) {
        $scope.error = "Error updating claim: " + response.message;
        console.log("Error updating claim: " + response.message);
      });

    $scope.claim = {};
    $route.reload();
  };

  $scope.cancel = function() {
    $location.path('/claims');
  };
});
