'use strict';

angular.module('picoBiz')
    .config(RouteConfig);

RouteConfig.$inject = ['$routeProvider'];

function RouteConfig($routeProvider) {
  $routeProvider
    .when('/Customers', {
      templateUrl: 'app/customers/customer-list/customer-list.html',
      controller: 'CustomerListController',
      controllerAs: 'vm'
    })
    .when('/Customers/:id', {
      templateUrl: 'app/customers/customer-detail/customer-detail.html',
      controller: 'CustomerDetailController',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo:'/Customers'});

}