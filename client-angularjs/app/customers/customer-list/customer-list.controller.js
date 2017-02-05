'use strict';

angular.module('picoBiz')
  .controller('CustomerListController', CustomerListController);

CustomerListController.$inject = ['CustomersService']

function CustomerListController(CustomersService){
  var vm = this;

  vm.customers = [];
  vm.error = '';

  onInit();

  //-----------------------//

  function onInit(){
    CustomersService.getCustomerList()
      .then(function(customers){
        vm.customers = customers;
      },
      function(error){
        if (error.status === -1){
          error = 'Unable to connect to server, most likely the server is not running';
        }
        vm.error = error;
      });
  }

}