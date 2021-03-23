'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClaimsCtrl
 * @description
 * # ClaimsCtrl
 * Controller of the clientApp
 */
import { listClaimBootcamps } from './graphql/queries';

angular.module('clientApp').controller('ClaimsCtrl', function ($scope, $http, Constants) {
  
  //const apiData = await API.graphql({ query: listClaimBootcamps});
  //const claimsFromAPI = apiData.data.listClaimBootcamps.items;
  //$scope.claims = claimsFromAPI;
//    var response = await API.graphql(graphqlOperation(listRestaurants))
  //  this.restaurants = (response as any).data.listRestaurants.items;

  $http.get(Constants.CLAIM_MANAGER_URL + '/claims')
    .then(function(response) {
      $scope.claims = response.data;
      //$scope.filteredEmployees = $filter('filter')(response.data, {details.name: selectedName }); 
    })
    .catch(function(response) {
      console.error('Error getting claims', response.status, response.data);
    })
    .finally(function() {
      console.log('Finished getting claims');
    });
});
