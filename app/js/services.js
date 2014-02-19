'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).  
  value('version', '0.1').
  factory('jtService', [function(){
    console.log(this.v);
    return {};
  }]).
  config(['jtServiceProvider',function(jtServiceProvider){
    jtServiceProvider.v = 2;
}]);
