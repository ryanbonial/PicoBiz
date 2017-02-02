'use strict';

angular.module('picoBiz')
  .factory('CustomersService', CustomersService);

CustomersService.inject = ['$http', 'ApiServerUrl'];

function CustomersService($http, ApiServerUrl){
  return {
    getCustomerList: getCustomerList,
    getCustomer: getCustomer
  };

  function getCustomerList() {
    return $http.get(ApiServerUrl + 'customers')
      .then(function(resp) {
        return resp.data;
      }, function(error) {
        console.log(error);
      });
  }

  function getCustomer(id) {
    return $http.get(ApiServerUrl + 'customers/' + id)
      .then(function(resp) {
        return resp.data;
      }, function(error) {
        console.log(error);
      });
  }
}
