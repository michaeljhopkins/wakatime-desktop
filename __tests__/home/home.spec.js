describe('Controller: HomeController', function() {
    var rootScope, scope, controller, httpBackend;

    beforeEach(module('homeApp'));

    beforeEach(inject(function($controller, $rootScope, _$http_, $httpBackend) {
        var $http = _$http_;
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        controller = $controller('HomeController', { '$scope': scope, '$http': $http });
        rootScope = $rootScope;
        scope.$digest();
    }));

    it('should work', function() {
        expect(scope).not.toEqual({});
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
});
