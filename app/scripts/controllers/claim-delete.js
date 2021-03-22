'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClaimDeleteCtrl
 * @description
 * # ClaimDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('ClaimDeleteCtrl', function ($scope, $location, $http, $route, $routeParams, Constants) {

  // fetch the item to delete
  $http.get(Constants.CLAIM_MANAGER_URL + '/claim/' + $routeParams.id)
    .then(function(response) {
      $scope.claim = response.data;
    })
    .catch(function(response) {
      $scope.error = "Error getting claim: " + response.message;
      console.log('Error getting claim: ' + response.message);
    })
    .finally(function() {
      console.log('Finished getting claim');
    });


  $scope.deleteClaim = function() {
    $http.delete(Constants.CLAIM_MANAGER_URL + '/claim/' + $scope.claim.claim_id)
      .then(function (response) {
        console.log('Claim delete');
        $location.path('/claims');
      })
      .catch(function (response) {
        $scope.error = "Error deleting claim: " + response.message;
        console.log("Error deleting claim: " + response.message);
      })
  };

  $scope.back = function() {
    $location.path('/claims');
  };
});
