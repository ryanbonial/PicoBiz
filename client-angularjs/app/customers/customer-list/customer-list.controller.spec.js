describe('CustomerListController', function() {

  beforeEach(module('picoBiz'));

  var $controller, $q, deferred, vm, CustomersService, $scope;

  beforeEach(inject(function(_$controller_, _$q_, _CustomersService_, $rootScope){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $q = _$q_;
    $scope = $rootScope.$new();
    CustomersService = _CustomersService_;

    deferred = $q.defer();
    spyOn(CustomersService, 'getCustomerList').and.returnValue(deferred.promise);

    vm = $controller('CustomerListController',
      {
        CustomersService: CustomersService
      }
    );
  }));

  describe('onInit', function() {
    it('Should call getCustomerList', function() {
      expect(CustomersService.getCustomerList).toHaveBeenCalled();
    });

    it('Should set vm.customers to the getCustomerList result', function() {
      var mockCustomers = [
        { id: 1, name: 'Bluth Industries'},
        { id: 2, name: 'Banana Stand'}
      ];
      deferred.resolve(mockCustomers);
      $scope.$digest(); // IMPORTANT: Must digest for promise to update
      expect(vm.customers).toEqual(mockCustomers);
    });

    it('Should set vm.error to a server connection error is status is -1', function() {
      var error = { status: -1 };
      deferred.reject(error);
      $scope.$digest();
      expect(vm.error).toEqual('Unable to connect to server, most likely the server is not running');
    });

    it('Should set vm.error if getCustomer fails', function() {
      var error = 'something errorful happened';
      deferred.reject(error);
      $scope.$digest();
      expect(vm.error).toEqual(error);
    });
  });

});