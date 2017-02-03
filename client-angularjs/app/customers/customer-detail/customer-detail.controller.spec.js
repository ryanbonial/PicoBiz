describe('CustomerDetailController', function() {

  beforeEach(module('picoBiz'));

  var $controller, $q, deferred, vm, CustomersService, $scope;

  beforeEach(inject(function(_$controller_, _$q_, _CustomersService_, $rootScope){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $q = _$q_;
    $scope = $rootScope.$new();
    CustomersService = _CustomersService_;
    var $routeParams = { id: 123 };

    deferred = $q.defer();
    spyOn(CustomersService, 'getCustomer').and.returnValue(deferred.promise);

    vm = $controller('CustomerDetailController',
      {
        CustomersService: CustomersService,
        $routeParams: $routeParams
      }
    );
  }));

  describe('onInit', function() {
    it('Should call getCustomer', function() {
      expect(CustomersService.getCustomer).toHaveBeenCalled();
    });

    it('Should call getCustomer with the correct $routeParams.id', function() {
      expect(CustomersService.getCustomer).toHaveBeenCalledWith(123);
    });

    it('Should set vm.customer to the getCustomer result', function() {
      var mockCustomer = { id: 1, name: 'Bluth Industries'}
      deferred.resolve(mockCustomer);
      $scope.$digest(); // IMPORTANT: Must digest for promise to update
      expect(vm.customer).toEqual(mockCustomer);
    });

    it('Should set vm.error if getCustomer fails', function() {
      var error = 'something errorful happened';
      deferred.reject(error);
      $scope.$digest();
      expect(vm.error).toEqual(error);
    });
  });

  describe('getGoogleMapsUrl', function() {
    it('Should return a google maps link with the customer data', function() {
      deferred.resolve({
        address: '1234 Fake St.',
        city: 'Beverly Hills',
        state:'CA',
        postalCode: 90210
      });
      $scope.$digest();
      var mapUrl = vm.getGoogleMapsUrl();
      expect(mapUrl).toEqual('https://www.google.com/maps/search/1234 Fake St.+Beverly Hills+CA+90210');
    });
  });

});