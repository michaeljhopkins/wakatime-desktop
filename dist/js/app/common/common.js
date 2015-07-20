(function() {
  'use strict';

  angular.module('common', []).
  factory('CommonService', ['$http', CommonService]);

  function CommonService($http) {
    var Service = {};

    Service.getJSON = function(path) {
      return $http.get(path);
    };

    return Service;
  };

})();
