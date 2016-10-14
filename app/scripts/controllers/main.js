'use strict';

/**
 * @ngdoc function
 * @name WctApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the WctApp
 */
angular.module('WctApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
