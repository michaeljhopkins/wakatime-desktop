(function() {
  'use strict';

  angular.module('homeApp', [
    'nav',
    'common'
  ]).
  controller('HomeController', ['$scope', '$http', 'CommonService', HomeController]);

  function HomeController($scope, $http, CommonService) {
    $scope.plugins = [];

    $scope.init = function() {
      CommonService.getJSON('../dist/js/app/home/plugins.json').success(function(data) {
        $scope.plugins = data;
      });
    };
  }
})();
