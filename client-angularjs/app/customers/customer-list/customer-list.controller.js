'use strict';

angular.module('picoBiz')
  .controller('CustomerListController', CustomerListController);

CustomerListController.$inject = ['CustomersService']

function CustomerListController(CustomersService){
  var vm = this;

  vm.customer = [];

  onInit();

  //-----------------------//

  function onInit(){
    CustomersService.getCustomerList()
      .then(function(customers){
        vm.customers = customers;
      });
  }

}