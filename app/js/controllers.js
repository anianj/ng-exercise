'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope','jtService',function($scope,jtService) {
  	$scope.v = 1
  }])
  .controller('MyCtrl2', [function() {

  }]);