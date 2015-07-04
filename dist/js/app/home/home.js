(function() {
  'use strict';

  var homeApp = angular.module('homeApp', [
    'nav'
  ])
  .controller('HomeController', ['$scope', '$http', HomeController]);

  function HomeController($scope, $http) {
    $scope.plugins = [];

    $scope.init = function() {
      $http.get('../dist/js/home/plugins.json').success(function(data) {
        $scope.plugins = data;
      });
    };
  }
})();
