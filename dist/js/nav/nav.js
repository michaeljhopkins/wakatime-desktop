(function() {
    'use strict';

    var navApp = angular.module('nav', [])
    .directive('navBar', [NavDirective]);

    function NavDirective() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../dist/js/nav/nav.html',
            scope: {},
            link: function(scope, element, attrs) {},
            controller: NavController
        };
    }

    function NavController() {}
})();
