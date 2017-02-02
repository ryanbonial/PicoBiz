'use strict';

angular.module('picoBiz')
  .controller('CustomerDetailController', CustomerDetailController);

CustomerDetailController.$inject = ['CustomersService', '$routeParams'];

function CustomerDetailController(CustomersService, $routeParams){
  var vm = this;
  vm.customer = {};
  vm.getGoogleMapsUrl = getGoogleMapsUrl;

  onInit();

  //-----------------//
  function onInit(){
    CustomersService.getCustomer($routeParams.id)
      .then(function(customer){
        vm.customer = customer;
      });
  }

  function getGoogleMapsUrl(){
    return 'https://www.google.com/maps/search/' + vm.customer.address + '+' + vm.customer.city + '+' + vm.customer.state + '+' + vm.customer.postalCode;
  }
}