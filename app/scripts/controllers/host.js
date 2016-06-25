'use strict';

/**
 * @ngdoc function
 * @name atabyteApp.controller:HostCtrl
 * @description
 * # HostCtrl
 * Controller of the atabyteApp
 */
angular.module('atabyteApp')
  .controller('HostCtrl', function ($scope, servDeals, $routeParams) {
   		$scope.server = servDeals.query({serverId: $routeParams.serverId});
  });
