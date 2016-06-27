'use strict';

/**
 * @ngdoc directive
 * @name atabyteApp.directive:detailHost
 * @description
 * # detailHost
 */
angular.module('atabyteApp')
  .directive('detailHost', function () {
    return {
    	scope:{
    		deals: '=deals'
    	},
      templateUrl:'templates/detailHost.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.details = 0;

        scope.dealLength = scope.deals.length;



      }
    };
  });
