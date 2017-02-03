'use strict';

angular.module('picoBiz')
  .controller('CustomerDetailController', CustomerDetailController);

CustomerDetailController.$inject = ['CustomersService', '$routeParams'];

function CustomerDetailController(CustomersService, $routeParams){
  var vm = this;
  vm.customer = {};
  vm.getGoogleMapsUrl = getGoogleMapsUrl;
  vm.error = '';

  onInit();

  //-----------------//
  function onInit(){
    CustomersService.getCustomer($routeParams.id)
      .then(function(customer){
        vm.customer = customer;
      },
      function(error){
        vm.error = error;
      });
  }

  function getGoogleMapsUrl(){
    return 'https://www.google.com/maps/search/' + vm.customer.address + '+' + vm.customer.city + '+' + vm.customer.state + '+' + vm.customer.postalCode;
  }
}