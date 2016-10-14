'use strict';

/**
 * @ngdoc function
 * @name WctApp.controller:EchosignCtrl
 * @description
 * # EchosignCtrl
 * Controller of the WctApp
 */

(function () {

  var EchosignCtrl = function ($scope, $log, echosignFactory, appSettings) {

    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {

      echosignFactory.getAgreementList()
        .success(function (agreements) {
          $scope.agreements = agreements;
        })
        .error(function (data, status, headers, config) {
          $log.log(data.error + ' ' + status);
        });
    }

    init();

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  EchosignCtrl.$inject = ['$scope', '$log', 'echosignFactory', 'appSettings'];
  angular.module('WctApp').controller('EchosignCtrl', EchosignCtrl);

}());
