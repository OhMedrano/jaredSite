'use strict';

/**
 * @ngdoc overview
 * @name atabyteApp
 * @description
 * # atabyteApp
 *
 * Main module of the application.
 */
angular
  .module('atabyteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/host', {
        templateUrl: 'views/host.html',
        controller: 'HostCtrl'
      })
      .when('/domains', {
        templateUrl: 'views/domains.html',
        controller: 'DomainsCtrl'
      })
      .when('/centers', {
        templateUrl: 'views/centers.html',
        controller: 'CentersCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
