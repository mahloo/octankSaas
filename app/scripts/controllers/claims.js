'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClaimsCtrl
 * @description
 * # ClaimsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').controller('ClaimsCtrl', function ($scope, $http, Constants) {
  $http.get(Constants.CLAIM_MANAGER_URL + '/userclaims')
    .then(function(response) {
      $scope.claims = response.data;
    })
    .catch(function(response) {
      console.error('Error getting claims', response.status, response.data);
    })
    .finally(function() {
      console.log('Finished getting claims');
    });
});
