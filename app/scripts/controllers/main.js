'use strict';

/**
 * @ngdoc function
 * @name atabyteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atabyteApp
 */
angular.module('atabyteApp')
  .controller('MainCtrl', function ($scope, servDeals, $routeParams) {
    	$scope.imagesArray = 'images/mainBody2.png';
    	$scope.server = servDeals.query({serverId: $routeParams.serverId});
    	
  });
