'use strict';

/**
 * @ngdoc service
 * @name atabyteApp.servDeals
 * @description
 * # servDeals
 * Service in the atabyteApp.
 */
angular.module('atabyteApp')
  .service('servDeals', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('jsons/serverinfo.json',{},{
    	query:{
    			method:'GET',
    			params:{serverId:'server'},
    			isArray: true
    		}
    });
  });
