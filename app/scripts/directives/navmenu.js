'use strict';

/**
 * @ngdoc directive
 * @name atabyteApp.directive:navMenu
 * @description
 * # navMenu
 */
angular.module('atabyteApp')
  .directive('navMenu', function () {
    return {
      templateUrl: 'templates/navMenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        	scope.backgroundImage = 'images/header.jpg';
        	scope.logo = 'images/logo.png';
        	scope.linked = [{'name':'Hosting','web':'#/host'},
        					{'name':'Domains','web':'#/domains'},
        					{'name':'Data Centers','web':'#/centers'},
        					{'name':'Contact Us','web':'#/contact'}
        					];
        	scope.currentLink = null;

        	scope.changeLink = function(index){
        		scope.currentLink = index;
        		
        	};



      }
    };
  });
