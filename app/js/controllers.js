'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
  	$scope.v = 1
  }])
  .controller('MyCtrl2', [function() {

  }]);