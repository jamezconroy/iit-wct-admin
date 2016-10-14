'use strict';

/**
 * @ngdoc function
 * @name WctApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the WctApp
 */
angular.module('WctApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
